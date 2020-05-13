function comecar(){

    //pega os id e coloca em variaveis
    var nome = document.getElementById("inputNome");
    var idade = document.getElementById("inputIdade");

    //guarda o que foi digitado e coloca na localStorage
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('idade', idade.value);
    
    //redireciona o usuario
    location.href = "menuEstudos.html";
}

function bemVindo(){
    //pega o id 
    var titulo = document.getElementById("h1Titulo");
    //pega o nome
    var nome = localStorage.getItem('nome');

    titulo.innerHTML += ' ' +nome.toUpperCase();
}