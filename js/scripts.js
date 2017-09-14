$(function(){
	$(".stars__item_slider").slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		arrows: false,
	});

	$(".soflat__slider").slick({
		infinite: false,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		dots: false,
  		arrows: true,
  		customPaging: ".soflat__slider",
  		prevArrow: ".arrow_prev",
  		nextArrow: ".arrow_next",
  		variableWidth:false,
	  		responsive: [
	    	{
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      },
	    	}] 
	});
	$(window).resize(function(){
		resize(".soflat .text");
	})
	function resize(elem) {
		var text=$(elem);
		var h=0;
		text.height("auto");
		for (var i = 0; i < text.length; i++) {
			if (h<text.eq(i).height()) h=text.eq(i).height();
		}
		text.height(h);
	}

	var body=$(window);

		$(".parall").each(function(){
			var par=$(this);
			body.scroll(function(){
				var p =-($(window).scrollTop()/5);
				var c=p+"px";
				par.css({backgroundPositionY: c });
				$("header .img").css({transform:"translateY("+c+")"});
				$("header .text").css({transform:"translateY("+c+")"});
			});
		});
});