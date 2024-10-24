// let userName = prompt("Hi! What's your name?", "Poopoo Cat");

// if (userName != null) {
//   const greetingLines = `Hello ${userName}, welcome to my exercises!`;

//   document.getElementById("greeting-user").innerHTML = greetingLines;
//   console.log(greetingLines);
// }

function compareAlphabets() {
  const word1 = document.getElementById("alphabet-1").value;
  const word2 = document.getElementById("alphabet-2").value;
  const displayWord = document.getElementById("display-smaller-alphabet");

  if (word1 === word2) {
    return (displayWord.innerHTML = `${word1} and ${word2} are the same words`);
  }

  const firstWord = getCompareIndex(word1, word2);

  displayWord.innerHTML = `The word that appears first in the dictionary is ${firstWord}.`;
}

function getCompareIndex(word1, word2) {
  const displayWord = document.getElementById("display-smaller-alphabet");

  const orderIndex = word1.localeCompare(word2);
  console.log(orderIndex);

  if (orderIndex < 0) {
    return word1;
  } else if (orderIndex > 0) {
    return word2;
  }
}

function ageConfirm() {
  const ageInputValue = document.getElementById("age-input").value;
  const ageDisplayElement = document.getElementById("display-age-confirmation");

  if (ageInputValue < 18) {
    ageDisplayElement.innerHTML = "You are identified as a kid!";
  } else if (ageInputValue <= 18) {
    ageDisplayElement.innerHTML = "You are identified as an adult!";
  }
}

function guessAnimal() {
  const animalInput = document
    .getElementById("animal-input")
    .value.toLowerCase();
  const guessResult = document.getElementById("display-guess-result");

  if (animalInput === "cat" || animalInput === "cats") {
    guessResult.innerHTML = "You are correct! Cats are the best!";
  } else if (animalInput === "katt" || animalInput === "katter") {
    guessResult.innerHTML = "You are correct! Cats are the best!";
  } else if (animalInput === "kitten" || animalInput === "kitty") {
    guessResult.innerHTML =
      "You are correct! But grown up cats are adorable too!";
  } else {
    guessResult.innerHTML = "Shame on you! Cats should be everyones favourite.";
  }
}

function colorComment(color) {
  const displayColorComment = document.getElementById("display-color-comment");
  if (color === "red") {
    displayColorComment.innerHTML =
      "I like red too. More precisely ginger cats.";
  } else if (color === "blue") {
    displayColorComment.innerHTML = "Russian Cats has the nicest blue fur!";
  } else if (color === "green") {
    displayColorComment.innerHTML = "Many cats have emerald like green eyes.";
  }
}

function passingTest() {
  const testScore = document.getElementById("test-result").value;
  const testComment = document.getElementById("display-test-comment");

  if (testScore >= 50 && testScore < 90) {
    testComment.innerHTML = "Well done! Be proud of yourself!";
  } else if (testScore < 50) {
    testComment.innerHTML = "Maybe take a break from it and try again later.";
  } else if (testScore >= 90) {
    testComment.innerHTML = "You have slayed it!";
  }
}

function weatherActivities(weather) {
  const displayActivitiesSuggestion = document.getElementById(
    "display-activities-suggestion"
  );
  if (weather === "sunny") {
    displayActivitiesSuggestion.innerHTML = "Let's go fishing.";
  } else if (weather === "rainy") {
    displayActivitiesSuggestion.innerHTML = "Let's watch netflix at home.";
  } else if (weather === "cloudy") {
    displayActivitiesSuggestion.innerHTML = "Let's be cuddle with cat.";
  }
}
