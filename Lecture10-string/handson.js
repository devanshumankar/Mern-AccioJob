
// //camelCase and snake_case using object

// const obj={
//     camelcase:function (str){
//         str=str.trim();
//         let  ans="";
//         for(let i=0;i<str.length;i++){
//             if(str.charAt(i)==' '){
//                 ans+=str.charAt(i+1).toUpperCase();
//                 i++;
//             }else{
//                 ans+=str.charAt(i)
//             }
//         }
//         console.log(ans);
//     },

//     snakecase:function(str){
//         str=str.trim();
//         let  ans="";
//         for(let i=0;i<str.length;i++){
//             if(str.charAt(i)==' '){
//                 ans+="_";
//             }else{
//                 ans+=str.charAt(i)
//             }
//         }
//         console.log(ans);
//     }
// }
// obj.snakecase("The World is great")

//reverse string
// let str="devanshu";
// let reverseString="";
// for(let i=str.length-1;i>=0;i--){
//     reverseString+=str.charAt(i);
// }
// console.log(reverseString)

//palindrome;
// let str="nayan";
// let reverse="";
// for(let i=str.length-1;i>=0;i--){
//     reverse+=str.charAt(i);
// }
// console.log(reverse==str)

//number of words
// the world is great->4
 let str="The World is beautiful";
// str=str.trim();
// console.log(str.split(" ").length)

//largest word
//beautiful --9 
// str=str.trim();
// str=str.split(" ");
// console.log(str)
// let maxi=str[0];
// for(let i=0;i<str.length;i++){
//     if(str[i].length>maxi.length){
//         maxi=str[i];
//     }
// }
// console.log(maxi)

//startsWith ->return true or false 
// console.log(str.startsWith("The"))// true
// console.log(str.startsWith("Abc"))//false

//endsWith
// console.log(str.endsWith("ful"))//true;
// console.log(str.endsWith("a"))//false

//trimend
let str1=" Devanshu ";
console.log(str1.trimEnd())
//trimstart
console.log(str1.trimStart())

