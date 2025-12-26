const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

let start = 50;
let passingZero = 0;

for (let i = 0; i < lines.length; i++) {
  const rotation = lines[i];
  const direction = rotation[0];
  const steps = parseInt(rotation.slice(1), 10);
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

console.log("Puzzle answer:", passingZero);
