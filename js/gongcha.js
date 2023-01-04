$(document).on("pagecreate", "#layout", function(){
    //배너 이미지 슬라이드(+스와이프)
    const slide = setInterval( leftMove, 3500 );
	//let i = 3;  //항목의 개수(<img>가 3개)
	let j = 0;  //원형불릿 (= 0,1,2)
	function leftMove(){
		j++;
		if(j == 3) { j=0; }
		$("#slide>div").stop(false,true).animate({left:"-1000px"}, 1000, function(){  //현재 -600px인데 왼쪽으로 사진 하나 움직이려면(-600px해서) -1200px 해줘야 함
			$(this).append($("#slide img").first());   //#slide 자손 중 a의 첫 번째 것을 맨 뒤에 두겠다는 의미
			$(this).css("left", "-500px");  //원래의 -600px으로 되돌리기
			$("#circle div").eq(j).addClass("gray").siblings().removeClass("gray");  //인덱스번호가 j인 #circle의 자손 div에 red라는 클래스를 추가하고 나머지 형제들에 있는 red 클래스 지움
		});
	}
	function rightMove(){
		j--;
		if(j == -1) { j=2; }
		$("#slide>div").stop(false, false).animate({left:0}, 1000, function(){  //현재 -500px인데 오른쪽으로 움직이려면+500px해서 0 해줘야 함
			$(this).prepend($("#slide img").last());   //#slide 자손 중 img의 마지막것을 맨 앞으로 보내겠다는 의미
			$(this).css("left", "-500px");  //원래의 -600px으로 되돌리기 (=>css에서 보면 이게 원래대로임)
			$("#circle div").eq(j).addClass("gray").siblings().removeClass("gray");  //인덱스번호가 j인 #circle의 자손 div에 red라는 클래스를 추가하고 나머지 형제들에 있는 red 클래스 지움
		});
	}
	$("#slide>div").swipeleft(function(){
		leftMove();
	});
	$("#slide>div").swiperight(function(){
		rightMove();
	});
	
	//로그인 전에 #middle부분 <a> 눌렀을 때 경고창 뜨게 하기
	$("main nav a, main>div:not(:first-child) a").click(function(){
		$('#black, #popup').show();
		$('#popup span').click(function(){
			$('#black, #popup').hide();
		});
		$('#black').click(function(){
			$('#black, #popup').hide();
		});
	});

    /*$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	//키보드자판에서 어떤 키를 눌렀는지 감지
    $(document).keydown(function(event){  //이벤트는 function을 사용함. event는 변수 이름으로 임의로 설정한 것임
        if(event.key === "Escape") {  //Escape는 Esc키를 의미함
            $("#popup").fadeOut();
			$("body").css("overflow","auto");
        }
    });*/

});  //////////END