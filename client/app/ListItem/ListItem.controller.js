'use strict';

angular.module('ummcanIbuyThisApp')
  .controller('ListItemCtrl', function ($scope, $http, $location) {
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

    $http.get('/api/categorys').success(function(categories) {
      $scope.categories = categories;
    });


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
      $http.post('/api/ListedItems/',
        {
          name: $scope.listItemData.name,
          description: $scope.listItemData.description,
          price: $scope.listItemData.price,
          category: $scope.listItemData.category,
          tags: $scope.listItemData.tags,
          negotiable: $scope.listItemData.negotiable
        });

      $scope.resetData();

      $location.path('/main');
    };
  });
