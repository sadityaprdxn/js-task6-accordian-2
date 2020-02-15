'use strict';

var button = document.querySelectorAll(".face");
console.log(button);
for(var i = 0; i < button.length; i++){
  button[i].onclick = function(){
    var content = this.parentElement;
    var active = content.classList.contains("active");
    var sign = this.querySelector("a");
    if(!active){
      var parents = document.querySelectorAll(".card");
      for (var i = 0; i < parents.length; i++){
        parents[i].classList.remove("active");
      }

      var plusMinus = document.querySelectorAll(".card .face a");
      for (var i = 0; i < plusMinus.length; i++){
        plusMinus[i].classList.replace("minus","plus");
      }

        content.classList.add("active");
        sign.classList.replace("plus","minus");
    }
    else{
      content.classList.remove("active");
      sign.classList.replace("minus","plus");
    }
  }
}