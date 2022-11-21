

async function doSomething(){
	console.log("Do SOmething started");
	setTimeout(()=>{
		console.log("inside doSoething");
	},5000);

	console.log("Do something end");
	
}

console.log("Start");
let out = doSomething();

out.then((abcd)=>{
	console.log(abcd);
}).catch(()=>{
	console.log("Failures");
});

out.then

console.log("END");
