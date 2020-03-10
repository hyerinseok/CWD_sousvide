$(function(){
	$('#anibutt').click(function(){
		animate('#anihead', 'bounce');
		animate('#anibody', 'rubberBand');
		return false;
	});

	$('#macani').click(function(){
		animate(this, 'jello');
		return false;
	});

	function animate(element, animation){
		$(element).addClass('animated '+ animation);
		var wait = setTimeout(function(){
			$(element).removeClass('animated '+ animation);
		}, 1000);
	}

});