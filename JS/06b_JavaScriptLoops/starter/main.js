// For loop
console.log("For loop:")
for (let i=1; i<10; i++) {
    console.log(i);
}

// While loop
console.log("While loop:")
let x = 2;
let loopCounter = 0;
while (x < 10000) {
    x = x**2;
    loopCounter++
    console.log(loopCounter + ": " + x);
}

// While loop counting down
console.log("While loop counting down:")
let x2 = 10000;
let loopCount2 = 0;

while (x2 > 1) {
    x2 = x2**0.5;
    loopCount2++
    console.log(loopCount2 + ": " + x2);
}