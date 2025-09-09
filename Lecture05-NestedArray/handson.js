let value=10;
//console.log({value})// output: value:10

const array=[[10,20,30],
            [40,50,60],
            [70,80,90]];

//normal diagonal sum tc-0(n) sc-O(1)
// let sum=0;
// for(let i=0;i<array.length;i++){
//     sum+=array[i][i];
// }
// console.log(sum);

//

// let sum=0;
// for(let i=0;i<array.length;i++){
//     sum+=array[i][array.length-1-i];
// }
// console.log(sum);

/* 
    00 01 02
    10 11 12
    20 21 22

    normaldiagonal=00+11+22;
    oterdiagonal=02+11+20
*/

//odd column sum

// let sum=0;
// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length;j++){
//         if(j%2!=0){
//             sum+=array[i][j];
//         }
//     }
// }
// console.log(sum)

//print array column wise
// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length;j++){
//         console.log(array[j][i])
//     }
// }

