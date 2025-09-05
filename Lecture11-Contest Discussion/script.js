// const array=[1,1,5,5,8,9];
// let maximumSum=0;
// for(let i=0;i<array.length;i++){
//     let sum=0;
//     for(let j=0;j<array.length;j++){
//         if(i==j) continue;
//         sum+=Math.abs(array[i]-array[j]);
//     }
//     maximumSum=Math.max(maximumSum,sum);
// }
// console.log(maximumSum)

//armstrong number in range
//prime

// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=i;j>=1;j--){
//         str+=j;
//     }
//     console.log(str)
// }

function pattern(n){
    console.log(1);
    for(let i=1;i<n;i++){
        let str="";
        for(let j=i;j<i+i+1;j++){
            str+=j;
        }
        console.log(str);
    }
}
pattern(6)

//switch case 