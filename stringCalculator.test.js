// Adding 1st test case to return 0 if no numebr specified
const { add } = require('./stringCalculator');

test('empty string returns 0', () => {
    expect(add("")).toBe(0);
});





