const analyzer = {
  getWordCount: (text) => {
    const palabras = text.split(/\s+/);
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > 0) {
        count++;
      }
    }
    return count;
  },
  getCharacterCount: (text) => {
    const caracteres = text.length;
    return caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (/[a-zA-Z]/.test(text[i])) {
        count++;
      }
    }
    return count;
  },
  getAverageWordLength: (text) => {
    const palabras = text.split(/\s+/);
    let totalCaracteres = 0;
    let wordCount = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > 0) {
        totalCaracteres += palabras[i].length;
        wordCount++;
      }
    }
    let promedio = 0;
    if (wordCount > 0) {
      promedio = totalCaracteres / wordCount;
    }
    return "" + parseFloat(promedio.toFixed(1));
  },
  getNumberCount: (text) => {
    const palabras = text.split(/\s+/);
    let count = 0;
    
    for (let i = 0; i < palabras.length; i++) {
     
      if (!isNaN(palabras[i])) {
        count++;
      }

    }//for
    return count;
  },
  getNumberSum: (text) => {
    const numeros = text.match(/\b\d+(\.\d+)?\b/g) || [];
    const suma = numeros.reduce((acc, num) => acc + parseFloat(num), 0);
    return suma;
  }
};
export default analyzer;