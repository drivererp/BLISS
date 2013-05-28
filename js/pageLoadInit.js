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

 $.ajax(
  {
    type: 'POST',
    //           url: 'http://10.0.4.50/scon/sc09app.php?CPROG=STSCAN',
    url: 'http://' + localStorage.url + '/sord/so430_ajax.php',
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      'CPROG':'SALESDSH'
    },
    dataType: 'json',
    success: function(data)
    {
      if (data.errmsg == "")
      {
        //graph here ...

        var line1Data = [['Jan', Number(data.period1)],['Feb',Number(data.period2)],['Mar',Number(data.period3)],['Apr',Number(data.period4)],['May',Number(data.period5)],['Jun',Number(data.period6)],['Jul', Number(data.period7)],['Aug',Number(data.period8)],
                       ['Sep',Number(data.period9)],['Oct',Number(data.period10)],['Nov',Number(data.period11)],['Dec',Number(data.period12)]];

      //  var line1Data = [['Jan', Number(data.period1)],['Feb',25],['Mar',5],['Apr',19],['May',23],['Jun',20],['Jul', 10],['Aug',15],['Sep',21],['Oct',16],['Nov',32],['Dec',24]];

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
          }
          );

      }
      else
      {
        alert(data.errmsg);
        document.forms['frm1'].elements['prodCode'].value = "";
        document.forms['frm1'].elements['prodCode'].focus();
      }
    },
    error: function(jqo, txt, err)
    {
      alert(err + ' Sales Order Graph');
    }
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


  $.ajax(
  {
    type: 'POST',
    //           url: 'http://10.0.4.50/scon/sc09app.php?CPROG=STSCAN',
    url: 'http://' + localStorage.url + '/sord/so430_ajax.php',
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      'CPROG':'SALESDSH'
    },
    dataType: 'json',
    success: function(data)
    {
      if (data.errmsg == "")
      {
        //graph here ...

          var line1BigData = [['Jan', Number(data.period1Prev)],['Feb',Number(data.period2Prev)],['Mar',Number(data.period3Prev)],['Apr',Number(data.period4Prev)],['May',Number(data.period5Prev)],
          ['Jun',Number(data.period6Prev)],['Jul', Number(data.period7Prev)],['Aug',Number(data.period8Prev)],
          ['Sep',Number(data.period9Prev)],['Oct',Number(data.period10Prev)],['Nov',Number(data.period11Prev)],['Dec',Number(data.period12Prev)]];
          var line2BigData = [['Jan', Number(data.period1)],['Feb',Number(data.period2)],['Mar',Number(data.period3)],['Apr',Number(data.period4)],['May',Number(data.period5)],
          ['Jun',Number(data.period6)],['Jul', Number(data.period7)],['Aug',Number(data.period8)],
          ['Sep',Number(data.period9)],['Oct',Number(data.period10)],['Nov',Number(data.period11)],['Dec',Number(data.period12)]];


          $.jqplot('chartdivBig',  [line1BigData, line2BigData],
          {
            series:[{renderer:$.jqplot.BarRenderer}, {xaxis:'xaxis', yaxis:'yaxis'}],
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
          }
          );

      }
      else
      {
        alert(data.errmsg);
        document.forms['frm1'].elements['prodCode'].value = "";
        document.forms['frm1'].elements['prodCode'].focus();
      }
    },
    error: function(jqo, txt, err)
    {
      alert(err + ' Sales Order Graph');
    }
  }
  );


  //first vla in array, Jan is xaxis title - If use same one twice data is plotted against it no
  //  as a new point in sequence

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