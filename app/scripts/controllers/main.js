'use strict';

/**
 * @ngdoc function
 * @name mytodo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodo2App
 */
angular.module('mytodo2App')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];


    $scope.addTodo = function(){
      $scope.error = '';
      if (newEntry($scope.todo)) {
        $scope.todos.push($scope.todo)
      }
      else {
        $scope.error = $scope.todo + " is a duplicate entry.";
      }
      $scope.todo = '';
    };

    //Check whether the entry is new, don't want duplicates.
    function newEntry($entry)
    {
      return ($scope.todos.indexOf($entry) != 0)
    }

  });
