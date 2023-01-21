const lengthSlider = document.querySelector(".password-length input");
const options = document.querySelectorAll(".option input");
const generateBtn =  document.querySelector(".generate-btn");


const characters = {
    lowercaseWord : ["apple", 'cat', 'dog'],
    uppercaseWord : ['HEY', 'FISH', 'BANANA'],
    numbers : ['1', '2', '3'],
    characters : ["!", "$", "&"]
}

const generatePassword = () => {
    alert("clicked");
    let staticPassword = "";
    let randomPassword = "";
    let passLength = lengthSlider.value; 


    options.forEach(option => {
        if(option.checked) {
            console.log(option);
            // staticPassword += characters[option.id[1]];
            // console.log(staticPassword)
        }
    });

}

const updateSlider = () => {
    document.querySelector(".password-length span").innerText = lengthSlider.value;
}
updateSlider()

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);