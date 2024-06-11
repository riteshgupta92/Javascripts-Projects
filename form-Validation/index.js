let firstName = document.querySelector("#fName");
let lastName = document.querySelector("#lName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let number = document.querySelector("#number");
let form = document.querySelector(".form-container");

const isValidEmail = (email) => {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const isValidPassword = (password) => {
 let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]/; 
  return (
    password.length >= 6 &&
    passRegex.test(password) &&
    passRegex.test(password) &&
    passRegex.test(password)
  );
};
const isValidNumber = (number) => {
  let mobileNumRegex =
    /^(\+?\d{1,2}\s?)?((\(\d{3}\))|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return number.length === 10 && mobileNumRegex.test(number);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Remove existing error messages
  let existingErrors = document.querySelectorAll(".error-message");
  existingErrors.forEach((error) => error.remove());
  // Flag to track if the form is valid
  let isFormValid = true;

  if (firstName.value === "" || firstName.value === null) {
    let p = document.createElement("p");
    p.innerText = "First Name is Required";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    firstName.parentElement.append(p);
    isFormValid = false;
  }
  if (lastName.value === "" || lastName.value === null) {
    let p = document.createElement("p");
    p.innerText = "Last Name is Required";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    lastName.parentElement.append(p);
    isFormValid = false;
  }
  if (email.value === "" || email.value === null) {
    let p = document.createElement("p");
    p.innerText = "email is Required";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    email.parentElement.append(p);
    isFormValid = false;
  } else if (!isValidEmail(email.value)) {
    let p = document.createElement("p");
    p.innerText = "Not a valid email address";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    email.parentElement.append(p);
    isFormValid = false;
  }
  if (password.value === "" || password.value === null) {
    let p = document.createElement("p");
    p.innerText = "password is Required";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    password.parentElement.append(p);
    isFormValid = false;
  } else if (!isValidPassword(password.value)) {
    let p = document.createElement("p");
    p.innerText =
      "Password must be at least 6 characters long contain a letter, a number, and a special symbol";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    password.parentElement.append(p);
    isFormValid = false;
  }
  if (number.value === "" || number.value === null) {
    let p = document.createElement("p");
    p.innerText = "Mobile Number is Required";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    number.parentElement.append(p);
    isFormValid = false;
  } else if (!isValidNumber(number.value)) {
    let p = document.createElement("p");
    p.innerText = "Not a valid phone number";
    p.classList.add("error-message");
    p.style.color = "red";
    p.style.marginTop = "5px";
    number.parentElement.append(p);
    isFormValid = false;
  }
  // send Post request if valid form:-
  if (isFormValid) {
    let formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      number: number.value,
    };
    console.log(formData);
    alert("Form Submitted Successfully")
  }
});

// Optionally, clear error message on input change
[firstName, lastName, email, password, number].forEach((input) => {
  input.addEventListener("input", () => {
    let existingError = document.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
  })
});










// firstName.addEventListener("input", () => {
//   let existingError = document.querySelector(".error-message");
//   if (existingError) {
//     existingError.remove();
//   }
// });

// lastName.addEventListener("input", () => {
//   let existingError = document.querySelector(".error-message");
//   if (existingError) {
//     existingError.remove();
//   }
// });
// email.addEventListener("input", () => {
//   let existingError = document.querySelector(".error-message");
//   if (existingError) {
//     existingError.remove();
//   }
// });
// password.addEventListener("input", () => {
//   let existingError = document.querySelector(".error-message");
//   if (existingError) {
//     existingError.remove();
//   }
// });
// number.addEventListener("input", () => {
//   let existingError = document.querySelector(".error-message");
//   if (existingError) {
//     existingError.remove();
//   }
// });
