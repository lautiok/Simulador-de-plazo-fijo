function formatInput(element) {
    var valor = element.value;
  
    // Remover cualquier separador de miles existente (puntos o comas)
    var valorSinSeparador = valor.replace(/[.,]/g, '');
  
    // Agregar el separador de miles solo si es el primer input
    if (element.id === "monto") {
      var valorConSeparador = valorSinSeparador.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      element.value = valorConSeparador;
    } else {
      element.value = valorSinSeparador;
    }
  }
  
  function calcularPlazoFijo() {
    var monto = parseFloat(document.getElementById("monto").value.replace(/[.,]/g, ''));
    var porcentajeAnual = parseFloat(document.getElementById("porcentaje").value);
  
    var porcentajeMensual = porcentajeAnual / 12 / 100;
    var montoMensual = monto * porcentajeMensual;
    var gananciaTotal = montoMensual;
  
    var gananciaFormateada = gananciaTotal >= 1000 ? gananciaTotal.toLocaleString() : gananciaTotal.toFixed(2);
  
    document.getElementById("ganancia").innerHTML = "La ganancia generada mensualmente es: $" + gananciaFormateada;
  }

var button = document.querySelector('.button');
var nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});