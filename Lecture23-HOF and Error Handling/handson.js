//reduce
/*
    return a single value

    for ex:[3,2,4,1] if we want sum of array or count even and so on 
    since we need a sigle value
    so we can use reduce

    takes argument=>(accumulator,ele,ind,array) and also initial value

*/
let array = [3, 4, 5, 2, 7]
//count sum
let sum = array.reduce((accumulator, ele, ind, array) => {
    accumulator += ele
    return accumulator
}, 0)
// console.log(sum)

//Note:
// array.reduce((accumulator,ele,ind,array)=>{
//     accumulator+=ele
//     console.log( accumulator)
// },0)

/*
    here ele=3
    accumulator initiallly 0
    0+3 that will 3 it will print but 
    since we did not return that accumulator gets undefined
    then in next step undefined+4=> NaN

    so we get 1st element print and rest NaN

*/

//count the even numbers
// array=[10,11,23,20,53]
// let evenCount=array.reduce((acc,ele)=>{
//     if(ele%2){
//         acc++
//     }
//     return acc
// },0)
// console.log(evenCount)

let fruits = ["apple", "guava", "Kiwi", "guava", "kiwi", "Apple", "Guava"];
// let obj={}
// for(let i of fruits){
//     obj[i.toLowerCase()]=obj[i.toLowerCase()]?obj[i.toLowerCase()]+1:1
// }
// console.log(obj)

//using reduce
// let freqObj=fruits.reduce((acc,ele)=>{
//     ele=ele.toLowerCase()
//     acc[ele]=acc[ele]?acc[ele]+1:1
//     return acc
// },{})
// console.log(freqObj)

/*

    find => 
        return the first ele that satisfy the condition
*/
let kiwiFruit = fruits.find((ele) => ele == "kiwi")
// console.log(kiwiFruit)

const users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 22, isActive: true },
    { name: "Diana", age: 28, isActive: false },
    { name: "Ethan", age: 35, isActive: true },
];

/*Practice Problems */
/* Q1: given an array of object, containing details of users, 
console the name of first user aged above 30 */

let user = users.find((ele) => ele.age > 30)
// console.log(user)

//since we need only 1 user so we will use find because it return sthe first matching
//  value based on condition


/* Q2: Print the name & age of each user */

//since the only need is to print the name and age of each user so we can use forEach

// users.forEach((ele)=>{
//     console.log(ele.name,ele.age)
// })

/* Q3: function to create an array of names from above users 
o/p: ["Alice", "Bob", "Charlie", "Diana", "Ethan"]
*/

//there is only two methods that can return array that are map and filter
//but here the requirement is to get name of all users and filter is used for filtering out element
//but the need is each element 
//so we can use map

let userName = users.map((ele) => {
    return ele.name
})
// console.log(userName)


/* Q4: function to display all the active users from above users array */

//there is only two methods that can return array that are map and filter
//here we required users based on a condition active users
//and the size will be less or equal as compare to original array
//so we can use filter

let activeUser = users.filter((ele) => {
    return ele.isActive
})
// console.log(activeUser)
/* Q5: function to find the sum of age for all users below 30 */

//here the requirement is so get a single value and there  are 2 methods find and reduce
//but find is used for returning valu based on a condition
//so we will use reduce

let sumBelow30 = users.reduce((acc, ele) => {
    if (ele.age < 30) acc += ele.age
    return acc
}, 0)
// console.log(sumBelow30)

/* Q6: function to get the names of all active users  */
//here 1st requirement is to filter the user based on condition
//then from each ele we required the name
//so we will use first filter then map

let filterdUserName = users.filter((ele) => {
    return ele.isActive
}).map((ele) => {
    return ele.name
})
// console.log(filterdUserName)

//passing function as a argument and returning a function
function calculator(a, b, operation) {
    return operation(a, b)
}
function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}

/*-----------------Error Handling--------------*/
/**
 try:where actual code is written that can have error

 catch: error are handle

 throw : custom error can be created

 finally:code that will be executed regardless of error in program

 */
// try{
//     console.log(name)
//     let name="Devanshu"
//     console.log(name)
// }catch(error){
//     console.log(error.message)
// }finally{
//     console.log("Finally")
// }

// try{
//     let a=10
//     let b=0;
//     if(b==0) throw new Error("B cant be Zero")
//         console.log(a/b)
// }catch(error){
//     console.log(error.message)
// }

//once and memoization
//once is used if we want that function should be executed only once
//memoization->it keep track of previously calculated value for a probblem
//if sam problem occurs then those values are not recalulated they are used directly from where we store them

