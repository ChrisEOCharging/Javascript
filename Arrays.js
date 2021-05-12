//This simply lists all the numbers in the Array
let numbers = [1, 2, 3, 5,];
console.log(numbers);

//This lists all the strings in the Array
let fruits = ['Apple', 'Banana', 'Grapes']
console.log(fruits);

//Creates a new Array, then lists everything inside it
let cars = new Array('Audi', 'Mercedes', 'Honda')
console.log(cars);


//Finds [1] in the list, starting from 0, then prints it
console.log(cars[1]);

//Replaces [1] in the list with a new value, so Ford will
//trade places with Mercedes
cars[1] = 'Ford';

//Print item 1 in the Array
console.log(cars[1]);

//Print whole list
console.log(cars);

//Adds another object to the Array
fruits.push('Cherry');
console.log(fruits);
console.log(fruits.length);

let newFruits = ['Apple', 'Banana', 'Grapes']
console.log(newFruits);

//Removed first object in list - ISSUE
newFruits.shift();
console.log(newFruits);

//Removes last object in list
newFruits.pop()
console.log(newFruits)

//Add objects to start of Array
newFruits.unshift('Lemon', 'Orange');
console.log(newFruits);

//Deletes object in position [1]
delete newFruits[1];
console.log(newFruits);

//Adds a new object to position [1]
newFruits[1] = 'Mango';
console.log(newFruits);

newFruits.splice(1, 2);
console.log(newFruits);

//Remove objects in position [2] and [0] and add Apple and Banana
newFruits.splice(2,0, 'Orange', 'Cherry', 'Apple', 'Banana')
console.log(newFruits);

newFruits.splice(1, 2, 'Coconut');
console.log(newFruits);

//Takes objects [0] and [2] and puts them into a new variable.
//Original newFruits variable left unaffected
let citrusFruits = newFruits.slice(0,2);
console.log(citrusFruits);
console.log(newFruits);

//Combining Arrays into one Array
let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];
let primeNumbers = [2, 3, 5]

let numbers2 = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(numbers2);

//TEST