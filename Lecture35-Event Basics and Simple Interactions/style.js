// creating element
const h3Element = document.createElement("h3");
h3Element.textContent = "Hi i am h3";
// hw:append vs appendChild
// remove vs removeChild
const div1 = document.querySelector("div");

// add to last
div1.appendChild(h3Element)

//prepend:add to first
// div1.prepend(h3Element)

// if the element is already present in dom
// if we access them then and then appendChild
// then it will move to last


//deleting element
const h3Element1 = document.querySelector("h3")
h3Element1.remove();


//events

// const para1 = document.querySelector("p");
// para1.addEventListener("click", () => {
//     console.log("You Click a para")
// })

// mouseeover
// mouseup
// mousedown
// keyup

const para1 = document.querySelector("p");

para1.addEventListener("click", (event) => {
    paraClicked(event)
})
function paraClicked(event) {
    console.log("Event Type on P", event.type)
}

const hoverEvent = document.querySelector(".hover-event")
hoverEvent.addEventListener("mouseover", () => {
    hoverEvent.style.height = "100px"
    hoverEvent.style.width = "200px"
    hoverEvent.style.backgroundColor = "blue"
})

const mouseUpDown = document.querySelector(".mouse-up-down")
mouseUpDown.addEventListener("mousedown", () => {
    mouseUpDown.style.backgroundColor = "red"
})
mouseUpDown.addEventListener("mouseup", () => {
    mouseUpDown.style.backgroundColor = "green"
})



const keyUpDown = document.querySelector(".key-up-down")
document.addEventListener("keyup", () => {
    keyUpDown.style.backgroundColor = "green"
    keyUpDown.style.color = "white"
})

document.addEventListener("keydown", () => {
    keyUpDown.style.backgroundColor = "red"
    keyUpDown.style.color = "white"
})


