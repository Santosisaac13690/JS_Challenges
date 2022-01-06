// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

// Addition
function add(){
    var num1 = 9
    var num2 = 4
    var answer = num1+num2;
    console.log(num1 + " + " + num2 + " = " + answer)
}
add();

//Subtraction
var subtract = function(num1, num2){
    if (choice === "Subtract"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1-num2;
        alert(answer)
        console.log(num1 + " - " + num2 + " = " + answer)
    }
}

//Multiplication
var multiply = function(num1, num2){
    if (choice === "Multiply"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1*num2;
        alert(answer)
        console.log(num1 + " * " + num2 + " = " + answer)
    }
}

//Division
var divide = function(num1, num2){
    if (choice === "Divide"){
        var num1 = Number(prompt("Choose first number."))
        var num2 = Number(prompt("Choose second number."))
        var answer = num1/num2;
        alert(answer)
        console.log(num1 + " / " + num2 + " = " + answer)
    }
}

// // Create functions
// var add = function(num1, num2){
//     if (choice == "Add"){
//         alert(num1+num2)
//     }
// }