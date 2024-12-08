import { add, subtract, multiply, divide } from '../src/index';

describe('Calculator functions', () => {
  test('add', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('divide', () => {
    expect(divide(6, 3)).toBe(2);
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });
});