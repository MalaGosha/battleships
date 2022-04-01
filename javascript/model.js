/*
                                    MODEL
miejsce w którym będzie przechowywane stan gry oraz logika związana ze zmianami stanu


ten model będzie zawierał:
boardSize - wielkość siatki tworzącej plansze
numShips - liczbę okrętów biorących udział w grze
ships - informacje o lokalizacji okrętów i trafieniach
shipsSunk - liczbę zatopionych okrętów
shipsLength - liczbę komórek siatki zajmowanyhch orzez kazdy okret
fire - metoda sluzoaca do oddawania strzalu i okreslania czy jest to strzal celny czy tez nie

 */

class Shipss2 {
    constructor(locations, hits) {
        this.locations = locations;
        this.hits = hits;
    }
    locations;
    hits;
}

let ship1 = new Shipss2 ([], "", "", "");
let ship2 = new Shipss2 ([], "", "", "");
let ship3= new Shipss2 ([], "", "", "");



/*
let ship1 = {
    locations: [0, 0, 0],
    hits: ["", "", ""]   // zawiera informacje czy poszczególne pola zajmowane przez okręt zostały trafione czy nie
};

let ship2 = {
    locations: [0, 0, 0],
    hits: ["", "", ""]
}

let ship3 = {
    locations: [0, 0, 0],
    hits: ["", "", ""]
}

*/

const ships = [ship1, ship2, ship3];

// // przykład ;)
// ship2 = ships[1];
// let locations = ship2.locations;
// console.log("Wspólrzędne pola to: " + locations[1]);


var model = {
    boardSize: 8,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: ships,

    fire: function (guess) {

        if (!view.didUserShotThisElementByLocation(guess)) {

            this.hitOrMiss(guess);

        } else {
            view.displayMessage(language === "PL" ? "Już próbowałeś strzelić w te pole" : "You try this location");
        }
    },

    hitOrMiss: function (guess){
        for (let i = 0; i < this.ships.length; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess); // mówi o tym że do indexu dopsiujemy numer indeksu pod ktorym znajduje sie nazwa wpisana przez użytkownika w danej lokacji w danym statkul; gdy jest false indexOf zwraca -1
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage(language === "PL" ? "Trafiony!" : "Wow! This is hit!");
                if (this.isSunk(ship)) {
                    view.displayMessage(language === "PL" ? "Zatopiłeś mój okręt" : "Grrrr...! You sunk my ship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage(language==="PL" ? "Spudłowałeś" : "Miss");
        return false;
    },


    isSunk: function (ship) {    // funkcja sprawdzająca czy okręt został zatopiony
        let counter = 0;   // mówi ile razy statek został trafiony
        for (let i = 0; i < ship.hits.length; i++){
            if (ship.hits[i] === "hit"){
                counter+=1;
            }
        }
        console.log("counter" + counter);
        return counter === this.shipLength; // zwraca true lub false
    },

    generateShipLocation: function () {       // tworzy nowe okręty
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },

    generateShip: function () {          // zawiera tablice z nowymi wspołrzędnymi  pol zajmowanych przez 1 okret
        let direction = Math.floor(Math.random() * 2);
        let row, col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        let newShipLocations = [];
        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + (i)));
            } else {
                newShipLocations.push((row + (i)) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function (locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = model.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }



};

