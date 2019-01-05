$(document).ready(function() {
	$("#l1").hover(
		function() {
			$(".l1").show();
		},
		function () {
			$(".l1").hide();
		});

	$("#l2").hover(
		function() {
			$(".l2").show();
		},
		function () {
			$(".l2").hide();
		});

	$("#l3").hover(
		function() {
			$(".l3").show();
		},
		function () {
			$(".l3").hide();
		});

	$("#l4").hover(
		function() {
			$(".l4").show();
		},
		function () {
			$(".l4").hide();
		});

	$("#l5").hover(
		function() {
			$(".l5").show();
		},
		function () {
			$(".l5").hide();
		});

	$("#l6").hover(
		function() {
			$(".l6").show();
		},
		function () {
			$(".l6").hide();
		});

	$("#l7").hover(
		function() {
			$(".l7").show();
		},
		function () {
			$(".l7").hide();
		});

	$("#l8").hover(
		function() {
			$(".l8").show();
		},
		function () {
			$(".l8").hide();
		});
		
		$("#selling").click(
			function (e) {
				e.preventDefault();
			$(".selling").slideToggle();
		}
		);

		$("#buying").click(function () {
			$(".buying").slideToggle();
		});
		$("#messages").click(function () {
			$(".messages").slideToggle();
		});

		$(".showdash").hover(
		function() {
			$(".dashboard").show(1);
		},
		function() {
			$(".dashboard").hide(1);
		}
		);


		$(".showme").hover(
		function() {
			$(".smalltip").show(1);
		},
		function () {
			$(".smalltip").hide(1);
		});

		$(".showme1").hover(
		function() {
			$(".smalltip1").show(1);
		},
		function () {
			$(".smalltip1").hide(1);
		});
		$(".showme2").hover(
		function() {
			$(".smalltip2").show(1);
		},
		function () {
			$(".smalltip2").hide(1);
		});

		$(".showme3").hover(
		function() {
			$(".smalltip3").show(1);
		},
		function () {
			$(".smalltip3").hide(1);
		});

		$("#hamburger").click(
		function() {
			if($(".mobiledropper").css('width') =='0px'){
				$(".header").css('margin-left','60%');
				$(".container").css('margin-left','60%');
				$(".mobiledropper").css("width","60%");
				$(".mobiledropper").css("display","block");
				
			}else{
				$(".header").css('margin-left','0%');
				$(".container").css({'margin-left':'5%','overflow':'hidden'});
				$(".mobiledropper").css("width","0%");
				$(".mobiledropper").css("display","none");
			}
		});


		$("#catttt").click(function () {
			$(".hiddencat").slideToggle();
			if($(".app .fa").attr('class') ==="fa fa-th-large"){

				$(".app .fa").attr('class','fa fa-angle-left');

			}else
				{
					$(".app .fa").attr('class','fa fa-th-large');
				};
		});

		$(window).scroll(function() {
			var H_top = $(window).scrollTop();
			if ((H_top >= 250) && (H_top < 2100)) {
				$('.letshang').addClass("hanger");
				$("aside").css("top","110px");
				$(".lefty").css("min-height","1000px");
			
			}else if(H_top < 250){
				$('.letshang').removeClass("hanger");
				$(".lefty").css("vertical-align","top");
				$(".lefty").css("min-height","1000px");
			}else{
				$('.letshang').removeClass("hanger");
				$(".lefty").css("min-height","10%");
				$(".lefty").css("vertical-align","bottom");
			}
		});

		$(document).on('click mouseup',function(e) {
			var closse=$('#selling');
			if ((!closse.is(e.target))&&(closse.has(e.target).length===0)) {
				var close=$('.selling');
				close.hide('slow');
			}

			var clossee=$('#buying');
			if ((!clossee.is(e.target))&&(clossee.has(e.target).length===0)) {
				var closee=$('.buying');
				closee.hide('slow');
			}
		})
	
});