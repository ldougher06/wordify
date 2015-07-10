angular.module('starter.controllers', [])

<<<<<<< HEAD
.controller('DashCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
=======
.controller('playlistCtrl', function($scope) {
  var API = "https://api.spotify.com/v1/search?q=";
  var list = "";
  list = $scope.songsearch;
  console.log(list);
>>>>>>> 1f929bc6dcfe4525067abccf070b2ec5bb9f318b
});
