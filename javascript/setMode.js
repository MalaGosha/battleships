
let darkMode = document.getElementById("dark_mode");

darkMode.onclick = function () {
    let elementsByTagNameElement = document.getElementsByTagName("link")[0];
    elementsByTagNameElement.href = "css_style/text_style_dark.css";
    let elementsByTagNameElement1 = document.getElementsByTagName("link")[1];
    elementsByTagNameElement1.href = "css_style/table_style_dark.css";
    let elementsByTagNameElement2 = document.getElementsByTagName("link")[2];
    elementsByTagNameElement2.href = "css_style/main_style_dark.css";
};


let lightMode = document.getElementById("light_mode");

lightMode.onclick = function () {
    let elementsByTagNameElement = document.getElementsByTagName("link")[0];
    elementsByTagNameElement.href = "css_style/text_style_light.css";
    let elementsByTagNameElement1 = document.getElementsByTagName("link")[1];
    elementsByTagNameElement1.href = "css_style/table_style_light.css";
    let elementsByTagNameElement2 = document.getElementsByTagName("link")[2];
    elementsByTagNameElement2.href = "css_style/main_style_light.css";
};
