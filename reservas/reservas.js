//Json salones
function mostrarData() {
    let datos = localStorage.getItem('data');
    let pepe = JSON.parse(datos)
    console.log( pepe);
       

    for (let item of pepe){
        let nombre  =  item.nombre;
        let apellido =  item.apellido;
        let email =  item.email;
        let salon =   item.salon;
        let menu =  item.menu;
        let fecha =   item.fecha;

        console.log('', item.nombre);
        document.getElementById('nombre').innerHTML = `${nombre}`;
        document.getElementById('apellido').innerHTML = `${apellido}`;
        document.getElementById('email').innerHTML = `${email}`;
        document.getElementById('salon').innerHTML = `${salon}`;
        document.getElementById('menu').innerHTML = `${menu}`;
        document.getElementById('fecha').innerHTML = `${fecha}`;

    }
    
    
    
    
    //  nombre = document.querySelector('#nombres')
    // nombre.innerHTML = '';
    //  apellido = document.querySelector('#apellidos')
    // apellido.innerHTML = '';
    //  email = document.querySelector('#email')
    // email.innerHTML = '';
    //  salon = document.querySelector('#salon')
    // salon.innerHTML = '';
    //  menu = document.querySelector('#menu')
    // menu.innerHTML = '';
    //  fecha = document.querySelector('#fecha')
    // fecha.innerHTML = '';
    
}
console.log('pepe');
mostrarData()

function volver() {
    window.location.href = ".././main/index.html"
}