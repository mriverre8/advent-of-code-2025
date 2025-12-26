const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

function rotate(direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction === "R") {
      start = (start + 1) % 100;
    } else {
      start = (start - 1 + 100) % 100;
    }
    if (start === 0) {
      passingZero += 1;
    }
  }
}

let start = 50;
let passingZero = 0;

for (let i = 0; i < lines.length; i++) {
  const rotation = lines[i];
  rotate(rotation[0], parseInt(rotation.slice(1), 10));
}

console.log("Puzzle answer:", passingZero);
