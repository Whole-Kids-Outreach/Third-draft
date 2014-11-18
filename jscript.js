$(document).ready(function() {
	$(document).ready(function() {
		$('.myMenu > li').bind('mouseover', openSubMenu);
		$('.myMenu > li').bind('mouseout', closeSubMenu);
		
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		};
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		};
				   
	});
	
	
	
});

$(window).load(function(){
		var pages = $('#container li'), current=0;
		var currentPage,nextPage;
		var timeoutID;


		var handler2=function(){
			currentPage= pages.eq(current);
			if (current >= pages.length-1)
				current=0;
			else
				current=current+1;
			nextPage = pages.eq(current);	
			currentPage.fadeTo('slow',0.3,function(){
				nextPage.fadeIn('slow',function(){
					nextPage.css("opacity",1);
					currentPage.hide();
					currentPage.css("opacity",1);				
				});	
			});
			timeoutID=setTimeout(function(){
				handler2();	
			}, 4000);
			
		}

		timeoutID=setTimeout(function(){
			handler2();	
			}, 4000);
		
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
