'use strict';

describe('Controller: ListItemCtrl', function () {

  // load the controller's module
  beforeEach(module('ummcanIbuyThisApp'));

  var ListItemCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListItemCtrl = $controller('ListItemCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
