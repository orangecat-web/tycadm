// 網站基本會用到的 js 效果
$(function() {
	// 滑動超過高度時候 , header 縮小
	$(window).scroll(function() {
		if ($(this).scrollTop() > 350) {
			$('.header').addClass('headerlow');
		} else {
			$('.header').removeClass('headerlow');
		}
	});
	// gotop
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			if ($(".goTop").hasClass("hide")) {
				$(".goTop").toggleClass("hide");
			}
		} else {
			$(".goTop").addClass("hide");
		};
	});
	// 滑動效果
	$(".jq-goTop").click(function(e) {
		e.preventDefault();
		$("html,body").animate({
				scrollTop: 0
			},
			600
		);
	});
});

// rwd nav
jQuery(document).ready(function($) {
	var alterClass = function() {
		var ww = document.body.clientWidth;
		if (ww > 992) {
			$('#slideNav').removeClass('slideNav');
		} else if (ww <= 991) {
			$('#slideNav').addClass('slideNav');
		};
	};
	$(window).resize(function() {
		alterClass();
	});
	alterClass();
});

function openNav() {
	document.getElementById("slideNav").style.width = "100%";
};

function closeNav() {
	document.getElementById("slideNav").style.width = "0";
};

// svg switch color
$(function() {
	jQuery('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Check if the viewport is set, else we gonna set it if we can.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + '0 0 ' + $svg.attr('width'))
			}
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
});

// FAQ
$(function() {
	// 幫 #qaContent 的 ul 子元素加上 .accordionPart
	// 接著再找出 li 中的第一個 div 子元素加上 .qa_title
	// 並幫其加上 hover 及 click 事件
	// 同時把兄弟元素加上 .qa_content 並隱藏起來
	$('#qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function() {
		$(this).addClass('qa_title_on');
	}, function() {
		$(this).removeClass('qa_title_on');
	}).click(function() {
		// 當點到標題時，若答案是隱藏時則顯示它，同時隱藏其它已經展開的項目
		// 反之則隱藏
		var $qa_content = $(this).next('div.qa_content');
		if (!$qa_content.is(':visible')) {
			$('#qaContent ul li div.qa_content:visible').slideUp();
		}
		$qa_content.slideToggle();
	}).siblings().addClass('qa_content').hide();
});

// list_tab
// $(function() {
// });