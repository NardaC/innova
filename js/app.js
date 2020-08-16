jQuery(document).ready(function(){

	jQuery(".hamb").click(function(e){
	 	e.preventDefault();
	 	jQuery("header .background-header").toggleClass("abrir");
	 	jQuery(".hamb i").toggleClass("fa-times");
	});

});