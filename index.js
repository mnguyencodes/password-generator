const numbers = "0123456789";
const asciiLowercase = "abcdefghijklmnopqrstuvwxyz";
const asciiUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

const passwordLengthValue = document.querySelector("#value");
const passwordLengthEl = document.querySelector("#password-length");
passwordLengthValue.textContent = passwordLengthEl.value;
passwordLengthEl.addEventListener("input", (event) => {
    passwordLengthValue.textContent = event.target.value;
});

let hasUpper = false;
let hasNumber = false;
let hasSpecial = false;

const upperEl = document.querySelector("#upper");
upperEl.addEventListener("change", function() {
    hasUpper = this.checked;
});

const numberEl = document.querySelector("#numbers") 
numberEl.addEventListener("change", function() {
    hasNumber = this.checked;
});

const specialEl = document.querySelector("#special")
specialEl.addEventListener("change", function() {
    hasSpecial = this.checked;
});

function binary() {
    return Math.floor(Math.random() * 2);
};

function randomCharacter(characterSet) {
    return Math.floor(Math.random() * characterSet.length);
};

function addCharacter(password, characterSet) {
    let randomIndex = randomCharacter(characterSet);
    return binary() === 0 ? password + characterSet[randomIndex] : characterSet[randomIndex] + password;
};

passwordOneEl = document.querySelector("#passwordOne");
passwordTwoEl = document.querySelector("#passwordTwo");

function generatePasswords() {
    passwordOneEl.textContent = generatePassword();
    passwordTwoEl.textContent = generatePassword();
};

function generatePassword() {
    let characterSet = asciiLowercase;
    let password = "";
    password = addCharacter(password, characterSet);
    if (hasUpper) {
        password = addCharacter(password, asciiUppercase);
        characterSet += asciiUppercase;
    };
    if (hasNumber) {
        password = addCharacter(password, numbers);
        characterSet += numbers;
    };
    if (hasSpecial) {
        password = addCharacter(password, specialCharacters);
        characterSet += specialCharacters;
    };
    for (let i = password.length; i < passwordLengthEl.value; i++) {
        password = addCharacter(password, characterSet);
    };
    return password;
};

function copyPassword(passwordEl) {
    let passwordButton = document.querySelector(`#${passwordEl}`);
    copyText = passwordButton.textContent;
    navigator.clipboard.writeText(copyText);
    alert("Copied password!");
};

function generateOnePasswordTest() {
    let password = "";
    let cset = numbers + asciiLowercase + asciiUppercase + specialCharacters;
    for (let i = 0; i < 10; i++) {
        password = addCharacter(password, cset);
    };
    return password;
};

function generateMultiplePasswords(number) {
    for (let i = 0; i < number; i++) {
        console.log(generateOnePasswordTest());
    };
};