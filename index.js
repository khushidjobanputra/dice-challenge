var randomNum1 = Math.floor((Math.random() * 6)+1);

var randomDiecImage = "dice" + randomNum1 +".png";
var randomImageSource = "images/" + randomDiecImage;

var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", randomImageSource);

////////////////***************/////////////////////////

var randomNum2 = Math.floor((Math.random() * 6)+1);

var randomDiecImage2 = "dice" + randomNum2 +".png";
var randomImageSource2 = "images/" + randomDiecImage2;

var image2 = document.querySelectorAll(".img2")[0];
image2.setAttribute("src", randomImageSource2);

////////////////***************/////////////////////////

if(randomNum1>randomNum2){
    document.querySelector(".heading").innerHTML="Player1 Wins!!";
}
else if(randomNum2 > randomNum1){
    document.querySelector(".heading").innerHTML="Player2 Wins!!";
}
else{
    document.querySelector(".heading").innerHTML="Draw!";
}