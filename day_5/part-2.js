const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

let answer = 0;
let ranges = [];

let i = 0;

while (lines[i] !== "") {
  const [min, max] = lines[i].split("-").map(Number);
  ranges.push(min, max + 1);
  i++;
}

ranges.sort((a, b) => a - b);

for (let j = 0; j < ranges.length - 1; j++) {
  const minToCheck = ranges[j];
  const maxToCheck = ranges[j + 1];

  i = 0;
  while (lines[i] !== "") {
    const [min, max] = lines[i].split("-").map(Number);
    if (minToCheck >= min && maxToCheck <= max + 1) {
      answer += maxToCheck - minToCheck;
      break;
    }
    i++;
  }
}

console.log("Puzzle answer:", answer);
