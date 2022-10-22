//Write a sleep function using a promise in javascript?

function sleep(millisecs){
    let promise = new Promise(function(resolve, reject){
        console.log(`sleeping for ${millisecs} milliseconds`);
        setTimeout(() => {
            console.log("finished sleep");
            resolve();
        }, millisecs);
    });
    
}

sleep(5000);
