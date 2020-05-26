function cliqueBotao(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    alert(`Bem vindo ${nome}! Você tem ${idade} anos de idade!`);
}

function incrementaIdade(){
    var idade = document.getElementById("idade").value;
    idade++;

    document.getElementById("idade"). value = idade;
}

function decrementaIdade(){
    var idade = document.getElementById("idade").value;
    if(idade > 1){
        idade--;}

    document.getElementById("idade"). value = idade;
}