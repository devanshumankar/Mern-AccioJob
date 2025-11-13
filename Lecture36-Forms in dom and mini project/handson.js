let container = document.querySelector(".container");
container.addEventListener("click", () => {
    console.log("outer container clicked")
    container.style.backgroundColor = "red";
})

let innercontainer = document.querySelector(".inner");
innercontainer.addEventListener("click", () => {
    console.log("inner container clicked")
    innercontainer.style.backgroundColor = "green";
})

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log("button clicked")
    btn.style.backgroundColor = "blue";
})

// bubbling is something that goes from bottom to top in dom treee
// simple words in to out

// capturing
// events trigerred from top to bottom
// for that we need to add true attribute
// like this
// btn.addEventListener("click", () => {
//     console.log("button clicked")
//     btn.style.backgroundColor = "blue";
// }, true)

// but need to add in all other elemnts selector also

// targeting
// is used for a particular event

// stopPropogation()
// is used if you want to stop the bubbling or capturing

btn.addEventListener("click", (e) => {
    e.stopPropagation()
    // only click on the button will triggered
    console.log("button clicked")
    btn.style.backgroundColor = "blue";
})

const sbtn = document.querySelector("form button");
sbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector("input[type=text]").value
    console.log(name)

    const phone = document.querySelector("input[type=number]").value
    console.log(phone)

    const toc = document.querySelector("input[name=toc]").checked
    console.log(toc)
    
    const gender = document.querySelector("input[type=radio]:checked")?.value
    console.log(gender)


})

