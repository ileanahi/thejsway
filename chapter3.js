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