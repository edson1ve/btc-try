var balance = document.getElementsByClassName('balanceli')[0];
var wrapper = document.createElement('a');
balance.parentNode.insertBefore(wrapper, balance);
wrapper.appendChild(balance);
wrapper.href = "https://www.google.com/search?q=" + document.getElementById("balance").innerHTML + "+BTC+in+TL";