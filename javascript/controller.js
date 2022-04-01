
// guesses - przechowuje liczbę prób
// processGuess - przetwarza wspólrzędne pola wskazanego przez użytkownnika i przekazuje je do modelu; wykrywa kobiec gry


//                                      KONTROLER

var controller = {          // implementacja kontrolera
    guesess: 0,

    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesess++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                // view.displayMessage("Zatopiłeś wszystkie okręty z planszy w " + this.guesess + " próbach");
                // view.displayMessage(dictionaryMap.get(language).get(1) + this.guesess + " próbach"); --> przy użyciu dictionaryMap
                view.displayMessage(language === "PL" ? ("Zatopiłeś wszystkie okręty z planszy w " + this.guesess + "próbach") : ("You hit every ships at " + this.guesess + " attempt"));
            }
        }
    }
};


function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        //alert(language === "PL" ? "Ups! Prosze wpisać literę i cyfrę." : "Ups! Please write big letter and number.");
        const wrongMessage = language === "PL" ? "Ups! Proszę wpisać literę i cyfrę." : "Ups! Please write big letter and number";
        showPopup(wrongMessage);
    } else {
        let firstChar = guess.charAt(0);              // charAt wypisuje mi w tym oprzypadku pierwszy znak łańcucha guess i przypisuje go do zmiennej firstChar
        const row = alphabet.indexOf(firstChar);// indexOf dostając parametr firstChar (w tym przypadku będzie to wartość pierwszego znaku z guess) szuka jego pierwszego wypisania w alphabet i podaje jego indeks
        const column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            //alert(language === "PL" ? "Ups! To nie są wspólrzędne": "Nope! These are not a coordinates");
            const notCoordinatesMessage = language === "PL" ? "Ups! To nie są wspólrzędne": "Nope! These are not a coordinates";
            showPopup(notCoordinatesMessage);
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            // alert(language === "PL" ? "Ups! Wspólrzędne poza planszą": "Ups! coordinates outside the board");
            const outMessage = language === "PL" ? "Ups! Współrzędne poza planszą": "Ups! coordinates outside the board";
            showPopup(outMessage);
        } else {
            return row + column;
        }
    }
    return null;
}


//              POBIERANIE WSPÓŁRZĘDNYCH Z FORMULARZA:
function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    controller.processGuess(guess);

    guessInput.value = "";
}

function init() {
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocation();
}

function handleKeyPress(e) {
    let fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {      // 13 to keycode na klawisz enter
        fireButton.click();
        return false;
    }
}

// const letter = document.querySelector('.letter');
// letterNodeReference.childNodes[0].nodeName.


// popup



window.onload = init;

