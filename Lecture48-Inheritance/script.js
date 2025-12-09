class Employee {
	constructor({ empId, name, salary, designation, gender, joiningDate }) {
		this.empId = empId;
		this.name = name;
		this.salary = salary;
		this.designation = designation;
		this.gender = gender;
		this.joiningDate = joiningDate;
	}
	checkIn(time) {
		this.checkInTime = time.toLocaleTimeString();
		console.log(this.checkInTime);
	}
	checkOut(time) {
		this.checkOutTime = time.toLocaleTimeString();
		console.log(this.checkOutTime);
	}
	// durationInOffice() {
	// 	if (this.checkInTime && this.checkOutTime) {
	// 		return this.checkOutTime - this.checkInTime;
	// 	} else {
	// 		console.log("Check in or Check out missing");
	// 		return;
	// 	}
	// }
}

const EmpDetails = {
	empId: 1,
	name: "D1",
	salary: 20000,
	designation: "Manager",
	gender: "female",
	Doj: "30-04-2003",
};
const emp1 = new Employee(EmpDetails);
class Manager extends Employee {
	constructor({ subordinates }) {
		super(EmpDetails);
		this.subordinates = subordinates;
	}
}
const manager = new Manager(["e1", "e2", "e3"]);
console.log(manager);
document.querySelector("button:first-of-type").addEventListener("click", (e) => {
	e.preventDefault();
	emp1.checkIn(new Date());
});
document.querySelector("button:nth-of-type(2)").addEventListener("click", (e) => {
	e.preventDefault();
	emp1.checkOut(new Date());
});

document.querySelector("button:nth-of-type(3)").addEventListener("click", (e) => {
	e.preventDefault();
	emp1.checkIn(new Date());
});
document.querySelector("button:nth-of-type(4)").addEventListener("click", (e) => {
	e.preventDefault();
	emp1.checkOut(new Date());
});
// console.log(emp1.durationInOffice());
console.log(emp1);
