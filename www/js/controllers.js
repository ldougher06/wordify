angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  var getAlbum = function (albumId, callback) {
    $http({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        success: function (response) {
            callback(response);
        }
    })
  }
  var searchAlbums = function (query) {
    $http({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'album'
      }
    })
  }

  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
    }, false);
  })


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
