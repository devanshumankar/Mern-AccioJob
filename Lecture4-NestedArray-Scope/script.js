//Scopes
x=10;// Global Variable and has Global Scope
//variables declared golbally can be access everywhere

// note-varibles declared globally can be accessed everywhere

let y=5;//block Scope and declared globally (global scope behaviour because not in {});
{
    let m=5;
    //console.log(m);//5
}
// console.log(m)//error not defined--


const z=12;//same as let


var w=15;//not block scope but functional scope

{
    var y1=6;
   // console.log("var inside block scope",y1);
}
//console.log("var outside block scope",y1);
function sayHi(){
    for(let i=0;i<x;i++){
        console.log("Hi",i);
    }
}
// sayHi();

//var->
/*
    can be access outside block scope
    cant access outside function if declared inside;
 */

//nested scopes
// function nestedScope(){
//     let value=145;
//     for(let i=0;i<5;i++){
//         if(i%2==0){
//             let value2=35;
//             console.log(value,value2);
//         }
//     }
// }



//Nested Array;
// let arr=[[2,5],[3,6],[1,4],[6,3]];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j])
//     }
// }
// let str="";
// let arr=[1,[1,2,5],4,5,[6,95,71],80];
// console.log("Printing Nested array using undefined")
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length==undefined){
//         str+=arr[i]+" ";
//     }
//     else{
//         for(let j=0;j<arr[i].length;j++){
//         str+=arr[i][j]+" ";
//         }
//     }
//     //console.log(str); 
//     str="";    
// }

//method 2
// console.log("Printing Nested array using type of")
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]=="number"){
//         str+=arr[i]+" ";
//     }
//     else{
//         for(let j=0;j<arr[i].length;j++){
//         str+=arr[i][j]+" ";
//         }
//     }
//     //console.log(str); 
//     str="";    
// }

// console.log("Printing using isArray");
// for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//         for(let j=0;j<arr[i].length;j++){
//         str+=arr[i][j]+" ";
//         }
//     }else{
//         str+=arr[i];
//     }
//     console.log(str); 
//     str="";    
// }

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
// let array=[[1,2,3]];
// console.log(matrixChecker(array));



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
// let A=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(calculateProduct(A));

//Nested array sum
// function calculateSum(array){
//     let sum=0;
//     for(let i=0;i<array.length;i++){
        
//         for(let j=0;j<array[i].length;j++){
//             sum+=array[i][j];
//         }
        
//     }
//     return sum;
// }
// console.log(calculateSum(A))

//subarray
let array=[1,2,3];
// /*subarray-> [1],[2],[3]->length 1
//              [1,2],[2,3]-> length 2
//              ,[1,2,3]->length 3;
// */
//all subarray
//sum of all subarray
// for(let i=0;i<array.length;i++){
//     let ans="";
//     for(let j=i;j<array.length;j++){
//         ans+=array[j]+" ";
//         console.log(ans);
//     }
// }
// for(let i=0;i<array.length;i++){
//     let ans="";
//     let sum=0;
//     for(let j=i;j<array.length;j++){
//         ans+=array[j]+" ";
//         sum+=array[j];
//         console.log(ans,"->Sum->",sum);
//     }
// }





