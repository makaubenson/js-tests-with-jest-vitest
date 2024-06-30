import { it, test, expect } from "vitest";
import {
    sumArray,
    findMax,
    findMin,
    calculateAverage,
    isEven,
    isOdd,
    reverseString,
    capitalizeFirstLetter,
    factorial,
    isPalindrome
} from "./math";

// 1. Test for sumArray
it('Should summarize all number values in an array', () => {
    const numbers = [1, 2, 3];
    const result = sumArray(numbers);
    const expectedResult = numbers.reduce((sum, num) => sum + num, 0);
    expect(result).toBe(expectedResult);
});

// 2. Test for findMax
it('Should find the maximum number in an array', () => {
    const numbers = [1, 2, 3];
    const result = findMax(numbers);
    const expectedResult = Math.max(...numbers);
    expect(result).toBe(expectedResult);
});

// 3. Test for findMin
it('Should find the minimum number in an array', () => {
    const numbers = [1, 2, 3];
    const result = findMin(numbers);
    const expectedResult = Math.min(...numbers);
    expect(result).toBe(expectedResult);
});

// 4. Test for calculateAverage
it('Should calculate the average of number values in an array', () => {
    const numbers = [1, 2, 3];
    const result = calculateAverage(numbers);
    const expectedResult = sumArray(numbers) / numbers.length;
    expect(result).toBe(expectedResult);
});

// 5. Test for isEven
it('Should check if a number is even', () => {
    const number = 4;
    const result = isEven(number);
    expect(result).toBe(true);
});

// 6. Test for isOdd
it('Should check if a number is odd', () => {
    const number = 5;
    const result = isOdd(number);
    expect(result).toBe(true);
});

// 7. Test for reverseString
it('Should reverse a string', () => {
    const str = "hello";
    const result = reverseString(str);
    const expectedResult = str.split('').reverse().join('');
    expect(result).toBe(expectedResult);
});

// 8. Test for capitalizeFirstLetter
it('Should capitalize the first letter of a string', () => {
    const str = "hello";
    const result = capitalizeFirstLetter(str);
    const expectedResult = str.charAt(0).toUpperCase() + str.slice(1);
    expect(result).toBe(expectedResult);
});

// 9. Test for factorial
it('Should calculate the factorial of a number', () => {
    const number = 5;
    const result = factorial(number);
    const expectedResult = 120; // 5 * 4 * 3 * 2 * 1
    expect(result).toBe(expectedResult);
});

// 10. Test for isPalindrome
test('Should check if a string is a palindrome', () => {
    const str = "madam";
    const result = isPalindrome(str);
    expect(result).toBe(true);
});
