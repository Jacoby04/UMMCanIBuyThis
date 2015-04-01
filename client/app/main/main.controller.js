'use strict';

angular.module('ummcanIbuyThisApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, $location) {

    if(!Auth.isLoggedIn()) {
      $location.path('/login');
    }

    //********************** NAVBAR *********************
    $scope.menu = [
      {
        'title': 'List an Item',
        'link': '/ListItem'
      },
      {
        'title': "Account",
        'link': ""
      },
      {
        'title': "UMM",
        'link': "http://www.morris.umn.edu/"
      }];
    // KEEP UMM AS THE LAST LINK IN MENU!!!


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

    //*********************** END NAVBAR *********************

    $scope.awesomeThings = [];

    $scope.categories = [];
    $scope.theItems = [];

    // Variables to change view on the main page.
    $scope.showMain = true;
    $scope.showList = false;
    $scope.showItem = false;

    // Variables to keep track of and modify for changing the views.
    $scope.selectedCategory = '';
    $scope.searchedText = '';
    $scope.selectedItem = {};

    // =============== DATABASE CALLS HERE ===============

    $http.get('/api/ListedItems').success(function(theItems) {
      $scope.theItems = theItems;
      //socket.syncUpdates('items', $scope.theItems);
    });

    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
      $scope.categories.sort(function(a,b) { return a.name.localeCompare(b.name) });
    });

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    // ============== FILTER FUNCTIONS GO HERE ===========================



    // ================= BASIC FUNCTIONALITY HERE ==========================

    $scope.chooseCategory = function(category) {
      $scope.showMain = false;
      $scope.showList = true;
      $scope.showItem = false;
      $scope.selectedCategory = category;
      $scope.selectedItem = {};
    };

    $scope.chooseItem = function(item) {
      $scope.showMain = false;
      $scope.showList = false;
      $scope.showItem = true;
      $scope.selectedCategory = '';
      $scope.searchedText = '';
      $scope.selectedItem = item;
    };

    $scope.resetMain = function() {
      $scope.showMain = true;
      $scope.showList = false;
      $scope.showItem = false;
      $scope.searchedText = '';
      $scope.selectedCategory = '';
      $scope.selectedItem = {};
    };

    // ================ BELOW THIS ARE DEFAULT "THINGS" =====================
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  });
