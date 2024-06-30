export function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

export function findMax(arr) {
  return Math.max(...arr);
}

export function findMin(arr) {
  return Math.min(...arr);
}

export function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}

export function isEven(num) {
  return num % 2 === 0;
}

export function isOdd(num) {
  return num % 2 !== 0;
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function factorial(num) {
  if (num < 0) return -1;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

export function isPalindrome(str) {
  const reversed = reverseString(str);
  return str === reversed;
}
