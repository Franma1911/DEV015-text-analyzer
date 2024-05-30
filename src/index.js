import analyzer from './analyzer.js';

const button = document.getElementById("reset-button");
const texto = document.querySelector("textarea");

button.addEventListener('click', () => {
  texto.value = ""; // Limpiar el campo de texto
  document.getElementById('resultados').innerHTML = ""; // Limpiar los resultados
});

texto.addEventListener('input', () => {
  const text = texto.value;
  const caracteres = analyzer.getCharacterCount(text);
  const letras = analyzer.getCharacterCountExcludingSpaces(text);
  const numeros = analyzer.getNumberCount(text);
  const palabrasTotales = analyzer.getWordCount(text);
  const longitudPromedioPalabras = analyzer.getAverageWordLength(text);
  const sumaNumeros = analyzer.getNumberSum(text);
  
  const resultados = document.getElementById("resultados");
  resultados.innerHTML= "";

  const ul = document.createElement("ul");
  
  const li_numero_caracteres = document.createElement("li");
  li_numero_caracteres.className = "marcadores";
  li_numero_caracteres.innerHTML = "Numero de caracteres : " +caracteres;

  const li_numero_letras = document.createElement ("li");
  li_numero_letras.className = "marcadores";
  li_numero_letras.innerHTML = "Número de letras: " + letras;

  const li_cantidad_numeros = document.createElement ("li");
  li_cantidad_numeros.className = "marcadores";
  li_cantidad_numeros.innerHTML = "Cantidad de numeros: " +numeros;

  const li_numero_palabras = document.createElement ("li");
  li_numero_palabras.className = "marcadores";
  li_numero_palabras.innerHTML = "Número de palabras: " + palabrasTotales;

  const li_longuitud_promedio_palabras = document.createElement ("li");
  li_longuitud_promedio_palabras.className = "marcadores";
  li_longuitud_promedio_palabras.innerHTML = "longuitud promedio de palabras: " + longitudPromedioPalabras;

  const li_suma_numeros = document.createElement ("li");
  li_suma_numeros.className = "marcadores";
  li_suma_numeros.innerHTML = "suma de numeros: " + sumaNumeros; 

  ul.appendChild(li_numero_caracteres);
  ul.appendChild(li_numero_letras);
  ul.appendChild(li_cantidad_numeros);
  ul.appendChild(li_numero_palabras);
  ul.appendChild(li_longuitud_promedio_palabras);
  ul.appendChild(li_suma_numeros);

  resultados.appendChild(ul);

});