// let value=5;
// console.log({value}) //-->> value:5
// const space=" ";
// console.log(space*1);

//const arr=[[1,2,3],[4,5,6],[7,8,9]];
// function calculateDiagonalSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i][i];
//     }
//     console.log(sum);
// }
// calculateDiagonalSum(arr);//0(N) S-0(1)


// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i][arr.length-i-1];
// }
// console.log({sum}) 
//tc-O(n) sc-0(1);
function oddColumnSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(j%2!=0){
                sum+=arr[i][j];
            }
        }
    }
    console.log(sum);
}
//oddColumnSum(arr)
//O(n^2) s-O(1)

// for(let j=0;j<arr.length;j++){
//     if(j%2==0) continue;
//     for(let i=0;i<arr[j].length;i++){
//        console.log(arr[i][j]);
//     }
// }

//subarray
//let array=[1,2,3,4];
// for(let i=0;i<array.length;i++){
//     let ans="";
//     for(let j=i;j<array.length;j++){
//         ans+=array[j]+" ";
//         console.log(ans);
//     }
// }
// let ans=0;
// for(let i=0;i<array.length;i++){
//     let sum=0;
//     for(let j=i;j<array.length;j++){
//         sum+=array[j];
//         ans+=sum;
//     }
// }
// console.log(ans);

/*
HW:
given 2d matrix reverse each odd column and print it

arr=[[1,2,3,4,5,6],
    [2,6,12,43,3,5],
    [8,10,34,23,12,8]]

o/p=[[1,10,3,23,12,8],
    [2,6,12,43,3,5],
    [8,2,34,4,5,6]]
*/

const array=[[1,2,3,4,5,6],
    [2,6,12,43,3,5],
    [8,10,34,23,12,8]];
for(let j=0;j<array[0].length;j++){
    if(j%2==0) continue;
    for(let i=0;i<array.length/2;i++){
        let temp=array[i][j];
        array[i][j]=array[array.length-1-i][j]
        array[array.length-1-i][j]=temp;    
    }    
}
console.log(array);
//O(n^2) s-0(1);

let array1=[1,2,3,4]
let ans=0;
for(let i=0;i<array1.length;i++){
    let sum=0;
    for(let j=i;j<array1.length;j++){
        sum+=array1[j];
        ans+=sum;
    }
}
console.log(ans);
//t-O(n^2) s-0(1)

// 2d array questions