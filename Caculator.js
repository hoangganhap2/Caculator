function add() {
let number1 = parseFloat(document.getElementById("box1").value);
let number2 = parseFloat(document.getElementById("box2").value);
let sum= document.getElementById("hello").innerHTML=" Result : "+(number1+number2);
}
function sub() {
    let number1 = parseFloat(document.getElementById("box1").value);
    let number2 = parseFloat(document.getElementById("box2").value);
    let tru1 = document.getElementById("hello").innerHTML="Result : "+ (number1-number2);
}
function mul() {
    let number1 = parseFloat(document.getElementById("box1").value);
    let number2 = parseFloat(document.getElementById("box2").value);
    let nhan1 = document.getElementById("hello").innerHTML="Result : "+ (number1*number2);
}
function divi() {
    let number1 = parseFloat(document.getElementById("box1").value);
    let number2 = parseFloat(document.getElementById("box2").value);
    let chia1 = document.getElementById("hello").innerHTML="Result : "+ (number1/number2);
}