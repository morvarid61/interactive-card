
    function Number(){
      var cardHolderName = document.getElementById("cardHolderName").innerText;
      var cardNumber = document.getElementById("cardNumber").innerHTML;
      var Year = document.getElementById("Year").value;
      var Month = document.getElementById("Month").value;
      var cvc = document.getElementById("cvc").value;



      document.getElementById("cardHolderName").innerHTML ="نام" + cardHolderName + "من";
      document.getElementById("cardNumber").innerHTML ="شماره" + cardNumber + "من";
      document.getElementById("Year").innerHTML ="سال" + Year + "من";
      document.getElementById("Month").innerHTML ="ماه" + Month + "من";
      document.getElementById("cvc").innerHTML ="سیویتو" + cvc + "من";


        // alert('اطلاعات کارت معتبر است!');
    }
  