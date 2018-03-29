var app = angular.module('Insert Coin', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider

        .when('/Bitcoin', {
            templateUrl: "pages/Bitcoin.html",
            controller: "BitcoinController"
        })
        .when('/Litecoin', {
            templateUrl: "pages/Litecoin.html",
            controller: "LitecoinController"
        })
        .when('/Burstcoin', {
            templateUrl: "pages/Burstcoin.html",
            controller: "BurstcoinController"
        })
        .otherwise({
            redirectTo: "/Bitcoin"
        });
});

app.controller('BitcoinController', function ($scope) {
    $scope.message = "Angular Bitcoin";
});

app.controller('LitecoinController', function ($scope) {
    $scope.message = "Litecoin";
});

app.controller('BurstcoinController', function ($scope) {
    $scope.message = "Burstcoin";
});
