

let card1 = document.querySelector(".card1");
let card2= document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let bodyCard = document.querySelector(".col");
let mainBg = document.querySelector(".wrapper");





bodyCard.addEventListener("mouseover", ()=>{
	mainBg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(images/background.png)";

})




card1.addEventListener("mouseover", ()=>{
	mainBg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(images/pic-1.png)";

});



card2.addEventListener("mouseover", ()=>{
	mainBg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(images/pic-2.png)";

});


card3.addEventListener("mouseover", ()=>{
	mainBg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(images/pic-3.png)";

});

card4.addEventListener("mouseover", ()=>{
	mainBg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(images/pic-4.png)";

});

