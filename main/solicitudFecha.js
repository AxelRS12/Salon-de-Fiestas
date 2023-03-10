//funciones
function seleccionarFecha(){    
    let date = document.getElementById("fecha").value
    console.log('fecha seleccionada', date);
    sessionStorage.setItem("fecha", date);    
    
    const respuesta = document.getElementById("datofecha");
    respuesta.textContent = `${date}`
}

function elegirSalon() {
    let salonElegido = document.getElementById("inlineFormCustomSelect").value
    console.log('salon', salonElegido);
    sessionStorage.setItem("salon", salonElegido); 
    if (salonElegido === "Elija...") {
        salonElegido = " "
    }
    const respuesta = document.getElementById("datosalon");
    respuesta.textContent = `${salonElegido}`
}

function irSalones() {
    window.location.href = ".././salones.html"
}