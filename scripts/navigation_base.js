$(document).ready(function(){
	$("#nav_popup").click(function(){
		$("#navigation ul li ul").slideToggle();		
		$("#nav_popup").toggleClass("current_page");
		$("#resources").removeClass("current_page");		
		$("#about").removeClass("current_page");		
	});		
});