
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
    if (datos[a].tipo === 'basico') {
      switch (datos[a].dato) {
        case "nombre":
          nombre.innerHTML = `${datos[a].valor1} ${datos[a].valor2}`
        case "dni":
          dni.innerHTML = `${datos[a].valor1}`
        case "numTarjSanitaria":
          numtarjsanitaria.innerHTML = `${datos[a].valor1}`
        case "fecNac":
          fechanacimiento.innerHTML = `${datos[a].valor1}`
        case "sexo":
          sexo.innerHTML = `${datos[a].valor1}`
        case "telf":
          telf.innerHTML = `${datos[a].valor1}`
        case "region":
          region.innerHTML = `${datos[a].valor1} ${datos[a].valor2}`
      }
    }
    else if (datos[a].tipo === 'medicamento') {
      let li = document.createElement('li')
      li.innerHTML = `${datos[a].dato} ${datos[a].valor1} ${datos[a].valor2}`
      tratamientos.appendChild(li)
    }
    else if (datos[a].tipo === 'patologia') {
      let li = document.createElement('li')
      li.innerHTML = `${datos[a].dato} ${datos[a].valor1} ${datos[a].valor2}`
      patologias.appendChild(li)
    }
  }

  //Datos constantes vitales
  for (let a = 0; a < datosConsVit.length; a++) {
    let li = document.createElement('li')
    li.innerHTML = `${datosConsVit[a].tipo} ${datosConsVit[a].valorMedida} ${datosConsVit[a].fechaMedida}`
    consVit.appendChild(li)
  }
}