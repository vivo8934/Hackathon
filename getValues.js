//radio button values
var submitBtn = document.querySelector('.submitBtn');

//empty array
var veryBad = [];
var bad = [];
var good = [];
var veryGood =[];

function generateValues(){
  var selectedRadBtn = document.querySelectorAll("input[type=radio]:checked");

  selectedRadBtn.forEach(function(radio){

    if (radio.value === '1') {
      veryBad.push(radio.value);
    }else if (radio.value === '2') {
      bad.push(radio.value);
    }else if (radio.value === '3') {
      good.push(radio.value);
    }else if (radio.value === '4') {
      veryGood.push(radio.value);
    }
  });

}
submitBtn.addEventListener('click', generateValues);
