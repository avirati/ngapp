define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('cartCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.test = [1, 2, 3];

    }]);
});