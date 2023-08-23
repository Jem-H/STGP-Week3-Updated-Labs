// Number variable
let numTest = 45.324568;
console.log(numTest);

// Truncate number
let twoDecimalPoints = numTest.toFixed(2);
console.log(twoDecimalPoints); // NB Turned number into string!

// String 
let stringTest = 'I am the very model of a modern major general';
stringTest = stringTest.toUpperCase();
let indexOfM = stringTest.indexOf('M');
console.log(indexOfM); // Not found, returns -1

let start = stringTest.indexOf("MODEL"); // position of first occurrence
let end = stringTest.lastIndexOf('MAJOR'); // last occurrence in the string
console.log(start);
console.log(end); 

let subStr = stringTest.substring(start, end); // extract substring
console.log(subStr);

document.write("<p>" + subStr + "</p>"); // Renders on browser as HTML!