const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number")
const checkNumberButton = document.querySelector("#check-number");
const outputBox =document.querySelector("#output-box")


function compareValues(sum, numberToCheck) {
    if (sum % numberToCheck === 0) {

        outputBox.innerText = "Your Birth-day is Lucky 😎!!!";

    } else {

        outputBox.innerText = "Your Birth-day is Not-Lucky 🙄!!!";

    }

}

function checkBirthDateIsLucky() { 
    const dob = dateOfBirth.value;
    const numberToCheck = luckyNumber.value;
    if(dob && numberToCheck) {
        const sum = CalculateSum(dob)
    compareValues(sum, numberToCheck)
    } else {
    outputBox.innerText = "Please enter both fields";
    }
}


function CalculateSum(dob) {

    dob = dob.replaceAll("-", "");


    let sum = 0;

    for (let i = 0; i < dob.length; i++) {

        sum = sum + Number(dob.charAt(i));
    }

    return sum;
}



checkNumberButton.addEventListener("click", checkBirthDateIsLucky)