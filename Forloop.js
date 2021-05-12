let i;

for (i = 1; i <= 5; i++){
    console.log('Value of i is: '+i)
}

/*Anything inside [] will be used as a 'List. In this example,
everything in the list will be printed as written
*/
let fruitsList = ['Apple', 'Banana', 'Grapes']
let x;
for (x in fruitsList){
    console.log(fruitsList[x])
}

/*Anything inside [] will be used as a 'List. In this example,
everything in the list will be printed as numbers, starting from 0

A for...in can loop through both Arrays and Objects while 
the for...of can only loop through Arrays, Map, Set, arguments object.
*/
let fruitsNum = ['Apple', 'Banana', 'Grapes'];
let y;
for (y in fruitsNum){
    console.log(y)
}

for(x of fruitsList){
    console.log(x);
}

//Example using same formula for both for in and for of
const car = {
    brakes: '2',
    Tyres: '4'
}

for(let i in car){
    console.log(car[i])
}

//TypeError: Car is not iterable
// for(let i of car){
//     console.log(car[i])
// }

const rgb = ['red', 'green', 'blue']

for(let key in rgb){
    console.log('Here is the list of rgb colours: '+key)
}

for(let value of rgb){
    console.log(value)
}