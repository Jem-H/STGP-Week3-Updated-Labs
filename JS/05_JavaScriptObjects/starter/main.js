// Create a new object
const darthVader = {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true
}

// Access the properties
console.log("Allegiance:", darthVader.allegiance);
console.log("Weapon:", darthVader.weapon);
console.log("Sith?", darthVader.sith);
console.log("Jedi?", darthVader.jedi);
console.log("No of properties (length):", Object.keys(darthVader).length);

// Add key value pairs
darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];
console.log("Children:", darthVader.children);
console.log("First child:", darthVader.childNames[0]);

// Iterate over the object
for (key in darthVader) {
    console.log(key, ":", darthVader[key]);
}

// Manipulate the object
darthVader.allegiance = "The light side";
delete darthVader.children;
console.log("Darth Vader", darthVader);

// Destructure - equivalent of let darthVader.allegiance - extract and store as a variable
let {allegiance, weapon, sith, childNames} = darthVader;
console.log("Allegiance:", allegiance);
console.log("Weapon:", weapon);
console.log("Sith:", sith);
console.log("childNames:", childNames);

// Clear the object
for (key in darthVader) {
    delete darthVader[key];
}
console.log("Clear object:", darthVader);


