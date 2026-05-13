
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



/* FILTRO ENTRENAMIENTOS */

const contentCards = document.getElementById("contentCards");
const btnFilter = document.querySelector(".btn-filter");

const rutinas = [
    { 
        nombre: "Tren Superior - Espalda y Bíceps", 
        categoria: "Fuerza", 
        descripcion: "Rutina enfocada en dorsales, trapecio y bíceps. Incluye dominadas, remo con barra, jalón al pecho y curl con mancuernas." 
    },
    { 
        nombre: "Tren Superior - Pecho y Tríceps", 
        categoria: "Fuerza", 
        descripcion: "Trabajo de pectorales, hombros y tríceps. Press de banca, aperturas, fondos y extensiones en polea." 
    },
    { 
        nombre: "Circuito HIIT - Cuerpo Completo", 
        categoria: "Cardio", 
        descripcion: "Intervalos de alta intensidad con ejercicios de peso corporal. Burpees, saltos, mountain climbers y sprints en cinta." 
    },
    { 
        nombre: "Cardio Funcional - Resistencia", 
        categoria: "Cardio", 
        descripcion: "Trabajo aeróbico sostenido combinado con movimientos funcionales. Ideal para mejorar capacidad cardiovascular y quemar grasa." 
    },
    { 
        nombre: "Movilidad - Cadera y Columna", 
        categoria: "Movilidad", 
        descripcion: "Sesión de estiramientos dinámicos y estáticos enfocada en cadera, lumbar y torácica. Ideal para recuperación y prevención de lesiones." 
    },
    { 
        nombre: "Recuperación Activa - Cuerpo Completo", 
        categoria: "Movilidad", 
        descripcion: "Foam roller, elongación profunda y respiración. Pensada para el día posterior a sesiones intensas de entrenamiento." 
    },
    { 
        nombre: "Boxeo - Técnica de Golpes", 
        categoria: "Boxeo", 
        descripcion: "Combinaciones básicas y avanzadas en pera y bolsa. Jab, cross, gancho y uppercut con foco en coordinación y potencia." 
    },
    { 
        nombre: "Boxeo - Acondicionamiento Físico", 
        categoria: "Boxeo", 
        descripcion: "Circuito de boxeo orientado a la resistencia. Soga, shadow boxing, trabajo en bolsa y ejercicios de core específicos." 
    }
];

function cardsRender(array) {
    contentCards.innerHTML = "";
    
    array.forEach((rutine) => {
        
        contentCards.innerHTML += `
    <div class="rutina-card">
        <h3>${rutine.nombre}</h3>
        <span>${rutine.categoria}</span>
        <p>${rutine.descripcion}</p>
    </div>
`;
});

}

cardsRender(rutinas);

btnFilter.addEventListener("click", (event) => {
    const categoria = event.target.dataset.categoria;
if (categoria === "Todos") {
    cardsRender(rutinas);
}else{
    let filtroRutina = rutinas.filter(el => el.categoria === categoria )
    cardsRender(filtroRutina);
}
});


