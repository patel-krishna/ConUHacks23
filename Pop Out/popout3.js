const lengthSlider = document.querySelector(".password-length input");
const options = document.querySelectorAll(".option input");
const passwordInput = document.querySelector(".input-box input")
const generateBtn =  document.querySelector(".generate-button");

const characters = {
    lowercase : 'abcdefghijklmnopqrstuvwxyz',
    uppercase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers : '0123456789',
    symbols : '!$%&'
}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

const generatePassword = () => {
  
    let staticPassword = "";
    let randomPassword = "";
    let passLength = lengthSlider.value;

    console.log("clicked");

    options.forEach(option => {
        if(option.checked) {
            staticPassword += characters[option.id];
            console.log(staticPassword)
        }
    });
   
    for(let i = 0; i<passLength; i++){
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
    }
    passwordInput.value = randomPassword;
}


const updateSlider = () => {
    document.querySelector(".password-length span").innerText = lengthSlider.value;
}
updateSlider();

generateBtn.addEventListener("click", generatePassword);
lengthSlider.addEventListener("input", updateSlider); 











