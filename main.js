var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var view = document.getElementById("view");
var check = document.getElementById("checkbox");
var disc = document.getElementById("discount");
var disc1 = document.getElementById("discount1");
var state = true;
    
    output.innerHTML = "$" + slider.value; // Display the default slider value
    

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
      output.innerHTML = "$" + this.value;
      if(this.value == "8"){
        view.innerHTML = "10k PAGEVIEWS";
      }
      else if(this.value == "12"){
        view.innerHTML = "50k PAGEVIEWS";
      }
      else if(this.value == "16"){
        view.innerHTML = "100k PAGEVIEWS";
      }
      else if(this.value == "24"){
        view.innerHTML = "500k PAGEVIEWS";
      }
      else if(this.value == "36"){
        view.innerHTML = "1M PAGEVIEWS";
      }
    }

    check.addEventListener("click", function(){
      if(state==true){
        output.innerHTML = "$" + slider.value * 0.75;
        state = !state;
      }
      else{
        output.innerHTML = "$" + slider.value;
        state = !state;
      }
    })
    

    slider.addEventListener("mousemove", function(){
      var x = slider.value;
      var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x +'%)';
      slider.style.background = color;
    })
