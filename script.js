let escolha;
// let escolha serve para guardar a escolha do usuário 
while (escolha != 3) {
    // while (escolha != 3) significa que enquanto a esolha do usuário não for 3 o código irá continuar se repetindo
    escolha = prompt("Menu\n1-Inserir produto.\n2-Listar produtos.\n3-Sair");
    if (escolha == 3) {
        // "==" serve para atribuir valor para uma variável
        alert("Sistema encerrando.")
    }
}