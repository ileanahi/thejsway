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

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees
let tempC = prompt("What is the temperature right now?");
const tempF = tempC * 9 / 5 + 32;
alert(`That is ${tempF}F!`);

// Add the necessary code to swap the values of variables number1 and number2
let number1 = 5;
let number2 = 3;

let number = number1;
number1 = number2;
number2 = number;

console.log(number1); // Should show 3
console.log(number2); // Should show 5