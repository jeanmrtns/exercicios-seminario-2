$(document).ready(function(){

    $("#buttontopo").click(function(){
        const todo = $("#afazeres").val();

        if(!todo){
            return;
        }

        $("#lista").prepend(`<li>${todo}</li>`);
        $("#afazeres").val("");
    });

    $("#buttonbaixo").click(function(){
        const todo = $("#afazeres").val();

        if(!todo){
            return;
        }

        $("#lista").append(`<li>${todo}</li>`);
        $("#afazeres").val("");
    });

});