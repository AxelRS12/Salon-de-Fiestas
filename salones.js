//Json salones
const salonesExistenes = [
    {id: 1, nombre : "Salon A", precio: 1800},
    {id: 2, nombre : "Salon B", precio: 1500},
    {id: 3, nombre : "Salon C", precio: 1200}
 ];
salonesExistenes.forEach(item => {
    let datosSalon = document.createElement("datosSalon");
    datosSalon.innerHTML = `    
    <form id="formulario" class="hola p-3 mt-5 shadow border">
    <p>Nombre: ${item.nombre}</p>    
    <p>Precio: $${item.precio}</b>    
    <p> </p>
    <br>
    </form>
    `
    document.body.append(datosSalon);
});