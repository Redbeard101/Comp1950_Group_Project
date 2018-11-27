$(document).ready(function(){
    $("h2").click(function(){
        $(this).next('.contblock').fadeToggle("fast", "linear");
	});		
});