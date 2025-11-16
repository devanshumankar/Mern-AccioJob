const addBtn = document.querySelector(".input-box button");
addBtn.addEventListener("click", () => {
    const sectionElement = document.querySelector("#todo-items");
    const divElement = document.createElement("div");
    const inputData = document.querySelector("input")
    if (inputData.value == "") {
        alert("please enter a task");
    } else {
        divElement.className = "todo-item";
        divElement.innerHTML = `<p>${inputData.value}</p>
                <div class="todo-buttons">
                    <button class="edt-btn">Edit</button>
                    <button class="del-btn">Delete</button>
                </div>`
        sectionElement.append(divElement);
        inputData.value = ""

        const editButton = divElement.querySelector(".edt-btn");

        const deleteButton = divElement.querySelector(".del-btn");
        deleteButton.addEventListener("click", () => {
            divElement.remove();
        })

        editButton.addEventListener("click", () => {
            const pElement = divElement.querySelector("p");
            if (editButton.textContent == "Save") {
                editButton.textContent = "Edit";
                const inputDataElemnt = document.querySelector(".temp")
                if (!inputDataElemnt.value == "") {
                    pElement.textContent = inputDataElemnt.value;
                }
                inputDataElemnt.remove();
                pElement.style.display = "block"

            } else {
                editButton.textContent = "Save";
                const inputElement = document.createElement("input");
                inputElement.className = "temp"
                inputElement.value = pElement.textContent;
                pElement.style.display = "none";
                divElement.prepend(inputElement);

            }



        })
    }
})






