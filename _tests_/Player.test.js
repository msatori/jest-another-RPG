
const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');

//import the potion constructor 
const Potion = require('../lib/Potion');
//this is the syntax to make a mock 
jest.mock('../lib/Potion');


//create a test to make a player object
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.health).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

//create a test for playr stats to make sure that player.getstats returns an object with 4 specific properties
test('Gets players stats as an object', () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', ()  => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    //simulate an empty array
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});