$(".choice2").hide();
$(".ending2").hide();
$(".ending1").hide();
$(".ending3").hide();

$(".yes").click(function() {
$(".choice1").hide();
    $(".choice2").fadeIn();
});

$(".no").click(function() {
$(".choice1").hide();
$(".ending1").fadeIn();
});

$(".greenn").dblclick(function() {
$(".ending2").show();
$(".choice2").hide();
});

$(".redd").dblclick(function() {
$(".ending3").fadeIn();
$(".choice2").hide();
});