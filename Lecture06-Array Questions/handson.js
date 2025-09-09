// delete last element
//1.pop
let array=[1,2,3,4];
// array.pop();
// console.log(array);

// 2.slice
// array=array.slice(0,array.length-1);
// console.log(array)

//3.splice
// array.splice(array.length-1,1);
// console.log(array)

// splice return deleted element array and chnages the original array

//push return new length of array,unshift

//pop return deleted element,shift

//4.using length
// array.length=array.length-1;
// console.log(array)

//delete from start

//Method 1
//array.shift();
//console.log(array)

//Method 2
// array.splice(0,1);
// console.log(array)

//Method 3
// array=array.slice(1);
// console.log(array)

//Method 4
//using loops
// for(let i=0;i<array.length-1;i++){
//     array[i]=array[i+1]
// }
// array.length=array.length-1;
// console.log(array)

//rotate right by 1
let temp=array[array.length-1];
for(let i=array.length-1;i>0;i--){
    array[i]=array[i-1];
}
array[0]=temp;
console.log(array);

//rotate left by 1

let temp1=array[0];
for(let i=1;i<array.length;i++){
    array[i-1]=array[i];
}
array[array.length-1]=temp1;
console.log(array);
