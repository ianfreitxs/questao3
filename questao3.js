function alterarConteudo() {
    let novoConteudo = prompt("Digite o novo conteúdo:");
    if (novoConteudo) {
        document.getElementById("paragrafo").textContent = novoConteudo;
    }
}