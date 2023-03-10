let usuarioAdmin = function(nombre, password) {
    this.nombre = nombre;
    this.password = password;
}

let adminUno = new usuarioAdmin('Axel', '1234');
let adminDos = new usuarioAdmin('Pepe', '1234');

const Usuarios = [adminUno.nombre, adminDos.nombre];
const Password = [adminUno.password, adminDos.password];
//LOG IN
function login(){
    let user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("password").value;
   
    let validarUser = Usuarios.includes( user );
    console.log('usuario', validarUser);
    let validarPass = Password.includes( pass );
    console.log('contraseña', validarPass);

    if (validarUser && validarPass) {
        window.location.href = ".././main/index.html";
    }else{
        Swal.fire({                        
            icon: 'info',
            title: 'Ups',
            showClass:{
                popup: 'animate__animated animate__fadeInDown'},
            text: 'Usuario y/o contraseña incorrecta',
            });
    }
}



// while(!validar) {
//     alert("Las credenciales no son correctas, por favor intente de nuevo");
//     usuario = prompt('Ingrese Usuario ');
//     validar = Usuarios.includes(usuario);
//     console.log('usuario', validar);
// }