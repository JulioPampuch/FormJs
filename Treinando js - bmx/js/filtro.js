var filtro = document.querySelector("#filtro-bmx");

filtro.addEventListener("input", function(){   
    var pecas = document.querySelectorAll(".peças");

    if(this.value.length > 0){
        for(var i = 0; i < pecas.length; i++){
            var peca = pecas[i];
            var tdMarca = peca.querySelector(".marca");
            var marca = tdMarca.textContent;
            var expressao = RegExp(this.value, "i");

            if(!expressao.test(marca)){
                peca.classList.add("invisivel");
            }else{
                peca.classList.remove("invisivel");
            }    
        }
    }else{
        for(var i = 0; i < pecas.length; i++){
            var peca = pecas[i];
            peca.classList.remove("invisivel");
        }
    }   
})

