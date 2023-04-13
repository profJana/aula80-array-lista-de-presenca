let convidados = []; //criando o array para receber os nomes

function enviar(){
    const nomeConvidado = document.getElementById("nomeConvidado").value;
    convidados.push(nomeConvidado);
    document.getElementById("nomeConvidado").value = '';
    console.log(convidados)
}

function exibir(){
    const listaConvidados = convidados.join('<br>');
    document.getElementById("paragrafoExibir").innerHTML = listaConvidados;
}

function organizar(){
    convidados.sort();
    const listaConvidados = convidados.join('<br>');
    document.getElementById("paragrafoExibir").innerHTML = listaConvidados;
}

function pesquisar(){
    const convidadoPesquisado = document.getElementById("pesquisaInput").value;
    const convidadoEncontrado = convidados.filter(function(nomeConvidado){
        return nomeConvidado.includes(convidadoPesquisado);
    });
    const resultadoPesquisa = document.getElementById("resultadoPesquisa");
    if(convidadoEncontrado.length === 0){
        resultadoPesquisa.innerHTML = "Nome não encontrado!"
    } else{
        resultadoPesquisa.innerHTML = "Nome encontrado: " + convidadoEncontrado
    }
}