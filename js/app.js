jQuery(document).ready(function () {

    jQuery(".hamb").click(function (e) {
        e.preventDefault();
        jQuery("header .background-header").toggleClass("abrir");
        jQuery(".hamb i").toggleClass("fa-times close-menu");
        jQuery("#inicio").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo line-red");
            jQuery("#nosotros").removeClass("hover-activo block");
            jQuery(".img-header-nav2").removeClass("img-header-nav2");
            jQuery("#box-img-header").addClass("img-header-nav");


        });
        jQuery("#nosotros").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo");
            jQuery("#inicio").removeClass("hover-activo block");
            jQuery(".img-header-nav").removeClass("img-header-nav");
            jQuery("#box-img-header").addClass("img-header-nav2");

        });

    });



});


// function apareceScroll(){
//     const html = document.getElementsByName("html")[0];
//     let elementoAparece = document.getElementsByClassName("red");
//     document.addEventListener( "wheel", function(){
    
//         let topVent = html.scrollTop;
//         for(i=0; i< elementoAparece.length; i++){
//             let topelemAparece = elementoAparece[i].offsetTop;
//             if(topVent > topelemAparece -400){
//                 alert("judith")
//                 elementoAparece[i].style.opacity = 1;
//             }
//         }
//     })
// }
// apareceScroll();

