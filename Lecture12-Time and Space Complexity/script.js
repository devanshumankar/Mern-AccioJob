//write a function to print all palindromic substring of a string - hw

//Time Complexity

//js is interpreted  +  compile time also called JIT->Just in Time

//AIS-Automatic insertion of semicolon

//console.log("Hi")->here AIS Will insert the semicolon by predicting where it is required


//time complexity
/*below takes constant unit of times to execute;
const a=5;
if(true){
    console.log("Hi");
}
a+=5;
*/

//time and space complexity are assumption based only and not exact amount of time or  space taken by the program

//for loop -0(n)

//0(n) is equivalent to 0(k.n) k->constant k is not dependent on n
//0(n)=0(2n)
        // 0(n+k)
        // 0(n+2k)
        // 0(n/2)
        // 0(n/k)

// // for(let i=0;i<n;i++){
//     for(let j=0;j<matchMedia;j++){
//         ----
//     }
//     }
//0(n*m);

//0(1)-constant
//0(n)-linear
//0(n^2)-quadratic
//0(logn)-logarithmic

//examples
// while(n>0){
//     n--;
// }
//0(n)

// while(n>0){
//     n-=2;
// }
// 0(n)

//for division and multiplication we getvlogarithmic time complexity 0(logn)

//while(n>0){
//n/=2}
//0(logn)

//while(n>0){
//     n/=5 -->0(log5N)
// }

// for(let i=0;i<n;i++){
//     while(n>0){
//         n/=2
//     }
// }
// //0(logn)


// for(let i=0;i<n;i++){
//     if(i==n/2){
//         let m=n;
//         while(m>0){
//             m/=2;
//         }
//     }
// }
// tc -> 0(n) 

//Space Compexity
//auxilary space-extra space

//variables takes constant space 0(1);

// let obj={
//     a:{
//         c:1,
//         d:2
//     },
//     b:2
// }
// if(obj && obj.aa && obj.aa.c==1){
//     console.log("Hii");
// }else{
//     console.log("bye")
// }

//In js only 6 values are false->0,false,null,undefined,Nan,"";

// const x=true && 45 && 32;
// console.log(x)//->takes last value if all left is true 

// console.log(Number("123"));
// console.log(String(123));
// console.log(Boolean(123))


//Short Circuiting

/*
 
    &&-> a && b && c && d->stores 1st false value or store last if all true

    || -> a||b||c||d stores 1st truthy value or last false value


*/


// console.log(NaN===NaN)  always false Nan is not equal to Nan

//searching

// let array=[];
// for(let i=1;i<=100;i++){
//     array.push(i);
// }

//search 57 print index
function searchElement(array,ele){
    let index=-1;
    for(let i=0;i<array.length;i++){
        if(array[i]==ele){
            index=i;
            break;
        }
    }
    console.log(index);
}
// searchElement(array,57);

//0(n) linear search


let array=[1,2,4,4,6,6,6,8];
//last index of 6;
let firstIndexOf6=-1;
let lastIndexOf6=-1;
for(let i=array.length-1;i>=0;i--){
    if(array[i]==6){
        lastIndexOf6=i;
        break;
    }
}
//first index of 6;
for(let i=0;i<array.length;i++){
    if(array[i]==6){
        firstIndexOf6=i;
        break;
    }
}
console.log({firstIndexOf6,lastIndexOf6})

//using binary search - 0(logN)







