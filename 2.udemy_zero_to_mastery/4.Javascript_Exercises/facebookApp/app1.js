var database = [
	{
		username: "Emily",
		password: "sshhh"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "Ingrid",
		password: "456"
	}
]

var newsFeed = [
	{
		username: "Peggy",
		timeline: "Lots of coding ahead."
	}
]

var userNamePrompt = prompt ("What's your name?");
var passwordPrompt = prompt ("What's your password?");

function isUserValid(username, password){
	for (var i=0; i<database.length; i++){
		if (database[i].username === username && 
			database[i].password === password){
			return true;
		} 
	}
	return false;
}

function signIn (username, password){
	if (isUserValid(username, password)){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);