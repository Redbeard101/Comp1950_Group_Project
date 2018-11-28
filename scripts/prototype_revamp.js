//Author: Jonathan Worth A00949372
//Expanding/Contracting functionality
//Nov 22nd, 2018
//COMP 1950 

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
    });//End h2.click
    
    $("#expand").click(function(){
        $(".contblock").each(function(){
            var isVisible = $(this).is( ".opened" );
            if (isVisible === false ){
                $(this).slideToggle().toggleClass('opened');
            }
        });//End each .contblock
        $("h2").each(function(){
            $(this).css('background-color', '#6afca2');
            $(this).hover(function(){ $(this).css('background-color', '#8bf9b6');}, 
            function(){ $(this).css('background-color', '#6afca2');});
        });//End each h2
        
    });//End expand click

    $("#collapse").click(function(){
        $(".contblock").each(function(){
            var isVisible = $(this).is( ".opened" );
            if (isVisible === true ){
                $(this).slideToggle().toggleClass('opened');
            }
        });//End each .contblock
        $("h2").each(function(){
            $(this).css('background-color', '#3971c6');
            $(this).hover(function(){ $(this).css('background-color', '#9ec9ff');}, 
            function(){ $(this).css('background-color', '#3971c6');});
        });//End each h2
    });//End collapse click
});