
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button');
    // onClick's logic below:
    link.addEventListener('click', function() {
            alert("Your sticker was added!");
            addSticker();
        });
    });


function addSticker() {
    
    let entries = []
    let sticker =  document.getElementById("sticker").src; 
 
  

  if(localStorage.getItem('saved-sticker')){
  	entries = JSON.parse(localStorage.getItem('saved-sticker')) 
    entries.push(sticker)
    localStorage.setItem('saved-sticker',JSON.stringify(entries))
   }else{
    entries.push(sticker)
    localStorage.setItem('saved-sticker',JSON.stringify([sticker]))
   }

}



//Send Message To Background
chrome.runtime.sendMessage({name: "fetch"}, (response) => {
    //Wait for Response
  
    console.log(response);


    //Update Display on Content Script
    document.querySelector('h2').innerHTML=response.title;
    document.querySelector('p').innerHTML=response.text;
    document.getElementById('sticker').src=response.stickers;
    document.getElementById('graphic').src=response.images;
    //these don't work
    //document.body.style.backgroundColor=response.colours;
    //document.body.style.background=response.colours;
    //this on works
    //document.body.style.backgroundColor="#d6c6f5";
    document.body.style.backgroundColor=response.colors;
  
  });

  