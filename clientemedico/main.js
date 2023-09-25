function login () {
  cambiarPantalla('pantallaPrincipal');
}

function logout () {
  cambiarPantalla('pantallaLogin');
}



function cambiarPantalla (destino) {
  let secciones = document.getElementsByClassName('seccion');
  for (let i = 0; i < secciones.length; i++) {
    if (secciones[i].id == destino) {
      secciones[i].classList.add('visible');
      secciones[i].classList.remove('oculto');
    } else {
      secciones[i].classList.add('oculto');
      secciones[i].classList.remove('visible');
    }
  }
  // document.getElementById(pantallaActual).classList.remove('visible');
  // document.getElementById(destino).classList.add('visible');
  pantallaActual = destino;
}