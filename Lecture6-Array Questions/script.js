//delete last element of array
//let array=[1,2,3,4];

//method 1
//array.splice(array.length-1,1); original array update
//console.log(array);

//method 2
// array.pop();
// console.log(array)


//method 3
// array=array.slice(0,array.length-1);
// console.log(array)

//method 4 
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


//rotations in array;
let array=[10,20,30,40,50];


//rotate right by 1 - 50 10 20 30 40
function rotateRight(array){
    let temp=array[array.length-1];
    for(let i=array.length-1;i>0;i--){
        array[i]=array[i-1];
    }
    array[0]=temp;
    console.log(array);
}
//rotateRight(array);
//t-O(n) s-0(1)

//rotate left by 1; 20 30 40 50 10
function rotateLeft(array){
    let temp=array[0];
    for(let i=1;i<array.length;i++){
        array[i-1]=array[i];
    }
    array[array.length-1]=temp;
    console.log(array);
}
//rotateLeft(array);
//t-O(n) s-0(1)

//Note - Never Change Future element that we are going to use
/*
    rotate clockwise and anticlockwise 
*/
