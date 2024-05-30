const analyzer = {
  getWordCount: (text) => {
    const palabras = text.split(/\s+/).filter(function(palabra) {
      return palabra.length > 0;
    }).length;
    return palabras;
  },
  getCharacterCount: (text) => {
    const caracteres = text.length;
    return caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const letras = text.replace(/[^a-zA-Z]/g, '').length;
    return letras;
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(/\s+/).filter(function(palabra) {
      return palabra.length > 0;
    });
    const totalCaracteres = palabras.reduce((acc, palabra) => acc + palabra.length, 0);
    let promedio = 0;
    if(palabras.length > 0){
      promedio = totalCaracteres / palabras.length;
    }
    return parseFloat(promedio.toFixed(1)); // Convertir a número decimal
  },
  getNumberCount: (text) => {
    const numeros = text.replace(/\D/g, '').length;
    return numeros;
  },
  getNumberSum: (text) => {
    const numeros = text.match(/\d+/g);
    if (!numeros) return 0; 
    const suma = numeros.reduce((acc, num) => acc + parseInt(num, 10), 0);
    return suma;
  }
};

export default analyzer;
