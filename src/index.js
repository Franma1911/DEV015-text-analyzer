import analyzer from './analyzer.js';

const texto = document.getElementById("inputText");
const button = document.getElementById("limpiarButton");

button.onclick = () => {
  texto.value = ""; // Limpiar el campo de texto
  document.getElementById('resultados').innerHTML = ""; // Limpiar los resultados
};

texto.onkeyup = () => {
  let text = texto.value;

  let caracteres = analyzer.getCharacterCount(text);
  let letras = analyzer.getCharacterCountExcludingSpaces(text);
  let numeros = analyzer.getNumberCount(text);
  let palabrasTotales = analyzer.getWordCount(text);
  let longitudPromedioPalabras = analyzer.getAverageWordLength(text);
  let sumaNumeros = analyzer.getNumberSum(text);
  
  let resultadosHTML = `
  <h2>Resultados:</h2>
  <div class="caracteristica">
    <p>Número de caracteres: ${caracteres}</p>
  </div>
  <div class="caracteristica">
    <p>Número de letras: ${letras}</p>
  </div>
  <div class="caracteristica">
    <p>Cantidad de números: ${numeros}</p>
  </div>
  <div class="caracteristica">
    <p>Número de palabras: ${palabrasTotales}</p>
  </div>
  <div class="caracteristica">
    <p>Longitud promedio de palabras: ${longitudPromedioPalabras}</p>
  </div>
  <div class="caracteristica">
    <p>Suma de números: ${sumaNumeros}</p>
  </div>
`;

  document.getElementById('resultados').innerHTML = resultadosHTML;
};
