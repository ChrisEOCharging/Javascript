/*
The Inheritance process is where one class aqcires 
properties (methods and fields) from another class

Classes included:

Parent - Child
Super - Sub
Base - Derived
*/

class Car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for the '+this.name);
    }

    stopEngine(){
        console.log('Engine stopped for the '+this.name);

    }
}

/* 
The below class is using variables from the class above
*/

class Audi extends Car{
    topSpeed(speed){
        console.log('Top speed for the '+this.name+' is '+speed);
    }
}

let myCar = new Audi();
myCar.setName('Audi RS6')
myCar.startEngine();
myCar.stopEngine();
//Sets the top speed of the car
myCar.topSpeed(260);
