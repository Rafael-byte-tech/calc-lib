import { greet }  from '../src/index';

describe('greet function', () => {
  it('should return a greeting message with the provided name', () => {
    const result = greet('Alice');
    expect(result).toBe('Hellow, Alice...welcome...');
  });

  it('should handle empty string inputs gracefully', () => {
    const result = greet('');
    expect(result).toBe('Hellow, ...welcome...');
  });
});