let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

//generar entero aleatorio
function generarEnteroAl(min, max){
    //sin incluir max en los valores posibles
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAl(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`
    autorElem.innerText = `${citas[indiceAleatorio].autor}`

}
cambiarCita();
botonElem.addEventListener('click', cambiarCita);