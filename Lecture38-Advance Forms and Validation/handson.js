const btn = document.querySelector("button")
const object = {}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const password = document.querySelector("[type=password]")
    object.password = password.value;

    //this will run when you change the value in password field
    // and run when it get out of focus
    // out of focus means going out of that particular field and
    // for ex:clicking outside the input field 
    password.addEventListener("change", () => {
        console.log("changed:event", password.value)
    })

    const inputEvent = document.querySelector("[type=text]");

    // this will trigger when you press any key for typing in the text field
    // at each key input it will get trigger
    inputEvent.addEventListener("input", (e) => {
        console.log("clicking key", e.target.value)
    })

    const blurFocusEvent = document.querySelector("#blur-focus");
    // blur event:trigger when you focus out of field
    blurFocusEvent.addEventListener("blur", () => {
        console.log("blur event trigger")
    })

    // focus event:trigger when you focus on particular field
    blurFocusEvent.addEventListener("focus", () => {
        console.log("focus element trigger")
    })

    // accessing date
    const dateElement = document.querySelector("[type=date]")
    const date = new Date(dateElement.value);
    object.date = date

    // accesing time
    const timeElement = document.querySelector("[type=time]")
    const time = timeElement.value;
    object.time = time;

    // accessing checkbox elements
    const checkBoxElements = document.querySelectorAll("[type=checkbox]:checked")
    object.checkBoxElements = checkBoxElements;

    // accessing radio elements
    const radioElement = document.querySelector("[type=radio]:checked")
    object.radioElement = radioElement?.value

    // accessing single select
    const singelSelectElement = document.querySelector(".single-select");
    object.singelSelectElement = singelSelectElement.value;

    // accessing multiple select
    const multipleSelectElement = document.querySelector("[multiple=true]");
    let array = Array.from(multipleSelectElement.options)
    array = array.filter((ele) => ele.selected)
        .map((ele) => ele.value)
    // console.log(array)

    // console.log(object)

    const fileElement = document.querySelector("[type=file]")
    // console.log(fileElement.value)
    // console.log(fileElement.files)

    fileElement.addEventListener("change", () => {
        const file = fileElement.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result);
        }
        // reader.readAsText(file)
        // reader.readAsDataURL(file)
    })
    
})