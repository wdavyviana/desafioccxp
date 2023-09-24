const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const min = document.getElementById('minuto')
const seg = document.getElementById('segundo')

const lancamento = "31 dec 2023"

function countdown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (datalanc - hoje)/1000;

    const finaldias = Math.floor (segtotal / 60 / 60 / 24);
    const finalhoras = Math.floor (segtotal/60 /60) % 24;
    const finalminutos = Math.floor (segtotal/60) % 60;
    const finalsegundos = Math.floor (segtotal) % 60;

    dia.innerHTML = formatoTempo(finaldias)
    hora.innerHTML = formatoTempo(finalhoras)
    min.innerHTML = formatoTempo(finalminutos)
    seg.innerHTML = formatoTempo(finalsegundos)
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
setInterval(countdown, 1000)