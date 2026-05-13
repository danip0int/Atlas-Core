
/* PAGINA ENTRENAMIENTOS */

const btnCalcular = document.getElementById("btn-calcular");

function calcularCalorias() {
    try {
     let campoPeso = Number(peso.value);
    let campoEdad = Number(edad.value);
    let campoAltura = Number(altura.value);
    
   if (isNaN(campoPeso) || campoPeso < 30 || campoPeso > 300) {
    throw new Error("Ingresá un peso válido (entre 30 y 300 kg)");
}
if (isNaN(campoAltura) || campoAltura < 100 || campoAltura > 250) {
    throw new Error("Ingresá una altura válida en cm (entre 100 y 250)");
}
if (isNaN(campoEdad) || campoEdad < 10 || campoEdad > 100) {
    throw new Error("Ingresá una edad válida (entre 10 y 100 años)");
}else{
        let seleccionSexo = selectSexo.value;
        let seleccionActividad = selectActividad.value;
        let TMB;
        if (seleccionSexo === "masculino") {
        TMB = 88.36 + (13.4 * campoPeso) + (4.8 * campoAltura) - (5.7 * campoEdad)

        } else{
        TMB = 447.6 + (9.2 * campoPeso) + (3.1 * campoAltura) - (4.3 * campoEdad)
        }
        let calorias = TMB * seleccionActividad; 
    
        resultado.textContent = resultado.textContent = "Tu requerimiento calórico diario es de: " + Math.round(calorias) + " kcal";
        resultado.classList.add("visible");
        Toastify({
    text: "¡Cálculo exitoso!",
    duration: 4000,
    gravity: "bottom",
    position: "center",
    style: { background: "#eb5e28" }
}).showToast();
    }
    } catch(error){
        Toastify({
    text: error.message,
    duration: 4000,
    gravity: "bottom",
    position: "center",
    style: { background: "#c0392b" }
}).showToast();
    } 
    

}


btnCalcular.addEventListener("click", () => {
    calcularCalorias();
});

const inputsNumericos = document.querySelectorAll("input[type='number']");

inputsNumericos.forEach(input => {
    input.addEventListener("keydown", (event) => {
        if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
            event.preventDefault();
        }
    });
    
    input.addEventListener("paste", (event) => {
        event.preventDefault();
    });
});


/* MODAL ENTRENAMIENTOS */

const modalCards = document.querySelector("#modal-cards");
const modalRutinas = document.getElementById("modal-rutinas");
const modalCerrar = document.getElementById("modal-cerrar");

async function mostrarRutinas(categoria) {
    try{
        const rutinas = await fetch("../data/rutinas.json");
        const datos = await rutinas.json();
        const filtradas = datos.filter((rutina) => rutina.categoria === categoria );
        modalCards.innerHTML = "";

        filtradas.forEach((add) => {
            modalCards.innerHTML+= `
    <div class="rutina-card">
        <h3>${add.nombre}</h3>
        <span>${add.categoria}</span>
        <p>${add.descripcion}</p>
    </div>`;
        });

        modalRutinas.classList.add("visible");
        console.log(filtradas);

    } catch(error){

    }
}


 document.addEventListener("click", (event) => {
    const categoria = event.target.closest("[data-categoria]")?.dataset.categoria;
    if (categoria) {
        mostrarRutinas(categoria);
    }
});

modalCerrar.addEventListener("click", (event) => {
    modalRutinas.classList.remove("visible");
});


