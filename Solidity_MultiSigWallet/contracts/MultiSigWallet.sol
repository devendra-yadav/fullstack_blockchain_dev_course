//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MultiSigWallet{
    //Events
    event Deposit(address indexed sender, uint amount, uint balance);
    event SubmitTransaction(address indexed owner, uint indexed txIndex, address indexed to, uint value, bytes data);
    event ConfirmTransaction(address indexed owner, uint indexed txIndex);
    event RevokeTransaction(address indexed owner, uint indexed txIndex);
    event ExecuteTransaction(address indexed owner, uint indexed txIndex);

    //state variables
    address[] public owners;
    mapping(address => bool) public isOwner;
    uint public numConfirmationsRequired;

    struct Transaction{
        address to;
        uint value;
        bytes data;
        bool executed;
        uint numConfirmations;
    }

    mapping(uint => mapping(address=>bool)) isConfirmed;

    Transaction[] public transactions;

    //modifiers
    modifier onlyOwner(){
        require(isOwner[msg.sender], "Not the owner");
        _;
    }

    modifier txExists(uint _txIndex){
        require(_txIndex<transactions.length, "Not a valid transaction");
        _;
    }

    modifier notExecuted(uint _txIndex){
        require(transactions[_txIndex].executed==false, "Transaction already executed");
        _;
    }

    modifier notConfirmed(uint _txIndex){
        require(isConfirmed[_txIndex][msg.sender] == false, "Transaction already confirmed");
        _;
    }

    constructor(address[] memory _owners, uint _numConfirmationsRequired){
        require(_owners.length > 0 , "At least 1 owner is needed");
        require(_owners.length >= _numConfirmationsRequired && _numConfirmationsRequired>0, "Invalid num of required confirmations");

        for(uint i=0;i<_owners.length;i++){
            require(_owners[i] != address(0), "Addrss 0 cant be owner");
            require(isOwner[_owners[i]]==false, "Owner must be unique");
            owners.push(_owners[i]);
            isOwner[owners[i]] = true;
        }

        numConfirmationsRequired = _numConfirmationsRequired;
    }

    function depositETH() public payable{
        require(msg.value > 0, "No ethers sent");
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    function submitTransaction(address _to, uint _value, bytes memory _data) public onlyOwner {
        uint txIndex = transactions.length;
        Transaction memory transaction = Transaction(
            {
                to: _to,
                value: _value,
                data: _data,
                executed: false,
                numConfirmations: 0
            }
        );
        transactions.push(transaction);
        emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
    }

    function confirmTransaction(uint _txIndex) public onlyOwner txExists(_txIndex) notExecuted(_txIndex) notConfirmed(_txIndex){
        Transaction storage transaction = transactions[_txIndex];
        transaction.numConfirmations += 1;
        isConfirmed[_txIndex][msg.sender] = true;
        emit ConfirmTransaction(msg.sender, _txIndex);
    }

    function revokeTransaction(uint _txIndex) public onlyOwner txExists(_txIndex) notExecuted(_txIndex){
        require(isConfirmed[_txIndex][msg.sender] == true, "transaction is not yet confirmed");
        Transaction storage transaction = transactions[_txIndex];
        isConfirmed[_txIndex][msg.sender] = false;
        transaction.numConfirmations -= 1;
        emit RevokeTransaction(msg.sender, _txIndex);
    }

    function executeTransaction(uint _txIndex) public onlyOwner txExists(_txIndex) notExecuted(_txIndex){
        Transaction storage transaction = transactions[_txIndex];
        require(transaction.numConfirmations >= numConfirmationsRequired, "Not enough confirmations.");
        transaction.executed = true;
        (bool success, ) = transaction.to.call{gas: 20000, value: transaction.value}(transaction.data);
        require(success, "Failed to execute transaction");
        emit ExecuteTransaction(msg.sender, _txIndex);
    }

    function getOwners() public view returns(address[] memory _owners){
        return owners;
    }

    function getTransaction(uint _txIndex) public view txExists(_txIndex) returns(Transaction memory _transaction){
        return transactions[_txIndex];
    }

    function getMultiSigWalletBalance() public view returns(uint balance){
        return address(this).balance;
    }

    function getNumConfirmationsRequired() public view returns(uint _numConfirmationsRequired){
        return numConfirmationsRequired;
    }

}
