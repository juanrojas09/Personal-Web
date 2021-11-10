import React from 'react';
import ReactDOM from 'react-dom';
/*var btn=document.getElementsByClassName("boton");
btn.document.addEventListener('click',function () {
    var cont=0
    while(btn.click){
        cont++;
    }
    console.log(cont);

})*/

const spans = document.querySelectorAll(".word span"); //DEFINO VARIABLE DE SPAN, SELECCIONO WORD Y SPAN

spans.forEach((span, idx) => {  //RECORRO CON
    span.addEventListener("click", (e) => {
        e.target.classList.add("active");
    });
    span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add("active");
    }, 750 * (idx + 1));
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
