let planSeleccionado = {nombre:null, precio:null};

let extrasSeleccionados = [];

const carritoPlan = document.getElementById("carrito-plan");
const carritoExtras = document.getElementById("carrito-extras");
const carritoTotal = document.getElementById("carrito-total");

function actualizarCarrito() {
    carritoPlan.innerHTML = `<p>${planSeleccionado.nombre} - $${Number(planSeleccionado.precio).toLocaleString("es-AR")}</p>`;
    carritoExtras.innerHTML = "";
    extrasSeleccionados.forEach((extra) => {
        carritoExtras.innerHTML += `<p>${extra.nombre} - $${extra.precio.toLocaleString("es-AR")}</p>`;
    });
    
    const totalExtras = extrasSeleccionados.reduce((acc, extra) => acc + extra.precio, 0);
    const total = Number(planSeleccionado.precio) + totalExtras;
    carritoTotal.textContent = `$${total.toLocaleString("es-AR")}`;
}


document.addEventListener("click", (event) => {
    const plan = event.target.dataset.plan;
    const precio = event.target.dataset.precio;
    const servicio = event.target.dataset.servicio;
    
    if (plan) {
        planSeleccionado.nombre = plan;
        planSeleccionado.precio = precio;
        actualizarCarrito();
    }

    if (servicio) {
        const yaAgregado = extrasSeleccionados.find(extra => extra.nombre === servicio);
        if (yaAgregado) {
            extrasSeleccionados = extrasSeleccionados.filter(extra=>extra.nombre !== servicio);
        } else{
            extrasSeleccionados.push({nombre:servicio, precio: Number(precio)});

        }
        actualizarCarrito();
    }
    document.getElementById("carrito").classList.add("visible");
});

document.getElementById("btn-contratar").addEventListener("click", () => {
    document.getElementById("carrito-plan").style.display = "none";
    document.getElementById("carrito-extras").style.display = "none";
    document.getElementById("carrito-total").parentElement.style.display = "none";
    document.getElementById("btn-contratar").style.display = "none";
    document.getElementById("formulario-contacto").classList.add("visible");
});