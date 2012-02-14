/**
 * This is the entry point for our JavaScript program
 */

function main() {
	var searchText = $("#input_text");
	$("#twitter_button").click(function(){
	 	var s = new Spotter("twitter.search",
					{q:searchText, period:120},
					{buffer:true, bufferTimeout:750}
					);
					
		var color = 'red';
		var count=0;
		var object_array = [];
		s.register(function(tweet){
			count++;
			var profile_image="<img src='"+tweet.profile_image_url+"'/>";
			if(count%2===0) {
				color='red';
			}
			else {
				color='blue';
			}
			var object=$("<p class="+color+">"+profile_image + tweet.text +"</p>");
			object.hide();
			$("#tweets").prepend(object);
			object.slideDown();
			
			$("#tweets p:gt(5)").fadeOut(200, function (){
				$("#tweets p:gt(5)").remove();
			});
			
		});	
		s.start();
		$("#facebook_button").click(function(){
		 	var f = new Spotter("facebook.search",
						{q:searchText, period:120},
						{buffer:true, bufferTimeout:750}
						);
						
			var color = 'red';
			var count=0;
			var object_array = [];
			f.register(function(statuses){
				count++;
				alert("hello!")
				var profile_image="<img src='"+facebook.profile_image_url+"'/>";
				if(count%2===0) {
					color='red';
				}
				else {
					color='blue';
				}
				var object=$("<p class="+color+">"+profile_image_url+statuses.text+"</p>");
				object.hide();
				$("#posts").prepend(object);
				object.slideDown();

				$("#posts p:gt(5)").fadeOut(200, function (){
					$("#posts p:gt(5)").remove();
				});
			});	
			f.start();
	});
}


$(document).ready(function() {
	main();
});
