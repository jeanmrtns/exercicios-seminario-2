function incrementaIdade(){
    var idade = document.getElementById("idade").value;
    idade++;

    document.getElementById("idade"). value = idade;
}

function decrementaIdade(){
    var idade = document.getElementById("idade").value;
    if(idade > 1){
        idade--;

        document.getElementById("idade"). value = idade;
    }
}


$(document).ready(function () {

   $("#confirma").hide();

    $("#botao").click(function () {

        var fname = $("#fname").val();
        var sname = $("#sname").val();
        var height = $("#height").val();
        var idade = $("#idade").val();

        $("#field_nome").removeClass("erro");
        $("#field_sobrenome").removeClass("erro");
        $("#field_altura").removeClass("erro");

        if(!fname){
            $("#field_nome").addClass("erro");
            alert("Nome não preenchido!");
            }
        
        if(!sname){
            $("#field_sobrenome").addClass("erro");   
            alert("Sobrenome não preenchido!");}     

        if(height < 1 || height > 2.5){
            $("#field_altura").addClass("erro");
            alert("Altura inválida!");}

        if(idade < 10){
            $("#field_idade").addClass("erro");
            alert("Idade não permitida!");
        }
        
        if(fname && sname && height > 2.5 && idade > 10)
            $("#confirma").show();
    });

});