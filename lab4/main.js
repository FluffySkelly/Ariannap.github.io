// Complete variable definitions
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings stored in arrays
const characters = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const places = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away"
];

// Complete return random string function
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  // Using a template literal to insert the random variables directly into the string
  const storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Event listener and complete generate function definition
generateBtn.addEventListener("click", generateStory);

function generateStory() {
  // 1. Create a new variable to hold the fresh story text
  let newStory = returnRandomStoryString();

  // 2. Replace the default name "Bob" if a custom name is entered
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  // 3. Convert US units to UK units if the UK radio button is checked
  if (document.getElementById("uk").checked) {
    // Pounds to stones (1 stone = 14 pounds)
    const weight = Math.round(300 / 14) + " stone";
    
    // Fahrenheit to Celsius ((F - 32) * 5/9)
    const temperature = Math.round((94 - 32) * (5/9)) + " Celsius";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  // 4. Output the final story and make it visible
  story.textContent = newStory;
  story.style.visibility = "visible";
}