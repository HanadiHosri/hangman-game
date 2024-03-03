const words = ["phone","table","cup","sun","moon","orange","apple","paint","developer","engineer","microphone","speakers","radio","television"];
const randomIndex = Math.floor(Math.random()*words.length);
const randomWord = words[randomIndex];

document.getElementById("answer-section").innerHTML = "-".repeat(randomWord.length);
