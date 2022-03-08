const { sum } = require("./sum.js");

describe('testing the "sum" function', () => {

  it('certifies that the function exists', () => {
    expect(typeof sum).toBe('function');
  }
  )

  it('sums 4 plus 5 and return 9', () => {
    expect(sum(4, 5)).toBe(9);
  }
  )

  it('sums 0 plus 0 and return 0', () => {
    expect(sum(0, 0)).toBe(0);
  }
  )

  it('throws an error if a parameter is NaN and message is "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow(Error);
    expect(() => sum(4, '5')).toThrow("parameters must be numbers");
  }
  )  
})
