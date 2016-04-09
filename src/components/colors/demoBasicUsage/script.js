angular.module('colorsDemo', ['ngMaterial'])
  .config(function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('myTheme')
      .primaryPalette('brown')
      .accentPalette('green');

    $mdIconProvider
      .defaultIconSet('img/icons/sets/social-icons.svg', 24);
  })
  .directive('userCard', function () {
    return {
      restrict: 'E',
      templateUrl: 'userCard.tmpl.html',
      scope: {
        name: '@',
        theme: '@'
      },
      controller: function ($scope) {
        $scope.theme = $scope.theme || 'default';
      }
    }
  });