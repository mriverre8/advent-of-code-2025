const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

let isGeneratingRanges = true;
let ranges = [];
let answer = 0;

const checkIfIDsInRange = (line, ranges) => {
  for (let i = 0; i < ranges.length; i++) {
    const min = parseInt(ranges[i].split("-")[0], 10);
    const max = parseInt(ranges[i].split("-")[1], 10);
    const id = parseInt(line, 10);
    if (id >= min && id <= max) {
      answer += 1;
      return;
    }
  }
};

lines.forEach((line) => {
  if (line === "") {
    isGeneratingRanges = false;
  }

  if (isGeneratingRanges) {
    ranges.push(line);
  } else {
    checkIfIDsInRange(line, ranges);
  }
});

console.log("Puzzle answer:", answer);
