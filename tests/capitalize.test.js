import capitalize from "../code/capitalize.js"

test('Capitalize hello, world', () => {
    expect(capitalize("hello, world")).toBe("Hello, world");
});