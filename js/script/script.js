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

    
    