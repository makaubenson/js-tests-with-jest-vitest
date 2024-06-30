// import { test } from "vitest";
import { it, expect } from "vitest";
// Both test and it and methods doing the same thing.

import  { add } from "./math"; // import the function from the file add.js

// start writing test
it('Should Summarize all number values in an array', () => {
    //The AAA Pattern 

    //Arrange
    const numbers = [1, 2, 3]; // This is an array of numbers.

    //Act
    const result = add(numbers); // This is the function we are testing.

    //Assert
    const expectedResult = numbers.reduce( (prevValue, curValue) => prevValue + curValue, 0); // This is the expected result of
    expect(result).toBe(expectedResult); // This is the expected result.
});



it('Should multiply the first two number values in an array', () => {
    // The AAA Pattern

    // Arrange
    const numbers = [5, 3]; // This is an array of numbers.

    // Act
    const result = multiplyTwoNumbers(numbers); // This is the function we are testing.

    // Assert
    const expectedResult = numbers[0] * numbers[1]; // This is the expected result of
    expect(result).toBe(expectedResult); // This is the expected result.
});

it('Should throw an error if the array has less than two numbers', () => {
    // The AAA Pattern

    // Arrange
    const numbers = [5]; // This is an array with only one number.

    // Act & Assert
    expect(() => multiplyTwoNumbers(numbers)).toThrow("Array must contain at least two numbers.");
});