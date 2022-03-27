var pecas = document.querySelectorAll(".peças");

for(var i=0; i < pecas.length; i++){
    var peca = pecas[i];

    var tdQuadro = peca.querySelector(".valor-quadro");
    var tdGuidao = peca.querySelector(".valor-guidao");
    var tdAros = peca.querySelector(".valor-aros");
    var tdGarfo = peca.querySelector(".valor-garfo");
    var tdTotal = peca.querySelector(".valor-total");

    var valorQuadro = tdQuadro.textContent;
    var valorGuidao = tdGuidao.textContent;
    var valorAros = tdAros.textContent;
    var valorGarfo = tdGarfo.textContent;

    var valorTotal = tdTotal.textContent = "R$ " + calculaTotal(valorQuadro, valorGuidao, valorAros, valorGarfo);
}

function calculaTotal(valorQuadro, valorGuidao, valorAros, valorGarfo){
    var total = 0;

    total = parseFloat(valorQuadro) + parseFloat(valorGuidao) + parseFloat(valorAros) + parseFloat(valorGarfo);

    return total;
}
