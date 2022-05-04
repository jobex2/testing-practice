import calculator from "../code/calculator"

test('add 2 + 2', () => {
    expect(calculator.add(2,2)).toBe(4);
});

test('sub 2 - 2', () => {
    expect(calculator.sub(2,2)).toBe(0);
});

test('div 2 / 2', () => {
    expect(calculator.div(2,2)).toBe(1);
});

test('mult 2 * 3', () => {
    expect(calculator.mul(2,3)).toBe(6);
});