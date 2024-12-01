
AOS.init();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx loader show-up


// let loader = document.getElementById("loader")
// let loginPage = document.getElementById("login-page")
// window.addEventListener("load", () => {
//     loader.style.display = "flex"
//     loginPage.style.display = "none"
//     setTimeout(() => {
//         loader.style.display = "none"
//         loginPage.style.display = "flex"
//     }, 4000)
// })


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxLogin Ul


let loginLi = document.getElementById("loginLi")
let LoginLiText = [
    'We make your business run smoothly.',
    'Smart client management.',
    'Send campaigns via SMS and emails.'
]
for (let j = 0; j < LoginLiText.length; j++) {
    let li = document.createElement("li")
    let i = document.createElement("i")
    i.setAttribute("class", "fa-solid fa-check-double")
    i.style.color = "#ffffff"
    let liText = document.createTextNode(LoginLiText[j])
    li.appendChild(i)
    li.appendChild(liText)

    loginLi.appendChild(li)
}


// xxxxxxxxxxxxxxxxxxxxxxxxxx loginForm

// Form validation
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("nameError").textContent = "";

    let isValid = true; // Flag to check if form is valid

    // Get form values
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let userName = document.getElementById("userName").value;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userEmail)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false; // Set flag to false if email is invalid
    }

    // Password validation
    if (userPassword.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        isValid = false; // Set flag to false if password is invalid
    }

    // Confirm password validation
    if (userPassword !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false; // Set flag to false if passwords do not match
    }

    // Mobile validation
    if (userName.length < 6) {
        document.getElementById("nameError").textContent = "Name should be at least 6 characters long.";
        isValid = false; // Set flag to false if name is invalid 
    }

    // Submit the form if it is valid
    if (isValid) {
        // Store userName and gender in localStorage
        localStorage.setItem('userName', userName);
        const gender = document.querySelector('input[name="gender"]:checked').value;
        localStorage.setItem('userGender', gender);

        document.querySelector(".formClearBox").style.display = 'block';

        setTimeout(() => {
            document.querySelector(".formClearBox").style.display = 'none';
            window.location.href = "./dashboard.html"; // Redirect to dashboard
        }, 2000);
    }
});


