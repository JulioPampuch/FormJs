var botao = document.querySelector("#adicionar-bmx");

botao.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-add");

    var bmx = obtemInfoBmx(form);

    var erros = verificaErro(bmx);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaBmxNaTabela(bmx);

    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";

})

function obtemInfoBmx(form){
    var bmx = {
        marca: form.marca.value,
        quadro: form.quadro.value,
        guidao: form.guidao.value,
        aros: form.aros.value,
        garfo:form.garfo.value,
        valorTotal: calculaTotal(form.quadro.value, form.guidao.value, form.aros.value, form.garfo.value)
    }

    return bmx;
}

function montaTr(bmx){
    var bmxTr = document.createElement("tr");
    bmxTr.classList.add("peças")

    var marcaTd = document.createElement("td");
    marcaTd.textContent = bmx.marca;
    marcaTd.classList.add("marca");

    var quadroTd = document.createElement("td");
    quadroTd.textContent = bmx.quadro;
    quadroTd.classList.add("quadro");

    var guidaoTd =  document.createElement("td");
    guidaoTd.textContent = bmx.guidao;
    guidaoTd.classList.add("guidao");

    var arosTd = document.createElement("td");
    arosTd.textContent = bmx.aros;
    arosTd.classList.add("aros");

    var garfoTd = document.createElement("td");
    garfoTd.textContent = bmx.garfo;
    garfoTd.classList.add("garfo");

    var totalTd = document.createElement("td");
    totalTd.textContent = "R$" + bmx.valorTotal;
    totalTd.classList.add("valor-total");

    bmxTr.appendChild(marcaTd);
    bmxTr.appendChild(quadroTd);
    bmxTr.appendChild(guidaoTd);
    bmxTr.appendChild(arosTd);
    bmxTr.appendChild(garfoTd);  
    bmxTr.appendChild(totalTd);

    return bmxTr;
}

function adicionaBmxNaTabela(bmx){
    var bmxTr = montaTr(bmx)
    var tabela = document.querySelector("#tabela-bmx");
    tabela.appendChild(bmxTr);
}

function verificaErro(bmx){
    
    erros = [];

    if(bmx.marca.length < 1 || bmx.quadro.length < 1 || bmx.guidao.length < 1 || bmx.aros.length < 1 || bmx.garfo.length < 1){
        erros.push("Campo inválido");
    }
    
    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erros){
        var li = document.createElement("li")
        li.textContent = erros;

        ul.appendChild(li);
    })
}

