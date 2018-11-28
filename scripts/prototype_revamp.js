$(document).ready(function(){
    $("h2").click(function(){
        $(this).next('.contblock').slideToggle().toggleClass('opened');
        var isVisible = $(this).next('.contblock').is( ".opened" );
        if (isVisible === true ){
            $(this).css('background-color', '#6afca2');
            $(this).hover(function(){
                $(this).css('background-color', '#8bf9b6');
                }, function(){
                $(this).css('background-color', '#6afca2');});
        }
        else {
            $(this).css('background-color', '#3971c6');     
            $(this).hover(function(){
                $(this).css('background-color', '#9ec9ff');
                }, function(){
                $(this).css('background-color', '#3971c6');});   
        }    
	});		
});