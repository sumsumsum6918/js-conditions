let userName = prompt("Hi! What's your name?", "Poopoo Cat");

if (userName != null) {
  const greetingLines = `Hello ${userName}, welcome to the world!`;

  document.getElementById("greeting-user").innerHTML = greetingLines;
  console.log(greetingLines);
}

function compareAlphabets() {
  const word1 = document.getElementById("alphabet-1").value;
  const word2 = document.getElementById("alphabet-2").value;
  const displayWord = document.getElementById("display-smaller-alphabet");

  if (word1 === word2) {
    return (displayWord.innerHTML = `${word1} and ${word2} are the same words`);
  }

  const firstWord = getCompareIndex(word1, word2);

  displayWord.innerHTML = `The word that appears first in the dictionary is ${firstWord}`;
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
