
function saveSettings()
{
  localStorage.url = $('#urlSetting').val();
  userName = $('#userName').val();
  password = $('#password').val();

}

function submitOrder()
{
  var OrdNo = $('#OrdNo').val();
  $.ajax(
  {
    type: 'POST',
    url: localStorage.url + '/sord/so87e_ajax.php?CPROG=GENORENQ',
    cache: false,
    data: {
      'OrdNo':OrdNo
    },
    dataType: 'json',
    success: function(data)
    {
      //      if (data.errmsg.trim.length() == 0)
      //      {
      $('#OrderNo').html(data.OrdNo);
      $('#OrderStatus').html(data.OrderStatus);
      $('#CustOrdNum').html(data.CustOrdNum);

      $('#CustCode').html(data.CustCode);

      $('#DelPoint').html(data.DelPoint);

      $('#Name').html(data.Name);

      $('#Address1').html(data.Address1);
      $('#PostCode').html(data.PostCode);

      $('#DelAddress').html(data.DelAddress);

      $('#OrderDate').html(data.OrderDate);
      $('#Invoiced').html(data.Invoiced);
      $('#InvDate').html(data.InvDate);
      $('#GoodsValue').html(data.GoodsValue);
      $('#VatValue').html(data.VatValue);
      $('#TotalValue').html(data.TotalValue);


      var table = document.getElementById('prodTable');

        var rowCount = table.rows.length;
        var row = "0";


        $('#prodTable tr:not(:first)').remove();

        $.each(data.productArray, function(key, val) {

          row = table.insertRow(-1);

          var cell1 = row.insertCell(0);
          cell1.innerHTML = val.prodCode;

          cell1 = row.insertCell(1);
          cell1.innerHTML = val.prodDesc;

          cell1 = row.insertCell(2);
          cell1.innerHTML = val.pkgDesc;

          cell1 = row.insertCell(3);
          cell1.innerHTML = val.orderedQty;
          cell1.style.textAlign = 'right';

          cell1 = row.insertCell(4);
          cell1.innerHTML = val.despQty;
          cell1.style.textAlign = 'right';

          cell1 = row.insertCell(5);
          cell1.innerHTML = val.uom;
          cell1.style.textAlign = 'center';

          cell1 = row.insertCell(6);
          cell1.innerHTML = val.price;

});
    //      }
    //     else
    //      {
    //       alert(data.errmsg);
    //       document.forms['frm1'].elements['OrdNo'].value = "";
    //      document.forms['frm1'].elements['OrdNo'].focus();
    //     }
    },

    error: function(jqo, txt, err)
    {
      alert(txt);

    }
  }
  );

}

