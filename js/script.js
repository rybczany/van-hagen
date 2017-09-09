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

		var allLocation = $('.location');
		for (var i=0; i<allLocation.length; i++){
			allLocation[i];
		}

		var pickLoc = $(this).parents('body');
		var pick = pickLoc.find(allLocation);

		if(pick.toggle('slow')){
			placeList.toggleClass('active') && textHeader.toggle();
		}
		console.log(pick);

	}




	//for (var i = 0; i < placeList.length; i++){

	//placeList.mouseenter(function(){
		//if(location.toggle('slow')) {
			//placeList.toggleClass('active') && textHeader.toggle() && listParis.toggleClass('active');
		//}
	//})
	//}




});