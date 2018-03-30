var app = angular.module('Insert Coin', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider

        .when('/Bitcoin', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "BitcoinController"
        })
        .when('/Litecoin', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "LitecoinController"
        })
        .when('/Burstcoin', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "BurstcoinController"
        })
        .otherwise({
            redirectTo: "/Bitcoin"
        });
});

app.controller('BitcoinController', function ($scope) {
    $scope.message = "Angular Bitcoin";
    $scope.next = "#/Litecoin"
    $scope.previous = "#/Burstcoin"
});

app.controller('LitecoinController', function ($scope) {
    $scope.message = "Litecoin";
    $scope.next = "#/Burstcoin"
    $scope.previous = "#/Bitcoin"
});

app.controller('BurstcoinController', function ($scope) {
    $scope.message = "Burstcoin";
    $scope.next = "#/Bitcoin"
    $scope.previous = "#/Litecoin"
});
