    const modalGaleria = document.getElementById("modal-galeria");
    const modalGaleriaCerrar = document.getElementById("modal-galeria-cerrar");
    const modalGaleriaImg = document.getElementById("modal-galeria-img");
    const modalGaleriaTitulo = document.getElementById("modal-galeria-titulo");



    document.addEventListener("click", (event)=> {
        const item = event.target.closest("[data-src]");
        
        if(item){
            const src = item.dataset.src;
            const titulo = item.dataset.titulo;
            modalGaleriaImg.src = src;
            modalGaleriaTitulo.textContent = titulo;
            modalGaleria.classList.add("visible");
            document.body.style.overflow = "hidden";
        }
    });
    
    modalGaleriaCerrar.addEventListener("click", (event)=>{
        modalGaleria.classList.remove("visible");
        document.body.style.overflow = "";
    });
