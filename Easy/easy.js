//EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.  Example output: “The name Thomas is longer than John by 2 characters”

// Create variables 
var name1 = "Joe";
var name2 = "Alfalfa";

// Determine length of names
var name1length = name1.length;
var name2length = name2.length;

// Determine name length difference
if (name1length > name2length){
    var dif = name1length - name2length;
    console.log(`The name ${name1} is longer than ${name2} by ${dif} characters`)
} else if (name1length < name2length){
    var dif = name2length - name1length;
    console.log(`The name ${name2} is longer than ${name1} by ${dif} characters`)
} else {
    console.log("Names are the same length")
}

var nameDif = function(name1,name2){
    var name1length = name1.length;
    var name2length = name2.length;

    if (name1length > name2length){
        var dif = name1length - name2length;
        console.log(`The name ${name1} is longer than ${name2} by ${dif} characters`)
    } else if (name1length < name2length){
        var dif = name2length - name1length;
        console.log(`The name ${name2} is longer than ${name1} by ${dif} characters`)
    } else {
        console.log("Names are the same length")
    }
}

// Output the result
nameDif("John", "Billy")
nameDif("Johnny", "Bill")
nameDif("John", "Bill")