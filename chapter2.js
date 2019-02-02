// Write a program that asks the user for his first name and his last name
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?")
alert(`Welcome, ${firstName} ${lastName}!`);

// Predict the final values of the variables
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
// a = 2, b = 10, c = 102, d = 30, e = 40, f = 10, g = 10

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%
let price = prompt("How much does this cost?");
let finalPrice = (price * 1.206).toLocaleString("en");
alert(`Your total is $${finalPrice}`);