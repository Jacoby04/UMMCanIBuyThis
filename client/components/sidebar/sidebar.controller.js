/**
 * Created by racho008 on 3/25/15.
 */
'use strict';
angular.module('ummcanIbuyThisApp').controller('SideCtrl', function ($scope, $http, socket) {

  $scope.categories = [];

  $http.get('/api/categorys').success(function(categories) {
    $scope.categories = categories;
  });

});
