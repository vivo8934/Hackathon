var myBtn = document.querySelector('.button');
var Menu = document.querySelector('.Audio-Menu');
var audio = document.querySelector('audio');
var startRec = document.getElementById('btn-start-recording');

var recorder; // globally accessible
Menu.style.display = 'none';

// showing the Menu Of recording
myBtn.addEventListener('click', function(){
 myBtn.style.display = 'none';
  Menu.style.display = 'block';
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
        audio.src = URL.createObjectURL(microphone);
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

document.getElementById('btn-stop-recording').onclick = function() {
    this.disabled = false;
    recorder.stopRecording(stopRecordingCallback);
  audio.stop();
};
