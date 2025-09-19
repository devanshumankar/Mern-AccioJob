
// function validParenthesis(str,st){
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='('){
//             st.push(str[i])    
//         }
//         else if(str[i]==')'){
//             if(st.length>0){
//                 st.pop();
//             }else{
//                 return false;
//             }
//         }
//     }
//     if(st.length==0){
//         return true
//     }
//     return false;
// }
//let str="()(())";
//console.log(validParenthesis(str,[]))

// function isValidParenthesis(str){
//     if(str.length%2==1) return false
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='('){
//             count++
//         }else{
//             if(count>0){
//                 count--;
//             }else{
//                 return false;
//             }
//         }
//     }
//     if(count==0){
//         return true;
//     }
//     return false;
// }
//generate all valid parenthesis of length n
//n=4 ()() ,(())
// let ans=[]
// function generateValidParenthesis(n,str="",i=0,o=0,c=0){
//     if(o<c){
//         return;
//     }
//     if(i==n){
//         if(o==c){
//             ans.push(str)
//         }
//         return ;
//     }
//     generateValidParenthesis(n,str+"(",i+1,o+1,c);
//     generateValidParenthesis(n,str+")",i+1,o,c+1);

// }
//tc-0(2**n)
// generateValidParenthesis(6)
// console.log(ans)

//string permutation
// let ans=[]
// function stringPermutation(str,ind=0){
//     if(ind==str.length-1){
//         ans.push(str);
//         return ;
//     }
//     for(let i=ind;i<str.length;i++){
//         str =swap(str,ind,i);
//         stringPermutation(str,ind+1)
//     }
    
// }  
// function swap(str,a,b){
//     let arr=str.split("");
//     [arr[a],arr[b]]=[arr[b],arr[a]]
//     return arr.join("")
// } 
// stringPermutation("abb")
// console.log(ans)


// function swapStr(str,i,j){
//     let arr=str.split("");
//     [arr[i],arr[j]]=[arr[j],arr[i]];
//     return arr.join("");
// }
// let strPermutations=[];
// function permutations(str,ind=0){
//     if(ind==str.length-1){
//         strPermutations.push(str);
//         return;
//     }
//     for(let i=ind;i<str.length;i++){
//         let swappedStr=swapStr(str,ind,i);
//         permutations(swappedStr,ind+1);
//     }
// }
// permutations("abc")
// console.log(strPermutations);

//tc-0(n!)
let ans=[]
function generateValidParenthesis(n,str="",i=0,o=0,c=0){
    if(o<c){
        return;
    }
    if(i==n){
        if(o==c){
            ans.push(str);
        }
        return;
    }
    
    generateValidParenthesis(n,str+"(",i+1,o+1,c)
    generateValidParenthesis(n,str+")",i+1,o,c+1)
}
generateValidParenthesis(4)
console.log(ans)