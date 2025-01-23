let amigos = [];

function adicionarAmigo(){
    //captura o valor do campo
    let input = document.getElementById('amigo');
    let nome = input.value;

    if (nome == ""){
        alert("Por favor, insira um nome válido.");
        return;
    }


    //Add o nome no array
    amigos.push(nome);

    atualizaListaAmigos();

    //Limpa o campo para receber o próximo nome
    input.value = "";

    //Foco no campo para ser preenchido
    input.focus();

}



//Função para mostrar a lista de amigos adicionada na tela

function atualizaListaAmigos(){
    //Captura o elemento da lista <ul>
    const lista = document.getElementById('listaAmigos');

    //Limpar lista atual para evitar duplicação
    lista.innerHTML = "";

    //Itera sobre o array de amigos e adiciona a lista como um item <li>
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        //Adiciona o botão remover ao lado de cada nome
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "Remover";
        botaoRemover.className = "button-remove";

        // Define a função para remover o nome específico ao clicar
        botaoRemover.onclick = () => removerAmigo(index);

        // Adiciona o botão ao item da lista
        li.appendChild(botaoRemover);

        // Adiciona o item da lista (li) à lista (ul)
        lista.appendChild(li);
        }
    );
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    // Remove o nome do array com base no índice
    amigos.splice(index, 1);

    // Atualiza a exibição da lista
    atualizaListaAmigos();
}

//Função para sortear um amigo
function sortearAmigo(){
    //Verifica se há amigos na lista
    if (amigos.length == 0){
        alert("Adicione pelo menos um nome de amigo.")
        return;
    }

    //Gera um indice aleatório com base no tamanho do array
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    //Pega o nome correspondente ao indice sorteado
    const amigoSorteado = amigos[indiceSorteado];

    //Exibe o resultado na interface
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

}