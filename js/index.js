function formatInput(element) {
    const valor = element.value;
  
    // Remover cualquier separador de miles existente (puntos o comas)
    const valorSinSeparador = valor.replace(/[.,]/g, '');
  
    // Agregar el separador de miles solo si es el primer input
    if (element.id === "monto") {
      const valorConSeparador = valorSinSeparador.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      element.value = valorConSeparador;
    } else {
      element.value = valorSinSeparador;
    }
}
function calcularPlazoFijo() {
    const monto = parseFloat(document.getElementById("monto").value.replace(/[.,]/g, ''));
    const porcentajeAnual = parseFloat(document.getElementById("porcentaje").value);
  
    const porcentajeMensual = porcentajeAnual / 12 / 100;
    const montoMensual = monto * porcentajeMensual;
    const gananciaTotal = montoMensual;
  
    const gananciaFormateada = gananciaTotal >= 1000 ? gananciaTotal.toLocaleString() : gananciaTotal.toFixed(2);
  
    document.getElementById("ganancia").innerHTML = "La ganancia generada mensualmente es: $" + gananciaFormateada;
}
let button = document.querySelector('.button');
let nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('active');
});
