$(window).scroll(function () {
if ($(window).scrollTop() >= 650) {
$('.navbar').css('visibility','visible');
} else {
$('.navbar').css('visibility','hidden');
}
});
