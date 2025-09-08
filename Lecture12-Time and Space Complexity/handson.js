// function isArmstrong(num){
//     let count=0;
//     let original=num;
//     let num1=num;
//     let sum=0;
//     while(num>0){
//         count++
//         num=Math.floor(num/10);
//     }

//     while(num1>0){
//         let digit=num1%10;
//         sum+=digit**count;
//         num1=Math.floor(num1/10);
//     }
//     return original==sum;
// }
// for(let i=1;i<=200;i++){
//     if(isArmstrong(i)){
//         console.log(i);
//     }
// }

// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=5-i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         str+="*";
//     }
//     console.log(str);
// }

// function searchElement(array,ele){
//     let index=-1;
//     for(let i=0;i<array.length;i++){
//         if(array[i]==ele){
//             index=i;
//             break;
//         }
//     }
//     console.log(index);
// }

// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=5-i;j++){
//         str+=" "
//     }
//     for(let k=1;k<=2*i-1;k++){
//         str+="*"
//     }
//     console.log(str)
// }

// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=5-i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         str+="*"
//     }
//     console.log(str)
// }

let str="nayan";
for(let i=0;i<str.length;i++){
    let ans="";
    for(let j=i;j<str.length;j++){
        ans+=str[j];
        if(isPalindrome(ans)){
            console.log(ans);
        }
        
    }
}
function isPalindrome(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i];
    }
    return reverse==str;
}

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j *= 2) {
//       console.log(i, j);
//     }
//   }

//0(nlogn)