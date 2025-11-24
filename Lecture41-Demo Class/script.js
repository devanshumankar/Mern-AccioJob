const fruits = ['apple', 'banana', 'orange', 'apple', 'orange']

const obj = fruits.reduce((acc, ele) => {
        acc[ele] = acc[ele] ? acc[ele] + 1 : 1
        return acc
}, {})
console.log(obj)

let array = [10, 20, 30];
// map is used to transform the array and also returns an array
let mapArray = array.map((ele) => ele * 2)
console.log(mapArray)

// filter is used to filter the array based on condition ans also it returns an array
let filterArray = mapArray.filter((ele) => ele > 30)
console.log(filterArray)

// reduce converts the whole array into a single value and then it return the value
let reducerArray = array.reduce((acc, ele) =>
        acc += ele
        , 0)
console.log(reducerArray)

// parameter in map and filter are first ele,ind,array

// in reduce first accumulator and then ele,ind,array and in end initial value of accumulator

function async() {
        console.log("Hello");
        setTimeout(() => {
                console.log("async function")
        }, 3000);
        console.log("bye")
}
async();

// here we get "hello" then "bye " and aftre thate we get async function
// reason js puts async functons in priority queue
// and rest of the things are get executed and at the same time it asks priority queue whether they are done with 
// excution or not
// if done then it is printed 
// otherwise rest code will be executing synchronously 
