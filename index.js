var name1 = prompt("what is your name player 1 ?");
var name2 = prompt("what is your name player 2 ?");
var p1n = document.getElementsByTagName("p")[0].innerHTML = name1;
var p2n = document.getElementsByTagName("p")[1].innerHTML = name2;
var p1 = document.getElementsByTagName("img")[0];
var p2 = document.getElementsByTagName("img")[1];
function dicee() {
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}
var randomD1 = dicee();
var randomD2 = dicee();
var src1 = "./images/dice";
var src2 = ".png";
var diceeP1 = p1.setAttribute("src", src1 + randomD1 + src2);
var diceeP2 = p2.setAttribute("src", src1 + randomD2 + src2);
if(randomD1 > randomD2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 " + p1n + " win";
}
else if(randomD1 < randomD2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 " + p2n + " win";
}