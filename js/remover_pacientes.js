var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.remove(); // quando realizado o dblclick na td, a tr é excluida
});