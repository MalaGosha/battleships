var language = "PL"; // default version web site


let polandFlag = document.getElementById("poland_flag");
polandFlag.onclick = function () {
    language = "PL";
}


let britianFlag = document.getElementById("britian_flag");
britianFlag.onclick = function () {
    language = "EN";

}


//one line if: condition ? answerTrue : answerFalse
if (language === "PL" ? "true" : "false");









