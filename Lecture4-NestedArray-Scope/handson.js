//scope
let x=10;
const y=20;
z=30;
var w=40;
if(true){
    // console.log(x);
    // console.log(y);
    // console.log(z);
    // console.log(w)
}
// we will get all output here since x,y,z and w are declared outside so they will act as global scope;

if(true){
    let x=10;
    const y=20;
    z=30;
    var w=40;
}
// console.log(x); error since let has block scope
// console.log(y); error since const has block scope
//console.log(z); //global scope
//console.log(w) //global scope

// let name="Devanshu";
// function greet(){
//     console.log(name)
// }
// greet()

//var

function greet(){
    var name="Devanshu";
}
// console.log(name) error cant access var if declared inside function

//nested array
// let arr=[[2,5],[3,6],[1,4],[6,3]];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[0].length;j++){
//         console.log(arr[i][j])
//     }
// }

// let arr=[1,[1,2,5],4,5,[6,95,71],80];
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length==undefined){
//         console.log(arr[i]);
//     }else{
//         for(let j=0;j<arr[i].length;j++){
//             console.log(arr[i][j]);
//         }
//     }
    
// }

// let arr=[0,1,2,3];
// console.log(Array.isArray(arr));//return true,false check whether array or not

// function matrixChecker(array){
//     if(!Array.isArray(array[0])){
//         return false;
//     }
//     if(!Array.isArray(array)) return false;
//     let len=array[0].length;
//     if(array.length>1){
//         for(let i=1;i<array.length;i++){
//             if(array[i].length!=len){
//                 return false;
//             }
//         }
//     }
    
//     return true;
// }

// function calculateProduct(array){
//     let product=1;
//     for(let i=0;i<array.length;i++){
//         let sum=0;
//         for(let j=0;j<array[i].length;j++){
//             sum+=array[i][j];
//         }
//         product*=sum;
//     }
//     return product;
// }
