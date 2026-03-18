
function toggleMenu(){
document.getElementById("menu").classList.toggle("show");
}

function searchCard(){

let input=document.getElementById("searchInput").value.toLowerCase()

let cards=document.querySelectorAll(".card,.job")

cards.forEach(card=>{

let text=card.innerText.toLowerCase()

if(text.includes(input)){
card.style.display=""
}else{
card.style.display="none"
}

})

}
