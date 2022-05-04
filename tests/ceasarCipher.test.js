import ceasar from "../code/ceasarCipher";

test('Cypher over 1', () => {
    expect(ceasar('abcdefg', 1)).toBe("bcdefgh");
});


test('Ignore puncuation', () => {
    expect(ceasar('Hello, world',10)).toBe("Rovvy, gybvn");
});


test('Wrap letters', () => {
    expect(ceasar('How Now Brown Cow',21)).toBe("Cjr Ijr Wmjri Xjr");
});

test('Negative index', () => {
    expect(ceasar('How Now Brown Cow',-5)).toBe("Cjr Ijr Wmjri Xjr");
});