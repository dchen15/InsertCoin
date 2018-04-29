function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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

app.controller('BitcoinController', function ($scope, $route, $routeParams, $location) {
    $scope.graph = "Bitcoingraph.html";
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
    $scope.graph = "Litecoingraph.html";
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
    $scope.graph = "Ethereumgraph.html";
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
/*
var IOTUSD = new WebSocket("wss://api.bitfinex.com/ws");

IOTUSD.onopen = function () {
    IOTUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "IOTUSD"
    }))
};

IOTUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("iotBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("iotSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("iotVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("iotDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("iotHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("iotLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var NEOUSD = new WebSocket("wss://api.bitfinex.com/ws");

NEOUSD.onopen = function () {
    NEOUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "NEOUSD"
    }))
};

NEOUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("neoBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("neoSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("neoVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("neoDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("neoHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("neoLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var OMGUSD = new WebSocket("wss://api.bitfinex.com/ws");

OMGUSD.onopen = function () {
    OMGUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "OMGUSD"
    }))
};

OMGUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("omgBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("omgSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("omgVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("omgDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("omgHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("omgLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var TRXUSD = new WebSocket("wss://api.bitfinex.com/ws");

TRXUSD.onopen = function () {
    TRXUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "TRXUSD"
    }))
};

TRXUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("trxBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("trxSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("trxVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("trxDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("trxHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("trxLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var SANUSD = new WebSocket("wss://api.bitfinex.com/ws");

SANUSD.onopen = function () {
    SANUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "SANUSD"
    }))
};

SANUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("sanBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("sanSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("sanVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("sanDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("sanHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("sanLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var XRPUSD = new WebSocket("wss://api.bitfinex.com/ws");

XRPUSD.onopen = function () {
    XRPUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "XRPUSD"
    }))
};

XRPUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("xrpBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("xrpSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("xrpVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("xrpDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("xrpHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("xrpLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var DSHUSD = new WebSocket("wss://api.bitfinex.com/ws");

DSHUSD.onopen = function () {
    DSHUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "DSHUSD"
    }))
};

DSHUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("dshBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("dshSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("dshVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("dshDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("dshHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("dshLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var XMRUSD = new WebSocket("wss://api.bitfinex.com/ws");

XMRUSD.onopen = function () {
    XMRUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "XMRUSD"
    }))
};

XMRUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("xmrBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("xmrSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("xmrVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("xmrDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("xmrHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("xmrLow").innerHTML = "Daily Low: $" + response[10];
    };
};

var QTMUSD = new WebSocket("wss://api.bitfinex.com/ws");

QTMUSD.onopen = function () {
    QTMUSD.send(JSON.stringify({
        "event": "subscribe",
        "channel": "ticker",
        "pair": "QTMUSD"
    }))
};

QTMUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    var hb = response[1];
    if (hb != "hb") {
        document.getElementById("qtmBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("qtmSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("qtmVolume").innerHTML = "Daily Volume: $" + response[8];
        document.getElementById("qtmDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("qtmHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("qtmLow").innerHTML = "Daily Low: $" + response[10];
    };
};
*/

// JS for coin graphs goes here
/*
<!-- Bitcoin Graph -->
(function (b, i, t, C, O, I, N) {
    window.addEventListener('load', function () {
        if (b.getElementById(C)) return;
        I = b.createElement(i), N = b.getElementsByTagName(i)[0];
        I.src = t;
        I.id = C;
        N.parentNode.insertBefore(I, N);
    }, false)
})(document, 'script', 'https://widgets.bitcoin.com/widget.js', 'btcwdgt');
*/
