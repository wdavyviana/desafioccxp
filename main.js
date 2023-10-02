function highlightCard(selector){
    var element = document.querySelector(selector);

    element.classList.toggle("highlightcard");

}
function checkKeyboardCode(){
    document.addEventListener('keydown',(Event) =>{
        var name = Event.key;
        var code = Event.code;
        //alert the key name and key code on keydown
        alert(`Tecla pressionada ${name}\r\n Key code: ${code}`);
    }, False);
}

function addKeyboardEventListeners(){

    document.addEventListener('keydown', (Event)=>{

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = Event.code;
        if(code== 'Digit1'){
            ingresso1.classList.toggle("highlightcard");
            ingresso2.classList.remove("highlightcard");
            ingresso3.classList.remove("highlightcard");
            ingresso4.classList.remove("highlightcard");
        }
        if(code== 'Digit2'){
            ingresso1.classList.remove("highlightcard");
            ingresso2.classList.toggle("highlightcard");
            ingresso3.classList.remove("highlightcard");
            ingresso4.classList.remove("highlightcard");
        }
        if(code== 'Digit3'){
            ingresso1.classList.remove("highlightcard");
            ingresso2.classList.remove("highlightcard");
            ingresso3.classList.toggle("highlightcard");
            ingresso4.classList.remove("highlightcard");
        }
        if(code== 'Digit4'){
            ingresso1.classList.remove("highlightcard");
            ingresso2.classList.remove("highlightcard");
            ingresso3.classList.remove("highlightcard");
            ingresso4.classList.toggle("highlightcard");
        }
    }, false);
}
addKeyboardEventListeners();
