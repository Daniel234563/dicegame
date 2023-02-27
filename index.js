var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSrc = "./img/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var image2 = document.querySelectorAll("img")[1];

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc2 = "./img/" + randomImage2;

image2.setAttribute("src", randomImageSrc2);

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Spiller 2 vinner!";
} if (randomNumber2 < randomNumber1) {
    document.querySelector("h1").innerHTML = "Spiller 1 vinner!";
} if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Uavgjort!";
}
