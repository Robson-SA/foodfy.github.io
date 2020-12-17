const modalOverlay = document.querySelector('.modal_overlay');
const cards= document.querySelectorAll('.card')

    for(let card of cards){

        card.addEventListener("click", function(){
            const cardId = card.getAttribute("id");
            const textH4 = card.getAttribute("text");
            const pId= card.getAttribute("parg");
            modalOverlay.classList.add('active')
            modalOverlay.querySelector("img").src=`assets/${cardId}`
            modalOverlay.querySelector("h4").innerHTML=`${textH4}`
            modalOverlay.querySelector("p").innerHTML=`${pId}`
            
        })

    }

document.querySelector(".close_modal").addEventListener("click",function() {
        modalOverlay.classList.remove('active')
    
})

