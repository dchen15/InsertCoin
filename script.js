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
        .when('/Ethereum', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "EthereumController"
        })
        .otherwise({
            redirectTo: "/Bitcoin"
        });
});

app.controller('BitcoinController', function ($scope) {
    $scope.message = "btcwdgt-chart"
    $scope.next = "#/Litecoin";
    $scope.previous = "#/Ethereum";
    $scope.cell1 = "btcBuying";
    $scope.cell2 = "btcSelling";
    $scope.cell3 = "btcVolume";
    $scope.cell4 = "btcDaily";
    $scope.cell5 = "btcHigh";
    $scope.cell6 = "btcLow";
});

app.controller('LitecoinController', function ($scope) {
    $scope.message = "Litecoin";
    $scope.next = "#/Ethereum";
    $scope.previous = "#/Bitcoin";
    $scope.cell1 = "ltcBuying";
    $scope.cell2 = "ltcSelling";
    $scope.cell3 = "ltcVolume";
    $scope.cell4 = "ltcDaily";
    $scope.cell5 = "ltcHigh";
    $scope.cell6 = "ltcLow";
});

app.controller('EthereumController', function ($scope) {
    $scope.message = "Ethereum";
    $scope.next = "#/Bitcoin";
    $scope.previous = "#/Litecoin";
    $scope.cell1 = "ethBuying";
    $scope.cell2 = "ethSelling";
    $scope.cell3 = "ethVolume";
    $scope.cell4 = "ethDaily";
    $scope.cell5 = "ethHigh";
    $scope.cell6 = "ethLow";
});


// JS for coin api goes here
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
        document.getElementById("btcVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("btcDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("btcHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("btcLow").innerHTML = "Daily Low: $" + response[10];
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
        document.getElementById("ltcBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("ltcSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("ltcVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("ltcDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("ltcHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("ltcLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var ETHUSD = new WebSocket("wss://api.bitfinex.com/ws");

ETHUSD.onopen = function () {
    ETHUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "ETHUSD"
    }))
};

ETHUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("ethBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("ethSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("ethVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("ethDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("ethHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("ethLow").innerHTML = "Daily Low: $" + response[10];
    };
};

// JS for coin graphs goes here
(function (b, i, t, C, O, I, N) {
    window.addEventListener('load', function () {
        if (b.getElementById(C)) return;
        I = b.createElement(i), N = b.getElementsByTagName(i)[0];
        I.src = t;
        I.id = C;
        N.parentNode.insertBefore(I, N);
    }, false)
})(document, 'script', 'https://widgets.bitcoin.com/widget.js', 'btcwdgt');
