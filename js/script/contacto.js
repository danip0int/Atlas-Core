
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