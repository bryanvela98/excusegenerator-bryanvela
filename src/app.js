/* eslint-disable */
import "bootstrap";
import "./style.css";

// Function to generate a random excuse
function generateExcuse() {
  // Define arrays of possible reasons, objects, and locations for the excuse
  const excuses = {
    who: ["The dog", "My grandma", "His turtle", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "the keys", "the car"],
    when: [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ]
  };

  // Select a random who, action, what, when, and combine them into an excuse
  const who = getRandomElement(excuses.who);
  const action = getRandomElement(excuses.action);
  const what = getRandomElement(excuses.what);
  const when = getRandomElement(excuses.when);
  return `${who} ${action} ${what} ${when}.`;
}

// Function to select a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to update the excuse every 10 seconds
function updateExcuse() {
  // Generate a new excuse
  const excuse = generateExcuse();

  // Set the excuse as the innerHTML of the #excuse element
  document.getElementById("excuse").innerHTML = excuse;
}

// Wait for the entire page (including images and stylesheets) to load
window.onload = function() {
  // Call the updateExcuse function immediately
  updateExcuse();

  // Update the excuse every 5 seconds
  setInterval(updateExcuse, 5000); // 5000 milliseconds = 5 seconds
};

//I set this interval to make the refresh of the excuse, easier for the user.
