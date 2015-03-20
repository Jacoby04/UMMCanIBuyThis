'use strict';

angular.module('ummcanIbuyThisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ListItem', {
        url: '/ListItem',
        templateUrl: 'app/ListItem/ListItem.html',
        controller: 'ListItemCtrl'
      });
  });