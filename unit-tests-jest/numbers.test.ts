import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// test("testing evenNumbers", ()=>{
//   expect(true).toBe(true);
// });

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 19, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 0]);
  });
});

describe('toDollars', () => {
  it('return a number formatted in dollars and cent', () => {
    const amount = 25.05;
    const result = toDollars(amount);
    expect(result).toEqual('$25.05');
  });
});

describe('dividedBy', ()=> {
  it('Returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const originalArray = [1, 4, 2.5];
    const clonedArr = [...originalArray];
    const resultArray = [0.5, 2, 1.25];
    const result = divideBy(originalArray,2);
    expect(result).toEqual(resultArray);
    expect(originalArray).toEqual(clonedArr);
  });
})

describe('multiplyBy', ()=>{
  it('Modifies an object by multiplying the value of each key, but only if that value is a number', () => {
    const obj = {'books': 2, 'pens': 5, 'pencils': 'none'}
    const result = multiplyBy(obj,2);
    expect(result).toEqual({ books: 4, pens: 10, pencils: 'none'});
  })
});
