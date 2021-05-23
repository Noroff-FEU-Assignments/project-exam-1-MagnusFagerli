const contactForm = document.querySelector(".container-form");

const contactName = document.querySelector("#fname");
const fullNameError = document.querySelector("#fNameError");

const contactEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const contactSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const contactButton = document.querySelector("#submitbtn");

const thankYou = document.querySelector(".thankyou");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fname.value, 5) === true) {
        fnameError.style.display = "none";
    } else {
        fnameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(mainsubject.value, 25) === true) {
        mainsubjectError.style.display = "none";
    } else {
        mainsubjectError.style.display = "block";
    }

    console.log("test");
}

function checkLength(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEX.test(email);
    return patternMatches;
}

function checkSuccess() {
    if (validateForm === true) {
        contactForm.style.display = "none";
        thankYou.style.display = "block";
    }
}


contactForm.addEventListener("submit", validateForm);