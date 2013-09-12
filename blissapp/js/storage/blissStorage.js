function saveBlissCust(id)
{
      localStorage.cust1 = $('#' + id).val();
}

function prevBlissCust(id)
{
      $('#' + id).val('');
      $('#' + id).val(localStorage.cust1);

}

function saveBlissProd(id)
{
      localStorage.prod1 = $('#' + id).val();
}

function prevBlissProd(id)
{
      $('#' + id).val('');
      $('#' + id).val(localStorage.prod1);

}

function saveBlissOrd(id)
{
      localStorage.ord1 = $('#' + id).val();
}

function prevBlissOrd(id)
{
      $('#' + id).val('');
      $('#' + id).val(localStorage.ord1);

}