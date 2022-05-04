import analyzeArray from "../code/analyzeArray";


const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };

test('Array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject(expected);
});