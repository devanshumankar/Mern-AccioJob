//1.reduce
let arr=[2,5,3,10,34]

function arraySum(array){
    let sum=0;
    for(let num of array){
        sum+=num
    }
    return sum;
}
//console.log(arraySum(arr))
let sum=arr.reduce((accumulator,val,index,arr)=>{
    accumulator+=val
    return accumulator
},0)
// console.log(sum)
let countEven=arr.reduce((accumulator,val,index,arr)=>{
    if(val%2==0){
        accumulator++
    }
    return accumulator
},0)
// console.log(countEven)

let fruits=["apple","guava","kiwi","guava","kiwi","Apple","Guava"]

function frequencyObject(array){
    let obj={}
    for(let i=0;i<array.length;i++){
        let val=array[i].toLowerCase()
        let count=0;
        for(let j=0;j<array.length;j++){
            if(val==array[j].toLowerCase()){
                count++
            }
        }
        obj[val]=count
    }
    console.log(obj)
}

let obj=fruits.reduce((accumulator,val,index,fruits)=>{
    val=val.toLowerCase();
    accumulator[val]= accumulator[val]?accumulator[val]+1:1
    return accumulator
},{})

//console.log(obj)

/* find 
   - return a value
   -return the first element that matches the condition
*/

let findKiwi=fruits.find((val,ind,array)=>{
    return val.toLowerCase()=="kiwi"
})
//console.log(findKiwi)

//questions

const users=[
    {name:"Alice",age:25,isActive:true},
    {name:"Bob",age:30,isActive:false},
    {name:"Charlie",age:22,isActive:true},
    {name:"Diana",age:28,isActive:false},
    {name:"Ethan",age:35,isActive:true}
]
//1.user above 30
let user=users.find((ele)=>
     ele.age>30
)

// console.log(user)

//2.print the name and age of each user

//since we have to only print so forEach is better
// users.forEach((ele)=>{
//     console.log(ele.name,ele.age)
// })

//3.function to create an array of names from above user
let nameOfUser=users.map((ele)=>{
    return ele.name
})
// console.log(nameOfUser)

//4 function to display all the active users from user array
let activeUsers=users.filter((ele)=>{
    return ele.isActive
})
// console.log(activeUsers)

//5.function to find the sum of ages of all user below 30
let sumBelow30=users.reduce((accumulator,ele)=>{
    if(ele.age<30){
        accumulator+=ele.age
    }
    return accumulator
},0)
// console.log(sumBelow30)

//6 function to get the names of all active users
let activeNameUsers=users.filter((ele)=>{
    return ele.isActive
}).map((ele)=>{
    return ele.name
})
// console.log(activeNameUsers)

/*Passing a function as argument & returning a function */

function calculator(a,b,operation){
    return operation(a,b)
}
function add(a,b) {
    return a+b
}
function sub(a,b) {
    return a-b
}
function mul(a,b) {
    return a*b
}
// console.log(calculator(3,4,mul))

/*-----------------------------------------------------Error Handling ------------*/
try{
    console.log(studentName)
    let studentName="Devanshu";
    console.log(studentName)
    if(studentName=="Raj") throw new Error("Raj Found")
}catch(error){
    console.log(error.message)
}finally{
    console.log("Finally Block")
}


