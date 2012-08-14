/* /////////////////////////////////////////////
Documento creado por: Enrique Fernández Guerra
Web del creador: http://www.ckgrafico.com
Url del código original: http://adeelejaz.com/blog/resize-images-on-fly-using-jquery/
Fecha de creación: Agosto 2012
Nadie podrá evitar que copies pero deja la fuente para que otros lleguen al original
///////////////////////////////////////////// */

$.fn.resizeimg = function(max_size, callback ){

	$(this).each(function(i) {
		if ($(this).height() > $(this).width()) {
			var h = max_size;
			var w = Math.ceil($(this).width() / $(this).height() * max_size);
		}else{
			var w = max_size;
			var h = Math.ceil($(this).height() / $(this).width() * max_size);
		}
		$(this).css({ height: h, width: w });
	});

	if(callback) { callback.call(this); }
};
