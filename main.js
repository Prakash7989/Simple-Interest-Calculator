function myfunction() {
    var amount = document.getElementById("Actual_Amount").value;
    var interest = document.getElementById("interest").value;
    var time = document.getElementById("time").value;
    var demo = document.getElementById("demo");


    if (amount === "" || interest === "" || time === "") {
      alert("Enter all details correctly");
      return;
    }

 
    amount = parseFloat(amount);
    interest = parseFloat(interest);
    time = parseInt(time);


    if (isNaN(amount) || isNaN(interest) || isNaN(time)) {
      alert("Please enter valid numbers");
      return;
    }


    var total_amount = (amount * (time / 30) * interest) / 100;

    demo.textContent = `Total Amount: ${total_amount.toFixed(2)}`;
  }