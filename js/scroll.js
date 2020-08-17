
// function apareceScroll(){
//     const html = document.getElementsByName("html")[0];
//     let elementoAparece = document.getElementsByClassName("red");
//     document.addEventListener( "wheel", function(){
//         let topVent = html.scrollTop;
// alert("hola")
//         for(i=0; i< elementoAparece.length; i++){
//             var topelemAparece = elementoAparece[i].offsetTop;
//             if(topVent >topelemAparece -400){
//                 elementoAparece[i].style.opacity = 1;
//             }
//         }
//     })
// }
// apareceScroll();
window.addEventListener("scroll", function(){
    let animacion = document.getElementById("animado");
    let animacion2 = document.getElementById("animado-text");
    let animacion3 = document.getElementById("animado-portafolio");
     let animacion4 = document.getElementById("animado-portafolio-text");
     let animacion5 = document.getElementById("animado-aliados");
     let animacion6 = document.getElementById("animado-aliados-text");
    let positionObj1 =  animacion.getBoundingClientRect().top;
    let positionObj2 =  animacion2.getBoundingClientRect().top;
    let positionObj3 =  animacion3.getBoundingClientRect().top;
    let positionObj4 =  animacion4.getBoundingClientRect().top;
    let positionObj5 =  animacion5.getBoundingClientRect().top;
    let positionObj6 =  animacion6.getBoundingClientRect().top;
    console.log(positionObj1)
    let tamanoDePantalla = window.innerHeight/1.2;
    if(positionObj1<tamanoDePantalla){
        animacion.style.opacity = 1;
    }
    if(positionObj2<tamanoDePantalla){
        animacion2.style.opacity = 1;
    }
    if(positionObj3<tamanoDePantalla){
        animacion3.style.opacity = 1
    }
    if(positionObj4<tamanoDePantalla){
        animacion4.style.opacity = 1
    }
    if(positionObj5<tamanoDePantalla){
        animacion5.style.opacity = 1
    }
    if(positionObj6<tamanoDePantalla){
        animacion6.style.opacity = 1
    }

})

