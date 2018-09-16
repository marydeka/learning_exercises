console.log("Print all numbers between -10 and 19");

for(var n = -10; n <= 19; n+=1) {
	console.log(n);
}

console.log("Print all even numbers between 10 and 40");

for(var n = 10; n <= 40; n+=2){
	console.log(n);
}

// more foolproof version (because no matter 
// where count starts, program will find even numbers)

for(var n = 10; n <= 40; n+=1){
	if(n % 2 === 0) {
		console.log(n);
	}
}


console.log("Print all odd numbers between 300 and 333");

for(var n = 300; n <= 333; n+=1) {
	if(n % 2 !== 0){
	console.log(n);	
	}
}


console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

for (var n = 5; n <= 50; n++) {
	if(n % 5 === 0 && n % 3 === 0) {
	console.log(n);
	}
}