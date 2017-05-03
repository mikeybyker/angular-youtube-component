# YouTube Directive

A component version (angular 1.5+) of the [YouTube directive](https://github.com/mikeybyker/angular-youtube-directive). Supply the video id and that's it.

### Usage
Bare bones

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script src="angular-youtube.min.js"></script>
<body ng-app="app">
  <youtube width="640" height="390" videoid="BChww2pEZUs"></youtube>
<body>
```
If you want to supply [video parameters](https://developers.google.com/youtube/player_parameters), point the component to an object in your controller.

```html
<body ng-app="app" ng-controller="AppController as $ctrl">
  <youtube width="640" height="390" videoid="BChww2pEZUs" video-params="$ctrl.videoParams"></youtube>
<body>
```
```javascript
    angular.module('app', ['sinisterwaltz.youtube'])
    .controller('AppController', function(){
        var $ctrl = this;        
        $ctrl.videoParams = {controls: 1, rel: 0}; // etc.
    });
```

### Demo
See it/play around: [Plnkr](http://plnkr.co/edit/9BkxfX5hevwkhLwTe26t?p=preview)


### Version
0.1.5


Mike