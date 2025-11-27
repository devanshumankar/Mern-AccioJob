// function Car(name,model,speed){    
//     this.name=name;
//     this.model=model;
//     this.speed=speed;
// }

// Car.prototype.isRunning=function(){
//     if(this.speed==0){
//         console.log("Not Running");
//     }else{
//         console.log("Running");
//     }
// }

// Car.prototype.changeSpeed=function(newSpeed){
//     this.speed=newSpeed
// }
// Car.prototype.printCarDetails=function(){
//     console.log(`car name - ${this.name} and model - ${this.model}`)
// }
// const car1=new Car("c1","a",10);
// car1.isRunning();
// car1.changeSpeed(0);
// car1.isRunning();
// car1.printCarDetails();

// class 
//before class we are creating instances of object  using constructor and prototypes but they are not grouped together
// so if we want all together then we use class
// class is used to group construtor and prototype methods

// hoisting of class is not done
// so we first create class then use it
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.speed = 0;
    }

    // this methods are in prototypes
    isRunning() {
        this.speed == 0 ? console.log("Not Running") : console.log("Running")
    }

    changeSpeed(s) {
        this.speed = s;
        console.log("New Speed", this.speed)
    }
}

// this keyword- refer to creata (which is object)
// const creta = new Car("creta", "Cr-123")
// creta.isRunning()
// creta.changeSpeed(20);
// creta.isRunning()

class Attendance {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.presentDays = 0;
        this.absentDays = 0;
    }

    markPresent() {
        this.presentDays += 1;
    }

    markAbsent() {
        this.absentDays += 1;
    }
    calculatePercentage() {
        const attendancePercentage = this.presentDays * 100 / (this.presentDays + this.absentDays);
        console.log(attendancePercentage.toFixed(2));
    }

}

// const stud1=new Attendance("devanshu","10");
// stud1.markPresent();
// stud1.markPresent();
// stud1.markAbsent();
// console.log("present days -",stud1.presentDays);
// console.log("absent days -",stud1.absentDays);
// stud1.calculatePercentage();

// getter and setter
// they are used to implement encapsulation
// get is used for read only purpose we cant update values once we make a prop to be get
// set is used for updating value and returns undefined and take 1 parameter
// if you want to make any field to be get or set then always starts their name with underscore to
//  avoid recursion since it call itself again and again

class Student {
    constructor({ id, name, dob, grade }) {
        // this are data properties
        this.id = id;
        this.name = name;
        this._dob = dob;
        this.grade = grade
        this._marks = 0
    }

    // this are accesor properties
    get dob() {
        return this._dob
    }

    set marks(newMarks) {
        this._marks = newMarks
    }

    get marks() {
        return this._marks
    }
}

const devanshu = new Student({
    id: "1",
    name: "Devanshu",
    dob: "30-04-2003",
    grade: 10
});
devanshu.dob = 20
// console.log(devanshu.dob)

class User {
    constructor(username, role) {
        this.username = username;
        this.role = role
    }

    static guest() {
        return new User("guest", "guest")
    }
}
// static methods
// they are solely belong to class not object
// their is no need to make object to access the methods
// if u want to acces static methods or values you need className and then static methods or values

const guestUser = User.guest();

// private properties

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

const sbi = new Banks(4321);
sbi.deposit(150)
// console.log(sbi.#pin)

// if a method is private then we use #
// and once the methods are private then they cannot be accessible outside a class
console.log(sbi.checkBalance(4321))
sbi.withdraw(4321, 10)
console.log(sbi.checkBalance(4321))