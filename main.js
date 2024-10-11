function  add(){
    let fristNum = parseFloat(document.getElementById("num1").value);
    let secondNum = parseFloat(document.getElementById("num2").value);
let result =fristNum + secondNum;
document.getElementById("result").innerHTML = result;
}
function  subtract(){
    let fristNum = parseFloat(document.getElementById("num1").value);
    let secondNum = parseFloat(document.getElementById("num2").value);
let result =fristNum - secondNum;
document.getElementById("result").innerHTML = result;
}
function  mutiply(){
    let fristNum = parseFloat(document.getElementById("num1").value);
    let secondNum = parseFloat(document.getElementById("num2").value);
let result =fristNum * secondNum;
document.getElementById("result").innerHTML = result;
}
function  Divided(){
    let fristNum = parseFloat(document.getElementById("num1").value);
    let secondNum = parseFloat(document.getElementById("num2").value);
let result =fristNum / secondNum;
document.getElementById("result").innerHTML = result;
}
function  SquareRoot(){
    let fristNum = parseFloat(document.getElementById("num1").value);
let result =  Math.sqrt(fristNum);
document.getElementById("result").innerHTML = result;
}
function Power(){
    let fristNum = parseFloat(document.getElementById("num1").value);
    let secondNum = parseFloat(document.getElementById("num2").value);
    let result =  Math.pow(fristNum,secondNum);
    document.getElementById("result").innerHTML = result;
}
