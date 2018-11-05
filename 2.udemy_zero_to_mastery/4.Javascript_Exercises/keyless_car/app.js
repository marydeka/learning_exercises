// var age = prompt ("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are to young to drive this car. Powering off");
 

// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");


// } else {
// 	alert("Powering On. Enjoy the ride!");
// }

//improving code by adding function checkDriverAge() 
//and using the return keyword and a function as argument of age 
//instead of using prompt

function checkDriverAge(age){
	if (Number(age) < 18) {
		return ("Sorry, you are to young to drive this car. Powering off");
 

	} else if (Number(age) === 18) {
		return ("Congratulations on your first year of driving. Enjoy the ride!");


	} else {
		return ("Powering On. Enjoy the ride!");
	}
}

var checkDriverAge2 = function(){
	var age = prompt ("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are to young to drive this car. Powering off");
 

	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");


	} else {
		alert("Powering On. Enjoy the ride!");
	}
}
