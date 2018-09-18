//write function printReverse() that takes array as argument 
//and prints out elements in the array in reverse order
//will need to use a loop

function printReverse(array){
	for(var i = array.length - 1; i >= 0; i--){
		console.log(array[i])
	}
}

printReverse([1,2,3,4])

//write function isUniform() which takes array as argument 
//and returns true if all elements in array are identical
//will need to use loop and have variable that compares
//to next item in loop

function isUniform(array){
	var first = array[0];
	for(var i = 1; i< array.length; i++){
		if(array[i] !== first){
			return false;
		}
	}
	return true;
}

isUniform([5,5,5,5])
isUniform(["a,","b","b"])

//write function sumArray() that accepts an array of numbers
//and returns the sum of all numbers in the array
//will need a loop and a variable (like sum) that 
//will store answer and constantly add into it

function sumArray(array){
	var total = 0;
	array.forEach(function(element){
		total += element;
	
	});
	return total;
}

//write function max() that accepts an array of numbers
//and returns the maximum number in array
//will need loop and variable that stores max number

function max(array){
	var max = array[0];
	for(var i = 1; i < array.length; i++){
		if(array[i] > max){
			max = array[i]
		}
	} 
	return max;
}