let year = 2024;

const isLeapYear = (year) => {
  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
};
const result = isLeapYear(1900);
console.log(result);
