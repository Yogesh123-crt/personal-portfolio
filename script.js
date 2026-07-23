console.log("JavaScript connected");

const body = document.body;
// dark mode 
const darkModeBtn = document.getElementById("darkModeBtn");

// hamburger menu
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");

openMenu.addEventListener("click", () => {
  sidebar.classList.add("active");
  openMenu.style.display = "none";    
  closeMenu.style.display = "inline"; 
});

closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("active");
  closeMenu.style.display = "none"; 
  openMenu.style.display = "inline"; 
});

// Dark Mode 
function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark-mode");
        darkModeBtn.textContent = "Light Mode";
    } else {
        body.classList.remove("dark-mode");
        darkModeBtn.textContent = "Dark Mode";
    }
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme);

darkModeBtn.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "light");
        applyTheme("light");
    } else {
        localStorage.setItem("theme", "dark");
        applyTheme("dark");
    }
});


const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formMessage = document.getElementById("formMessage");

function showError(element, message) {
    element.textContent = message;
    element.style.color = "red";
}

function clearError(element) {
    element.textContent = "";
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameError, "Name is required");
        return false;
    }
    clearError(nameError);
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    if (email === "") {
        showError(emailError, "Email is required");
        return false;
    }
    if (!isValidEmail(email)) {
        showError(emailError, "Invalid email format");
        return false;
    }
    clearError(emailError);
    return true;
}

function validateMessage() {
    if (messageInput.value.trim().length < 10) {
        showError(messageError, "Message must be at least 10 characters");
        return false;
    }
    clearError(messageError);
    return true;
}
// instant validation error 
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const validName = validateName();
    const validEmail = validateEmail();
    const validMessage = validateMessage();

    if (validName && validEmail && validMessage) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        // clear fields
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    } else {
        formMessage.textContent = "";
    }
});





