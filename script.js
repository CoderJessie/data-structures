'use strict';

const restaurant = {
	name: 'Classical Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring we can actually declare all 3 variables at the same time
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// If we want to switch the main and secondary values:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// With destructuring we do it this way:
[main, secondary] = [secondary, main];
console.log(main, secondary);
