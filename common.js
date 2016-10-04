$(document).ready(function(){

	// scroll to the first-screen section
	$("a.scroll").click(function(){ 
    	var elementClick = $(this).attr("href");
    	var destination = $(elementClick).offset().top;
    	$("html,body").animate( { scrollTop: destination }, 1000 );
    	return false;
    });

    // vk subscribers
	$.ajax({  
		url: 'http://api.vk.com/method/users.get?user_ids=12269207&fields=followers_count',
		dataType: "jsonp",
		success:function(e){ 
				$('#vkontakte_count').html(e.response[0].followers_count);
			}  
	});


	// check content in the form
  	$(".input-wrapper input, .input-wrapper textarea").focusout(function(){
    	if($(this).val() != ""){
    		$(this).addClass("has-content");
    	}else{
    		$(this).removeClass("has-content");
    	}
	});

});

	