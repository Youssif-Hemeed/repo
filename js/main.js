$(".open-menu").click(function () { 
    $(".menu").css({'width' : '230px'  });
    $(this).css({'left':'16%'})
});

$('#close-btn').click(function(){
    $(".menu").css({'width' : '0%'  });
    $('.open-menu').css({'left':'1%'}) 
})
// <!-- -==============start accordion========== -->
$('.singer').click(function () {
  $('.show-data').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
})
// ================end accordion==============
// ==============start count==================
let countDownDate = new Date("Nov 1, 2023 15:37:25").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
$(".days").text(`${days}`);
$(".hours").text(`${hours}`);
$(".minutes").text(`${minutes}`);
$(".seconds").text(`${seconds}`);
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
 }}, 1000);
 // ==============start end==================
// ==============start contact==================
$('.area-form').keyup(function () { 
    let lengthInput = $(this).val().length;
let maxLength=100

    let numLeft=maxLength-lengthInput

if (numLeft<=0) {
          $(".show-char").text("your available character finished");

}else {
    $(".show-char").text(numLeft);

}

});

// ==============start end==================
//smooth scroll 
$('.item').click(function () {
   let aHref= $(this).attr('href')
   let distance =$(aHref).offset().top
   $('html,body').animate({scrollTop:distance},1000)
})


// on load====

$(document).ready(function(){
    $(".load").fadeOut(1000 ,function(){
        $('body').css({"overflow":"auto"})
    });
})