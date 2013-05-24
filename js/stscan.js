
function saveSettings()
{

  localStorage.url = $('#urlSetting').val();
  userName = $('#userName').val();
  password = $('#password').val();

}

function submit()
{
  //do ajax call to get data from server
  var prodCode = $('#prodCode').val(); //document.forms['frmProduct'].elements['prodCode'].value;

  if (prodCode.length == 0)
  {
    alert('Please enter a Product Code');
    return;
  }

  $.ajax(
  {
    type: 'POST',
    //           url: 'http://10.0.4.50/scon/sc09app.php?CPROG=STSCAN',
    url: 'http://' + localStorage.url + '/scon/sc09app.php?CPROG=STSCAN',
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      'ProdCode':prodCode,
      'CPROG':'STSCAN'
    },
    dataType: 'json',
    success: function(data)
    {
      if (data.errmsg == "")
      {
        $('#code').html(data.prodCode);
        $('#prodDesc').html(data.prodDesc);
        $('#packDesc').html(data.pkgDesc);

        $('#physical').html(data.physStock);
        $('#allocated').html(data.allocated);
        $('#free').html(data.freeStock);
        $('#stkUom').html(data.stkUom);

        $('#fwdProdUsage').html('2000.000');

        $('#onOrder').html(data.onOrder);

        $('#fwdOrders').html(data.fwdOrder);

        $('#backOrders').html(data.backOrder);

        $('#allLocns').html(data.allLocations);
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
      alert(txt + 'Stock Summary Tab');
    }
  }
  );

  $.ajax(
  {
    type: 'POST',
    //           url: 'http://10.0.4.50/scon/sc09app.php?CPROG=STSCAN',
    url: 'http://' + localStorage.url + '/scon/sc192a_ajax.php?CPROG=PRODSUM',
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      'ProdCode':prodCode
    },
    dataType: 'json',
    success: function(data)
    {

        var table = document.getElementById('batchesTable');

        var rowCount = table.rows.length;
        var row = "0";


        $('#batchesTable tr:not(:first)').remove();

        $.each(data, function(key, val) {

          row = table.insertRow(-1);

          var cell1 = row.insertCell(0);
          cell1.innerHTML = val.batchNum;

          cell1 = row.insertCell(1);
          cell1.innerHTML = val.date;
          cell1.style.textAlign = 'center';

          cell1 = row.insertCell(2);
          cell1.innerHTML = val.expDate;
          cell1.style.textAlign = 'center';

          cell1 = row.insertCell(3);
          cell1.innerHTML = val.desc;

          cell1 = row.insertCell(4);
          cell1.innerHTML = val.status;

          cell1 = row.insertCell(5);
          cell1.innerHTML = val.position;

          cell1 = row.insertCell(6);
          cell1.innerHTML = val.physStock;
          cell1.style.textAlign = 'right';

          cell1 = row.insertCell(7);
          cell1.innerHTML = val.allocStock;
          cell1.style.textAlign = 'right';

          cell1 = row.insertCell(8);
          cell1.innerHTML = val.freeStock;
          cell1.style.textAlign = 'right';

});

    },
    error: function(jqo, txt, err)
    {
      alert(txt + 'Batch Detail Tab');
    }
  }
  );

}