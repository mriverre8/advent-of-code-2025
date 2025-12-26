const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const banks = content.split(/\r?\n/);

function getBankNumber(bank) {
  const bankLength = bank.length;

  let first = 0;
  let firstIndex = 0;
  for (let i = 0; i < bankLength - 1; i++) {
    const current = parseInt(bank[i], 10);
    if (first < current) {
      first = current;
      firstIndex = i;
    }
  }

  let second = 0;
  let secondIndex = 0;
  for (let i = firstIndex + 1; i < bankLength; i++) {
    const current = parseInt(bank[i], 10);
    if (second < current) {
      second = current;
      secondIndex = i;
    }
  }
  return parseInt("" + first + second, 10);
}

let answer = [];

banks.forEach((bank) => {
  const bankNumber = getBankNumber(bank);
  answer.push(bankNumber);
});

console.log(
  "Puzzle answer:",
  answer.reduce((a, b) => a + b, 0)
);
