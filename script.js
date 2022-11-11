'use strict';

const restaurant = {
	name: 'Classical Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		time = '20:00',
		address,
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},
};

restaurant.orderDelivery({
	time: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: 'Via del Sole, 21',
	starterIndex: 1,
});

// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Resetting the variable names
const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant; // If [] isnt there it would be undefined for menu since its not defined anywhere.
console.log(menu, starters);

// Switching or Mutating Variables
let a = 211;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // there must be parenthesis()
console.log(a, b);

// Nested Objects
const {
	fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
/////////////////////////////
/DESTRUCTURING ARRAYS
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

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// With destructuring we do it this way:
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// What if we want all the values individually?
const [i, , [j, k]] = nested;
console.log(i, j, k);
// const [i, j, [k, l]] = nested;
// console.log(i, j, k, l);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
