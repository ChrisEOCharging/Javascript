/*
Prototype - in Javascript, every function has a 
property called Prototype

By default this property is empty but you can add properties
and methods to it

Javascript has prototype based inheritance

Suppose there is a function X. When you create another func
that is inherited from X, it will inherit the methods and
properties defined in X's prototype
*/

//This is a constructor

/*
let empDetails = function(name, age){
        this.name = name;
        this.age = age;

        this.getName = function(){
            return this.name;
        }

        this.getAge = function(){
            return this.age;
    }
}

let emp1 = new empDetails('John', 30);
let emp2 = new empDetails('Peter', 40);

console.log(emp1.getName());
console.log(emp2.getAge());
*/

//Using the Protype function
let empDetails = function(name, age){
    this.name = name;
    this.age = age;
}

empDetails.prototype.getName = function(){
        return this.name;
}
empDetails.prototype.getAge = function(){
        return this.age;        
}

let emp1 = new empDetails('John', 30);
let emp2 = new empDetails('Peter', 40);

console.log(emp1.getName());
console.log(emp2.getAge());