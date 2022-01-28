//                                               WIDOK

let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        let cell = document.getElementById(location);     /// JEST O LOKACJA PRZEKAZA PRZEZ UŻYTKOWNIKA I JUŻ PRZEKONWERTOWANA NA SAME LICZBY
        cell.setAttribute("class", "miss");
    }
}

view.displayMessage("Halo, zaczynamy ;)");








let rand1= Math.floor(Math.random()*location.length);
let rand2= Math.floor(Math.random()*location.length);
let rand3= Math.floor(Math.random()*location.length);

let ship1 = {
    locations: [rand1, rand2, rand3],
}

let ship2 = {
    locations: ["32", "33", "34"],
    hits: ["", "", ""]
}

let ship3 = {
    locations: ["63", "64", "65"],
    hits: ["", "", ""]
}

const ships = [ship1, ship2, ship3];



let model = {
    boardSize: 7,
    numShips: ships.length,
    shipLength: 3,
    shipsSunk: 0,

    ships: ships,

    fire: function (guess) {
        // for (let i = 0; i < this.numShips; i++) {
        for (let i = 0; i < this.ships.length; i++) {
            let ship = this.ships[i];
            // let locations = ship.locations;
            // let index = locations.indexOf(guess);
            let index = ship.locations.indexOf(guess); // mówi o tym że do indexu dopsiujemy numer indeksu pod ktorym znajduje sie nazwa wpisana przez użytkownika w danej lokacji w danym statkul; gdy jest false indexOf zwraca -1
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("Trafiony!");
                if (this.isSunk(ship)) {
                    view.displayMessage("Zatopiłeś mój okręt");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Spudłowałeś");
        return false;
    },

    isSunk: function (ship) {    // funcksja sprawdzająca czy okręt został zatopiony
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
            return true;
        }
    }

};





//                                      KONTROLER

let controller = {          // implementacja kontrolera
    guesess: 0,

    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesess++;
            var hit = model.fire(location);
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
}

function handleKeyPress(e) {
    let fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;













