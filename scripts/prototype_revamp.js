$(document).ready(function(){
    $("h2").click(function(){
        $(this).next('.contblock').slideToggle(450, "linear");
	});		
});