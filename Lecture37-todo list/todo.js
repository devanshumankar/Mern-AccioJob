const addbtn = document.querySelector(".input-box button")
console.log(addbtn)
const sectionElement = document.querySelector("#todo-items")
addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const todoElement = document.querySelector("#todo")
    const divElement = document.createElement("div");
    divElement.className = "todo-item";
    divElement.innerHTML = `<p>${todoElement.value}</p>
                            <div class="todo-buttons">
                            <button id="edit-btn">Edit</button>
                            <button id="delete-btn">Delete</button>
                            </div>`
    sectionElement.appendChild(divElement);
    todoElement.value = ""

    const deleteBtn = divElement.querySelector("#delete-btn");
    deleteBtn.onclick = () => divElement.remove()

    const editBtn = divElement.querySelector("#edit-btn");

    editBtn.addEventListener("click", () => {

        if (editBtn.textContent == "Save") {
            const pElement = divElement.querySelector("p");
            const inputElement = divElement.querySelector(".ip");
            pElement.textContent = inputElement.value;
            inputElement.remove();
            pElement.style.display = "inline";
            editBtn.textContent = "Edit"

        } else {
            const pElement = divElement.querySelector("p");
            const inputElement = document.createElement("input");
            inputElement.className = "ip"
            editBtn.textContent = "Save";

            pElement.style.display = "none";

            inputElement.value = pElement.textContent;

            divElement.prepend(inputElement)
        }



    })
})