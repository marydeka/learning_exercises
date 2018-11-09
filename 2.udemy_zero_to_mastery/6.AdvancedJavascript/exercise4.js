// change everything below to the newer Javascript!

// const + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//new Javascript version
const a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//newJavascript version
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//newJavascript version
const a = 'test';
const b = true;
const c = 789;

const okObj = {a,b,c};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//newJavascript version
const message = `Hello ${firstName} have I met you before? I think we met in
                ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

//newJavascript version
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

const sym = Symbol('This is my first Sybmol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//newJavascript version
const whereAmI = (username, location) => {
   if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
  }