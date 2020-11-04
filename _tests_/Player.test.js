
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

test("gets player's healtch value" ,() => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test("subtracts player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

test("gets players attack value", () => {
    const player = new Player('Dave');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test("adds a potion to the inventory", () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test("uses a potion from the inventory", () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];

    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
})