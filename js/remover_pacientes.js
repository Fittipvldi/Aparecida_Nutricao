var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){

    event.target.parentNode.classList.add('fade-out') // sumindo devagar..

    setTimeout(function(){ // timout para sumir devagar e posteriormente excluir
        event.target.parentNode.remove(); // quando realizado o dblclick na td, a tr é excluida
    }, 500);
});