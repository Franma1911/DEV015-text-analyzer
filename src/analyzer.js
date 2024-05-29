const analyzer = {
  getWordCount: (text) => {
    let palabras = text.split(/\s+/).filter(function(palabra) {
      return palabra.length > 0;
    }).length;
    return palabras;
  },
  getCharacterCount: (text) => {
    let caracteres = text.length;
    return caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    let letras = text.replace(/[^a-zA-Z]/g, '').length;
    return letras;
  },
  getAverageWordLength: (text) => {
    let palabras = text.split(/\s+/).filter(function(palabra) {
      return palabra.length > 0;
    });
    let totalCaracteres = palabras.reduce((acc, palabra) => acc + palabra.length, 0);
    let promedio = 0;
    if(palabras.length > 0){
      promedio = totalCaracteres / palabras.length;
    }
    return parseFloat(promedio.toFixed(1)); // Convertir a número decimal
  },
  getNumberCount: (text) => {
    let numeros = text.replace(/\D/g, '').length;
    return numeros;
  },
  getNumberSum: (text) => {
    let numeros = text.match(/\d+/g);
    if (!numeros) return 0; 
    let suma = numeros.reduce((acc, num) => acc + parseInt(num, 10), 0);
    return suma;
  }
};

export default analyzer;
