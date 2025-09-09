// const obj={
//     property1:"Property One",
//     property2:"Property two",
//     1:"One"
// }
// console.log(obj["property3"]) // undefined

// console.log(obj.property3); // undefined

// console.log(obj[1]);

// obj.property3 = "property3";

// console.log({obj})

// // object keys may have array as value

// obj.array=[1,2,3,4];
// console.log(obj)

// for(let i of obj.array){
//     console.log(i)
// }

//other way for creating object
// const demoObj=new Object();
// demoObj.a="one",
// demoObj.b="two"
// console.log(demoObj)

//Strings
// let str="abcd";
// console.log(typeof str);//string

// str = ['a', 'b', 'c'];
// console.log(typeof str);//object
// console.log(typeof str[0])//string

// str=`abc`;
// console.log(typeof str)//string

//string methods

let str = "  We're going, to see some methods, of strings W  ";

//1.includes
//console.log(str.includes("going"))//true

//2.replace->replace first ocuurance but original string remains unaffected
// console.log(str.replace('W','H'));
// console.log(str);

//3.replaceall->replace all occurance

//console.log(str.replaceAll("e","j"));
//console.log(str)//not change the orininal string

// 4.trim-> remove spaces from front and end but does not affect orininal string
// console.log(str);
// console.log(str.trim());

//5.substring

// console.log(str.substring(3,5)); // 3 to 5
// console.log(str.substring(3)) // 3 to end
// console.log(str.substring("3"))//3 to end

//6.split
// console.log(str.split(","))//return array

// 7.toUpperCase

// console.log(str.toUpperCase())

