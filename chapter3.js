/**
 *  Write a program that accepts a day name from the user,
 * then shows the name of the following day.
 * Incorrect inputs must be taken into account
 */

let today = prompt("What day is it?");
today = today.toLowerCase();
let tomorrow = "";
if (today === "sunday") {
    tomorrow = "Monday";
} else if (today === "monday") {
    tomorrow = "Tuesday";
} else if (today === "tuesday") {
    tomorrow = "Wednesday";
} else if (today === "wednesday") {
    tomorrow = "Thursday"
} else if (today === "thursday") {
    tomorrow = "Friday";
} else if (today === "friday") {
    tomorrow = "Saturday";
} else if (today === "saturday") {
    tomorrow = "Sunday";
} else {
    alert("Not a valid day.");
}

alert(`Tomorrow is ${tomorrow}.`);

let today = prompt("What's the day today?");
today = today.toLowerCase();
switch (today) {
    case "sunday":
        alert("Tomorrow is Monday");
        break;
    case "monday":
        alert("Tomorrow is Tuesday");
        break;
    case "tuesday":
        alert("Tomorrow is Wednesday");
        break;
    case "wednesday":
        alert("Tomorrow is Thursday");
        break;
    case "thursday":
        alert("Tomorrow is Friday");
        break;
    case "friday":
        alert("Tomorrow is Saturday");
        break;
    case "saturday":
        alert("Tomorrow is Sunday");
        break;
    default:
        alert("Not a valid day.");
}

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases
const a = Number(prompt("Enter a number"));
const b = Number(prompt("Enter another number"));

if ((typeof a == "number") && (typeof b == "number")) {
    if (a > b) {
        alert(`${a} is greater than ${b}`);
    } else if (a < b) {
        alert(`${b} is greater than ${a}`);
    } else {
        alert(`${a} and ${b} are equal`);
    }
} else {
    alert("Are you sure you entered numbers?");
}
