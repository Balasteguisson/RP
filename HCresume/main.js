
document.addEventListener('DOMContentLoaded', function () {
  console.log('Hola mundo')
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  let url = `/obtenerResumenHC?codPaciente=${id}`;
  console.log(url);

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });

});