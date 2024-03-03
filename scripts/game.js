const words = ["phone","table","cup","sun","moon","orange","apple","paint","developer","engineer","microphone","speakers","radio","television"];
const randomIndex = Math.floor(Math.random()*words.length);
const randomWord = words[randomIndex];

document.getElementById("answer-section").innerHTML = "-".repeat(randomWord.length);

console.log(randomWord);

let inputLetter = prompt();

function getLetterPosition(letter,word) {
    const letterPosition = [];
    for (let i = 0; i < word.length; i++) {
        if (i = letter) {
            letterPosition.push(i)
        }
    }
    return letterPosition
}
