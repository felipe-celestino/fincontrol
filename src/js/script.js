document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mes").addEventListener("change", mudarTexto);

    function mudarTexto() {
      var select = document.getElementById("mes");
      var selectedValue = select.options[select.selectedIndex].text;

      document.getElementById("textoMudado").textContent = "Historico de " + selectedValue;
    }
  });
console.log("Bem vindos!")