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
}

//eventlistener

generate.addEventListener("click", () => {
    const length = lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

    resultElement.innertext = createPassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length);
});

//generate password
    //start password variable
    //filter unchecked types (.filter(item => Object.values(item)[0]);)
    //loop over length call generator per type
    //put password into password var and return

function createPassword(
    lower, 
    upper, 
    symbol, 
    number, 
    length) {
    let createPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    console.log("typesArr: ", typesArr);
}

//If nothing is selected return an empty string. I will come back to this with a bootstrap alert.

if(typesCount === 0) {
    return "";
}

//functions to pull the correct characters from the table.

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



