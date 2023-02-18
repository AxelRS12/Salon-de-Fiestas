


const Usuarios = [ "Axel", "Mario", "Pepe"];

let usuario = prompt('Ingrese Usuario/ usuario: Pepe');

let validar = Usuarios.includes(usuario);
console.log('usuario', validar);

while(!validar) {
    alert("Las credenciales no son correctas, por favor intente de nuevo");
    usuario = prompt('Ingrese Usuario ');
    validar = Usuarios.includes(usuario);
    console.log('usuario', validar);
}





let dia = prompt("Ingrese el dia fecha de reserva", 1);
let mes = prompt("Ingrese el mes fecha de reserva", 1);
let anio = prompt("Ingrese el año fecha de reserva (yyyy)", 1900);

if (dia <= 0 || mes <= 0 || anio <= 0) {
    alert('Por favor ingrese dato correcto');
    dia = prompt("Ingrese el dia fecha de reserva", 1);

    mes = prompt("Ingrese el mes fecha de reserva", 1);

    anio = prompt("Ingrese el año fecha de reserva (yyyy)", 1900);
}

while ( isNaN(dia) || isNaN(mes) || isNaN(anio)) {
    alert("Debe ingresar números para poder operar, intente de nuevo"); 

    dia = prompt("Ingrese el dia fecha de reserva", 1);

    mes = prompt("Ingrese el mes fecha de reserva", 1);

    anio = prompt("Ingrese el año fecha de reserva (yyyy)", 1900);
    
}

//Valor de cada salon por defecto 
let salonA = 0;
let salonB = 0;
let salonC = 0;


let salon = prompt(`Elija Salon a reservar disponible\n A-Salon A \n B-Salon B \n C- Salon C`);

alert(`Reserva realizada el día ${dia}/${mes}/${anio}, salon reservado: Salon ${ salon.toUpperCase()}`);
//segun seleccion se pone precio para pasar por parametro a la funcion

if (salon == "a" || salon == "A") {
    salonA = 1800;
}else if (salon == "b" || salon == "B") {
    salonB = 1500;
}else if (salon == "c" || salon == "C") {
    salonC = 1200;
}
console.log(salonA, salonB, salonC);

let fechaReserva = document.getElementById("fechaReserva");
fechaReserva.innerHTML = (`Fecha reservada ${dia}/${mes}/${anio}, salon reservado: Salon ${ salon.toUpperCase()}`);

//Se elige la comida y segun la seleccion se carga el precio en variable para agregarla a la funcion
let opcionComida = parseInt(prompt("Ingresando el numero correspondiente, elija Catering: \n 1 - Parrilla \n 2 - Sushi Party \n 3- Pizzas \n 4- Menú Vegetariano"));
let vegetariano = prompt("Agregar Opcion vegetariana?");
let menuElegido = document.getElementById("parrafo1");

let comida = 0;
    switch (opcionComida) {
        case 1:
            alert(`El menú elegido es: Parrilla`);
            menuElegido.innerText = (`Menú elegido es Parrilla, opción vegetariana ${vegetariano}`);
            comida = 1000;
            break;
        case 2:
            alert(`El menú elegido es: Sushi Party`);            
            menuElegido.innerHTML = (`Menú elegido es Sushi Party, opción vegetariana ${vegetariano}`);
            comida = 1000;
            break;  
        case 3: 
            alert(`El menú elegido es: Pizzas`);
            menuElegido.innerHTML = (`Menú elegido es Pizzas, opción vegetariana ${vegetariano}`);
            comida = 800;
            break;             
        case 4: 
            alert(`El menú elegido es: Menú Vegetariano`);
            menuElegido.innerHTML = (`Menú elegido es Menú Vegetariano`);
            comida = 550;
            break;        
        default:
            alert("Opción seleccionada inválida");
            break;
    }

    //log para chequeo
console.log('valor comida ', comida);

//Valor de cada catering por defecto
// comidaOpcion1 = 1000;
// comidaOpcion2 = 1000;
// comidaOpcion3 = 800;
// comidaOpcion4 = 550;


//total funcion
let total= 0;

//se pasa el valor del salon a variable que se encuentra en funcion
let salonElegido = 0;


if (!salonA == 0) {
    salonElegido = salonA
} else if (!salonB == 0) {
    salonElegido = salonB
} else if (!salonC == 0) {
    salonElegido = salonC
} 
//log chequeo
console.log("Salon elegido vale " , salonElegido);
//funcion sumatoria de ticket
function sumaPrecio(salonElegido, comida) {
    total = parseInt(salonElegido) + parseInt(comida);
    return total;
}
//llamamos funcion
total = sumaPrecio(salonElegido, comida );

console.log('total ', total);

let imprimirTicket = document.getElementById("totalTicket");
imprimirTicket.innerHTML = (`Total: ${total}`);



alert('Total de la reserva: $' + total);
