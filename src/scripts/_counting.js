$(document).ready(function () {

    function start() {
      let counterBoolean = false;
      var counters = $(".count");
      var countersQuantity = counters.length;
      var counter = [];
    
      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
      }
    
      var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart + "+";
          }
        }, 80);
      }
    
  
      for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
  
      setTimeout(start, 5000);
    }
    
    // boot up the first call
    start();
  

})