//Getting all my elements from the DOM
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

//checks the values of the inputs
generate.addEventListener("click", () => {
    const length = lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

    resultElement.innertext = createPassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//generate password
//start password variable
//put password into password var and return

function createPassword(lower, upper, symbol, number, length) {
    let createPassword = "";
    const typesCount = lower + upper + number + symbol;
    //console.log("typesCount: ", typesCount);
    //Should console log the number of types selected.
    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    //console.log("typesArray: ", typesArray);
    //The console log should display an array containing the types selected. If a specific type isn't selected then it is filtered out.

    //If nothing is selected return an empty string. I will come back to this with a bootstrap alert.
    if (typesCount === 0) {
        return "";
    }

    //loop over the length and call createPassword for each type
    // condition if i is less than the length, increment by the number of checked boxes
    
    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            //console.log("funcName: ", funcName);
            //The console.log should show an alternating type for the specified length.
            createPassword += randomFunction[funcName]();
        });
    }
    //console.log(createPassword.slice(0, length));
    //This should demonstrate that the password is being generated in the console.
    //It is not quite correct because we're iterating by the length of the typesCount.
    //Slicing by the length will correct this issue.
    const finalPassword = createPassword.slice(0, length);
    return finalPassword;
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
// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());
//These demonstrate that my functions successfully log the appropriate characters.


