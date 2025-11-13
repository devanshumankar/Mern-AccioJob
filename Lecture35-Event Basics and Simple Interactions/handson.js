// create the element

const h2Element = document.createElement("h2");
h2Element.textContent = "Hi This is H2 (createElement)";

// const pElement=document.createElement('dev')
// this will behave as a generic inline block

const containerElement = document.querySelector(".container")

// adding element

// appendChild:you can add only single node that can be element or text
containerElement.appendChild(h2Element)

// this will throw error:it must be node
// containerElement.appendChild("Append Text")
// for doing the above we need to create textNode
const textNode = document.createTextNode("Append Text")
containerElement.appendChild(textNode)



// append:you can add  multiple text or node using this
// text will be inline
const pElement = document.createElement('p')
pElement.textContent = "Devanshu(created)"
containerElement.append(pElement, h2Element, "hi", "hello")


// deleting element
// remove:you can directly delete the element from the dom
pElement.remove();

// removeChild
// you need parent for removing
containerElement.removeChild(textNode)

// events
const eventElement = document.querySelector(".event-container")

eventElement.addEventListener("click", () => {
    eventElement.style.color = "white"
    eventElement.style.backgroundColor = "green"
    console.log("click")
})

eventElement.addEventListener("mouseover", () => {
    eventElement.style.backgroundColor = "blue"
})

// first hover then click so background is blue


let h3Element = document.querySelector("h3");
h3Element.addEventListener("mouseup", () => {
    h3Element.style.backgroundColor = "blueviolet"
})

h3Element.addEventListener("mousedown", () => {
    h3Element.style.backgroundColor = "grey"
})

h6Element = document.querySelector("h6");
document.addEventListener("keyup", () => {
    h6Element.style.color = "red"
})
document.addEventListener("keydown", () => {
    h6Element.style.color = "green"
})