
// guesses - przechowuje liczbę prób
// processGuess - przetwarza wspólrzędne pola wskazanego przez użytkownnika i przekazuje je do modelu; wykrywa kobiec gry


//                                      KONTROLER

var controller = {          // implementacja kontrolera
    guesess: 0,

    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesess++;
            console.log("@Liczba prób to: " + this.guesess);
            var hit = model.fire(location);
            console.log("@weynik uderzenia z model.fire(location)" + hit);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Zatopiłeś wszystkie okręty z planszy w " + this.guesess + " próbach");
            }
        }
    }
};


function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Ups! Prosze wpisać literę i cyfrę.")
    } else {
        firstChar = guess.charAt(0);              // charAt wypisuje mi w tym oprzypadku pierwszy znak łańcucha guess i przypisuje go do zmiennej firstChar
        var row = alphabet.indexOf(firstChar);// indexOf dostając parametr firstChar (w tym przypadku będzie to wartość pierwszego znaku z guess) szuka jego pierwszego wypisania w alphabet i podaje jego indeks

        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Ups! To nie są wspólrzędne");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Ups! Pole poza planszą");
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
    var fireButton = document.getElementById("fireButton");
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



window.onload = init;

