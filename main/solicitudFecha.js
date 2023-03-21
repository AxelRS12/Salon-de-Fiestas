//funciones

function verificarFecha() {
    let date = document.getElementById("fecha").value
    console.log('fecha a verificar', date);
      
    let verificarFecha = localStorage.getItem('fecha');
    console.log('fecha actual', verificarFecha);
    
    
    
    if (date === verificarFecha) {
        Swal.fire({                        
            icon: 'error',
            title: 'Ups',
            text: 'Fecha no disponible',
            });
            return false;
    }else{
        Swal.fire({            
            icon: 'success',
            title: 'Fecha disponible',
            showConfirmButton: true,            
          });                   
          return true;
    }
    
}
function reservar() {  

    let nombre = document.getElementById("nombres").value
    let date = document.getElementById("fecha").value      
    let apellido = document.getElementById("apellidos").value
    let email = document.getElementById("email").value
    let salonElegido = document.getElementById("salonSeleccionado").value
    console.log('salon', salonElegido); 
        
    let menuElegido = document.getElementById("comidaSeleccionada").value
        
    if (nombre == '' || apellido == '' || salonElegido == "Elija Salón" || menuElegido == '' || date == '')  {
        Swal.fire({                        
            icon: 'error',
            title: 'Ups',
            text: 'Complete los datos necesarios',
            });
    } else {
        date = document.getElementById("fecha").value
        console.log('fecha a verificar', date);
      
    let verificarFecha = sessionStorage.key(fecha)
    if (date === verificarFecha) {
        Swal.fire({                        
            icon: 'error',
            title: 'Ups',
            text: 'Fecha no disponible',
            });
            
    }else{
        localStorage.setItem("fecha", date);
        let arrayStorage = [
            {
                'nombre' : nombre,
                'apellido': apellido,
                'email': email,
                'salon': salonElegido,
                'menu' : menuElegido,
                'fecha' : date
            }
        ]
        
        let arrayJson = JSON.stringify(arrayStorage);
        localStorage.setItem("data", arrayJson);
        
        Swal.fire({
            icon: 'success',
            title: 'Reserva Guardada',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Ver Reserva',
            denyButtonText: 'Volver'
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = ".././reservas/reservas.html";
            } 
          })



    }
        
    }
    
    
    // https://api.weatherbit.io/v2.0/current?lat=-34.61315&lon=-58.37723&


}

function volver() {
    window.location.href = ".././reservas/reservas.html"
}
//mostrar clima actual
const climaActual = async () => {
    try {
        const resp = await fetch('https://api.tomorrow.io/v4/weather/realtime?location=buenosaires&apikey=zrzlH3Jpog4onZMe9fyA3pTwXwRrF9bz')
       
       if (resp.status === 200) {
        const datoClima = await resp.json()

        let clima = `Temperatura 
        ${datoClima.data.values.temperature} °C`;        

        document.getElementById('clima').innerHTML = clima;
        
       }else{
            console.log('Error al acceder a la API', resp.status);
       }
        
    } catch (error) {
        console.log(error);
    }
    
}
climaActual();


