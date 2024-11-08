// Arrays => Storage container that holds multiple pieces of data

/**
 * 
 * Syntax 
 * 
 * let arrName = [item1, item2, item3,..., itemN];
 * 
 * Each item in an array is given an index value
 * 
 * items are zero-indexed
 * 
 * arrName[0] = first item in the array
 */

let coder = 'Trelin';

let coders = ['Trelin', 'Josh', 'Connor', 'Charlie', 'Zeek', 'Janjala', 'Will', 'Chloe', 'Favor', 'Lana', 'Clint', 'Christopher', 'Darius', 'Lachelle'];

console.log(coders);

const josh = coders[1]

console.log(josh);

console.log(coders[7]);
console.log(coders[35 / 5])

var seven = 1 + '1';

console.log(coders[seven]); // coders['11'] => coders[11] => 'Christopher'

console.log(coders['7'])

console.log(coders['seven']);


// Type Coercion
console.log(1 + 1) // 2
console.log('1' + '1') // '11'
console.log('1 + 1') // '1 + 1'
console.log(1 + '1') // '11'

console.log(2 * 2) //4
console.log('2' * "2")
console.log(2 * '2')

console.log(seven);

console.log(coders[13])

console.log(coders[coders.length / 3])

coders[9] = 'Renee';

console.log(coders);
/**
 * 
 * Build a random menu generator
 * 
 * Write a program that will randomize an appetizer, entree, dessert, and drink. For each selection, build an array of 5 items 
 * 
 * ex. ['calamari', 'spinach artichoke dip, 'wings', 'chips & queso', 'celery sticks']
 * 
 * Return the menu as a string 
 * 
 * Ex. "Today you will have wings, alfredo pasta, spice cake, and chocolate milk"
 * 
 * 
 * SET apps, entrees, desserts, drinks
 * GET random item from each array
 *  SET idx 
 * SET message
 * 
 * 
*/

// Math.random()
console.log( Math.random() * 100 )

// Math.floor()
console.log(Math.floor(5.8))
console.log(Math.floor(5.3));

console.clear()

let apps = [
    'wings',
    'fried ravioli',
    'calamari',
    'spinach & artichoke dip',
    'fried green tomatoes'
]

let entrees = [
    'cheeseburger',
    'shrimp & grits',
    'enchiladas',
    'veggie pizza',
    'catfish'
]

let desserts = [
    'spice cake',
    'brownie a la mode',
    'peach cobbler',
    'jello',
    'banana pudding'
]

let drinks = [
    'chocolate milk',
    'beer',
    'dr pepper',
    'water',
    'cranberry juice'
]

drinks.push('smoothie');
// let idx = Math.floor(Math.random() * 5)
let app = apps[Math.floor(Math.random() * apps.length)]
let entree = entrees[Math.floor(Math.random() * entrees.length)]
let dessert = desserts[Math.floor(Math.random() * desserts.length)]
let drink = drinks[Math.floor(Math.random() * drinks.length)]

// console.log(idx);
// Add an item to an array
// .push() => adds an item to the end of an array
// drinks.push('smoothie')
// console.log(drinks);
// .pop() => removes the last item in an array
// drinks.pop()
// console.log(drinks);
// .unshift() => adds an item to the beginning of an array
// drinks.unshift('smoothie')
// console.log(drinks);
// .shift() => removes the first item in an array
// drinks.shift()
// console.log(drinks);


let message = `For your meal, you will have a ${app} as an appetizer, your entree is ${entree}, ${dessert} for dessert, and a tall glass of ${drink} to wash it down.`

console.log(message)

console.log(-37 % 12);

let coders2 = [
    ['Will', 'Bridges'],
    ['Ezekiel', 'Cary'],
    ['Clint', 'Jackson']
]

let adjectives = [
    'Amazing',
    'Stupendous',
    'Nefarious',
    'Cantankerous',
    'Mighty'
]

let heroes = [
    'Boogerwolf',
    'Codemonger',
    'Possum Girl',
    'Power Gnat',
    'Lava Woman'
]

let superpowers = [
    'fight fire with fire',
    'type 65 wpm',
    'leap curbs in a single bound',
    'tell time with an analog watch',
    'recite the lyrics to "Thriller" backwards'
]

let adj = adjectives[Math.floor(Math.random() * adjectives.length)]

let hero = heroes[Math.floor(Math.random() * heroes.length)]

let superpower = superpowers[Math.floor(Math.random() * superpowers.length)]

let heroDescription = `The ${adj} ${hero} can ${superpower}!`

console.log(heroDescription);