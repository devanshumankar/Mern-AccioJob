// childNodes 
// here it will return nodeList
// but it return text where gap between two elements
// is calculated as text along with the children of body
console.log(document.body.childNodes)


// children
// return htmlCollection and will return only actual children
// of Body
console.log(document.body.children)

// firstChild
// this will select the 1st child from childNode which will be text
console.log(document.body.firstChild)

// firstElementChild
// return actual first element child of body
console.log(document.body.firstElementChild)

// query selector:return 1st Matching
// u can use element,class,id inside one function
// ex:p,.name,#name
console.log(document.querySelector("p")) //return 1st p

// querySelectorAll:return all mathching
// u can use element,class,id inside one function
// ex:p,.name,#name

console.log(document.querySelectorAll("p"))

// specific Selector
console.log(document.getElementById("Name"))

console.log(document.getElementsByClassName("container"))

console.log(document.getElementsByTagName("p"))

// styling particular element

let studName=document.querySelector("#Name");
studName.style.color="green";

// setAttribute:
// u can maniulate the attributes of element using this
studName.setAttribute("id","firstName")
// id will changed to first Name


// innerHtml:this will return html along with the text inside the element
console.log(document.querySelector("#demo").innerHTML)

// textContent:return only text inside the element
console.log(document.querySelector("#demo").textContent)

// innerText:return only text that is not hidden
console.log(document.querySelector("#demo").innerText)

// className:return the class name in string form
console.log(document.querySelector(".classA").className)

// classList:return the class name in dom tokn list
// then you can add,remove,toggle,replace,contains

console.log(document.querySelector(".classA").classList.add("classD"))

console.log(document.querySelector(".classA").classList.remove("classA"))

console.log(document.querySelector(".classB").classList.contains("classD"))

console.log(document.querySelector(".classB").classList.replace("classD","classNewD"))

// if not present then it will be added else if present then delete
console.log(document.querySelector(".classB").classList.toggle("classA"))