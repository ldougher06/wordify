angular.module('starter.controllers', [])

.controller('playlistCtrl', function($scope, $rootScope, $http) {
  var API = "https://api.spotify.com/v1/search?q=";
  var list = "";
  $scope.playlist = [];

  $scope.doSearch = function(list) {
    // list = $scope.list;
    console.log(list);

    $http.get(API + list + "&type=track&limit=10")
      .success(function(data) {
        $scope.playlist.push(data.tracks.items[0]);
      })
  }
});
