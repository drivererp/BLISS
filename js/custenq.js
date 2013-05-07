
function saveSettings()
{

  localStorage.url = $('#urlSetting').val();
  localStorage.userName = $('#userName').val();
  password = $('#password').val();

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

}

