// function isAnagram(a,b){
//     if(a.length!=b.length){
//         return false;
//     }
//     let map=new Map();
//     for(let i=0;i<a.length;i++){
//         let c=map.has(a[i])?map.get(a[i]):0;
//         map.set(a[i],c+1);
//     }
//     for(let i=0;i<b.length;i++){
//         if(map.has(b[i])){
//             map.set(b[i],map.get(b[i])-1);
//         }else{
//             return false;
//         }
//     }
//     for(let num of map.values()){
//         if(num!=0){
//             return false;
//         }
//     }
//     return true;
// }
// function printAnagram(array1,array2){

//     for(let i=0;i<array2.length;i++){
//         let ans=[]
//         for(let j=0;j<array1.length;j++){
//             if(isAnagram(array2[i],array1[j])){
//                 ans.push(array1[j]);
//             }
//         }
//         if(ans.length==0){
//             console.log(-1);
//         }else{
//             console.log(ans.length);
//         }
//     }
// }
// printAnagram(["cat","tac","tea","pet","act","eat"],["cat","tca","eee","tea"])

