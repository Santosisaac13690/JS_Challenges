//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

// Create Variables 
var upper = "UPPERCASE"
var lower = "lowercase"
var normal = "Normal"

// Prompt user to type a word uppercase, lowercase, or normally
var input = prompt('Type a word using all uppercase, lowercase, or normally. Ex: "WATER", "Water", "water".');

// Determine if input is in caps, lowercase or normal & console log whether they are shouting, whispering, or talking normally
if (input === input.toUpperCase()){
    alert(upper)
    console.log("SHOUTING")
} else if (input === input.toLowerCase()){
    alert(lower)
    console.log("whispering")
} else{
    alert(normal)
    console.log("Talking Normally")
}