(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-369').attr('src', (dpi>1) ? 'images/wang-yu-mo4-1612.jpg' : 'images/wang-yu-mo4-806.jpg');
$('.js-370').attr('src', (dpi>1) ? 'images/wang-yu-mo1-1204.jpg' : 'images/wang-yu-mo1-602.jpg');
$('.js-371').attr('src', (dpi>1) ? 'images/life-shopping-center-578.png' : 'images/life-shopping-center-289.png');
$('.js-372').attr('src', (dpi>1) ? 'images/fen-zu-6-1406.png' : 'images/fen-zu-6-703.png');
$('.js-373').attr('src', (dpi>1) ? 'images/fen-zu-2240.png' : 'images/fen-zu-1120.png');
$('.js-374').attr('src', (dpi>1) ? 'images/fen-zu-6-200.png' : 'images/fen-zu-6-100.png');
$('.js-375').attr('src', (dpi>1) ? 'images/fen-zu-7-200.png' : 'images/fen-zu-7-100.png');}else if($(window).width()>=960){$('.js-369').attr('src', (dpi>1) ? 'images/wang-yu-mo4-1290.jpg' : 'images/wang-yu-mo4-645.jpg');
$('.js-370').attr('src', (dpi>1) ? 'images/wang-yu-mo1-964.jpg' : 'images/wang-yu-mo1-482.jpg');
$('.js-371').attr('src', (dpi>1) ? 'images/life-shopping-center-462.png' : 'images/life-shopping-center-231.png');
$('.js-372').attr('src', (dpi>1) ? 'images/fen-zu-6-1124.png' : 'images/fen-zu-6-562.png');
$('.js-373').attr('src', (dpi>1) ? 'images/fen-zu-1792.png' : 'images/fen-zu-896-1.png');
$('.js-374').attr('src', (dpi>1) ? 'images/fen-zu-6-162.png' : 'images/fen-zu-6-81.png');
$('.js-375').attr('src', (dpi>1) ? 'images/fen-zu-7-162.png' : 'images/fen-zu-7-81.png');}else if($(window).width()>=768){$('.js-369').attr('src', (dpi>1) ? 'images/wang-yu-mo4-1032.jpg' : 'images/wang-yu-mo4-516.jpg');
$('.js-370').attr('src', (dpi>1) ? 'images/wang-yu-mo1-772.jpg' : 'images/wang-yu-mo1-386.jpg');
$('.js-371').attr('src', (dpi>1) ? 'images/life-shopping-center-370.png' : 'images/life-shopping-center-185.png');
$('.js-372').attr('src', (dpi>1) ? 'images/fen-zu-6-900.png' : 'images/fen-zu-6-450.png');
$('.js-373').attr('src', (dpi>1) ? 'images/fen-zu-1434.png' : 'images/fen-zu-717.png');
$('.js-374').attr('src', (dpi>1) ? 'images/fen-zu-6-130.png' : 'images/fen-zu-6-65.png');
$('.js-375').attr('src', (dpi>1) ? 'images/fen-zu-7-130.png' : 'images/fen-zu-7-65.png');}else if($(window).width()>=480){$('.js-369').attr('src', (dpi>1) ? 'images/wang-yu-mo4-644.jpg' : 'images/wang-yu-mo4-322.jpg');
$('.js-370').attr('src', (dpi>1) ? 'images/wang-yu-mo1-484.jpg' : 'images/wang-yu-mo1-242.jpg');
$('.js-371').attr('src', (dpi>1) ? 'images/life-shopping-center-232.png' : 'images/life-shopping-center-116.png');
$('.js-372').attr('src', (dpi>1) ? 'images/fen-zu-6-562.png' : 'images/fen-zu-6-281.png');
$('.js-373').attr('src', (dpi>1) ? 'images/fen-zu-896.png' : 'images/fen-zu-448.png');
$('.js-374').attr('src', (dpi>1) ? 'images/fen-zu-6-82.png' : 'images/fen-zu-6-41.png');
$('.js-375').attr('src', (dpi>1) ? 'images/fen-zu-7-82-1.png' : 'images/fen-zu-7-41-1.png');}else{$('.js-369').attr('src', (dpi>1) ? 'images/wang-yu-mo4-430.jpg' : 'images/wang-yu-mo4-215.jpg');
$('.js-370').attr('src', (dpi>1) ? 'images/wang-yu-mo1-322.jpg' : 'images/wang-yu-mo1-161.jpg');
$('.js-371').attr('src', (dpi>1) ? 'images/life-shopping-center-154.png' : 'images/life-shopping-center-77.png');
$('.js-372').attr('src', (dpi>1) ? 'images/fen-zu-6-374.png' : 'images/fen-zu-6-187.png');
$('.js-373').attr('src', (dpi>1) ? 'images/fen-zu-598.png' : 'images/fen-zu-299.png');
$('.js-374').attr('src', (dpi>1) ? 'images/fen-zu-6-56.png' : 'images/fen-zu-6-28.png');
$('.js-375').attr('src', (dpi>1) ? 'images/fen-zu-7-56.png' : 'images/fen-zu-7-28.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-404').mouseenter(function() { $.loadImages('images/fen-zu-6-316.png', function() { }) });
$('.js-404').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-404-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-6-316.png'; } } });
$('.js-405').mouseenter(function() { $.loadImages('images/fen-zu-7-316.png', function() { }) });
$('.js-405').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-405-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/fen-zu-7-316.png'; } } });

});