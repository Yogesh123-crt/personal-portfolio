console.log("JavaScript connected");

const body = document.body;
const menuBtn = document.getElementById("menuBtn");
const menuBox = document.getElementById("menuBox");
const darkModeBtn = document.getElementById("darkModeBtn");
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillslist = document.getElementById("skillslist");

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formMessage = document.getElementById("formMessage");

//Skills Toggle 
skillslist.style.display = "none";
toggleSkillsBtn.textContent = "Show Skills";

toggleSkillsBtn.addEventListener("click", function () {
    if (skillslist.style.display === "none") {
        skillslist.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillslist.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
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

// Menu Toggle
menuBtn.addEventListener("click", function () {
    menuBox.classList.toggle("show-menu");
});

// Close menu 
const menuItems = menuBox.querySelectorAll("a, button");
menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        menuBox.classList.remove("show-menu");
    });
});

// contact validation form
function showError(element, message) {
    element.textContent = message;
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
