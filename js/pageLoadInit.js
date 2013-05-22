//This should be loaded before jquery mobile js in your page
//jquery code in here only please

$(document).bind("mobileinit", function(){
  //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.mobile.defaultPageTransition = 'slide';
  $.mobile.touchOverflowEnabled = true;
});
//use this to do script as the #page is loaded
$('#home').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

  //first vla in array, Jan is xaxis title - If use same one twice data is plotted against it no
  //  as a new point in sequence
  var line1Data = [['Jan', 12500],['Feb',55000],['Mar',70000],['Apr',75000],['May',90000],['Jun',200000],['Jul', 125000],['Aug',55000],['Sep',70000],['Oct',75000],['Nov',90000],['Dec',200000]];

  $.jqplot('chartdivSO',  [line1Data],
  {
    // Turns on animatino for all series in this plot.
    animate: true,
    // Will animate plot on calls to plot1.replot({resetAxes:true})
    animateReplot: true,
    // title:'Sales',
    seriesDefaults: {
      showMarker:false,
      shadow:false,
      pointLabels: {
        show:true
      }
    },
    grid: {
            shadow:false
          },
    axesDefaults: {
      tickRenderer: $.jqplot.CanvasAxisTickRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
        //ticks: ['Jan','Feb','Mar'],
        //dont know what this does -> numberTicks: 12,
        tickOptions: {
          angle: -45,      //tilt with -30, -45 etc
          fontSize: '8pt'
        }
      },
      yaxis: {
        min: 0
      }
    }
  /*,
        axes:{
          xaxis:{
            label:'Months'
          },
          yaxis:{
            label:'Value'
          }
        }
        */
  }
  );

    var line2Data = [['Jan', 20],['Feb',25],['Mar',5],['Apr',19],['May',23],['Jun',20],['Jul', 10],['Aug',15],['Sep',21],['Oct',16],['Nov',32],['Dec',24]];

  $.jqplot('chartdivComplaints',  [line2Data],
  {
    // Turns on animatino for all series in this plot.
    animate: true,
    // Will animate plot on calls to plot1.replot({resetAxes:true})
    animateReplot: true,
    // title:'Sales',
    seriesDefaults: {
      showMarker:false,
      shadow:false,
      pointLabels: {
        show:true
      }
    },
    grid: {
            shadow:false
          },
    axesDefaults: {
      tickRenderer: $.jqplot.CanvasAxisTickRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
        //ticks: ['Jan','Feb','Mar'],
        //dont know what this does -> numberTicks: 12,
        tickOptions: {
          angle: -45,      //tilt with -30, -45 etc
          fontSize: '8pt'
        }
      },
      yaxis: {
        min: 0
      }
    }
  /*,
        axes:{
          xaxis:{
            label:'Months'
          },
          yaxis:{
            label:'Value'
          }
        }
        */
  }
  );

    var line3Data = [['Jan', 1222],['Feb',400],['Mar',520],['Apr',999],['May',666],['Jun',786],['Jul', 219],['Aug',209],['Sep',504],['Oct',456],['Nov',603],['Dec',708]];

  $.jqplot('chartdivFOutput',  [line3Data],
  {
    // Turns on animatino for all series in this plot.
    animate: true,
    // Will animate plot on calls to plot1.replot({resetAxes:true})
    animateReplot: true,
    // title:'Sales',
    seriesDefaults: {
      showMarker:false,
      shadow:false,
      pointLabels: {
        show:true
      }
    },
    grid: {
            shadow:false
          },
    axesDefaults: {
      tickRenderer: $.jqplot.CanvasAxisTickRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
        //ticks: ['Jan','Feb','Mar'],
        //dont know what this does -> numberTicks: 12,
        tickOptions: {
          angle: -45,      //tilt with -30, -45 etc
          fontSize: '8pt'
        }
      },
      yaxis: {
        min: 0
      }
    }
  /*,
        axes:{
          xaxis:{
            label:'Months'
          },
          yaxis:{
            label:'Value'
          }
        }
        */
  }
  );

    var line4Data = [['Jan', 14500],['Feb',35000],['Mar',60000],['Apr',45000],['May',40000],['Jun',50000],['Jul', 95000],['Aug',65000],['Sep',80000],['Oct',75000],['Nov',50000],['Dec',90000]];

  $.jqplot('chartdivFCosts',  [line4Data],
  {
    // Turns on animatino for all series in this plot.
    animate: true,
    // Will animate plot on calls to plot1.replot({resetAxes:true})
    animateReplot: true,
    // title:'Sales',
    seriesDefaults: {
      showMarker:false,
      shadow:false,
      pointLabels: {
        show:true
      }
    },
    grid: {
            shadow:false
          },
    axesDefaults: {
      tickRenderer: $.jqplot.CanvasAxisTickRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
        //ticks: ['Jan','Feb','Mar'],
        //dont know what this does -> numberTicks: 12,
        tickOptions: {
          angle: -45,      //tilt with -30, -45 etc
          fontSize: '8pt'
        }
      },
      yaxis: {
        min: 0
      }
    }
  /*,
        axes:{
          xaxis:{
            label:'Months'
          },
          yaxis:{
            label:'Value'
          }
        }
        */
  }
  );
});


$('#graph').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

  //first vla in array, Jan is xaxis title - If use same one twice data is plotted against it no
  //  as a new point in sequence
  var line1Data = [['Jan', 12500],['Feb',55000],['Mar',70000],['Apr',75000],['May',90000],['Jun',200000],['Jul', 125000],['Aug',55000],['Sep',70000],['Oct',75000],['Nov',90000],['Dec',200000]];

  $.jqplot('chartdivBig',  [line1Data],
  {
    // Turns on animatino for all series in this plot.
    animate: true,
    // Will animate plot on calls to plot1.replot({resetAxes:true})
    animateReplot: true,
    // title:'Sales',
    seriesDefaults: {
      showMarker:false,
      shadow:false,
      pointLabels: {
        show:true
      }
    },
    grid: {
            shadow:false
          },
    axesDefaults: {
      tickRenderer: $.jqplot.CanvasAxisTickRenderer
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
        //ticks: ['Jan','Feb','Mar'],
        //dont know what this does -> numberTicks: 12,
        tickOptions: {
          angle: -45,      //tilt with -30, -45 etc
          fontSize: '8pt'
        }
      },
      yaxis: {
        min: 0
      }
    }
  /*,
        axes:{
          xaxis:{
            label:'Months'
          },
          yaxis:{
            label:'Value'
          }
        }
        */
  }
  );
});



$('#home').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

 var data = [
    ['WIL1', 2210180],['VIC2', 9995550], ['ABI2', 2210180],
    ['AUD1', 9995550],['ANG1', 7541449]
    ];
  var plot1 = jQuery.jqplot ('custPie', [data],
    {
      seriesDefaults: {
        // Make this a pie chart.
        renderer: jQuery.jqplot.PieRenderer,
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      },
      legend: { show:true, location: 'w' }
    }
  );
});





