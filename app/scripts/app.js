'use strict';

/**
 * @ngdoc overview
 * @name sampleAppApp
 * @description
 * # sampleAppApp
 *
 * Main module of the application.
 */
angular
  .module('sampleAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).when('/crossfit', {
        templateUrl: 'views/crossfit.html',
        controller: 'CrossfitCtrl',
        controllerAs: 'crossfit'
    }).when('/onnit', {
        templateUrl: 'views/onnit.html',
        controller: 'OnnitCtrl',
        controllerAs: 'onnit'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
