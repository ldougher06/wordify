angular.module('starter.secondController', [])

  .controller('ArtistCtrl', function($scope, $rootScope, $http) {
    var API = "https://api.spotify.com/v1/search?q=";
    var list = "";
    $scope.artistlist = [];

    $scope.searchArtist = function(artists) {
      list = artists;
      console.log(artists);

      $http.get(API + list + "&type=artist&limit=10")
        .success(function(data) {
          for(var i = 0; i <= 10; i ++) {
            if (data.artists.items[i] !== undefined) { //only showing if there is data
              $scope.artistlist.push(data.artists.items[i]);
            }
          }
      })
      $scope.artistlist = [];
    }

    $scope.clearForm = function(artists) {
      $scope.artists = null;
    }
  });
