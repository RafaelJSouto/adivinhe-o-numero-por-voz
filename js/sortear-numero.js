const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio(){
   //return Math.floor(Math.random() * 10)
   return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número Secreto:', numeroSecreto)
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor