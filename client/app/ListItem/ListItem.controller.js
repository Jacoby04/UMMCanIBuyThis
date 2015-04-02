'use strict';

angular.module('ummcanIbuyThisApp')
  .controller('ListItemCtrl', function ($scope, $http, $location, Auth) {

    if(!Auth.isLoggedIn()) {
      $location.path('/login');
    }

    $scope.listItemData = {
      name: "",
      description: "",
      price: 0,
      category: "",
      tags: [],
      negotiable: false
    };

    $scope.categories = [];

    $scope.newTag = "";

    $scope.showRepeatedWarning = false;

    $scope.showIncompleteFieldsWarning = false;

    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
      $scope.categories.sort(function(a,b) { return a.name.localeCompare(b.name) });
    });

    $scope.showCategoryDescription = function() {
      var temp = "";
      for (var i = 0; i < $scope.categories.length; ++i) {
        if ($scope.listItemData.category === $scope.categories[i].name) {
          temp = $scope.categories[i].description;
        }
      }

      return temp;
    };

    $scope.addTag = function() {
      var repeated = false;
      $scope.showRepeatedWarning = false;

      for (var i = 0; i < $scope.listItemData.tags.length; ++i) {
        if ($scope.listItemData.tags[i] === $scope.newTag) {
          repeated = true;
          $scope.showRepeatedWarning = true;
        }
      }

      if (!repeated) {
        $scope.listItemData.tags.push($scope.newTag);
        $scope.newTag = "";
      }
    };

    $scope.resetData = function() {
      $scope.listItemData.name = "";
      $scope.listItemData.description = "";
      $scope.listItemData.price = 0;
      $scope.listItemData.category = "";
      $scope.listItemData.tags = [];
      $scope.listItemData.negotiable = false;
    };

    $scope.createListItem = function() {
      $scope.showIncompleteFieldsWarning = false;

      if ($scope.listItemData.name === "" || $scope.listItemData.category === "" || $scope.listItemData.description === "") {
        $scope.showIncompleteFieldsWarning = true;
      } else {
        $http.post('/api/ListedItems/',
          {
            name: $scope.listItemData.name,
            description: $scope.listItemData.description,
            price: $scope.listItemData.price,
            imagePath: 'assets/images/placeholder.png',
            category: $scope.listItemData.category,
            tags: $scope.listItemData.tags,
            negotiable: $scope.listItemData.negotiable,
            sellerInfo: {
              first: Auth.getCurrentUser().google.name.givenName,
              last: Auth.getCurrentUser().google.name.familyName,
              email: Auth.getCurrentUser().email
            }
          });
        $scope.resetData();

        $location.path('/main');
      }
    };
  });
