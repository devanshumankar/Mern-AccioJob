// let arr=[2,3,4,1,0,1,2,3,4,5,10];
// let map=new Map();
// for(let i=0;i<arr.length;i++){
//     let count=map.has(arr[i])?map.get(arr[i]):0;
//     map.set(arr[i],count+1);
// }


// for(let [key,val] of map){
//     console.log({key,val})
// }

// const [a,b]=[1,2];
// console.log(a,b);

// const [a,...b]=[1,2,3,4];
// console.log(a,b)

// let obj={};
// for(let key of map){
//     obj[`${key}`]=map.get(key);
// }
// console.log(obj)

//remove duplicates from array
// let array = [1, 2, 3, 2, 3, 5, 1, 3, 2];
// console.log([...new Set(array)])

// const paragraph = "Hello how are you How was your day Did you eat how did you find that";

// let paragraphArray = paragraph.trim().toLowerCase().split(" ");

// let map = new Map();
// for (let i = 0; i < paragraphArray.length; i++) {
//     let count = map.has(paragraphArray[i]) ? map.get(paragraphArray[i]) : 0;
//     map.set(paragraphArray[i], count + 1);
// }

// for(let [key,val] of map){
//     console.log(key,val)
// }


// let obj={};
// for(let key of map){
//     obj[`${key[0]}`]=key[1];
// }
// console.log(obj);


/*anagram
    listen
    silant    
*/

// function isAnagram(a,b){
//     if(a.length!=b.length){
//         return -1;
//     }
//     let map=new Map();
//     for(let i=0;i<a.length;i++){
//         let count=map.has(a[i])?map.get(a[i]):0;
//         map.set(a[i],count+1);
//     }
//     for(let i=0;i<b.length;i++){
//         if(map.has(b[i])){
//             map.set(b[i],map.get(b[i])-1);
//         }else{
//             return -1;
//         }
//     }
//     for(let i of map.values()){
//         if(i!=0){
//             return -1;
//         }
//     }
//     return 1;
// }
// console.log(isAnagram("dam","adm"))

//using object
// function isAnagram(a, b) {
//     if (a.length != b.length) return false;

//     let freqObj = {};

//     for (let i = 0; i < a.length; i++) {
//         freqObj[a[i]] = (freqObj[a[i]] || 0) + 1;
//     }

//     for (let i = 0; i < b.length; i++) {
//         if (!freqObj[b[i]]) return false;
//         freqObj[b[i]] = freqObj[b[i]] - 1;
//     }

//     for (let val of Object.values(freqObj)){
//         if(val!=0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAnagram("apple","apple"))


//------------------recursion----------------
// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     let fact=n*factorial(n-1);
//     return fact;
// }
// console.log(factorial(4))  //t->0(n) //s->constant

//however it uses call stack space but it is not considered  in space complexity

//print no from 1 to n

// function printTill(n){
    
//     if(n==0){
//         return ;
//     }
//     printTill(n-1);
//     console.log(n)
// }
// printTill(5)

// function reverseTill(n){
//     if(n==0){
//         return ;
//     }
//     console.log(n)
//     reverseTill(n-1);    
// }
// reverseTill(5)

