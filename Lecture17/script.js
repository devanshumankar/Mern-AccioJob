// function recursion(n) {
//     if (n == 0) {
//         return;
//     }
//     recursion(n / 4);
//     recursion(n / 4);
//     recursion(n / 4);
//     recursion(n / 4);

//     for (let i = 0; i < n; i++) {
//         console.log(i * i)
//     }
// }


// let n=4
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=n-i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         if(k==1 || k==2*i-1){
//             str+="*";
//         }else{
//             str+=" "
//         }
//     }
//     console.log(str)
// }
// for(let i=n-1;i>0;i--){
//     let str="";
//     for(let j=1;j<=n-i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         if(k==1 || k==2*i-1){
//             str+="*"
//         }else{
//             str+=" "
//         }
        
//     }
//     console.log(str)
// }

// let str="abc";
// let len=0;
// let set=new Set();
// for(let i=0;i<str.length;i++){
//     let map=new Map();
//     let res=""
//     for(let j=i;j<str.length;j++){
//         if(map.has(str[j])){
//             break;
//         }
//         map.set(str[j],j);
//            len=Math.max(len,j-i+1);
//            res+=str[j];
//        set.add(res);
//     }
// }
// console.log(len)
// // for(let str of set){
// //     len=Math.max(str.length,len);
// // }
// // console.log(len)


// let code = 65;
// let n=6;
// let c=0;
// for(let i=1;i<=n;i++){
//    let str="";
//     for(let j=1;j<=i;j++){
//         str+=String.fromCharCode(code+c)
//         c++;
//     }
//     c=i-1;
//     console.log(str)    
// }


// let str="abbcdac";
// let map=new Map();
// let i=0;
// let j=0;
// while(j<str.length){
//     if(!map.has(str[j])){
//         len=j-i+1;
//     }
//     if(map.has(str[j])){
//         i=map.get(str[j])
//     }
//     map.set(str[j],j);
//     j++;
// }
// console.log(len);


