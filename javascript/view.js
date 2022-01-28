//                                               WIDOK

var view = {
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














