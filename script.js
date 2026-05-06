let mensagem = "";
let numero;

do {
    numero = Number(prompt("Insira o número desejado para que seja feita a tabuada"));
} while (isNaN(numero))
// while (isNaN(numero)) equanto o usuário não digitar um número o comando ficará se repetindo.
for (let i = 1; i <= 10; i++) {
// for tem basicamente a mesma função do while porém com uma quantidade predefinida de vezes para ser executado.
// ++ serve como se fosse "+1".
    mensagem = `${mensagem}${i} vezes ${numero} é igual a ${numero * i}
`;
    alert(mensagem);
}