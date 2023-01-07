
const {expect} = require('chai');
const {ethers} = require('hardhat');

describe("Multi Signature Wallet", function(){
    let accounts;
    let owners = [];
    let multiSigWallet;
    let numConfirmationsRequired=2;
        
    before(async function(){
        accounts = await ethers.getSigners();
        owners[0] = accounts[0];
        owners[1] = accounts[1];
        owners[2] = accounts[2];

        const _contract = await ethers.getContractFactory("MultiSigWallet");
        multiSigWallet = await _contract.deploy([owners[0].address, owners[1].address, owners[2].address], numConfirmationsRequired);
        await multiSigWallet.deployed();

        console.log(`Multi Signature wallet deployed at ${multiSigWallet.address}`);

    });

     describe("Deployment", function(){
        it("should initialize 'owners' and 'required num of confirmations' properly", async ()=>{
           
            const _owners = await multiSigWallet.getOwners();
            const _numConfirmationsRequired = await multiSigWallet.getNumConfirmationsRequired();

            expect(owners[0].address).to.equals(_owners[0]);
            expect(owners[1].address).to.equals(_owners[1]);
            expect(owners[2].address).to.equals(_owners[2]);

            expect(_numConfirmationsRequired).to.equal(numConfirmationsRequired);
        });
     });

     describe('Multi signature wallet functionality', function(){
        it('should allow owners to deposit ethers', async ()=>{
            const beforeBalance = ethers.utils.formatEther(await multiSigWallet.getMultiSigWalletBalance());
            const valueToDepositEthers = ethers.utils.parseUnits("1", "ether");

            //owners[1] is one of the owner
            await multiSigWallet.connect(owners[1]).depositETH({value: valueToDepositEthers});
            const afterBalance = ethers.utils.formatEther(await multiSigWallet.getMultiSigWalletBalance());
            expect(afterBalance - beforeBalance).to.equal(1);
        })

        it('should allow non owners to deposit ethers', async ()=>{
            const beforeBalance = ethers.utils.formatEther(await multiSigWallet.getMultiSigWalletBalance());
            const valueToDepositEthers = ethers.utils.parseUnits("1", "ether");

            //accounts[5] is non owner.
            await multiSigWallet.connect(accounts[5]).depositETH({value: valueToDepositEthers});
            const afterBalance = ethers.utils.formatEther(await multiSigWallet.getMultiSigWalletBalance());
            expect(afterBalance - beforeBalance).to.equal(1);
        })

        it('should allow owners to submit transaction', async ()=>{
            
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            //owner submitting transaction
            //any function that change state returns a transaction response. Cant return a direct value.
            //to get returned values from such functions, need to log it to events and then get it from there.
            //returned object is of TransactionResponse type.
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();

            //emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //get transaction using the txIndex.
            const tx = await multiSigWallet.getTransaction(txIndex);
            expect(tx.to).to.equal(to);
            expect(tx.value).to.equal(ethers.utils.parseEther("1","ether"));
            expect(tx.data).to.equal('0xab');
            expect(tx.executed).to.equal(false);
            expect(tx.numConfirmations).to.equal(0);
            

        })

        it('should not allow non owners to submit transaction', async ()=>{
            
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            await expect(multiSigWallet.connect(accounts[5]).submitTransaction(to, value, data)).to.revertedWith('Not the owner');

        })

        it('should allow only owners to confirm a transaction', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //get number of confirmation of transaction before confirming.
            let tx = await multiSigWallet.getTransaction(txIndex);
            const numOfConfirmationsBeforeAnyConfirmation = tx.numConfirmations;

            //Confirm the transaction by any owner
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            
            tx = await multiSigWallet.getTransaction(txIndex);
            const numOfConfirmationsAfterConfirmation = tx.numConfirmations;
            expect(numOfConfirmationsAfterConfirmation).to.equal(1);
            expect(numOfConfirmationsBeforeAnyConfirmation).to.equal(0);
            
        })

        it('should not allow non owners to confirm a transaction', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            
            //Confirm the transaction by any non owner
            await expect(multiSigWallet.connect(accounts[5]).confirmTransaction(txIndex)).to.be.revertedWith('Not the owner'); 
        })

        it('should revert with proper message while confirming transaction when transaction dont exist', async () => {
            //Confirm the transaction that dont exist
            const txIndex = 4;
            await expect(multiSigWallet.connect(owners[1]).confirmTransaction(txIndex)).to.be.revertedWith('Not a valid transaction'); 

        })

        it('should revert with proper message while confirming transaction when same owner confirm more than once', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //get number of confirmation of transaction before confirming.
            let tx = await multiSigWallet.getTransaction(txIndex);
            
            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            await expect(multiSigWallet.connect(owners[1]).confirmTransaction(txIndex)).to.be.revertedWith('Transaction already confirmed');
            
            
        })

        it('should revert with proper message while confirming transaction when transaction is already executed', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //get number of confirmation of transaction before confirming.
            let tx = await multiSigWallet.getTransaction(txIndex);
            
            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            await multiSigWallet.connect(owners[2]).confirmTransaction(txIndex);
            
            //execute transaction
            await multiSigWallet.connect(owners[1]).executeTransaction(txIndex);

            //confirm after execution
            await expect(multiSigWallet.connect(owners[0]).confirmTransaction(txIndex)).to.be.revertedWith('Transaction already executed');
            
        })

        it('should allow owner to revoke a transaction', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //Confirm transaction
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);

            //get num of confirmations before revoke
            let tx = await multiSigWallet.getTransaction(txIndex);
            const numConfirmationsBeforeRevoke = tx.numConfirmations;

            await multiSigWallet.connect(owners[1]).revokeTransaction(txIndex);
            tx = await multiSigWallet.getTransaction(txIndex);
            const numConfirmationsAfterRevoke = tx.numConfirmations;

            expect(numConfirmationsAfterRevoke).to.equal(0);
            expect(numConfirmationsBeforeRevoke).to.equal(1);
            
        })

        it('should not allow owner to revoke a transaction if its not confirmed', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            
            await expect(multiSigWallet.connect(owners[1]).revokeTransaction(txIndex)).to.be.revertedWith('transaction is not yet confirmed');
            
        })

        it('should not allow non owner to revoke a transaction', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            
            await expect(multiSigWallet.connect(accounts[5]).revokeTransaction(txIndex)).to.be.revertedWith('Not the owner');
            
        })

        it('should revert with proper message when a transaction is revoked that dont exist', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            
            await expect(multiSigWallet.connect(owners[1]).revokeTransaction(12)).to.be.revertedWith('Not a valid transaction');
            
        })

        it('should revert with proper message when a transaction is revoked thats already executed', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            await multiSigWallet.connect(owners[2]).confirmTransaction(txIndex);
            
            //execute transaction
            await multiSigWallet.connect(owners[1]).executeTransaction(txIndex);

            
            await expect(multiSigWallet.connect(owners[1]).revokeTransaction(txIndex)).to.be.revertedWith('Transaction already executed');
            
        })

        it('should allow owners to execute a transaction', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;

            await multiSigWallet.connect(accounts[5]).depositETH({value: value});
            await multiSigWallet.connect(accounts[6]).depositETH({value: value});
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            await multiSigWallet.connect(owners[2]).confirmTransaction(txIndex);
            
            let transaction = await multiSigWallet.getTransaction(txIndex);
            const executedStatusBeforeExecution = transaction.executed;
            //execute transaction
            await multiSigWallet.connect(owners[1]).executeTransaction(txIndex);

            transaction = await multiSigWallet.getTransaction(txIndex);
            const executedStatusAfterExecution = transaction.executed;

            //executed status should be false before execution of transaction
            //executed status should be true after execution of transaction
            expect(executedStatusBeforeExecution).to.be.false;
            expect(executedStatusAfterExecution).to.be.true;
            
        })

        it('should not allow non owners to execute a transaction', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;

            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            await multiSigWallet.connect(owners[2]).confirmTransaction(txIndex);
            
            //execute transaction by non owner account
            await expect(multiSigWallet.connect(accounts[6]).executeTransaction(txIndex)).to.be.revertedWith('Not the owner');

            
        })

        it('should revert with proper message while executing a transaction that doesnt exist', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;

            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            await multiSigWallet.connect(owners[2]).confirmTransaction(txIndex);
            
            //execute transaction that doesnt exist
            await expect(multiSigWallet.connect(owners[1]).executeTransaction(19)).to.be.revertedWith('Not a valid transaction');

            
        })

        it('should revert with proper message when an already executed transaction is executed again', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;

            await multiSigWallet.connect(accounts[5]).depositETH({value: value});
            await multiSigWallet.connect(accounts[6]).depositETH({value: value});
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            await multiSigWallet.connect(owners[2]).confirmTransaction(txIndex);
            
            //execute transaction
            await multiSigWallet.connect(owners[1]).executeTransaction(txIndex);

            //execute again
            await expect(multiSigWallet.connect(owners[1]).executeTransaction(txIndex)).to.be.revertedWith('Transaction already executed');
            
        })

        it('should revert with proper message while executing a transaction when there are not enough confirmations', async () => {
            //First submit a transaction
            const to = accounts[5].address;
            const value = ethers.utils.parseUnits("1", 'ether');
            const data = 0xab;

            await multiSigWallet.connect(accounts[5]).depositETH({value: value});
            await multiSigWallet.connect(accounts[6]).depositETH({value: value});
            
            const txResponse = await multiSigWallet.connect(owners[1]).submitTransaction(to, value, data);
            //calling wait() will get tx receipt that can be used to get event details.
            const receipt = await txResponse.wait();
            const txIndex = receipt.events[0].args[1]; //index 1 contains the txIndex;

            //Confirm the transaction by 2 owners
            await multiSigWallet.connect(owners[1]).confirmTransaction(txIndex);
            
            //execute transaction
            await expect(multiSigWallet.connect(owners[1]).executeTransaction(txIndex)).to.be.revertedWith('Not enough confirmations.');

            
        })

        it('should return all owners', async () => {
            const _owners = await multiSigWallet.getOwners();

            expect(owners[0].address).to.equals(_owners[0]);
            expect(owners[1].address).to.equals(_owners[1]);
            expect(owners[2].address).to.equals(_owners[2]);
        })

        it('should return transaction details for given transaction id', async ()=>{
            const transaction = await multiSigWallet.getTransaction(0);
            expect(transaction.executed).to.be.false;
        })

        it('should revert with proper message when trying to fetch a non existing transaction', async ()=>{
            
            await expect(multiSigWallet.getTransaction(100)).to.be.revertedWith('Not a valid transaction');
            
        })

        it('should return multisig wallet balance', async ()=>{
            const balance = await multiSigWallet.getMultiSigWalletBalance();
            expect(balance).to.be.greaterThanOrEqual(0);
        })

        it('should return number of confirmations required to execute a transaction', async ()=>{
            const numberOfConfirmationsRequired = await multiSigWallet.getNumConfirmationsRequired();
            expect(numberOfConfirmationsRequired).to.be.equal(numConfirmationsRequired);
        })

     });



});