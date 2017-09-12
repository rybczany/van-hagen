$(document).ready(function(){


	var listParis = $('.paris');
	    listMoscow = $('.moscow');
	    listBologna = $('.bologna');
	    listGeneva = $('.geneva');
	    textHeader = $('.text-content__header');
	    placeList = $('.list li span');

	listParis.on('mouseenter', pickUp);
	listMoscow.on('mouseenter', pickUp);
	listBologna.on('mouseenter', pickUp);
	listGeneva.on('mouseenter', pickUp);

	function pickUp(){

		var pick = $(this).data('loc');
		    pickLoc = $('.location');
		    pickCity = pickLoc.filter(function() {
			return $(this).attr('id') == pick;
		});
		    placeListClass = placeList.filter(function() {
		    return $(this).attr('class') == pick
		});

		if(pickCity.toggle('slow')){
			placeList.toggleClass('active') && placeListClass.toggleClass('active');;
		};
		
		textHeader.toggle();
		

		console.log(pickCity);

	}
});