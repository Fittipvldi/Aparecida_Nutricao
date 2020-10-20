var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){

    // não dar refresh
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);

    pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    //validacao do paciente
    if(erros.length > 0){
        exibeErro(erros);
        return; // retorno é vazio e não executa as demais linhas
    }

    // adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    // limpando os campos
    form.reset();

    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '' // limpando a tela de erros
});


// objeto paciente, buscando os dados do form
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

// criando a Tr
function montaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'infor-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push('Nome não preenchido');
    }

    if(paciente.peso.length == 0){
        erros.push('Peso não preenchido');
    }

    if(!validaPeso(paciente.peso)){
        erros.push('Peso é inválido');
    }

    if(paciente.altura.length == 0){
        erros.push('Altura não preenchida');
    }

    if(!validaAltura(paciente.altura)){
        erros.push('Altura é inválida');
    }

    if(paciente.gordura.length == 0){
        erros.push('Gordura não preenchida');
    }

    return erros;
}

function exibeErro(erros){
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '' // apagando qualquer conteudo dentro da ul

    erros.forEach(function(i){
        var li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
    });
}