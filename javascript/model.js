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

let ship1 = {
    locations: ["10", "20", "30"],
    hits: ["", "", ""]   // zawiera informacje czy poszczególne pola zajmowane przez okręt zostały trafione czy nie
};

let ship2 = {
    locations: ["32", "33", "34"],
    hits: ["", "", ""]
}

let ship3 = {
    locations: ["63", "64", "65"],
    hits: ["", "", ""]
}

const ships = [ship1, ship2, ship3];

// // przykład ;)
// ship2 = ships[1];
// let locations = ship2.locations;
// console.log("Wspólrzędne pola to: " + locations[1]);


var model = {
    boardSize: 7,
    numShips: ships.length,
    shipLength: 3,
    shipsSunk: 0,

    // ships: [ship1, ship2, ship3],
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

