const words = ["phone","table","cup","sun","moon","orange","apple","paint","developer","engineer","microphone","speakers","radio","television"];
let randomIndex = Math.floor(Math.random()*(words.length - 1));
let randomWord = words[randomIndex];
let letterElements = document.querySelectorAll(".letter");
let mistakesCounter = 0;

document.getElementById("answer-section").innerHTML = "-".repeat(randomWord.length);

console.log(randomWord);

document.addEventListener("keydown", function (event) {
    if (event.key.match(/[a-z]/i)) {
        checkLetter(event.key.toLowerCase());
    }
});
    
letterElements.forEach(letterElement => {
    letterElement.addEventListener("click", function() {
        const clickedLetter = this.textContent;
        checkLetter(clickedLetter.toLowerCase());
    });
});
    


function getLetterPosition(letter,word) {
    const letterPosition = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            letterPosition.push(i)
        };
    };
    return letterPosition
};

function replaceCharacter(string, index, replacement) {
    return ( string.slice(0, index) + replacement + string.slice(index + 1, string.length))
};

function checkLetter(letter) {
    let text = document.getElementById("answer-section").innerHTML;
    if (randomWord.includes(letter) && (mistakesCounter <= 6)) {
        const letterPositions = getLetterPosition(letter,randomWord);
        for (let i = 0; i < letterPositions.length; i++){
            let position = letterPositions[i];
            text = replaceCharacter(text, position, letter);
        }
        document.getElementById("answer-section").innerHTML = text;
        if (!text.includes("-") ){
            alert("Congrats! You won!");
            resetGame();
        }
    } else {
        mistakesCounter++ ;
        if (mistakesCounter <= 6) {
            if (mistakesCounter == 1) {
                head();
            }
            else if (mistakesCounter == 2) {
                body()
            }
            else if (mistakesCounter == 3) {
                leftHand()
            }
            else if (mistakesCounter == 4) {
                rightHand()
            }
            else if (mistakesCounter == 5) {
                leftLeg()
            }
            else if (mistakesCounter == 6) {
                rightLeg()
            };
        } else {
            alert("Boohoo, You lost!");
            resetGame();
        };
        
    };

};

function resetGame() {
    randomIndex = Math.floor(Math.random()*(words.length - 1));
    randomWord = words[randomIndex];
    letterElements = document.querySelectorAll(".letter");
    mistakesCounter = 0;
    document.getElementById("answer-section").innerHTML = "-".repeat(randomWord.length);
    document.getElementById("hang").innerHTML = `<img src="./assets/hang.svg" />`

};
