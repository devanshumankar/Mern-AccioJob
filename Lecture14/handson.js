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

//remove duplicates from array
// let array = [1, 2, 3, 2, 3, 5, 1, 3, 2];
// console.log([...new Set(array)])

// const paragraph = "Apple Mango Apple Good Banana Mango";

// let paragraphArray = paragraph.trim().toLowerCase().split(" ");

// let map = new Map();
// for (let i = 0; i < paragraphArray.length; i++) {
//     let count = map.has(paragraphArray[i]) ? map.get(paragraphArray[i]) : 0;
//     map.set(paragraphArray[i], count + 1);
// }

// for(let [key,val] of map){
//     console.log(key,val)
// }

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

// let array=[1,2,3,4,5]
// let k=9;
// let sum=0;
// let count=0;
// let len=0;
// let map1=new Map();
// let map2=new Map();
// for(let i=0;i<array.length;i++){
//     sum+=array[i];
//     if(sum==k){
//         count++;
//         len=i+1;
//     }
//     if(map2.has(sum-k)){
//         len=Math.max(len,i-map2.get(sum-k));
//     }
//     if(map1.has(sum-k)){
//         count+=map1.get(sum-k);
//     }
//     if(!map2.has(sum)){
//         map2.set(sum,i);
//     }
//     let c=map1.has(sum)?map1.get(sum):0;
//     map1.set(sum,c+1);
// }
// console.log(count,len)

//recursion
// function print(n){
//     if(n==0){
//         return;
//     }
    
//     print(n-1);
//     console.log(n);
// }
// print(5)

/*working-> p(5) check n==0
            p(4) check n==0 
            p(3) check n==0
            p(2) check n==0
            p(1) check n==0
            p(0) check n==0 return will execuute
            then it will execute p(1)->p(2)->p(3) till p(5)
   */         

// function print(n){
//     if(n==0){
//         return;
//     }
//     console.log(n);
//     print(n-1);
    
// }
// print(5)


    /*working-> p(5) check n==0 - 5
            p(4) check n==0  - 4
            p(3) check n==0 - 3
            p(2) check n==0 - 2
            p(1) check n==0 - 1
            p(0) check n==0 return         
   */ 

        
