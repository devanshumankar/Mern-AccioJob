// function validParenthesis(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='('){
//             count++;
//         }else{
//             if(count>0){
//                 count--
//             }else{
//                 return false
//             }
//         }
//     }
//     if(count!=0){
//         return false
//     }
//     return true;
// }
// console.log(validParenthesis("()(())")); // true
// console.log(validParenthesis("(()"));    // false
// console.log(validParenthesis("())"));    // false
// console.log(validParenthesis("()()"));   // true
// console.log(validParenthesis(")("));     // false

//there must be alteast one o for c 
//if o==c then it is valid

// take ( first

// take ) then

// function generateValidParenthesis(n,str="",i=0,o=0,c=0){
//     if(o<c){
//         return;
//     }
//     if(i==n){
//         if(o==c){
//             console.log(str);
//         }
//         return;
//     }
//     generateValidParenthesis(n,str+"(",i+1,o+1,c)
//     generateValidParenthesis(n,str+")",i+1,o,c+1)
// }
// generateValidParenthesis(4)

//string permutations

// function permutations(str,ind){
//     if(ind==str.length-1){
//         console.log(str);
//         return
//     }
//     for(let i=ind;i<str.length;i++){
//         let temp=swap(str,ind,i);
//         permutations(temp,ind+1)
//     }
// }

// function swap(str,i,j){
//     let arr=str.split("");
//     [arr[i],arr[j]]=[arr[j],arr[i]]
//     return arr.join("")
// }
// permutations("abc",0)

// function subsequence(array,i,temp,result){
//     if(i==array.length){
//         result.push([...temp]);
//         return
//     }
//     temp.push(array[i]);
//     subsequence(array,i+1,temp,result)
//     temp.pop();
//     subsequence(array,i+1,temp,result)

//     return result;
// }
// console.log(subsequence([1,2,3],0,[],[]))
// let ans=[]
// function sub(array,i,sum,temp){
//     if(i==array.length){
//         if(sum==3){
//             return 1
//         }
//         return 0;
//     }
//     temp.push(array[i]);
//     let left=sub(array,i+1,sum+array[i],temp)
//     temp.pop();
//     let right=sub(array,i+1,sum,temp)
//     return left+right
// }
// console.log(sub([1,2,3],0,0,[]))

// function sub(array,i,temp){
//     if(i==array.length){
//         console.log(temp)
//         return;
//     }
//     temp.push(array[i]);
//     sub(array,i+1,temp)
//     temp.pop();
//     sub(array,i+1,temp)
// }
// sub([1,2,3],0,[])

// function sumSubsets(array,i,sum,temp){
//     if(i==array.length){
//         console.log(sum);
//         return;
//     }
//     temp.push(array[i]);
//     sumSubsets(array,i+1,sum+array[i],temp)
//     temp.pop();
//     sumSubsets(array,i+1,sum,temp)
// }
// sumSubsets([1,2,3],0,0,[])

// function print(n){
//     if(n==0){
//         return;
//     }
//     print(n-1);
//     let str="";
//     for(let i=0;i<n;i++){
//         str+='*'
//     }
//     console.log(str)
// }
// print(5)
