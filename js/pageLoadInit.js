//This should be loaded before jquery mobile js in your page
//jquery code in here only please

$(document).bind("mobileinit", function(){
  //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.mobile.defaultPageTransition = 'pop';
  $.mobile.touchOverflowEnabled = true;
});

$('#custenq').live('pageshow',function(event, ui){
});


// Triggered when page is initialised
//$( '#graph' ).live( 'pageinit',function(event){
//       alert('page inited');
//       $.jqplot('chartdiv',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);
//      });

//$( '#graph' ).bind( 'pagechange',function(event, data){
//       alert('page inited');
//        $.jqplot('chartdiv',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);
//      });

      $( '#graph' ).bind( 'pagebeforecreate',function(event){
       alert('page inited');
        //$.jqplot('chartdiv',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);
      });


      $('#custenqInfo').on('pageload',function( event ){
        alert('page loaded');
      })


