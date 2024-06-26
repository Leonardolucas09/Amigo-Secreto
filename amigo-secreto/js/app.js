let lista = [];

function adicionar() {
    let nome = document.getElementById("nome-amigo");
    let amigosIncluidos = document.getElementById("lista-amigos");
    
    if (nome.value == ""){
        alert("Informe o nome de um amigo.")
        return;
    }

    if (lista.includes(nome.value)){
        alert("Este nome já está na lista")
        return;
    }

    lista.push(nome.value);


    if (amigosIncluidos.textContent == ""){
        amigosIncluidos.textContent = nome.value;
    }
    
    else {
        amigosIncluidos.textContent = amigosIncluidos.textContent + ", " +  nome.value; 
    }
    nome.value = "";

}

function sortear(){
    if (lista.length < 4){
        alert("Adicione no mínimo 4 amigos")
        return;
    }

    embaralhar(lista);
    let sorteio = document.getElementById("lista-sorteio");

    for(let i = 0; i < lista.length; i++){

        if (i == lista.length - 1){
         sorteio.innerHTML = sorteio.innerHTML + lista[i] + " --> " + lista[0] + "<br>";
        }
        
        else {
            sorteio.innerHTML = sorteio.innerHTML + lista[i] + " --> " + lista[i+1] + "<br>";
        }
    }
}

function reiniciar() {
    lista = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    
}

function embaralhar(lista) {
    for (let i = lista.length; i; i--) {
        
        const iAleatorio = Math.floor(Math.random() * i);

        [lista[i - 1], lista[iAleatorio]] = [lista[iAleatorio], lista[i - 1]];
    }
}