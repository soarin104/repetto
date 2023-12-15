$(function(){
	$(window).scroll(function(){
		//스크롤 값 호출
		var scrollVal=$(window).scrollTop();
		
		//각각 섹션 변수 선언
		var secHeight=new Array();
		var secTop=new Array();
		var finalVal=new Array();
		var winHeight=screen.height;
		var secLen=$("#content section").length;
		for (i=0; i<=secLen-1;i++ )
		{
			secHeight[i]=$("#content section").eq(i).outerHeight();
			secTop[i]=$("#content section").eq(i).offset().top;
			finalVal[i]=secTop[i]-(winHeight/2);
			//console.log(1+'/'+secTop[1]+'/'+finalVal[1]+'/'+scrollVal);
			//console.log(i+'/'+secTop[i]+'/'+finalVal[i]);
			if(scrollVal>=finalVal[i]){
				$("#content section").eq(i).addClass("active");
				//$("#content section").eq(i).removeClass("goToHell");
				$("#content section").eq(i).find(".aniUp").addClass("active");
				$("#content section").eq(i).find(".aniD").addClass("active");
				$("#content section").eq(i).find(".aniL").addClass("active");
				$("#content section").eq(i).find(".aniR").addClass("active");
				$("#content section").eq(i).find(".aniUL").addClass("active");
				$("#content section").eq(i).find(".aniDR").addClass("active");
				$("#content section").eq(i).find(".aniFade").addClass("active");
				$("#content section").eq(i).find(".aniBig").addClass("active");
				$("#content section").eq(i).find(".aniRoX").addClass("active");
				//$(".pageWhere ul li").eq(i).addClass("on");
				//$(".pageWhere ul li").eq(i).siblings("li").removeClass("on");
			}
		}
	});
})