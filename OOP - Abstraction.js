/* 
Abstraction

An Abstraction is a way of hiding the implementation details
and showing only the functionality to the users

- Hide Details
- Show Essentials

Abstraction hides certain details and only shows the essential 
features of the object.

This approach improves understandability as well as maintainability of the code.
*/

function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    /*Rather than this.monthlyBonus = 1000;, changing this to a
    function makes it private and inaccessible below
    */
    //this.monthlyBonus = 1000;

    //This now only acts within its current Employee function
    let monthlyBonus = 1000;

    let calculateFinalSalary = function(){
        //The 'this.' functionality has been removed for when monthlyBonus is outside the function
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is: '+finalSalary)
    }

    this.getEmpDetails = function(){
        console.log('Name: '+this.name+' | Age : '+this.age)
        //This is only needed if monthlyBounus is outside the function
        calculateFinalSalary();
    }
}

let emp1 = new Employee('John', 30, 200);
emp1.getEmpDetails();
/*
Adding the Monthly Bonus here overwrites the value above
*/
//The code below can only be used if the this.monthlyBonus is outside the function
//emp1.monthlyBonus = 10000;
//emp1.calculateFinalSalary();