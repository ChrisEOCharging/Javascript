/*

//Option 1
class employee{

    setDetails(name, id){
        this.name = name;
        this.id = id;
    }
}

let emp1 = new employee();
emp1.setDetails('John', 1001);
console.log(emp1.name);
console.log(emp1.id);
*/

//Option 2
class employee{

    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}


let emp1 = new employee('John', 1001);
let emp2 = new employee('Peter', 1002);

console.log(emp1.name);
console.log(emp1.id);

console.log(emp2.name);
console.log(emp2.id);