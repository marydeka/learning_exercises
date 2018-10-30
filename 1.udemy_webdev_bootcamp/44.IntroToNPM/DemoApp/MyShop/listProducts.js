var faker = require('faker');

// console.log(faker.fake("{{name.lastName}}, {{name.firstName}}, {{name.suffix}}"));

var randomPrice = faker.commerce.price();
var randomProduct = faker.commerce.productName();


console.log("==============")
console.log("WELCOME TO MY SHOP")
console.log("================")
for(var i = 0; i <10; i++){

console.log(faker.commerce.productName() + " - $" + faker.commerce.price());

}

