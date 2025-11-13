const h1Element = document.querySelector("h1")
h1Element.addEventListener("click", (event) => {
    // this will stop the prop(ie bubbling which is default)
    event.stopPropagation();
    console.log("Click h1 ")
    h1Element.style.backgroundColor = "yellow"
})

const innerDiv = document.querySelector(".inner-div")
innerDiv.addEventListener("click", () => {
    console.log("Click inner")
    innerDiv.style.backgroundColor = "green";
})

const outerDiv = document.querySelector(".outer-div")
outerDiv.addEventListener("click", () => {
    console.log("Click outer")
    outerDiv.style.backgroundColor = "red";
})




// h1Element.addEventListener("mouseover", () => {
//     console.log("hover h1")
//     h1Element.style.backgroundColor = "blue"
// }, true)

// target:particular element ka event trigger
// bubbling:in to out
// capture:out to in