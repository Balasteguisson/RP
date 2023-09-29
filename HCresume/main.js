
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  let url = `/obtenerResumenHC?codPaciente=${id}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loadInfo(data);
    })
    .catch(function (error) {
      console.error(error);
    });

});

const loadInfo = (datosPac) => {
  let datos = datosPac[0]
  let datosConsVit = datosPac[1]
  //elementos pagina
  let nombre = document.getElementById('nombre')
  let dni = document.getElementById('dni')
  let numtarjsanitaria = document.getElementById('numTarjSanitaria')
  let fechanacimiento = document.getElementById('fechaNacimiento')
  let sexo = document.getElementById('sexo')
  let telf = document.getElementById('telf')
  let region = document.getElementById('region')
  let consVit = document.getElementById('constVit')
  let tratamientos = document.getElementById('tratamientos')
  let patologias = document.getElementById('patologiasUL')

  //Limpiar datos
  tratamientos.innerHTML = ''
  patologias.innerHTML = ''
  consVit.innerHTML = ''

  //Datos paciente
  for (let a = 0; a < datos.length; a++) {
    let datosPac = {}
    datosPac = datos[a]
    if (datosPac.tipo === 'basico') {
      switch (datosPac.dato) {
        case "nombre":
          nombre.innerHTML = `${datosPac.valor1} ${datosPac.valor2}`
        case "DNI":
          dni.innerHTML = `${datosPac.valor1}`
        case "numTarjSanitaria":
          numtarjsanitaria.innerHTML = `${datosPac.valor1}`
        case "fecNac":
          fechanacimiento.innerHTML = `${datosPac.valor1}`
        case "sexo":
          sexo.innerHTML = `${datosPac.valor1 == 1 ? 'Hombre' : 'Mujer'}`
        case "telf":
          telf.innerHTML = `${datosPac.valor1}`
        case "region":
          region.innerHTML = `${datosPac.valor1} ${datosPac.valor2}`
      }
    }
    else if (datosPac.tipo === 'medicamento') {
      let li = document.createElement('li')
      li.innerHTML = `${datosPac.dato} ${datosPac.valor1.substring(0, 10)} ${datosPac.valor2.substring(0, 10)}`
      console.log(datosPac.valor2.substring(0, 10))
      tratamientos.appendChild(li)
    }
    else if (datosPac.tipo === 'patologia') {
      let li = document.createElement('li')
      li.innerHTML = `${datosPac.dato} ${datosPac.valor1} ${datosPac.valor2.substring(0, 10)}`
      patologias.appendChild(li)
    }
  }

  //Datos constantes vitales
  for (let a = 0; a < datosConsVit.length; a++) {
    let li = document.createElement('li')
    li.innerHTML = `${datosConsVit[a].tipo} ${datosConsVit[a].valorMedida} ${datosConsVit[a].fechaMedida.substring(0, 10)}`
    consVit.appendChild(li)
  }
}