
function saveSettings()
{

  localStorage.url = $('#urlSetting').val();
  localStorage.userName = $('#userName').val();
  password = $('#password').val();

}

window.appRootDirName = "download_test";
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log("device is ready");
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function fail() {
	console.log("failed to get filesystem");
}

function gotFS(fileSystem) {
	console.log("filesystem got");
	window.fileSystem = fileSystem;
	fileSystem.root.getDirectory(window.appRootDirName, {
		create : true,
		exclusive : false
	}, dirReady, fail);
}

function dirReady(entry) {
	window.appRootDir = entry;
	console.log("application dir is ready");
}


downloadFile = function(){
	var fileTransfer = new FileTransfer();

	var url = "http://www.irs.gov/pub/irs-pdf/fw4.pdf";
	var filePath = window.appRootDir.fullPath + "/test.pdf";

	fileTransfer.download(
	    url,
	    filePath,
	    function(entry) {
	        alert("download complete: " + entry.fullPath);
	    },
	    function(error) {
	        alert("download error" + error.source);
	    }
	);
}

function submitCust()
{
  //do ajax call to get data from server
  var custCode = $('#custCode').val();

  if (custCode.length == 0)
  {
    alert('Please enter a Product Code');
    return;
  }

  $.ajax(
  {
    type: 'POST',
  //  url: 'http://10.0.4.50/w15c0300app.php?CPROG=w15c0300.php',
        url: localStorage.url + '/w15c0300app.php?CPROG=w15c0300.php',
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      'custcode':custCode
    },
    dataType: 'json',
    success: function(data)
    {
      if (data.errmsg == "")
      {
        $('#custCodeInfo').html(data.custcode);
        $('#custName').html(data.CustName);

        $('#Addr1').html(data.Addr1);
        $('#Addr2').html(data.Addr2);
        $('#Addr3').html(data.Addr3);

        $('#Tel').html(data.Tel);

        $('#repCode').html(data.repCode);
        $('#CredLim').html(data.CredLim);


        $('#Curr').html(data.Curr);

        $('#Status').html(data.Status);
        $('#Terms').html(data.Terms);

        $('#UnPosted').html(data.UnPosted);
        $('#dateLastInv').html(data.dateLastInv);
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
      alert(txt);
    }
  }
  );


    $.ajax(
  {
    type: 'POST',
  //  url: 'http://10.0.4.50/util/ut90aapp.php?CPROG=CUSTENQ',
        url: localStorage.url + '/util/ut90aapp.php?CPROG=CUSTENQ',
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      'custcode':custCode
    },
    dataType: 'json',
    success: function(data)
    {
      if (data.errmsg == "")
      {
        $('#credLim').html(data.creditLimit);
        $('#credText1').html(data.creditLimitText1);
        $('#credText2').html(data.creditLimitText2);

        $('#onStop').html(data.onStop);

        $('#paymentTerms').html(data.paymentTerms);

        $('#outstandingInvValue').html(data.outstandingInvValue);

        $('#outstandingOrdValue').html(data.outstandingOrdValue);

        $('#credFailedOrdValue').html(data.credFailedOrdValue);

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
      alert(txt);
    }
  }
  );

     $.ajax(
  {
    type: 'POST',
  //  url: 'http://10.0.4.50/util/ut90aapp.php?CPROG=CUSTENQ',
        url: localStorage.url + '/sord/so119a_ajax.php?CPROG=OUTOCRPT',
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      'custcode':custCode
    },
    dataType: 'json',
    success: function(data)
    {
//      if (data.errmsg == "")
//      {
         var table = document.getElementById('custOrdTable');

            var rowCount = table.rows.length;
            var row = "0";


        $('#custOrdTable tr:not(:first)').remove();

$.each(data, function(key, val) {

        row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        //cell1.innerHTML = val.orderNum;
        var element = document.createElement("input");
        //Assign different attributes to the element.
        element.type = 'button';
        element.value = val.orderNum; // Really? You want the default value to be the type string?
        element.name = 'orderNum';  // And the name too?
        element.onclick = function() { // Note this is a function
          $.mobile.changePage("genorenq.html");
          sessionStorage.orderNum = val.orderNum;

          };
        cell1.appendChild(element);

        cell1 = row.insertCell(1);
        cell1.innerHTML = val.orderDate;

        cell1 = row.insertCell(2);
        cell1.innerHTML = val.delDate;

        cell1 = row.insertCell(3);
        cell1.innerHTML = val.despDate;

        cell1 = row.insertCell(4);
        cell1.innerHTML = val.lineVal;

        cell1 = row.insertCell(5);
        cell1.innerHTML = val.lineValUkp;

        cell1 = row.insertCell(6);
        cell1.innerHTML = val.custOrd;

        cell1 = row.insertCell(7);
        cell1.innerHTML = val.orderWeight;

        cell1 = row.insertCell(8);
        cell1.innerHTML = val.orderStatus;
});

//      }
//      else
//      {
//        alert(data.errmsg);
//        document.forms['frm1'].elements['prodCode'].value = "";
//        document.forms['frm1'].elements['prodCode'].focus();
   //   }
    },
    error: function(jqo, txt, err)
    {
      alert(txt);
    }
  }
  );


}

