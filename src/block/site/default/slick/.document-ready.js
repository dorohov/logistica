'use strict';
$(function() { 
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var adv = $('[data-slider-slick="slick-adv"]');	
	var adv_nav = $('[data-slider-slick="slick-adv-nav"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/logistica';  
	//var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="btn-nav__link  is--prev  slick-prev"><svg class="icon-svg icon-slick-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#slick-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="btn-nav__link  is--next  slick-next"><svg class="icon-svg icon-slick-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#slick-next"></use></svg></button>';	
	
	adv.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
  		asNavFor: adv_nav
		//fade: true
	});
	adv_nav.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
  		asNavFor: adv
		//fade: true
	});
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 