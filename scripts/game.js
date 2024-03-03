const words = ["phone","table","cup","sun","moon","orange","apple","paint","developer","engineer","microphone","speakers","radio","television"];
const randomIndex = Math.floor(Math.random()*words.length);
const randomWord = words[randomIndex];

document.getElementById("answer-section").innerHTML = "-".repeat(randomWord.length);

console.log(randomWord);

let inputLetter = prompt();

function getLetterPosition(letter,word) {
    const letterPosition = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            letterPosition.push(i)
        }
    }
    return letterPosition
}

function replaceCharacter(string, index, replacement) {
    return ( string.slice(0, index) + replacement + string.slice(index + 1, string.length))
}

function checkLetter(letter) {
    let text = document.getElementById("answer-section").innerHTML;
    if (randomWord.includes(letter)) {
        const letterPositions = getLetterPosition(letter,randomWord);
        for (let i = 0; i < letterPositions.length; i++){
            let position = letterPositions[i];
            text = replaceCharacter(text, position, letter);
        }
        document.getElementById("answer-section").innerHTML = text;
    }
}

checkLetter(inputLetter);