const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    // to prevent from spaces we use trim
    const usernamevalue = username.value.trim();
    const passwordvalue = password.value.trim();

    if (usernamevalue === '') {
        // add error class
        setError(username, "This field cannot be blank !!!!!!");

    }
    else {
        // add success class
        setSuccess(username);

    }
    if (passwordvalue === '') {
        // add error class
        setError(password, "This field cannot be blank !!!!!!");

    } else if (passwordvalue.length <= 4) {
        setError(password, "Password is too small!!")
    }
    else {
        // add success class
        setSuccess(password);

    }
}

function setError(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = msg;
    // add error class
    formControl.className = "form-control error";
}
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}


function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const container =document.querySelector(".container");
    const storedData = localStorage.getItem('signUpData');
    if (storedData) {
        const signUpData = JSON.parse(storedData);
        const user = signUpData.find(user => user.username === username && user.password === password);
        if (user) {
            // alert('You have logged in successfully!');
            let pop= document.querySelector(".popup");
            pop.style.display='block';
            document.body.style.backgroundImage='none';
            container.style.display='none';
            
            document.body.style.justifyContent='center';

            setTimeout(function() {
                window.location.href = "index.html";
            }, 2000);

        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }
}
