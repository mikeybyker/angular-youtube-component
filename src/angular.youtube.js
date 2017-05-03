/* global YT */
(function(){
    'use strict';

    angular
      .module('sinisterwaltz.youtube', [])    
      .factory('youTubeService', youTubeService)
      .component('youtube', {
        bindings: {
          height:         '@',
          width:          '@',
          videoid:        '@',
          videoParams:    '<'
        },
        template: '<div></div>',
        controller: function ($element, youTubeService) {
            var $ctrl = this,
              defaults = {
                showinfo: 0,
                rel: 0
              },
              player,
              params = angular.extend(defaults, $ctrl.videoParams);

              youTubeService
                .setup()
                .then(function(){
                  player = new YT.Player($element.children()[0], {
                    height: $ctrl.height,
                    width: $ctrl.width,
                    videoId: $ctrl.videoid,
                    playerVars: params
                  });
                });
        },
      });


    function youTubeService($q, $document, $window){
      var deferred = $q.defer(),
        initialized = false;

      function init(){
        var $pagejs = angular.element($document).find('script'),
          js = angular
                .element('<script/>')
                .prop('src', 'https://www.youtube.com/iframe_api');
        $pagejs.eq(0).parent().prepend(js);
        initialized = true;
        $window.onYouTubeIframeAPIReady = function() {
          deferred.resolve();
        }
      }

      return {
        setup: function() {
          if(!initialized){
            init();
          }
          return deferred.promise;
        }
      }
    }

}());
