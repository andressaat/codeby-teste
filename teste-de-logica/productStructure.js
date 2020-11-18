const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  // Código aqui
  return products.reduce((acc, str)=> {
    let data = str.split('-');
    
    let cor = data[0];
    let tam = data[1];
  
    acc[cor] = {
      ...acc[cor],
      [tam]: acc[cor] ? acc[cor][tam] ? acc[cor][tam] +1 :  1 : 1
    }
    return acc;
  
  }, {});
}