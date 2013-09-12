function submitComplaint()
{
  localStorage.ordNo = $('#OrdNo').val();
  var OrdNo = $('#OrdNo').val();
  $.ajax(
  {
    type: 'POST',
    url: 'http://' + localStorage.url + '/sord/so87e_ajax.php?CPROG=GENORENQ',
    cache: false,
    data: {
      'OrdNo':OrdNo
    },
    dataType: 'json',
    success: function(data)
    {
      $('#OrderNo').html(data.OrdNo);

      var table = document.getElementById('prodTable');

      var rowCount = table.rows.length;
      var row = "0";


      $('#prodTable tr:not(:first)').remove();

      $.each(data.productArray, function(key, val) {

        row = table.insertRow(-1);


        var cell1 = row.insertCell(0);
        //cell1.innerHTML = val.orderNum;
        var element = document.createElement("input");
        //Assign different attributes to the element.
        if(val.prodCode.trim() != "")
        {
          element.type = 'button';
          element.value = val.prodCode;
          element.name = 'prodCode';
          element.onclick = function() {
            localStorage.prodCode = val.prodCode;
            $.mobile.changePage("camera.html");
          };
          cell1.appendChild(element);
        }

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
    },

    error: function(jqo, txt, err)
    {
      alert(txt);

    }
  }
  );
}