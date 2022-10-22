function delay(){
    let promise = new Promise((resolve, reject) => {
        let timeOut = setTimeout(()=>{
            resolve();
        },1000);
        return timeOut;
    });

    return promise;
}

let timeout = delay();
console.log("Will wait for 1000 ms");
timeout.then(()=>{
    console.log("Printed after 1000 ms of wait");
});
