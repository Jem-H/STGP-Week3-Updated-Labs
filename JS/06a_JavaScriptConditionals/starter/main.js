let age = 18;

if (age <= 17) {
    console.log("Underage");
} else if (age <= 65) {
    console.log("Insurable");
} else {
    console.log("Out of range");
}

age <= 17 ?console.log("Underage") 
: age <=65 ? console.log("Insurable") 
: console.log("Out of range");