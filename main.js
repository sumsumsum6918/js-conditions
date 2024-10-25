// let userName = prompt("Hi! What's your name?", "Poopoo Cat");

// if (userName != null) {
//   const greetingLines = `Hello ${userName}, welcome to my exercises!`;

//   document.getElementById("response-1").innerHTML = greetingLines;
//   console.log(greetingLines);
// }

function compareAlphabets() {
  const word1 = document.getElementById("alphabet-1").value;
  const word2 = document.getElementById("alphabet-2").value;
  const comment = document.getElementById("response-2");

  if (word1 === word2) {
    return (comment.innerHTML = `${word1} and ${word2} are the same words`);
  }

  const firstWord = getCompareIndex(word1, word2);

  comment.innerHTML = `The word that appears first in the dictionary is ${firstWord}.`;
}

function getCompareIndex(word1, word2) {
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
  const comment = document.getElementById("response-3");

  if (ageInputValue < 18) {
    comment.innerHTML = "You are identified as a kid!";
  } else if (ageInputValue <= 18) {
    comment.innerHTML = "You are identified as an adult!";
  }
}

function guessAnimal() {
  const animalInput = document
    .getElementById("animal-input")
    .value.toLowerCase();
  const comment = document.getElementById("response-4");

  if (animalInput === "cat" || animalInput === "cats") {
    comment.innerHTML = "You are correct! Cats are the best!";
  } else if (animalInput === "katt" || animalInput === "katter") {
    comment.innerHTML = "You are correct! Cats are the best!";
  } else if (animalInput === "kitten" || animalInput === "kitty") {
    comment.innerHTML = "You are correct! But grown up cats are adorable too!";
  } else if (animalInput === "kittens" || animalInput === "kitties") {
    comment.innerHTML = "You are correct! But grown up cats are adorable too!";
  } else {
    comment.innerHTML = "Shame on you! Cats should be everyones favourite.";
  }
}

function colorComment(color) {
  const comment = document.getElementById("response-5");
  if (color === "red") {
    comment.innerHTML = "I like red too. More precisely ginger cats.";
  } else if (color === "blue") {
    comment.innerHTML = "Russian Cats has the nicest blue fur!";
  } else if (color === "green") {
    comment.innerHTML = "Many cats have emerald like green eyes.";
  }
}

function passingTest() {
  const testScore = document.getElementById("test-result").value;
  const comment = document.getElementById("response-6");

  if (testScore >= 50 && testScore < 90) {
    comment.innerHTML = "Well done! Be proud of yourself!";
  } else if (testScore < 50) {
    comment.innerHTML = "Maybe take a break from it and try again later.";
  } else if (testScore >= 90) {
    comment.innerHTML = "You have slayed it!";
  }
}

function weatherActivities(weather) {
  const comment = document.getElementById("response-7");

  if (weather === "sunny") {
    comment.innerHTML = "Let's go fishing.";
  } else if (weather === "rainy") {
    comment.innerHTML = "Let's watch netflix at home.";
  } else if (weather === "cloudy") {
    comment.innerHTML = "Let's be cuddle with cat.";
  }
}

function responseInLanguages(language) {
  const comment = document.getElementById("response-8");

  if (language === "english") {
    comment.innerHTML =
      "Did you know the word 'pneumonoultramicroscopicsilicovolcanoconiosis'?";
  } else if (language === "swedish") {
    comment.innerHTML = "Borta bra, men hemma bäst.";
  } else if (language === "spanish") {
    comment.innerHTML = "Me importa un pepino";
  } else if (language === "japanese") {
    comment.innerHTML = "言わぬが花";
  }
}

function dividedBy5() {
  const number = document.getElementById("number-input").value;
  const comment = document.getElementById("response-9");

  if (number % 5 === 0) {
    comment.innerHTML = `${number} can be divided by 5.`;
  } else {
    comment.innerHTML = `${number} cannot be divided by 5.`;
  }
}

function goOut() {
  let text;
  if (confirm("Do you want to go out with my cat?") == true) {
    text = "You shall get walked by cat.";
  } else {
    text = "Cat is staring at you";
  }
  document.getElementById("response-10").innerHTML = text;
}

function numberOrLetter() {
  const comment = document.getElementById("response-11");
  const character = document.getElementById("character-input").value;

  if (character >= 0 && character <= 9) {
    comment.innerHTML = `${character} is a number.`;
  } else if (
    (character >= "a" && character <= "ö") ||
    (character >= "A" && character <= "Ö")
  ) {
    comment.innerHTML = `${character.toUpperCase()} is a letter.`;
  }
}

function compareThreeWords() {
  const word1 = document.getElementById("word-1").value;
  const word1Length = document.getElementById("word-1").value.length;

  const word2 = document.getElementById("word-2").value;
  const word2Length = document.getElementById("word-2").value.length;

  const word3 = document.getElementById("word-3").value;
  const word3Length = document.getElementById("word-3").value.length;

  const comment = document.getElementById("response-12");

  if (word1Length > word2Length && word1Length > word3Length) {
    comment.innerHTML = `${word1} is the longest word.`;
  } else if (word2Length > word1Length && word2Length > word3Length) {
    comment.innerHTML = `${word2} is the longest word.`;
  } else if (word3Length > word2Length && word3Length > word1Length) {
    comment.innerHTML = `${word3} is the longest word.`;
  } else if (word1Length === word2Length && word1Length > word3Length) {
    comment.innerHTML = `${word1} and ${word2} are both the longest words.`;
  } else if (word1Length === word3Length && word1Length > word2Length) {
    comment.innerHTML = `${word1} and ${word3} are both the longest words.`;
  } else if (word2Length === word3Length && word2Length > word1Length) {
    comment.innerHTML = `${word2} and ${word3} are both the longest words.`;
  } else if (word1Length === word2Length && word2Length === word3Length) {
    comment.innerHTML = `${word1},${word2} and ${word3} are all similarily long words.`;
  }
}

function showPassword() {
  const showPasswordButton = document.querySelector(".show-password");
  const passwordInput = document.querySelector(".password-input");

  showPasswordButton.classList.toggle("fa-eye");
  showPasswordButton.classList.toggle("fa-eye-slash");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

function validatePassword() {
  const passwordInput = document.querySelector(".password-input");

  const passwordChecklist = document.querySelectorAll(".list-item");
  const validationRegex = [{ regex: /.{8,}/ }, { regex: /[0-9]/ }];

  validationRegex.forEach((item, i) => {
    let isValid = item.regex.test(passwordInput.value);

    if (isValid) {
      passwordChecklist[i].classList.add("checked");
    } else {
      passwordChecklist[i].classList.remove("checked");
    }
  });
}

let previousTimeoutId;
function showChecklist() {
  document
    .querySelector(".password-checklist")
    .classList.add("password-checklist-active");

  if (previousTimeoutId) {
    clearTimeout(previousTimeoutId);
  }

  const timeoutId = setTimeout(() => {
    document
      .querySelector(".password-checklist")
      .classList.remove("password-checklist-active");
  }, 15000);

  previousTimeoutId = timeoutId;
}

function ageGrouping() {
  const age = document.getElementById("age").value;
  const comment = document.getElementById("response-14");

  if (age >= 0 && age < 13) {
    comment.innerHTML = "Kid";
  } else if (age >= 13 && age < 20) {
    comment.innerHTML = "Teenager";
  } else if (age >= 20 && age < 65) {
    comment.innerHTML = "Adult";
  } else if (age >= 65) {
    comment.innerHTML = "Retired";
  }
}
