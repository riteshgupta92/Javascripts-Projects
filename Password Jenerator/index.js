let passwordBox = document.getElementById("password");
let length = 8;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "~!@#$%^&*()_+=<>[]{}?/|";

let allCharcters = upperCase + lowerCase + number + symbol;

const generatePassword = () => {
  let password = "";

  // Ensures that the password contains at least one character from each category (uppercase, lowercase, number, and symbol) by adding one of each type first.

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allCharcters[Math.floor(Math.random() * allCharcters.length)];
  }
  passwordBox.value = password;
};
document.getElementById("btn").addEventListener("click", () => {
  generatePassword();
});

// first method for copy
const copyPassword = () => {
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch((err) => {
      alert("Failed to copy password: ", err);
    });
};

document.getElementById("copy").addEventListener("click", () => {
  copyPassword();
});
