jQuery(document).ready(function () {

    jQuery(".hamb").click(function (e) {
        e.preventDefault();
        jQuery("header .background-header").toggleClass("abrir");
        jQuery(".hamb i").toggleClass("fa-times close-menu");
        jQuery("#inicio").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo line-red");
            jQuery("#nosotros").removeClass("hover-activo line-red");
            jQuery("#noticias").removeClass("hover-activo line-red");
            jQuery("#portafolio").removeClass("hover-activo line-red");
            jQuery("#equipo").removeClass("hover-activo line-red");
            jQuery("#contacto").removeClass("hover-activo line-red");
            jQuery(".img-header-nav2").removeClass("img-header-nav2");
            jQuery(".img-header-nav3").removeClass("img-header-nav3");
            jQuery(".img-header-nav4").removeClass("img-header-nav4");
            jQuery(".img-header-nav5").removeClass("img-header-nav5");
            jQuery(".img-header-nav6").removeClass("img-header-nav6");
            jQuery("#box-img-header").addClass("img-header-nav");

        });
        jQuery("#nosotros").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo line-red");
            jQuery("#inicio").removeClass("hover-activo line-red");
            jQuery("#noticias").removeClass("hover-activo line-red");
            jQuery("#portafolio").removeClass("hover-activo line-red");
            jQuery("#equipo").removeClass("hover-activo line-red");
            jQuery("#contacto").removeClass("hover-activo line-red");
            jQuery(".img-header-nav").removeClass("img-header-nav");
            jQuery(".img-header-nav3").removeClass("img-header-nav3");
            jQuery(".img-header-nav4").removeClass("img-header-nav4");
            jQuery(".img-header-nav5").removeClass("img-header-nav5");
            jQuery(".img-header-nav6").removeClass("img-header-nav6");
            jQuery("#box-img-header").addClass("img-header-nav2 kenburns-left");
        });
        jQuery("#noticias").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo line-red");
            jQuery("#inicio").removeClass("hover-activo line-red");
            jQuery("#nosotros").removeClass("hover-activo line-red");
            jQuery("#portafolio").removeClass("hover-activo line-red");
            jQuery("#equipo").removeClass("hover-activo line-red");
            jQuery("#contacto").removeClass("hover-activo line-red");
            jQuery(".img-header-nav").removeClass("img-header-nav");
            jQuery(".img-header-nav2").removeClass("img-header-nav2");
            jQuery(".img-header-nav4").removeClass("img-header-nav4");
            jQuery(".img-header-nav5").removeClass("img-header-nav5");
            jQuery(".img-header-nav6").removeClass("img-header-nav6");;
            jQuery("#box-img-header").addClass("img-header-nav3 kenburns-left");
        });
        jQuery("#portafolio").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo line-red");
            jQuery("#inicio").removeClass("hover-activo line-red");
            jQuery("#nosotros").removeClass("hover-activo line-red");
            jQuery("#noticias").removeClass("hover-activo line-red");
            jQuery("#equipo").removeClass("hover-activo line-red");
            jQuery("#contacto").removeClass("hover-activo line-red");
            jQuery(".img-header-nav").removeClass("img-header-nav");
            jQuery(".img-header-nav3").removeClass("img-header-nav3");
            jQuery(".img-header-nav2").removeClass("img-header-nav2");
            jQuery(".img-header-nav5").removeClass("img-header-nav5");
            jQuery(".img-header-nav6").removeClass("img-header-nav6");
            jQuery("#box-img-header").addClass("img-header-nav4 kenburns-left");
        });
        jQuery("#equipo").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo line-red ");
            jQuery("#inicio").removeClass("hover-activo line-red");
            jQuery("#nosotros").removeClass("hover-activo line-red");
            jQuery("#noticias").removeClass("hover-activo line-red");
            jQuery("#portafolio").removeClass("hover-activo line-red");
            jQuery("#contacto").removeClass("hover-activo line-red");
            jQuery(".img-header-nav").removeClass("img-header-nav");
            jQuery(".img-header-nav3").removeClass("img-header-nav3");
            jQuery(".img-header-nav2").removeClass("img-header-nav2");
            jQuery(".img-header-nav4").removeClass("img-header-nav4");
            jQuery(".img-header-nav6").removeClass("img-header-nav6");
            jQuery("#box-img-header").addClass("img-header-nav5 kenburns-left");
        });
        jQuery("#contacto").hover(function (e) {
            e.preventDefault();
            jQuery(this).addClass("hover-activo line-red");
            jQuery("#inicio").removeClass("hover-activo line-red");
            jQuery("#nosotros").removeClass("hover-activo line-red");
            jQuery("#noticias").removeClass("hover-activo line-red");
            jQuery("#portafolio").removeClass("hover-activo line-red");
            jQuery("#equipo").removeClass("hover-activo line-red");
            jQuery(".img-header-nav").removeClass("img-header-nav");
            jQuery(".img-header-nav3").removeClass("img-header-nav3");
            jQuery(".img-header-nav2").removeClass("img-header-nav2");
            jQuery(".img-header-nav4").removeClass("img-header-nav4");
            jQuery(".img-header-nav5").removeClass("img-header-nav5");
            jQuery("#box-img-header").addClass("img-header-nav6 kenburns-left");
        });

    });

});


var alto_cabecera =jQuery("header").height();
jQuery(window).scroll(function(){
	var t = jQuery(window).scrollTop();

	if(t > alto_cabecera)
	{
		jQuery("header").addClass("change-color");
	}else{
		jQuery("header").removeClass("change-color");
	}
})

jQuery(".scroll").click(function(e){
    e.preventDefault();
    setTimeout(function(){
         jQuery("html,body").animate({
             "scrollTop":jQuery(".about-home").offset().top, 
         },2000,function(){
         });

    }, 500);

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

