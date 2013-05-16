//This should be loaded before jquery mobile js in your page
//jquery code in here only please

$(document).bind("mobileinit", function(){
  //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.mobile.defaultPageTransition = 'pop';
  $.mobile.touchOverflowEnabled = true;
});

$( document ).on( 'pageinit',function(event){
          $('#home').on("swiperight",function(){
		$("#menuPanel").panel( "open");
	});
          });


