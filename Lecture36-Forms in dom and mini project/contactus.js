const users = [];
// disable button
const errorElement = document.querySelector(".error-div")
const submitBtn = document.querySelector("button")
const form = document.querySelector("form");
const consentCheckbox = document.querySelector("#consent");
submitBtn.style.display = "none";
consentCheckbox.addEventListener("change", () => {
    submitBtn.style.display = consentCheckbox.checked ? "inline-block" : "none";
})
submitBtn.addEventListener("click", (e) => {

    e.preventDefault();
    const user = {}
    user.name = document.querySelector("input[type=text]").value;

    user.mobile = document.querySelector("input[type=number]").value;

    user.gender = document.querySelector("input[name=gender]:checked")?.value

    user.consent = document.querySelector("#consent").checked

    user.city = document.querySelector("#city").value;

    if (!user.name) {
        errorElement.textContent = "Name can't be Empty"
        errorElement.style.color = "gold"
    }
    else if (!validNumber(user.mobile)) {
        errorElement.textContent = "Number must be 10 digit"
        errorElement.style.color = "gold"
    }
    else if (!user.mobile) {
        errorElement.textContent = "Phone can't be Empty"
        errorElement.style.color = "gold"
    }
    else if (!user.gender) {
        errorElement.textContent = "select gender please"
        errorElement.style.color = "gold"
    }
    else if (!user.consent) {
        errorElement.textContent = "Please agreee TOC"
        errorElement.style.color = "gold"
    }
    else {
        users.push(user);
        form.reset();
    }



})

function validNumber(number) {
    if (number.length > 10) {
        return false
    }
    return true;
}



function emailChecking(email) {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (!email.includes("@")) {
        return false
    }
    let count = 0;
    let numCount = 0;
    for (let i = email.length - 1; i >= 0; i--) {
        if (email[i] == "." && count < 2) {
            return false;
        }
        if (nums.includes(Number(email[i]))) {
            numCount++;
        }
        if (email[i] == "@" && numCount > 0) {
            return false;
        }
        count++
    }
    return true;

}