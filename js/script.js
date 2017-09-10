$(document).ready(function(){


	var paris = $('#paris');
	var moscow = $('#moscow');
	var bologna = $('#bologna');
	var listParis = $('.paris');
	var listMoscow = $('.moscow');
	var listBologna = $('.bologna');
	var textHeader = $('.text-content__header');
	var placeList = $('.list li span');

	listParis.on('mouseenter', pickUp);
	listMoscow.on('mouseenter', pickUp);
	listBologna.on('mouseenter', pickUp);

	function pickUp(){

		var pick = $(this).data('loc');
		var pickLoc = $('.location');
		var pickCity = pickLoc.filter(function() {
			return $(this).attr('id') == pick;
		});

		if(pickCity.toggle('slow')){
			placeList.toggleClass('active') && textHeader.toggle();
		}
		

		console.log(pickCity);

	}
});