$(document).ready(function(){
    $("#set").click(function(){

        var largura = $("#largura").val();

        $("img").attr({"width": largura});

        var altura = $("#altura").val();

        $("img").attr({"height": altura});

    });


});