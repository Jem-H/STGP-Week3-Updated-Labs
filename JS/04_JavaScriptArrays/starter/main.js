let quote = ["I", "am", "your", "friend"];
console.log(quote);

console.log("Second element:", quote[2]);

quote.pop();
quote.push("father");
console.log("Replace last element using pop -> push:", quote);
quote.unshift("Luke,");
console.log("Add element to start of array using unshift:", quote);

let erroneousWord = "Luke,"
let lukeIsHere = quote.find(n => {
    return n === erroneousWord
});

let lukeIsAt;
if (lukeIsHere) {
    lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord
    });
    quote[lukeIsAt] = "No";
}

console.log("Correct misquote!", quote);

let output = "";

for (i = 0; i < quote.length; i++) {
    if (i === quote.length-1) {
        output += quote[i] + "!";
    } else if (quote[i] === "No") {
        output += quote[i] + ", ";
    } else {
        output += quote[i] + " "
    }
}

console.log("Make it a string:", output);
