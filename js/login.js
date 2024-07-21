// Sign In && Sign Up Section
function passwordVisibility() {
    const password = document.getElementById("password");
    const eye = document.getElementById("eye").querySelector("i");
 
    if (password.type === "password") {
        password.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
 }





// Login Section
let email = document.getElementById("email")
function login() { 
    if (email.value === "3legant@gmail.com" && password.value === "12341234") {
        window.location.href = "./account.html";
    }else {
        alert("Your login information is incorrect. Please try again.")
    }
}
 