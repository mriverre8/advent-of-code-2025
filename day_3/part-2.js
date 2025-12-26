const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const banks = content.split(/\r?\n/);

const JOLTAJE_OFFSET = 12;

function getBankNumber(bank) {
  const bankLength = bank.length;
  const digits = bank.split("").map((d) => parseInt(d, 10));

  let joltage = [];

  let x = bankLength - JOLTAJE_OFFSET;
  let y = 0;
  let tmpY = y;
  while (joltage.length < JOLTAJE_OFFSET) {
    let digitTmp = 0;
    for (let index = x; y <= index; index--) {
      const currentDigit = digits[index];
      if (currentDigit >= digitTmp) {
        digitTmp = currentDigit;
        tmpY = index + 1;
      }
    }
    joltage.push(digitTmp);
    y = tmpY;
    x++;
  }
  return parseInt(joltage.join(""), 10);
}

let answer = 0;

banks.forEach((bank) => {
  const bankNumber = getBankNumber(bank);
  answer += bankNumber;
});

console.log("Puzzle answer:", answer);
