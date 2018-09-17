// function isEven () takes single numeric element and returns true 
//if number is even and false otherwise

// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return (false);
// 	}
// }


function isEven(num){
	return num % 2 === 0;
}



//write function factorial () which takes single numeric argument 
//and returns factorial of that number


function factorial(num) {
	//define result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i =2; i<=num; i++){
		result = result * i;
	}
	//return the result 
	return result;
}



//write function kebabToSnake() which takes a single kebab-cased string 
//argument and returns the snake_cased version (replace "-" with "_")
//research how to replace all instances of a character in a string

function kebabToSnake(str) {
	//replace all '-' with '_'
	var newStr = str.replace(/-/g , "_");

	//return 

	return newStr;

}