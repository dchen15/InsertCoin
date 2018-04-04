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
    $scope.cell4 = "btcDaily";
    $scope.cell5 = "btcHigh";
    $scope.cell6 = "btcLow";
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

var BTCUSD = new WebSocket("wss://api.bitfinex.com/ws");

BTCUSD.onopen = function () {
    BTCUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "BTCUSD"
    }))
};

BTCUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("btcBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("btcSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("btcVolume").innerHTML = "Volume: $" + response[8];
        document.getElementById("btcDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("btcHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("btcLow").innerHTML =
            "Daily Low: $" + response[10];
    };
};

var LTCUSD = new WebSocket("wss://api.bitfinex.com/ws");

LTCUSD.onopen = function () {
    LTCUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "LTCUSD"
    }))
};

LTCUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("ltcBuyingUSD").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("ltcSellingUSD").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("ltcVolumeUSD").innerHTML = "Volume: $" + response[8];
    };
};
