
$(document).ready(function () {
    var audio =  new Audio();
    audio.src = "jamsauce.mp3";
    $('.spinner-wrap').click(function() {
    var bpm = $('audio').data('bpm');
    var pulse = (60/bpm) * 1000;
    if (audio.paused === false) {
      audio.pause();
      $(this).removeClass('playing');
      $('.spinner-wrap').removeClass('playing');
      $('.spinner-outer').removeClass('playing');
      $('.spinner-center').removeClass('playing');
      $('.spinner-wrap').removeClass('pulse');
      clearInterval(intervals);
    }
    else {
      audio.play();
      $('.spinner-wrap').addClass('playing');
      $('.spinner-outer').addClass('playing');
      $('.spinner-center').addClass('playing');
      $(this).addClass('playing');
      pulsing();
      intervals =  setInterval(pulsing,pulse);

    }
    function pulsing()
    {
      $('.spinner-wrap').addClass('pulse');
      setInterval(function(){
        $('.spinner-wrap').removeClass('pulse');
      },pulse-100);

    }
    });
});
