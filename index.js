let backColor = document.getElementById("colorpickercontainer")
let selectedColorHexCode = document.getElementById("selectedColorHexCode");

document.getElementById("button1").style.backgroundColor = "#e0e0e0";
document.getElementById("button2").style.backgroundColor = "#6fef97";
document.getElementById("button3").style.backgroundColor = "#56ccf2";
document.getElementById("button4").style.backgroundColor = "#bb6bd9";
document.getElementById("selectedColorHexCode").style.color = "#49a6e9";


function firstButton () {
    // console.log("Button1 is clicked successfully!");
    document.getElementById("button1").style.backgroundColor = "#e0e0e0"
    backColor.style.backgroundColor = "#e0e0e0";
    selectedColorHexCode.textcontent = "#e0e0e0";
}

function secondButton () {
    // console.log("Button2 is clicked successfully!");
    document.getElementById("button1").style.backgroundColor = "#6fef97"
    backColor.style.backgroundColor = "#6fef97";
    selectedColorHexCode.textcontent = "#6fef97";
}

function thirdButton () {
    // console.log("Button3 is clicked successfully!");
    document.getElementById("button1").style.backgroundColor = "#56ccf2"
    backColor.style.backgroundColor = "#56ccf2";
    selectedColorHexCode.textcontent = "#56ccf2";
}

function fourthButton () {
    // console.log("Button4 is clicked successfully!");
    document.getElementById("button1").style.backgroundColor = "#bb6bd9"
    backColor.style.backgroundColor = "#bb6bd9";
    selectedColorHexCode.textcontent = "#bb6bd9";
}


