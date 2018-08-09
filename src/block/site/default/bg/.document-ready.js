$('.is--speed-5').parallax(
	{ xparallax: '5px', yparallax: '5px'}
);
$('.is--speed-10').parallax(
	{ xparallax: '10px', yparallax: '10px'}
);
$('.is--speed-15').parallax(
	{ xparallax: '15px', yparallax: '15px'}
);
if(screenJS.deviceLg()){
	$('.is--parallax').trigger('freeze');
} else {
	$('.is--parallax').trigger('unfreeze'); 
}