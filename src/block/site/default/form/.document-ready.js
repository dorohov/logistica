$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__block").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
	}
); 
/*$.mask.definitions['X'] = "[А-Я, а-я]";
$.mask.definitions['9'] = "[0-9]";
$.mask.definitions['-'] = "[1,7,  ]";
$.mask.definitions['M'] = "[0-5]";*/

$.mask.definitions['X'] = "[А-Я, а-я]";
$.mask.definitions['9'] = "[0-9]";
//$.mask.definitions['-'] = "[1,7, ]";
$.mask.definitions['M'] = "[0-5]";
$.mask.definitions['0'] = "[1,7,  ]";
$(".form__control.is--auto-num").mask("X 999 XX 099 RUS",{placeholder:"X 999 XX 999 RUS"});
$(document.body).on('click', '.form__btn-pass', null, function(event){
	event.preventDefault();
	
	var btn = $(this);
	
	if(btn.hasClass('is--view')) {
		$(".form__btn-pass.is--view").removeClass("is--active");
		$(".form__btn-pass.is--hide").addClass("is--active");
		$(".form__control.is--pass").attr("type","text");
	}
	
	if(btn.hasClass('is--hide')) {
		$(".form__btn-pass.is--hide").removeClass("is--active");
		$(".form__btn-pass.is--view").addClass("is--active");
		$(".form__control.is--pass").attr("type","password");
	}
	
});

$('[data-plugin="datepicker-inline"]').datepicker({
    language : 'ru-RU',
    inline: true,
    container: '.form__item.is--datepicker.is--date',
    startDate: 'NOW'
});