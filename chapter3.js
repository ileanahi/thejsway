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
    console.log("Monday");
    break;
  case "monday":
    console.log("Tuesday");
    break;
  case "tuesday":
    console.log("Wednesday");
    break;
  case "wednesday":
    console.log("Thursday");
    break;
  case "thursday":
    console.log("Friday");
    break;
  case "friday":
    console.log("Saturday");
    break;
  case "saturday":
    console.log("Sunday");
    break;
  default:
    console.log("Not a valid day.");
}