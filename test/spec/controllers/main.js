'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodo2App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be empty on init', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('size of 1 after we add one', function () {
    scope.todos.push('test1');
    expect(scope.todos.length).toBe(1);
  });

});
