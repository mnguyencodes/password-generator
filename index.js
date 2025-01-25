const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const digits = "0123456789";
const asciiLowercase = "abcdefghijklmnopqrstuvwxyz";
const asciiUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const punctuation = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

const passwordLengthValue = document.querySelector("#value");
const passwordLengthEl = document.querySelector("#password-length");
passwordLengthValue.textContent = passwordLengthEl.value;
passwordLengthEl.addEventListener("input", (event) => {
    passwordLengthValue.textContent = event.target.value;
});

// console.log(input.value)