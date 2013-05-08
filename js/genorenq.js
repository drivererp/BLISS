
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
        $('#EnterDate').html(data.EnterDate);
        $('#Invoiced').html(data.Invoiced);
        $('#InvDate').html(data.InvDate);
        $('#GoodsValue').html(data.GoodsValue);
        $('#DepositValue').html(data.DepositValue);
        $('#VatValue').html(data.VatValue);
        $('#DepositVatValue').html(data.DepositVatValue);
        $('#TotalValue').html(data.TotalValue);
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

