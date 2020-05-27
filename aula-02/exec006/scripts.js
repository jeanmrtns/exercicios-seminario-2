$(document).ready(function(){
    $("#buttonLower").click(function (){
        var tamanho = $(".texto").css("font-size");

        tamanho = parseInt(tamanho);

        if(tamanho <= 8)
            return;
        
        tamanho -= 2;

        $(".texto").css({"font-size": tamanho});

        $(".titulo").css({"font-size": tamanho + 5});
        
    });

    $("#buttonUpper").click(function (){
        var tamanho = $(".texto").css("font-size");

        tamanho = parseInt(tamanho);

        if(tamanho > 70)
            return;
        
        tamanho += 2;

        $(".texto").css({"font-size": tamanho});

        $(".titulo").css({"font-size": tamanho + 5});

    });



});