var app = angular.module('app', ['ngRoute']);
var contextPath = 'http://localhost:8189/market'

app.controller('addOrEditProductController', function ($scope, $http) {
    $scope.createOrUpdateProduct = function() {
        window.btoa('11111111:100')

        $http.post(contextPath + '/api/v1/products', $scope.productFromForm).then(function(response) {
            console.log(response);
        });

        window.location.href = contextPath + '/index.html#!/shop';
        window.location.reload(true);
    };
});