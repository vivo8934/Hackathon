//radio button values
var submitBtn = document.querySelector('.submitBtn');

//empty array
var hateIt = [];
var dislikeIt = [];
var likeIt = [];
var lovedIt =[];

function generateValues(){
  var selectedRadBtn = document.querySelectorAll("input[type=radio]:checked");

  selectedRadBtn.forEach(function(radio){

    if (radio.value === '1') {
      hateIt.push(radio.value);
    }else if (radio.value === '2') {
      dislikeIt.push(radio.value);
    }else if (radio.value === '3') {
      likeIt.push(radio.value);
    }else if (radio.value === '4') {
      lovedIt.push(radio.value);
    }
  });
alert("THANKS:feedback sent for review");
}

function clearAll(){
  var selectedRadBtn = document.querySelectorAll("input[type=radio]:checked");
  for (var i = 0; i < selectedRadBtn.length; i++) {
    var radioBtnClear = selectedRadBtn[i];
    radioBtnClear.checked = false;
  }
}

submitBtn.addEventListener('click', function(){
  generateValues();
  clearAll()
});
console.log(hateIt);
console.log(dislikeIt);
console.log(likeIt);
console.log(lovedIt);
