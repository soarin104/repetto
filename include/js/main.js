$(function(){
	
	//메뉴 이동
	$("nav ul li a").on("click",function(){
		let where = $(this).attr("data-menu");
		let go = $("section[data-section='"+where+"']").offset().top;
		let hh = $(".header").outerHeight();
		console.log(where+"/"+go);
		$("html, body").animate({
			scrollTop:go
		},800)

		return false;
	});

	//네비게이션
	let target = $(".section1").offset().top;
	let h = $(".navBox").innerHeight();
	let v = target;

	$(window).on("scroll",function(){
		let scroll = $(window).scrollTop();
		console.log(scroll + "/" + target + "/" + h + "/" + v);

		if(scroll >= v){
			$(".goback").addClass("on");
			return false;
		}else if(scroll < v){
			$(".goback").removeClass("on");
			return false;
		}
	});

	$(".goback").on("click",function(){
		let go = $(".navBox").offset().top;
		$("html, body").animate({
			scrollTop:go
		},800)

		return false;
	});
	
})