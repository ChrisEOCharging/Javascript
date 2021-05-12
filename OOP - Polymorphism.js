/* 
Poly = Many
Morph = Forms

Polymorphism in Object-Orientated Programming is the ability
to create a variable, a function, or an object that has more
than one form
*/

class Animal{

    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(this.name+ ' eats food');
    }
}

//let animal = new Animal ('Dog');
//animal.eats();

class Alligator extends Animal{

/*
If this section of code is slashed off, it will say
'Murphy eats food' instead. The parent class function will be read
rather than the child class function. If child code exists, it overwrites
the parent.
*/

    eats(){
    //Running 'Super' will allow calls parent function class
    super.eats();

    console.log(this.name+' eats fish');
    }
}

let murphy = new Alligator('Murphy')
murphy.eats();