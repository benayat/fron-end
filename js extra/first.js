function printToN(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

function countx(n, t) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % t == 0) count++;
  }
  return count;
}
function countEven(n) {
  const array = [];
  let remaining = n;
  while (remaining > 0) {
    array.push(remaining % 10);
    remaining /= 10;
  }
  return array.reduce((accumulator, value) => {
    if (value % 2 == 0) accumulator++;
  }, 0);
}
function countEvenOnRange(n) {}
function printReverse() {
  for (let i = 100; i >= 0; i -= 2) {
    console.log(i);
  }
}
function quadratic(a, b, c) {
  return {
    x1: -b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2) * a,
    x2: -b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2) * a,
  };
}
function countABC(str) {
  return str
    .split("")
    .filter((x) => x !== " ")
    .reduce((accumulatorArray, value) => {
      accumulatorArray[value] = (accumulatorArray[value] || 0) + 1;
    }, []);
}
function toUpper(str) {
  return str
    .split("")
    .map((c) => {
      return /[a-z]/.test(c) ? String.fromCharCode(c.charCodeAt(0) - 32) : c;
    })
    .join("");
}

function countIncrement(num) {
  num
    .toString()
    .join("")
    .reduce((accumulator, value, currentIndex, sourceArray) => {
      accumulator =
        accumulator &&
        (index === sourceArray.length - 1 ||
          value <= sourceArray[currentIndex + 1])
          ? true
          : false;
    }, true);
}

function BeforeNumber(nums) {
  nums.split("").reduce((accumulator, value, currentIndex, sourceArray) => {
    accumulator +=
      Number.parseInt(value) ===
      Number.parseInt(sourceArray[currentIndex + 1]) - 1
        ? 1
        : 0;
  }, 0);
}
function countBigAndSmall(s) {
  s.split("").reduce((accumulator, currentValue, currentIndex, sourceArray) => {
    accumulator +=
      currentIndex < sourceArray.length &&
      /[A-Z]/.test(sourceArray[currentIndex + 1]) &&
      /[a-z]/.test(currentValue)
        ? 1
        : 0;
  });
}

//note: the wording is not good in this question! the question should be(per the example! - how many times the SaMe char appears once as capital and once as lowercase, consequent. )

function countChar(S) {
  const histogram = S.split("").reduce(
    (accumulatorArray, value, index, sourceArray) => {
      if (value === sourceArray[index + 1] && index < sourceArray.length) {
        accumulatorArray[value] = (accumulatorArray[value] || 0) + 1;
      }
    }
  );
  return Math.max(...histogram);
}

//beautiful exersice!!! find polindrom in numbers: if the sum of the digits of the subtraction of number and his palindrom is exactly 9, it is a palindrom!
//thank you pini.

function polyNum(num) {
  const number2 = num
    .toString()
    .split("")
    .map((x) => parseInt(x, 10))
    .reverse()
    .reduce(
      (accumulator, value, index) =>
        (accumulator += value * Math.pow(10, index))
    );
  let numberCompare9 = Math.abs(num - number2);
  let sum = 0;
  while (numberCompare9 > 0) {
    sum += numberCompare9 % 10;
    numberCompare9 /= 10;
  }
  return sum === 9;
}

function aba(str) {
  return str.toString().split("").reverse() === str.toString();
}

function isStrike(num) {
  if (num < 10) return true;
  while (num >= 10) {
    if (Math.floor((num % 100) / 10) >= num % 10) return false;
  }
  return true;
}
function checkPasword(password) {
  return (
    password.split("").reduce((accumulator, value) => {
      if (typeof value === Number) accumulator = (accumulator || 0) + 1;
    }) >= 3 &&
    password
      .split("")
      .reduce(
        (accumulator, value) =>
          (accummulator = /[A-Z]/.test(value)
            ? (accumulator || 0) + 1
            : accumulator)
      ) === 2 &&
    password
      .split("")
      .reduce((accumulator, value) => accumulator || /[a-z]/.test(value), false)
  );
}
