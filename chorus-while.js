//Learning my loops with WHILE

var chorus = "Let's dance!";
var repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

// Adding if statement with the strictly sign

var chorus = "Let's dance!";
var repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

//For loops now

var chorus = "Let's dance!";
for (var repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");

// Iterating over the array

var packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (var i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

console.log(packingList[3]);