var number = 12;
let SixdigitNumber;
SixdigitNumber = number.toLocaleString(undefined, {
  useGrouping: false,
  minimumIntegerDigits: 6,
});

console.log(SixdigitNumber);