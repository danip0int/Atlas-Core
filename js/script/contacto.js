
const formNombre = document.getElementById("input-nombre");
const formEmail = document.getElementById("input-email");
const formTexto = document.getElementById("input-mensaje");
const btnEnviar = document.getElementById("btn-enviar");
const modalContacto = document.getElementById("modal-contacto");
const modalCerrar = document.getElementById("modal-contacto-cerrar");
const modalNombre = document.getElementById("modal-contacto-nombre");
const modalEmail = document.getElementById("modal-contacto-email");


function enviarFormulario(event) {
    event.preventDefault();
let formularioNombre = formNombre.value;
let formularioEmail = formEmail.value;
let formularioTexto = formTexto.value;


    try{
        if (formularioNombre === "" || formularioTexto === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formularioEmail) ) {
            throw new Error("Completá todos los campos correctamente"); 
        }

        Toastify({
text: "Enviado.",
duration: 3000,
gravity: "bottom",
position: "center",
style: { background: "#eb5e28" }
}).showToast();

modalNombre.textContent = formularioNombre;
modalEmail.textContent = formularioEmail;
modalContacto.classList.add("visible");

formNombre.value = "";
formEmail.value = "";
formTexto.value = "";

    } catch(error){
Toastify({
        text: error.message,
        duration: 3000,
        gravity: "bottom",
        position: "center",
        style: { background: "#c0392b" }
    }).showToast();
}
    
}

btnEnviar.addEventListener("click", enviarFormulario);
modalCerrar.addEventListener("click", () => {
    modalContacto.classList.remove("visible");
});


const horarios = {
    Lunes: { apertura: 6, cierre: 22 },
    Martes: { apertura: 6, cierre: 22 },
    Miércoles: { apertura: 6, cierre: 22 },
    Jueves: { apertura: 6, cierre: 22 },
    Viernes: { apertura: 6, cierre: 22 },
    Sábado: { apertura: 7, cierre: 17 },
    Domingo: { apertura: null, cierre: null, cerrado: true },
    Feriados: {apertura: 6, cierre: 17}
};

function verificarHorario() {
    const hoy = new Date();
    const numeroDia = hoy.getDay();
    const horaActual = hoy.getHours();
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const nombreDia = diasSemana[numeroDia];
    if (horarios[nombreDia].cerrado === true) {
        document.getElementById("estado-gym").textContent = "Hoy no abrimos. Nuestro horario es de lunes a viernes 6:00 a 22:00, sábados 7:00 a 17:00.";
        
    } else if (horaActual >= horarios[nombreDia].apertura && horaActual < horarios[nombreDia].cierre) {
        document.getElementById("estado-gym").textContent = "¡Estamos abiertos! Podés acercarte o escribirnos por WhatsApp al +54 223 165-4970.";
    } else {
        document.getElementById("estado-gym").textContent = "Estamos cerrados. Mañana te esperamos en nuestro horario habitual.";
}
};


function tablaHorarios() {

    Object.entries(horarios).forEach(([dia, datos]) => {
    const horario = datos.cerrado ? "Cerrado." : `${datos.apertura}:00 hs - ${datos.cierre}:00 hs`;
    document.getElementById("tabla-horarios").innerHTML += `<p><strong>${dia}</strong> : ${horario}</p>`;
});
    
}

verificarHorario();
tablaHorarios();
