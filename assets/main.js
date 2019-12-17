// Dom Stuff

const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numberElement = document.getElementById("numbers");
const symbolElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");
const lengthElement = document.getElementById("length");
const resultElement = document.getElementById("result");


const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//eventlistener

generate.addEventListener("click", () => {
    const length = lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = lowercaseElement.checked;
    const hasNumber = lowercaseElement.checked;
    const hasSymbol = lowercaseElement.checked;

    resultElement.innertext = createPassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length);
});

//generate password
function createPassword(lower, upper, symbol, number, length) {
    //start password variable
    //filter unchecked types
    //loop over length call generator per type
    //put password into password var and return
    let createPassword = "";

    const typesCount = lower + upper + number + symbol;
    console.log("typesCount: ", typesCount);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*()-+={}[],.?/;:";
    return symbols[Math.floor(Math.random() * symbols.length)];
}



