import reverseString from "../code/reverseString"

test('Reverse abcdefg', () => {
    expect(reverseString('abcdefg')).toBe('gfedcba');
});
