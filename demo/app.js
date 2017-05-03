(function(){
  'use strict';

  var app = angular
    .module('app', ['sinisterwaltz.youtube'])
    .controller('AppController', AppController);

  function AppController(){
    var $ctrl = this;

    $ctrl.video = {
      videoId: 'XLaFLztnL84',
      videoParams: {controls: 1, rel: 0},
      width: 640,
      height: 480
    };
  }

}());

/*
    // For available params: https://developers.google.com/youtube/player_parameters

    autoplay:       0 | 1               default: 0
    cc_load_policy: 0 | 1               default: based on user preference
    color:          'red' | 'white'     default: 'red'
    controls:       0 | 1 | 2           default: 1
    disablekb:      0 | 1               default: 0
    enablejsapi:    0 | 1               default: 0
    end:            positive integer
    fs:             0 | 1               default: 1
    hl:             ISO 639-1 two-letter language code
    iv_load_policy: 1 | 2 | 3           default: 1
    loop:           0 | 1               default: 0
    modestbranding: 0 | 1               default: 0
    origin:         your domain
    playlist:       comma-separated list of video IDs to play
    playsinline:    0 | 1               default: 0
    rel:            0 | 1               default: 1
    showinfo:       0 | 1               default: 1
    start:          seconds from the start of the video

*/