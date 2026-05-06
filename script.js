let mensagem = "";
let numero;
do {
    numero = Number(prompt("Insira o número desejado para que seja feita a tabuada"));
} while (isNaN(numero))
for (let i = 1; i <= 10; i ++) {
    mensagem = `${mensagem}${i} vezes ${numero} é igual a ${numero * i}
`;
    alert(mensagem);
}