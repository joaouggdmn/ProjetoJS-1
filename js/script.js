// Referenciar o input, o button e a lista

let input = document.querySelector('input[name=tarefa]');   
let button = document.querySelector('#botao');
let lista = document.querySelector('#lista');

let tarefas = [
    'Estudar JavaScript',
    'Fazer exercícios',
    'Ler um livro'
]

function renderizarTarefas() {
    for(tarefa of tarefas){

        //criar um item na lista
        let itemLista = document.createElement('li');

        //adicionar classes do bootstrap no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);

    }
}

renderizarTarefas();

//<li class="list-group-item list-group-item-action">Jogar</li>