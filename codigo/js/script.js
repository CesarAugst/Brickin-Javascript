function comecar(){
    var nome = document.getElementById("inputNome");
    var idade = document.getElementById("inputIdade");

    localStorage.setItem("nome", nome.value)
    localStorage.setItem("idade", idade.value)
}