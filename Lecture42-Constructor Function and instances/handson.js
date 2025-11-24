const user1 = {
    name: "Devanshu",
    age: 22,
    display: function () {
        return `${this.name} is ${this.age} years old`
    }
}
const user2 = {
    name: "Rajesh",
    age: 24,
    display: function () {
        return `${this.name} is ${this.age} years old`
    }
}


//since both users has same props insted of doing this way we can
// creates a blueprint of it using constructor 

// constructor
//// It is like a blueprint for creating objects.
// Instead of writing the same properties and methods again and again,
// we write a single blueprint
// and reuse it to create multiple objects with similar structure.
// This makes the code reusable.
// constructor name starts with upperCase but not necessary 


// other way of creating same user will be using constructor

function User(name, age) {
    this.name = name;
    this.age = age
    this.display = function () {
        return `${this.name} is ${this.age} years old`;
    }
}

const user3 = new User("Jatin", 25);
console.log(user3.display())

console.log(user1.display())

// new keyword

// when we use new it creates the new object
// initially this points to window obj(global object) but when we use new then
// this keyword get binds to the empty object that we created using new
// i.e this->{}
// and this.name="Devanshu" means addind name prop in object with value devanshu
// same as object {name:Devanshu}
// and new returns "this" object at end

// also it maps the default prototypes to object


// instance
function Books(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty
    this.total = this.price * this.qty;
}

const book1 = new Books("Book1", 150, 2);

const book2 = new Books("Book2", 200, 1)

// now instances are the exact copy blueprint but we assign value to the props
// book1 is instance
// book2 is another instance

// main advantage of instances is if we want to update book1 then it will not affect book2

// prototypes

// it consist of methods that can be shared across childrens
const name1 = "Devanshu";
console.log(name1.__proto__)

// creating prototypes method so that is can be accessible  to each childs

Books.prototype.greeting = function () {
    console.log("This is", this.name, "book")
}

const book3 = new Books("book3", 20, 1);
book3.greeting();


// question
function Test() {
    this.value = 10;
}
Test.prototype.value = 100

const test = new Test();
console.log(test.value)//10
// here it will check whether itself test has valu or not
// since test has the value it will return

delete test.value;//here we will delete the value inside of test but still
// prototype will have the value


console.log(test.value)//100
// at this time it will first check itself has a value or not since it has not
// then it will check in prototype which is parent
// so we have value in prototype so we will get 100

// taskqueue
function TaskQueue() {
    this.tasks = [];

}
TaskQueue.prototype.add = function (taskName) {
    this.tasks.push(taskName)
}

TaskQueue.prototype.remove = function () {
    this.tasks.shift();
}

TaskQueue.prototype.display = function () {
    console.log(this.tasks.join(","))
}

const task1 = new TaskQueue();
task1.add("task1")
task1.add("task2")
task1.add("task3")
task1.add("task4")
task1.display();
task1.remove();
task1.display();
task1.remove();
task1.display();
task1.remove();
