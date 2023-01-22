const lengthSlider = document.querySelector(".password-length input");
const options = document.querySelectorAll(".option input");
const copyIcon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passwordIndicator = document.querySelector(".password-indicator");
const generateBtn =  document.querySelector(".generate-button");
const optionCheck = document.querySelector(".option input");
const optionLower = document.getElementById("lowercase");
const optionUpper = document.getElementById("uppercase");
const optionNumbers = document.getElementById("numbers");
const optionSymbols = document.getElementById("symbols");

let optionNum = 0;

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

    options.forEach(option => {
        if(option.checked) {
            staticPassword += characters[option.id];
        }
    });
   
    for(let i = 0; i<passLength; i++){
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
    }
    passwordInput.value = randomPassword;
}

const countOptions = () => {
    optionNum = 0;
    options.forEach(option => {
        if(option.checked) {
           optionNum += 1;
        }
    });
    updatePassIndicator();
}

const updatePassIndicator = () => {
    if(lengthSlider.value <=7 || (lengthSlider.value >8 && optionNum <= 1)) {
        passwordIndicator.id = "weak";
        changeImg("weak");
    }
    else if(lengthSlider.value >=8 && optionNum == 2) {
        passwordIndicator.id = "medium"
        changeImg("medium");
    }
    else if(lengthSlider.value >=8 && optionNum >2) {
        passwordIndicator.id = "strong"
        changeImg("strong");
    }
}

const changeImg = (string) => {
    if(string == "weak"){
        var img = document.getElementById("img");
        img.src="images/angry_head.png";
        test();
    }else if(string == "medium"){
        var img = document.getElementById("img");
        img.src="images/meh_head.png";
        test();
    }else if(string == "strong"){
        var img = document.getElementById("img");
        img.src="images/happy_head.png";
        test();
    }
}

const test = () => {
    const el = document.getElementById("img");
    el.classList.add("rise-shake")
    setTimeout(function(){
        // Code to run after the pause
        removeAnim();
    }, 1000);
}

const removeAnim = () => {
    const el = document.getElementById("img");
    el.classList.remove("rise-shake");
}

const updateSlider = () => {
    document.querySelector(".password-length span").innerText = lengthSlider.value;
    updatePassIndicator();
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check"
    setTimeout(() => {
        copyIcon.innerText = "content_copy";
    }, 1500);
}

generateBtn.addEventListener("click", generatePassword);
lengthSlider.addEventListener("input", updateSlider); 
copyIcon.addEventListener("click", copyPassword);
optionLower.addEventListener("click", countOptions);
optionUpper.addEventListener("click", countOptions);
optionNumbers.addEventListener("click", countOptions);
optionSymbols.addEventListener("click", countOptions);





