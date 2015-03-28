'use strict';

angular.module('ummcanIbuyThisApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, $location) {

    if(!Auth.isLoggedIn()) {
      $location.path('/login');
    }

    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
      console.log("hello o/")
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.theItems = [];

    $http.get('/api/ListedItems').success(function(theItems)
    {
      $scope.theItems = theItems;
      //socket.syncUpdates('items', $scope.theItems);
    });

  });
