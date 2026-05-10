/* PAGINA DE INICIO */


function animarContador(id, target) {
    let actual = 0;
   const intervaloAnimado = setInterval(() => {
    actual = actual + 1;
    document.getElementById(id).textContent = actual;
    if (actual >= target) {
        clearInterval(intervaloAnimado);
        
    }
   }, 2000/target);
}

    animarContador("stat-alumnos", 474);
    animarContador("stat-tiempo", 8);
    animarContador("stat-sede", 4);
    animarContador("stat-satisfaccion", 88);

    
const cardsIndex = document.querySelector(".cards-index");

cardsIndex.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")){
        const card = event.target.closest(".card");
       const cardExtra = card.querySelector(".card-extra");
       cardExtra.classList.toggle("visible");
       if (cardExtra.classList.contains("visible") === true) {
        event.preventDefault();
        card.style.height = "auto";
        event.target.textContent = "Ver menos";
       } else{
        event.preventDefault();
        card.style.height = "520px";
        event.target.textContent = "Ver más"
       }
    }
})
