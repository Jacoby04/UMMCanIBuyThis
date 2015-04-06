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
    $scope.showMyItems = false;

    // Variables to keep track of and modify for changing the views.
    $scope.selectedCategory = '';
    $scope.searchedText = '';
    $scope.selectedItem = {};

    // Data for filter by price ranges.
    // This is hard-coded in the HTML...
    // Places to modify if changing ranges: HTML, Filter, Here.
    $scope.priceRanges = [
        0,
        20,
        40,
        60,
        80,
        100
    ];
    $scope.selectedPriceRange = -1;

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

    $scope.categoryFilter = function(item) {
      if ($scope.selectedCategory === '') {
        return true;
      } else {
        return $scope.selectedCategory === item.category;
      }
    };

    /*
    Want to not have case-sensitive searches.
    Want to search by:
    -item name
    -category
    -tags
    -description
     */
    $scope.searchFilter = function(item) {
      var searchText = $scope.searchedText.toLowerCase();
      //for (var i = 0; i < item.tags.length; ++i) {
      //  if (item.tags[i].toLowerCase().indexOf(searchText) != -1) {
      //    return true
      //  }
      //}

      return (
        (item.name.toLowerCase().indexOf(searchText) != -1) ||
        (item.category.toLowerCase().indexOf(searchText) != -1) ||
        (item.description.toLowerCase().indexOf(searchText) != -1) ||
        (item.tags.toString().toLowerCase().indexOf(searchText) != -1)
      )
    };

    $scope.priceFilter = function(item) {
      if ($scope.selectedPriceRange == -1) {
        return true;
      } else if (parseInt($scope.selectedPriceRange) == parseInt($scope.priceRanges[$scope.priceRanges.length - 1])) {
        return parseInt(item.price) >= parseInt($scope.priceRanges[$scope.priceRanges.length - 1]);
      } else {
        return (parseInt(item.price) >= parseInt($scope.selectedPriceRange)) && (parseInt(item.price) < (parseInt($scope.selectedPriceRange) + 20));
      }
    };

    $scope.myItemsFilter = function(item) {
      if ($scope.showMyItems) {
        return Auth.getCurrentUser().email === item.sellerInfo.email;
      } else {
        return true;
      }
    };


    // ================= BASIC FUNCTIONALITY HERE ==========================

    // Also is used for searching.
    $scope.chooseCategory = function(category) {

      if (category === '') {
        $scope.showMyItems = false;
      }

      $scope.showMain = false;
      $scope.showList = true;
      $scope.showItem = false;
      $scope.selectedPriceRange = -1;
      $scope.selectedCategory = category;
      $scope.selectedItem = {};
    };

    $scope.search = function(category) {

      if ($scope.searchedText === '') {
        // Do nothing
      } else {
        $scope.showMain = false;
        $scope.showList = true;
        $scope.showItem = false;
        $scope.selectedCategory = category;
        $scope.selectedItem = {};
      }
    };

    $scope.chooseItem = function(item) {
      $scope.showMain = false;
      $scope.showList = false;
      $scope.showItem = true;
      $scope.showMyItems = false;
      $scope.selectedCategory = '';
      $scope.searchedText = '';
      $scope.selectedItem = item;
      $scope.selectedPriceRange = -1;
    };

    $scope.resetMain = function() {
      $scope.showMain = true;
      $scope.showList = false;
      $scope.showItem = false;
      $scope.showMyItems = false;
      $scope.searchedText = '';
      $scope.selectedCategory = '';
      $scope.selectedItem = {};
      $scope.selectedPriceRange = -1;
    };

    $scope.myItems = function() {
      $scope.showMain = false;
      $scope.showList = true;
      $scope.showItem = false;
      $scope.showMyItems = true;
      $scope.selectedPriceRange = -1;
      $scope.selectedItem = {};
      $scope.selectedCategory = '';
    };

    // ================ EMAIL THINGS ========================================

    $scope.message = '';

    // comments: nothing pregenerated for questions
    // offer will say "hello, i saw you have this thing listed i would like to make you an offer of [user input here]
    // buy this will say the same, but it would like to buy {{item}} for {{price}}

    //$scope.gmailInfo = {
    //  to: $scope.selectedItem.sellerInfo.email,
    //  subject: $scope.selectedItem.name + " - ",
    //  message: ''
    //};
    //
    //$scope.sendGmail = function(seller) {
    //   var str = 'http://mail.google.com/mail/?view=cm&fs=1'+
    //     '&to=' + opts.to +
    //     '&su=' + opts.subject +
    //     '&body=' + opts.message +
    //     '&ui=1';
    //   $window.open(str);
    //};

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
