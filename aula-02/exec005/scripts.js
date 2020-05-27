$(document).ready(async function () {
    while(true) {
        await sleep(1000);
        console.log("loop");

        // seu código aqui
        $("#retangulo1").toggleClass(["retanguloamarelo","retanguloverde"]);
        $("#retangulo2").toggleClass(["retangulovermelho","retanguloazul"]);
    }
});

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}