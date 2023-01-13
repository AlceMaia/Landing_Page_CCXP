const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "31 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias =  Math.floor(segTotal /60 /60/ 24);
    const finalHoras = Math.floor(segTotal /60 /60) % 24;
    const finalMinutos = Math.floor(segTotal /60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;

}

countDown();
setInterval(countDown, 1000)

function addRedBorder(id)
{
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

//addRedBorder("quinta");

function highlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        //alert the name and key code on keydown
        alert(`Tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false);
        
}

function addKeyboardEventListeners()
{
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Numpad1') {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Numpad2') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Numpad3') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Numpad4') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false);
}
//checkKeyboardCode();
addKeyboardEventListeners();