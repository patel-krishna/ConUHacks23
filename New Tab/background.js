function getRandomNumber (max){
    var number = max+1;
    return Math.floor(Math.random*Math.floor(number));
};



//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "fetch"){
  

        const stickers = [
            "images/IMG_3365.png",
            "images/IMG_3367.png",
            "images/IMG_3366.png",
            "images/IMG_3368.png",
            "images/IMG_3369.png"
        ];

        const text =[
            "Hey!!! You've been working hard for a while. Take a few slow deep breaths...1..2...3...you're doing great...4...5...Good job...Okay great :)",
            "Let's stand up and move around a bit...Oh! How about we try this yoga pose: \"Uttana Shishosana\". After a long day of sitting in front of the screen, this pose stretches your spine, your shoulders and also your arms! ",
            "Let's take a break and go walk around while listening to your favorite song",
            "A Chinese idiom once said: \"Little specks of sand make a tower\". We know it is quite overwhelming to balance everything at the same time, however, taking baby steps and dividing your tasks into smaller ones could make your huge project less scary. ",
            "Have you been drinking water? Take a well-deserved break and go hydrate yourself & maybe have a little snack:)"
        ];

        const title =[
            "Nice Work!",
            "Wow! You're doing great!",
            "Working hard! You deserve a milkshake!",
            "You rock!",
            "Wow! Amazing!",
        ];

        const images =[
            "images/IMG_4070.png",
            "images/IMG_4082.png",
            "images/IMG_4085.png",
            "images/IMG_4084.png",
            "images/IMG_4083.png",
        ];
        const colors =[
            "#fcd9f4",
            "#d9ece4",
            "#dbe9f4",
            "#f1e0c6",
            "#d6c6f5",]; 

        var index = Math.floor(Math.random()*5)

      //Send response

      response({stickers: decodeURIComponent(stickers[index]), text:text[index], title:title[index], images: decodeURIComponent(images[index]), colors:colors[index]});
  
    }
  
  });
  