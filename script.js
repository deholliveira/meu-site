function escolha(opcao) {
    let storyText = document.getElementById("story");
    let buttons = document.getElementById("game").getElementsByTagName("button");

    if (opcao === 1) {
        storyText.innerHTML = "A mensagem diz: 'Você aceita um convite VIP para a estreia de um filme especial?NÓS DOIS-A aventura continua!'. Topa?";
        buttons[0].innerText = "Sim, vou correndo!";
        buttons[1].innerText = "Melhor não...";
        
        buttons[0].setAttribute("onclick", "escolha(3)");
        buttons[1].setAttribute("onclick", "escolha(4)");
    }
    else if (opcao === 2) {
        storyText.innerHTML = "Opção invalida";
        buttons[0].style.display = "none";
        buttons[1].innerText = "Voltar";
        buttons[1].setAttribute("onclick", "location.reload()");
    }
    else if (opcao === 3) {
        storyText.innerHTML = "O que vem depois da cena pós-crédito?. ❤️";
        buttons[0].style.display = "none";
        buttons[1].innerText = "Final feliz!";
        buttons[1].setAttribute("onclick", "location.reload()");
    }
    else if (opcao === 4) {
        storyText.innerHTML = "Opçao invalida...";
        buttons[0].style.display = "none";
        buttons[1].innerText = "Tentar de novo";
        buttons[1].setAttribute("onclick", "location.reload()");
    }
}