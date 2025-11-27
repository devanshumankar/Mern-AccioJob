// class
// they are basically used to group constructor and protoTypes 
// hoisting of a  class cant be done

// class creation
class Student {
    // constructor 
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // prototype
    displayName() {
        console.log(this.name)
    }
}

const devanshu = new Student("Devanshu", 22)
// working will be same as that of constructor and prototypes
// first new will create empty object 
// then this keyword will get bind to empty object
// then it will also return the this object
console.log(devanshu)
console.log(devanshu.name)
console.log(devanshu.age)

// getter and setter
// they are used to implement encapsuation
// get is used to read the prop (read only) 
// set is used to update the value and takes 1 parameter returns undefined
// if you want to make any field to be get or set then always starts their name with underscore to
//  avoid recursion since it call itself again and again

class getSet {
    constructor(id, marks) {
        // this are data props
        this._id = id;
        this._marks = marks
    }

    // they are accessor props
    get id() {
        // return this.id; will get in recursion simce it call itself again and again
        return this._id
    }

    set marks(newMarks) {
        this._marks = newMarks
    }
    get marks() {
        return this._marks;
    }
}

const demo = new getSet(1, 20);
console.log(demo.id)
demo.id = 2 //here it will not update the id since it has only get which is read only
console.log(demo.id)
console.log(demo.marks)

demo.marks = 40;//here we can update the marks since it has set method
console.log(demo.marks)

// static method
// they  belongs to the class not object
// their is no need to make object to access the methods
// if u want to acces static methods or values you need className and then static methods or values

// when to use 
// here employee count doesnot depends upon the object data
// so we can simply make the count as static
class Employee {
    static count = 0;
    constructor(name) {
        this.name = name;
        Employee.count += 1;
    }
}
console.log(Employee.count)

// private properties
// can be created using #
// this are available only inside the class
class Banks {
    #pin = 1234;
    constructor(firstPin) {
        this.#pin = firstPin;
        this.balance = 0;
    }
    deposit(money) {
        this.balance += money
    }

    withdraw(userPin, money) {
        return userPin == this.#pin && this.balance >= money ? this.balance -= money : null
    }
    checkBalance(userPin) {
        return userPin == this.#pin ? this.balance : null
    }
}

const sbi = new Banks(9081);
sbi.deposit(500)
// console.log(sbi.#pin)
//  once the methods are private then they cannot be accessible outside a class
console.log(sbi.checkBalance(9081))
sbi.withdraw(9081, 10)
console.log(sbi.checkBalance(9081))

// object destructuring:only possible between object to object

// class User{
//     constructor({name,age}){
//         this.name=name;
//         this.age=age
//     }
// }
// const u1=new User();

// since we are passing undefine we will get error


//to work it properly
class User{
    constructor({name="dev",age=22}={}){
        this.name=name;
        this.age=age
    }
}
const u1=new User({name:"raj"});
console.log(u1.age,u1.name)