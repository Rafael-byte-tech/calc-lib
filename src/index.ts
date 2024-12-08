/**
 * calc-lib/src/index.ts
 * A simple calculator with basic operations.
 */

/**
 * Adds two numbers.
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
export const add = (a: number, b: number): number => {
    return a + b;
  };
  
  /**
   * Subtracts the second number from the first.
   * @param a - First number
   * @param b - Second number
   * @returns The difference between a and b
   */
  export const subtract = (a: number, b: number): number => {
    return a - b;
  };
  
  /**
   * Multiplies two numbers.
   * @param a - First number
   * @param b - Second number
   * @returns The product of a and b
   */
  export const multiply = (a: number, b: number): number => {
    return a * b;
  };
  
  /**
   * Divides the first number by the second.
   * @param a - Numerator
   * @param b - Denominator
   * @returns The quotient of a divided by b
   * @throws Error if b is 0
   */
  export const divide = (a: number, b: number): number => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  };  