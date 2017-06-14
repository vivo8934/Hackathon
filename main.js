var myBtn = document.querySelector('#button');
var Menu = document.querySelector('.Audio-Menu');
var audio = document.querySelector('audio');
var startRec = document.getElementById('btn-start-recording');
var stopRec = document.getElementById('btn-stop-recording');
var rateUsBtn = document.querySelector('#ratings');
var rateUsDiv = document.querySelector('#rate');
var header = document.getElementById('header');


var recorder; // globally accessible
Menu.style.display = 'none';

// showing the Menu Of recording
myBtn.addEventListener('click', function(){
 header.style.display = 'none';
  Menu.style.display = 'block';
  //rateUsBtn.style.display = 'none';
});
rateUsDiv.style.display = 'none';

// showing the Menu Of recording
rateUsBtn.addEventListener('click', function(){
 header.style.display = 'none';
  rateUsDiv.style.display = 'block';
//  myBtn.style.display = 'none';
});

// Checking if we have microphone for recording purpose
 function captureMicrophone(callback) {
     navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
     navigator.getUserMedia({audio: true}, callback, function(error) {
        alert('Unable to access your microphone.');
         console.error(error);
     });
}

// Start to record button
startRec.addEventListener('click', function(){
    this.disabled = true;
    captureMicrophone(function(microphone) {
        audio.src = window.URL.createObjectURL(microphone);
        audio.play();
        recorder = RecordRTC(microphone, {
            type: 'audio',
            recorderType: StereoAudioRecorder,
            desiredSampRate: 1
        });
        recorder.startRecording();


        // release microphone on stopRecording
        recorder.microphone = microphone;
        document.getElementById('btn-stop-recording').disabled = false;
    });
});

// stop recording

stopRec.addEventListener('click', function(){
    this.disabled = true;
    recorder.stopRecording();
  audio.stop();
});
