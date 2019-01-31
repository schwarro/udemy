var faker = require("faker");

var randomProduct = faker.commerce.productName();
var randomPrice = faker.commerce.price();

// console.log(randomProduct);


console.log("===================");
console.log("Welcome to my shop!");
console.log("===================");

for(var i = 0; i < 10; i++){
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
