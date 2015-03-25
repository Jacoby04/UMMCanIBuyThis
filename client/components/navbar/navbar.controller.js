'use strict';

angular.module('ummcanIbuyThisApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {
        'title': 'List an Item',
        'link': '/ListItem'
      },
      {
        'title': "UMM",
        'link': "http://www.morris.umn.edu/"
      },
      {
        'title': "Account",
        'link': ""
      }];


    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
