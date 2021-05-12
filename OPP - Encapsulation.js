class employee{

    setempDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    //getEmployeeName is a variable
    getEmployeeName(){
        return this.jo;
    }
    getempid(){
        return this.id;
    }
    getempphoneNo(){
        return this.phoneNo;
    }
}

//emp1 is the new variable
let emp1 = new employee();

emp1.setempDetails('Alfred', 1001, 987890000)
console.log(emp1.getEmployeeName(), emp1.getempid(), emp1.getempphoneNo());

let emp2 = new employee();

emp2.setempDetails('Mamfred', 1002, 987896500)
console.log(emp2.getEmployeeName(), emp2.getempid(), emp2.getempphoneNo());