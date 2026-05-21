const modalGaleria = document.getElementById("modal-galeria");
const modalGaleriaCerrar = document.getElementById("modal-galeria-cerrar");
const modalGaleriaImg = document.getElementById("modal-galeria-img");
const modalGaleriaTitulo = document.getElementById("modal-galeria-titulo");

let imagenesActuales = [];
let indiceActual = 0;

document.addEventListener("click", (event) => {
    const item = event.target.closest("[data-imagenes]");
    if (item) {
        imagenesActuales = JSON.parse(item.dataset.imagenes);
        indiceActual = 0;
        modalGaleriaTitulo.textContent = item.dataset.titulo;
        modalGaleriaImg.src = imagenesActuales[indiceActual];
        modalGaleria.classList.add("visible");
        document.body.style.overflow = "hidden";
        actualizarFlechas();
    }
});

modalGaleriaCerrar.addEventListener("click", () => {
    modalGaleria.classList.remove("visible");
    document.body.style.overflow = "";
});

document.getElementById("btn-anterior").addEventListener("click", () => {
    indiceActual--;
    modalGaleriaImg.src = imagenesActuales[indiceActual];
    actualizarFlechas();
});

document.getElementById("btn-siguiente").addEventListener("click", () => {
    indiceActual++;
    modalGaleriaImg.src = imagenesActuales[indiceActual];
    actualizarFlechas();
});

function actualizarFlechas() {
    document.getElementById("btn-anterior").style.display = indiceActual === 0 ? "none" : "block";
    document.getElementById("btn-siguiente").style.display = indiceActual === imagenesActuales.length - 1 ? "none" : "block";
}