$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('.navbar').css('visibility','visible');
} else {
$('.navbar').css('visibility','hidden');
}
});
