
const randomNumber = require('../lib/random.js');

test('gets a random number between one and ten', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10)
});