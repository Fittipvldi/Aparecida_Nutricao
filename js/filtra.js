var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
    this.value;

    var pacientes = document.querySelectorAll('.paciente');

    pacientes.forEach(function(i){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector('.info-nome');
        var nome = tdNome.textContent
    });
});