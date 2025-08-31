const studentObject={
    name:"Devanshu",
    age:22,
    address:"Pune"
}

//accessing property
// console.log(studentObject.name);
// console.log(studentObject["name"]);


//update
studentObject.name="Dev";
//console.log(studentObject)

//add
studentObject.gender="male";
//console.log(studentObject)

//delete data from object
delete studentObject.age;
//console.log(studentObject)

//nested object

const nestedObject={
    name:{
        firstName:"Devanshu",
        middleName:"Chandu",
        lastName:"Mankar"
    },
    age:22,
    city:"pune"
}
//console.log(nestedObject.name)
//console.log(nestedObject.name.firstName)

//loop in objects
//console.log(studentObject)
// for(let i in studentObject){
//     console.log(i,studentObject[i])
// }


//function in object

const objectFunction={
    name:"Devanshu",
    age:23,
    playing:function playing(){
        console.log("Playing basketball");
    }
}
//objectFunction.playing()

//this keyword in object

const carObj2 = {
  car: "Mercedes GLS",
  color: "white",
  mileage: 10,
  currentSpeed: 20,
  running: function running() {
    console.log("The car is running!! Current speed is:", this.currentSpeed);
  },
  stop:function stop(){
        this.currentSpeed=0;
  }
}
//carObj2.running();
//console.log(carObj2.currentSpeed);
carObj2.stop();
//console.log(carObj2.currentSpeed);

//values
// console.log(Object.values(carObj2))

//keys
console.log(Object.keys(carObj2))

const portfolio = {
  name: "Piyush",
  skills: ["Javascript", "HTML", "CSS"],
  showSkills: function showSkills () {
    let allSkills = "";
    for(let skill of this.skills)
      allSkills += skill + ", ";
    console.log(allSkills);
  },
  addSkills: function addSkills(skill){
    this.skills.push(skill);
  }
}

portfolio.showSkills();
portfolio.addSkills("React");
portfolio.showSkills();
