$(document).ready(function(){


	var paris = $('.location.location--paris');
	var listParis = $('.paris');
	var textHeader = $('.text-content__header');
	var placeList = $('.list li');
	console.log(placeList)

	listParis.mouseenter(function(){
		if(paris.toggle('slow')) {
			placeList.toggleClass('active') && textHeader.toggle() && listParis.toggleClass('active');
		}
	});




});