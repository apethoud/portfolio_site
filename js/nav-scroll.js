$(window).scroll(function () {
if ($(window).scrollTop() >= 750) {
$('.navbar').css('visibility','visible');
} else {
$('.navbar').css('visibility','hidden');
}
});
