var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(i){
    i.addEventListener('dblclick', function(){
        this.remove();
    });
});