$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var t=$(this),a=$(t.attr("href")).eq(0),o=parseInt(t.attr("data-scrollto-diff"))||0,r=parseInt(t.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+o},r),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),t.parent().addClass("is--active")}),$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(e){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(e.preventDefault(),$(".navbar__hamburger-btn").trigger("click"))});
$(".is--speed-5").parallax({xparallax:"5px",yparallax:"5px"}),$(".is--speed-10").parallax({xparallax:"10px",yparallax:"10px"}),$(".is--speed-15").parallax({xparallax:"15px",yparallax:"15px"}),screenJS.deviceLg()?$(".is--parallax").trigger("freeze"):$(".is--parallax").trigger("unfreeze");
$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$(".form__block").validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1}),$.mask.definitions.X="[А-Я, а-я]",$.mask.definitions[9]="[0-9]",$.mask.definitions.M="[0-5]",$.mask.definitions[0]="[1,7,  ]",$(".form__control.is--auto-num").mask("X 999 XX 099 RUS",{placeholder:"X 999 XX 999 RUS"}),$(document.body).on("click",".form__btn-pass",null,function(s){s.preventDefault();var i=$(this);i.hasClass("is--view")&&($(".form__btn-pass.is--view").removeClass("is--active"),$(".form__btn-pass.is--hide").addClass("is--active"),$(".form__control.is--pass").attr("type","text")),i.hasClass("is--hide")&&($(".form__btn-pass.is--hide").removeClass("is--active"),$(".form__btn-pass.is--view").addClass("is--active"),$(".form__control.is--pass").attr("type","password"))}),$('[data-plugin="datepicker-inline"]').datepicker({language:"ru-RU",inline:!0,container:".form__item.is--datepicker.is--date",startDate:"NOW"});
$("img").addClass("img-responsive");
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
"use strict";$(function(){var s=$('[data-slider-slick="slick-gallery"]'),i=$('[data-slider-slick="slick-adv"]'),e=$('[data-slider-slick="slick-adv-nav"]'),o="/wp-content/themes/azbn7theme",l='<button type="button" class="btn-nav__link  is--prev  slick-prev"><svg class="icon-svg icon-slick-prev" role="img"><use xlink:href="'+o+'/img/svg/sprite.svg#slick-prev"></use></svg></button>',r='<button type="button" class="btn-nav__link  is--next  slick-next"><svg class="icon-svg icon-slick-next" role="img"><use xlink:href="'+o+'/img/svg/sprite.svg#slick-next"></use></svg></button>';i.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,dots:!0,prevArrow:l,nextArrow:r,asNavFor:e}),e.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!1,prevArrow:l,nextArrow:r,asNavFor:i}),s.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,infinite:!0,prevArrow:l,nextArrow:r,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1400,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:1025,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');