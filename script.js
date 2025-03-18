"use strict";

function divideNumbers(a, b) {
  try {
if (b === 0) throw new Error("message: Division by 0 is not allowed");
return a / b
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Execution is complete");
  } 
}
const result = divideNumbers  (2,5);
console.log(result)
divideNumbers(2,0)

async function fetchData() {
  try {
    const response = await fetch("https://httpstat.us/500");
    if (responseFails) {
      throw new Error("Error");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Fetch attempt finished.");
  }
}

fetchData();

 
function greet(name) {
  if (name === undefined) {
    console.log("Hello, guest");
  } else {
    console.log("Hello, " + name);
  }
}

greet();
