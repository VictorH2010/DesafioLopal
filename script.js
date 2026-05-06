let numerosDigitados;
let soma = 0
let media
let quantidadeDeNumerosDigitados = 0

while (numerosDigitados != 0) {
// while serve basicamente como "enquanto", ou seja "enquanto" for diferente de 0 o código continuará se repetindo
    numerosDigitados = Number(prompt("insira um número"));
    soma = soma + numerosDigitados;
    quantidadeDeNumerosDigitados = quantidadeDeNumerosDigitados + 1;
    media = soma / quantidadeDeNumerosDigitados;
}
alert(`A soma dos números digitados é ${soma}.\nvocê digitou um total de ${quantidadeDeNumerosDigitados.toFixed(2)} números.\na média desses números é de ${media}.`);
// o comando \n serve para quebra de linha 