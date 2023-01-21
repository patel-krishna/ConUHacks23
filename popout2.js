const lengthSlider = document.querySelector(".password-length input");
const options = document.querySelectorAll(".option input");
const generateBtn =  document.querySelector(".generate-button");

const characters = {
    lowercaseWord : ["apple", 'cat', 'dog'],
    uppercaseWord : ['HEY', 'FISH', 'BANANA'],
    numbers : ['1', '2', '3'],
    characters : ["!", "$", "&"]
}
const generatePassword = () => {
  
    let staticPassword = "";
    let randomPassword = "";
    let passLength = lengthSlider.value;

    console.log("clicked");

    options.forEach(option => {
        if(option.checked) {
            console.log(characters[option.id][2]);
            // staticPassword += characters[option.id[1]];
            // console.log(staticPassword)
        }
    });
   

}

generateBtn.addEventListener("click", generatePassword);
