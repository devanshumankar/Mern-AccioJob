const teams=["ABC","DEF","GHI","JKL","ABC"];
//indexOf-> return index (first Occurance) if present otherwise return -1;

// console.log(teams.indexOf("ABC"));//0
// console.log(teams.indexOf("XYZ"))//-1

//replace GHI with XYZ;
// let index=teams.indexOf("GHI");
// teams[index]="XYZ";
// console.log(teams)

//includes - return true of false based on value present in array;

// console.log(teams.includes("XYZ"))//false since not present

// console.log(teams.includes("ABC"))//true since it is present

// concat 2 array
let arr1=[10,20,30,40];
let arr2=[50,60,70,80];
// let result=arr1.concat(arr2);
// console.log(result)

//three array
// let arr3=[90,100];
// let result=arr1.concat(arr2,arr3);
// console.log(result)

//factorial

function fact(n){
    if(n==1 || n==0){
        return 1;
    }
    return n*fact(n-1);
}
// console.log(fact(4))

// function calculateAverage(arr){
//     let avg=0;
//     for(let num of arr){
//         avg+=num;
//     }
//     return (avg/arr.length).toFixed(6);
// }
// let array=[2,4,3,1]
// console.log(calculateAverage(array))





