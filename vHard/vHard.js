// Create variables
var choice = prompt('Type to choose: "Add" "Subtract" "Multiply" "Divide"');

// Addition
//var add = function(choice){
    if (choice === "Add"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1+num2;
        alert(answer)
        console.log(num1 + " + " + num2 + " = " + answer)
    }
///}

//Subtraction
//var subtract = function(num1, num2){
    if (choice === "Subtract"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1-num2;
        alert(answer)
        console.log(num1 + " - " + num2 + " = " + answer)
    }
//}

//Multiplication
//var multiply = function(num1, num2){
    if (choice === "Multiply"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1*num2;
        alert(answer)
        console.log(num1 + " * " + num2 + " = " + answer)
    }
//}

//Division
//var divide = function(num1, num2){
    if (choice === "Divide"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1/num2;
        alert(answer)
        console.log(num1 + " / " + num2 + " = " + answer)
    }
//}