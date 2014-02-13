'use strict';

var inspirationControllers = angular.module('inspirationControllers', []);

inspirationControllers.controller('ShowAllCtrl', [
  '$scope', '$http',  
  function($scope, $http) {
    $http.get("/quotes").success(function(response) {
      $scope.quotes = response;
    });

  $scope.showLayer = function() {
    angular.element(".layer").removeClass("ng-hide");
    angular.element(".new-quote-form").removeClass("ng-hide");
  }

  // do i need this? tbd
  $scope.hideForm = function() {
    angular.element(".layer").addClass("ng-hide");
    angular.element(".new-quote-form").addClass("ng-hide");
  }
    
  }]);

inspirationControllers.controller('ShowQuoteCtrl', [
  '$scope', '$routeParams', '$http',  
  function($scope, $routeParams, $http) {
    $http.get("/quotes/" + $routeParams.id + ".json").success(function(response) {
      $scope.quote = response["quote"];
      $scope.author = response["author"];
    });
  }]);

inspirationControllers.controller('ShowAuthorCtrl', [
  '$scope', '$routeParams', '$http',  
  function($scope, $routeParams, $http) {
    $http.get("/authors/" + $routeParams.id + ".json").success(function(response) {
      $scope.author = response["author"];
      $scope.quotes = response["quotes"];
    });
  }]);

inspirationControllers.controller('ShowAuthorsCtrl', [
  '$scope', '$http',
  function($scope, $http) {
    $http.get("/authors").success(function(response) {
      $scope.authors = response;
      console.log(response);
    })
  }]);