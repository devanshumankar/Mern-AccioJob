//arrow functions



/*
    this treats mul as as variable and reference of function is not hoisted

    when you try to access the mul before declaring this will throw an error since
    hoisting rules of varibles are applied here

    it does not have its own this it makes use of parent this


*/
//console.log(mul(2,3)) //-> error since mul is in tdk 

const mul = (a, b) => {
    return a * b
}

// console.log(mul(2, 3)) 

let obj={
    fName:"Devanshu",
    age:22,

    //accesing fname using normal function

    displayNameNormal:function(){
        console.log(this.fName) // we get "Devanshu"
    },
    //accessing fName using arrow
    displayNameArrow:()=>{
        console.log(this.fName)// undefined
    }
}

// obj.displayNameNormal();//devanshu
// obj.displayNameArrow()//undefined

//Anonymous functions don't have name

//Higher Order Functions -HOFs

/*
 they are the functions that take function as a argument or return function

*/

/*

1.forEach
-works like loop
-does not return anything
-take function as argument
-for traversing we can use this but we can't break this loop

*/
let array=[1,2,3,4,5];
// array.forEach((ele,i,array)=>{
//     console.log(ele,i,array)
// })

/*

2.Map
-return array
-used for transforming array
-goes to each element and do the operation
-does not change the original array

*/

let double=array.map((ele)=>{
    return ele*2;
})
// console.log(double)

/*

3.filter
-return array
-used for conditinal  based array filtering
-goes to each element and check for the condition
-does not change the original array
*/


// let even=array.filter((ele)=>{
//     return ele%2==0
// })
// console.log(even)
