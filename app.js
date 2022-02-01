const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number")
const checkNumberButton = document.querySelector("#check-number");


const outputBox =document.querySelector("#output-box")


function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber.value === 0) {

        outputBox.innerText = "Your Birth-day is Lucky 😎!!!";

    } else {

        outputBox.innerText = "Your Birth-day is Not-Lucky 🙄!!!";

    }

}

function checkBirthDateIsLucky() {

    const dob = dateOfBirth.value;

    const sum = CalculateSum(dob);

    compareValues(sum , luckyNumber.value)

    console.log(sum);

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