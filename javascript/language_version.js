var language = "PL"; // default version web site
const fireButton = document.getElementById("fireButton");
const changeType = document.getElementById("changeTypeText");

const anotherLanguage = (text, text2) => {
    fireButton.value = text;
    changeType.innerHTML = text2;
    if (language === "PL"){
        fireButton.value = "Ognia!";
        changeType.innerHTML = "Włacz wybieranie cursorem";
    } else {
        fireButton.value = "Fire!";
        changeType.innerHTML = "Enable cursor selection";
    }
}

let polandFlag = document.getElementById("poland_flag");
polandFlag.onclick = function () {
    language = "PL";
    view.displayMessage(language === "PL" ? "Halo, zaczynamy ;)" : "Hi! Let's play ;)");
    document.getElementsByName('guessInput')[0].placeholder = 'Wpisz współrzędne';
    anotherLanguage(fireButton, changeType);
}


let britianFlag = document.getElementById("britian_flag");
britianFlag.onclick = function () {
    language = "EN";
    view.displayMessage(language === "PL" ? "Halo, zaczynamy ;)" : "Hi! Let's play ;)");
    document.getElementsByName('guessInput')[0].placeholder = 'Write coordination';
    anotherLanguage(fireButton, changeType);
}


//one line if: condition ? answerTrue : answerFalse
if (language === "PL" ? "true" : "false") ;










