const teams=["CSK","RCB","SRH","KKR","GT"];

// console.log(teams.indexOf("SRH")); -> return -1 if not found,  or  index
//console.log(teams.indexOf("ABC"));

// let i=teams.indexOf("GT");
// teams[i]="LSG";
// console.log(teams);

// let i=teams.indexOf("KKR");
// if(i!=-1){
//     teams[i]="LSG";
// }
// console.log(teams);

//includes->returns true or false if value exists in array;
// console.log(teams.includes("SRH"));
// console.log(teams.includes("SRK"));

// if(teams.includes("KKR")){
//     let i=teams.indexOf("KKR");
//     teams[i]="LSG";
// }
// console.log(teams)


// const otherTeams=["LSG","RR","MI"];
// const otherTeams2=["LSG1","RR1","MI1"];
// const fullTeams=teams.concat(otherTeams,otherTeams2);
// console.log(fullTeams);

// let fact=1;
// let n=5;
// for(let i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact)

// let array=[4,10,6,8] ;
// let r=4;
// function fact(num){
//     if(num==0 || num==1){
//         return 1;
//     }
//     return num*fact(num-1);
// }
// let resultArray=[];
// for(let i=0;i<array.length;i++){
//     let result=fact(array[i])/(fact(r)*fact(array[i]-r));
//     resultArray.push(result);
// }
// console.log(resultArray);
// let n=5;
// let r=2;
// let i=1;
// let result=1;
// while(i<=r){
//     result*=n/i;
//     i++;
//     n--;
// }
// console.log(result);

// console.log(Number(" "))->0

// function calculateAverage(arr){
//     let avg=0;
//     for(let num of arr){
//         avg+=num;
//     }
//     return (avg/arr.length).toFixed(6);
// }
// let array=[4,8,3,5]
// console.log(calculateAverage(array))







