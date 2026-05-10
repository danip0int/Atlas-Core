
/* PAGINA ENTRENAMIENTOS */

const btnCalcular = document.getElementById("btn-calcular");

function calcularCalorias() {
    try {
     let campoPeso = Number(peso.value);
    let campoEdad = Number(edad.value);
    let campoAltura = Number(altura.value);
    
   if (isNaN(campoPeso) || campoPeso <= 0 || isNaN(campoAltura) || campoAltura <= 0 || isNaN(campoEdad) || campoEdad <= 0) {
    throw new Error("Los datos ingresados no son válidos");
} else{
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
    }
    } catch(error){
        console.log(error.message);
    } 
    

}


btnCalcular.addEventListener("click", () => {
    calcularCalorias();
});