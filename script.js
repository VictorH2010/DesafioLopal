let numerosDigitados;
let soma = 0
let media
let quantidadeDeNumeros = 0

while (numerosDigitados != 0) {
numerosDigitados = Number(prompt("insira um número"));
soma = soma + numerosDigitados
quantidadeDeNumeros = quantidadeDeNumeros + 1
media = soma / quantidadeDeNumeros
}
alert(`A soma dos números digitados é ${soma}.\nvocê digitou um total de ${quantidadeDeNumeros} números.\na média desses números é de ${media}.`)