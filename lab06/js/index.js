
window.onload = function () {
    "use strict";
    document.getElementById("biggerDecorations").onclick = submit;
    document.getElementById("bling").onchange = checkBoxOnChange;
    document.getElementById("pigLatinBtn").onclick = changePigLatin;
    document.getElementById("malkovitch").onclick = changeMalkovitch;
};

const submit = () => {
    "use strict";
    setInterval(changeFontSize, 500);
};

const changeFontSize = () => {
    "use strict";
    const fontSize = window.getComputedStyle(document.getElementById("displayedText")).getPropertyValue("font-size");
    const currentSize = parseInt(fontSize) * 0.75;
    document.getElementById("displayedText").style.fontSize = (parseInt(currentSize) + 2) + "pt";
};

const changePigLatin = () => {
    "use strict";
    let texts = document.getElementById("displayedText").value.split(" ");
    const consonantRegex = /^[^aeiou]+/;
    const newTexts = texts.map((text) => {
        let consonant = text.match(consonantRegex);
        return consonant !== null && text.replace(consonantRegex, "").concat(consonant).concat("ay");
    });

    document.getElementById("displayedText").value = newTexts.join(" ");
};

const changeMalkovitch = () => {
    "use strict";
    const text = document.getElementById("displayedText").value;
    if (text.length >= 5) {
        document.getElementById("displayedText").value = "Malkovitch";
    }
};

const checkBoxOnChange = (event) => {
    "use strict";
    const isCheck = event.target.checked;
    if (isCheck) {
        document.getElementById("displayedText").style.fontFamily = "Bold";
        document.getElementById("displayedText").style.color = "green";
        document.getElementById("displayedText").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(./images/hundred-dollar-bill.jpg)";
    } else {
        document.getElementById("displayedText").style.fontFamily = "";
        document.getElementById("displayedText").style.color = "";
        document.getElementById("displayedText").style.textDecoration = "";
        document.body.style.backgroundImage = "";
    }
};