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
    },


    didUserShotThisElementByLocation: function (location) {
        let cell = document.getElementById(location);
        let classValue = cell.getAttribute("class");  /// pobrany atrybut class jest przypisywant do zmiennej classValue
        return classValue === "hit" || classValue === "miss";  // sprawdzamy co zwróci funkcja w zależności od jej wartości - jeśli nie ma wartości zwróci false
    }

}

view.displayMessage("Halo, zaczynamy ;)");














