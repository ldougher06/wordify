angular.module('starter.controllers', [])

.controller('playlistCtrl', function($scope) {
  var API = "https://api.spotify.com/v1/search?q=";
  var list = "";
  list = $scope.songsearch;
  console.log(list);
});
