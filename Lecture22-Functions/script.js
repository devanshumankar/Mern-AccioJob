//function declaration

//this function is hoisted
// function sayHello(){
//     console.log("Hello students")
// }

/*Types of functions */

//Arrow Functions

//arrow(3,4) -> gives error since it treat arraow as variable and this is not a function

// const arrow=(a,b)=>a-b
// console.log(arrow(2,3))

//no is divisible by 3
// const isDivisible=(n)=>{
//     return n%3==0?true:false
// }

// const isDivisible=(n)=>!(n%3)

// console.log(isDivisible(1))

/*Note : Arraow function dont have their own this they uses parent this*/

const student={
    fullName:"Devanshu Mankar",
    age:22,
    result1:(status)=>{
        console.log(this.fullName,"has",status,"the Exam") //undefined since it dont has own this
        console.log(this) //window object
    },
    result2:function(status){
        console.log(this.fullName,"has",status,"the Exam") //refer to fullName and has its own this
        console.log(this)//refer to student (parent)
    }
}
// student.result1("pass");
// student.result2("fail")

/*AnonyMous Functions : function with no name */

/*High Order Functions : functions that takes functions as a argument or return a function */

/*Types of Hofs */

//1.foreach:-applies callback function on each element and doesnot change original array and we cant break the loop
//return undefined

// let arr=[2,1,6,3,9]
// arr.forEach((ele,i,array)=>{
//     console.log(ele,i,array)
// })

let users=[{
    name:"Ramesh",
    age:20
},{name:"Suresh",
    age:10
},
{name:"Rani",
    age:18
}
];
//print name and age
// users.forEach((ele)=>{
//     console.log(ele.name,ele.age)
// })

//map()
/*
    -transform the array
    -return array
    -does not change the original array
 */
// let array=[3,2,9,0,10];
// let squared=array.map((ele)=>{
//     return ele*ele
// })
// console.log(squared)

// let upperCaseName=users.map((ele)=>{
//     return {
//         name:ele.name.toUpperCase(),
//         age:ele.age
//     }
// })
// console.log(upperCaseName)

//filter
//-keep the elemet that passes the condition
//return an array
//doesnot change original array

// let nums=[2,12,9,18,27];
// let ans=nums.filter((ele)=>{
//     return ele%2==0
// })
//console.log(ans)

let names=["Pranjal","Bhavesh","Uday","Siddhart","Neha"]
let filteredNames=names.filter((ele)=>{
    return ele.length>5
})
console.log(filteredNames)
