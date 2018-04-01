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
    $scope.next = "#/Litecoin";
    $scope.previous = "#/Burstcoin";
    $scope.cell1 = "btcBuying";
    $scope.cell2 = "btcSelling";
    $scope.cell3 = "btcVolume";
});

app.controller('LitecoinController', function ($scope) {
    $scope.message = "Litecoin";
    $scope.next = "#/Burstcoin";
    $scope.previous = "#/Bitcoin";
    $scope.cell1 = "ltcBuyingUSD";
    $scope.cell2 = "ltcSellingUSD";
    $scope.cell3 = "ltcVolumeUSD";
});

app.controller('BurstcoinController', function ($scope) {
    $scope.message = "Burstcoin";
    $scope.next = "#/Bitcoin";
    $scope.previous = "#/Litecoin";
});

var ws = new WebSocket("wss://api.bitfinex.com/ws");

ws.onopen = function () {
    ws.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "BTCUSD"
    }))
};

ws.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("btcBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("btcSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("btcVolume").innerHTML = "Volume: $" + response[8];
    };
};

var ws1 = new WebSocket("wss://api.bitfinex.com/ws");

ws1.onopen = function () {
    ws1.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "LTCUSD"
    }))
};

ws1.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("ltcBuyingUSD").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("ltcSellingUSD").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("ltcVolumeUSD").innerHTML = "Volume: $" + response[8];
    };
};
