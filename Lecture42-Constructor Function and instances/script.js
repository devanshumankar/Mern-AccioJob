const user1 = {
    name: "Vaibhav",
    age: 23,
    city: "Pune",
    printDetails: function () {
        console.log(`${this.name} is ${this.age} years old and currently living in ${this.city} `)
    }
}

const user2 = {
    name: "Prajwal",
    age: 20,
    city: "Pune",
    printDetails: function () {
        console.log(`${this.name} is ${this.age} years old and currently living in ${this.city} `)
    }
}

const user3 = {
    name: "Devanshu",
    age: 21,
    city: "Mumbai",
    printDetails: function () {
        console.log(`${this.name} is ${this.age} years old and currently living in ${this.city} `)
    }
}

// constructor:
// It is like a blueprint for creating objects.
// Instead of writing the same properties and methods again and again,
// we write a single blueprint
// and reuse it to create multiple objects with similar structure.
// This makes the code reusable.
// constructor name starts with upperCase but not necessary

function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.printDetails = function () {
        console.log(`${this.name} is living in ${this.city} `)
    }
}

// conventional way of using objects
// console.log(user1.printDetails())
// console.log(user1.name)

// constructor way
const user4 = new User("Tanmay", 21, "Pune")
// when we use new it creates the new object
// initially this points to window obj(global object) but when we use new then
// this keyword get binds to the empty object that we created using new
// i.e this->{}
// and this.name="Devanshu" means addind name prop in object with value devanshu
// same as object {name:Devanshu}
// and new returns "this" object at end

// console.log(user4.printDetails())
// console.log(user4.name)

function demo() {
    console.log(this)
    // by default this has window object which is global object
}

const names = ["Devanshu", "Raj", "Jatin", "Parth"];
const age = [12, 32, 10, 13]
const city = ["pune", "pune", "mumbai", "mumbai"];

const objArray = [];

function NameObj(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city
}
for (let i = 0; i < names.length; i++) {
    let temp = new NameObj(names[i], age[i], city[i])
    objArray.push(temp)
}
// console.log(objArray)


function Product(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.total = this.price * this.qty
}

const prod1 = new Product("Laptop", 20, 40);
const prod2 = new Product("Mobile", 10, 20);
// console.log({prod1,prod2})
// here prod1 is the one instance and prod2 is another instance
// if we chage or modify any instance then it does not affect other one

// prototypes
const boolean = true;
const string = "devanshu"
const number = 2322
const arr = [1, 2, 3]
// console.log(boolean.__proto__);

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade
}

Student.prototype.greetMe = function (name) {
    console.log("hi", this.name)
}

const student1 = new Student("Rajesh", 20, 10)
student1.greetMe(student1.name)


function Test() {
    this.value = 10;
}
Test.prototype.value = 100

const test = new Test();
console.log(test.value)//10

delete test.value;
console.log(test.value)//100

// first it will search in itself it will get 10
// then we are deleting
// again in next log it will search in itself 
// not found then will go to prototype
// then it will find so we get 100;


// mixing up constructor and prototypes
// adding new task,deleting and remooving
function TaskQueue() {
    this.tasks = [];

}
TaskQueue.prototype.add = function (taskName) {
    this.tasks.push(taskName)
}

TaskQueue.prototype.remove=function (){
    this.tasks.shift();
}

TaskQueue.prototype.display=function(){
    console.log(this.tasks.join(","))
}

const task1=new TaskQueue();
task1.add("task1")
task1.add("task2")
task1.remove();
task1.add("task3")
task1.add("task4")
task1.display();
task1.remove();
task1.display();