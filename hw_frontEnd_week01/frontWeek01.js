const Form = document.querySelector("#login-form");
const formInput = document.querySelector("#login-form input");
const welcome = document.querySelector("#welcome");

function pushButton(event){
    event.preventDefault();
    Form.classList.add("hidden");
    const userName = formInput.value;
    welcome.innerText = `Welcome ${userName} !`;
    welcome.classList.remove("hidden");
}

Form.addEventListener("submit", pushButton);