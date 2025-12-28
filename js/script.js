// Referenciar o input, o button e a lista

let input = document.querySelector('input[name=tarefa]');   
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');

//varável global
let card = document.querySelector('.card');


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas() {

    //limpar a lista antes de renderizar
    lista.innerHTML ='';

    //percorrer o array de tarefas
    for(tarefa of tarefas){

        //criar um item na lista
        let itemLista = document.createElement('li');

        //adicionar classes do bootstrap no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //adicionar um evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        //criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);

    }
}

renderizarTarefas();

//escutando o clique no botão
btn.onclick = function (){
    //recuperar o valor digitado no input
    let novaTarefa = input.value;

    if(novaTarefa !== ''){
        //adicionar a nova tarefa na lista (array)
    tarefas.push(novaTarefa);

    //executa a função para renderizar a lista
    renderizarTarefas();

    //limpar o input 
    input.value ='';

    removerSpans();
    salvarTarefasNoStorage();

    }else{
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');
        span.appendChild(msg);

        card.appendChild(span); 

    }
}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i=0; i<spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    //remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    renderizarTarefas();
    salvarTarefasNoStorage();

}

function salvarTarefasNoStorage(){
    
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}