let planSeleccionado = {nombre:null, precio:null};

let extrasSeleccionados = [];

const carritoPlan = document.getElementById("carrito-plan");
const carritoExtras = document.getElementById("carrito-extras");
const carritoTotal = document.getElementById("carrito-total");

function actualizarCarrito() {
    carritoPlan.innerHTML = `<p>${planSeleccionado.nombre} - $${Number(planSeleccionado.precio).toLocaleString("es-AR")}</p>`;
    carritoExtras.innerHTML = "";
    extrasSeleccionados.forEach((extra) => {
        carritoExtras.innerHTML += `
    <p>${extra.nombre} - $${extra.precio.toLocaleString("es-AR")} 
        <button class="btn-eliminar" data-eliminar="${extra.nombre}">✕</button>
    </p>`;
        
    });
    
    const totalExtras = extrasSeleccionados.reduce((acc, extra) => acc + extra.precio, 0);
    const total = Number(planSeleccionado.precio) + totalExtras;
    carritoTotal.textContent = `$${total.toLocaleString("es-AR")}`;

}


document.addEventListener("click", (event) => {
    const plan = event.target.dataset.plan;
    const precioPlan = event.target.dataset.precio;
    const servicio = event.target.closest("[data-servicio]")?.dataset.servicio;
    const precioServicio = event.target.closest("[data-servicio]")?.dataset.precio;
    
    if (plan) {
        event.preventDefault();
        document.getElementById("btn-toggle-carrito").style.display = "flex";
        planSeleccionado.nombre = plan;
        planSeleccionado.precio = precioPlan;
        actualizarCarrito();
    }

    if (servicio && event.target.classList.contains("btn-agregar")) {
        document.getElementById("btn-toggle-carrito").style.display = "flex";
    const yaAgregado = extrasSeleccionados.find(extra => extra.nombre === servicio);
    if (!yaAgregado) {
        extrasSeleccionados.push({nombre: servicio, precio: Number(precioServicio)});
        actualizarCarrito();
    }
}

    if (plan || event.target.classList.contains("btn-agregar")) {
    const carrito = document.getElementById("carrito");
    if (!carrito.classList.contains("visible")) {
        carrito.classList.add("visible");
    }
}
});

document.getElementById("btn-contratar").addEventListener("click", () => {
    document.getElementById("carrito-plan").style.display = "none";
    document.getElementById("carrito-extras").style.display = "none";
    document.getElementById("carrito-total").parentElement.style.display = "none";
    document.getElementById("btn-contratar").style.display = "none";
    document.getElementById("formulario-contacto").classList.add("visible");
});

document.getElementById("btn-toggle-carrito").addEventListener("click", () => {
    document.getElementById("carrito").classList.toggle("visible");
});

const btnConfirmar = document.getElementById("btn-confirmar");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputDNI = document.getElementById("input-dni");
const inputMail = document.getElementById("input-mail");
const inputTel = document.getElementById("input-tel");
const campoTitular = document.getElementById("input-titular");
const campoVencimiento = document.getElementById("input-vencimiento");
const campoDomicilio = document.getElementById("input-domicilio");



function confirmarCompra() {
let campoNombre = inputNombre.value;
let campoApellido = inputApellido.value;
let campoDNI = Number(inputDNI.value);
let campoTel = Number(inputTel.value);
let campoMail = inputMail.value;
const campotarjeta = document.getElementById("input-tarjeta").value;
const campotitular = campoTitular.value;
const campoVencimientoVal = campoVencimiento.value;
const campoDomicilioVal = campoDomicilio.value;
const eleccionPago = selectPago.value;


try{

   if (campoNombre === "" || campoApellido === "" || campoDNI === "" || campoMail === "" || campoTel === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoMail) || selectPago.value === "") {
    throw new Error("Completá todos los campos correctamente"); 
}
if (eleccionPago === "credito" || eleccionPago === "debito") {
    if (campotitular === "" || campotarjeta === "" || campoVencimientoVal === "" || campoDomicilioVal === "" ) {
        throw new Error("Los datos ingresados no son válidos. Intente nuevamente.");
    }
    
}

Toastify({
text: "¡Suscripción confirmada!",
duration: 3000,
gravity: "bottom",
position: "center",
style: { background: "#eb5e28" }
}).showToast();

document.getElementById("modal-confirmacion").classList.add("visible");
document.getElementById("modal-mensaje").innerHTML = `Hola ${campoNombre}, tu suscripción al ${planSeleccionado.nombre} fue procesada. Te enviamos los detalles a ${campoMail}.`;
document.getElementById("carrito").classList.remove("visible");
document.getElementById("btn-toggle-carrito").style.display = "none";
planSeleccionado = {nombre: null, precio: null};
extrasSeleccionados = [];
document.getElementById("formulario-contacto").classList.remove("visible");
document.getElementById("carrito-plan").innerHTML = "";
document.getElementById("carrito-extras").innerHTML = "";
document.getElementById("carrito-total").textContent = "$0";
inputNombre.value = "";
inputApellido.value = "";
inputDNI.value = "";
inputMail.value = "";
inputTel.value = "";
selectPago.value = "";
document.getElementById("input-tarjeta").value = "";
document.getElementById("input-titular").value = "";
document.getElementById("input-vencimiento").value = "";
document.getElementById("input-domicilio").value = "";
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
document.getElementById("modal-conf-cerrar").addEventListener("click", () => {
    document.getElementById("modal-confirmacion").classList.remove("visible");
});

carritoExtras.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-eliminar")) {
        const nombre = event.target.dataset.eliminar;
        extrasSeleccionados = extrasSeleccionados.filter(extra => extra.nombre !== nombre);
        actualizarCarrito();
    }
});


btnConfirmar.addEventListener("click", confirmarCompra);


const selectPago = document.getElementById("select-pago");
const campoTarjeta = document.getElementById("campos-tarjeta");
const camposTransferencia = document.getElementById("campos-transferencia");


selectPago.addEventListener("change", () =>{
    campoTarjeta.style.display = "none";
camposTransferencia.style.display = "none";

const eleccionPago = selectPago.value;

if (eleccionPago === "credito" || eleccionPago === "debito") {
    campoTarjeta.style.display = "flex";
} else{
    camposTransferencia.style.display = "flex";
}

})



document.getElementById("input-tarjeta").addEventListener("input", (event) => {
    let valor = event.target.value.replace(/\D/g, "");
    valor = valor.substring(0, 16);
    event.target.value = valor.replace(/(.{4})/g, "$1 ").trim();
});

document.getElementById("input-dni").addEventListener("keydown", (event) => {
    if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
        event.preventDefault();
    }
});

document.getElementById("input-tel").addEventListener("keydown", (event) => {
    if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
        event.preventDefault();
    }
});
document.getElementById("input-vencimiento").addEventListener("input", (event) => {
    let valor = event.target.value.replace(/\D/g, "");
    valor = valor.substring(0, 4);
    if (valor.length >= 2) {
        valor = valor.substring(0, 2) + "/" + valor.substring(2);
    }
    event.target.value = valor;
});