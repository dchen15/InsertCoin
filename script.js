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
        .when('/Iota', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "IotaController"
        })
        .when('/Tron', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "TronController"
        })
        .when('/Ripple', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "RippleController"
        })
        .when('/Dash', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "DashController"
        })
        .when('/Monero', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "MoneroController"
        })
        .when('/Neo', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "NeoController"
        })
        .when('/Qtum', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "QtumController"
        })
        .when('/OmiseGO', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "OmiseGOController"
        })
        .when('/Santiment', {
            templateUrl: "pages/CoinTemplate.html",
            controller: "SantimentController"
        })

        .otherwise({
            redirectTo: "/Bitcoin"
        });
});

app.controller('BitcoinController', function ($scope) {
    $scope.graph = "Bitcoingraph.html";
	$scope.graph2 = "Bitcoingraph2.html";
    $scope.next = "#/Litecoin";
    $scope.previous = "#/Santiment";
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
    $scope.next = "#/Iota";
    $scope.previous = "#/Litecoin";
    $scope.cell1 = "ethBuying";
    $scope.cell2 = "ethSelling";
    $scope.cell3 = "ethVolume";
    $scope.cell4 = "ethDaily";
    $scope.cell5 = "ethHigh";
    $scope.cell6 = "ethLow";
});

app.controller('IotaController', function ($scope) {
    $scope.graph = "Iotagraph.html";
    $scope.next = "#/Tron";
    $scope.previous = "#/Ethereum";
    $scope.cell1 = "iotBuying";
    $scope.cell2 = "iotSelling";
    $scope.cell3 = "iotVolume";
    $scope.cell4 = "iotDaily";
    $scope.cell5 = "iotHigh";
    $scope.cell6 = "iotLow";
});

app.controller('TronController', function ($scope) {
    $scope.graph = "Trongraph.html";
    $scope.next = "#/Ripple";
    $scope.previous = "#/Iota";
    $scope.cell1 = "trxBuying";
    $scope.cell2 = "trxSelling";
    $scope.cell3 = "trxVolume";
    $scope.cell4 = "trxDaily";
    $scope.cell5 = "trxHigh";
    $scope.cell6 = "trxLow";
});

app.controller('RippleController', function ($scope) {
    $scope.graph = "Ripplegraph.html";
    $scope.next = "#/Dash";
    $scope.previous = "#/Tron";
    $scope.cell1 = "xrpBuying";
    $scope.cell2 = "xrpSelling";
    $scope.cell3 = "xrpVolume";
    $scope.cell4 = "xrpDaily";
    $scope.cell5 = "xrpHigh";
    $scope.cell6 = "xrpLow";
});

app.controller('DashController', function ($scope) {
    $scope.graph = "Dashgraph.html";
    $scope.next = "#/Monero";
    $scope.previous = "#/Ripple";
    $scope.cell1 = "dshBuying";
    $scope.cell2 = "dshSelling";
    $scope.cell3 = "dshVolume";
    $scope.cell4 = "dshDaily";
    $scope.cell5 = "dshHigh";
    $scope.cell6 = "dshLow";
});

app.controller('MoneroController', function ($scope) {
    $scope.graph = "Monerograph.html";
    $scope.next = "#/Neo";
    $scope.previous = "#/Dash";
    $scope.cell1 = "xmrBuying";
    $scope.cell2 = "xmrSelling";
    $scope.cell3 = "xmrVolume";
    $scope.cell4 = "xmrDaily";
    $scope.cell5 = "xmrHigh";
    $scope.cell6 = "xmrLow";
});

app.controller('NeoController', function ($scope) {
    $scope.graph = "Neograph.html";
    $scope.next = "#/Qtum";
    $scope.previous = "#/Monero";
    $scope.cell1 = "neoBuying";
    $scope.cell2 = "neoSelling";
    $scope.cell3 = "neoVolume";
    $scope.cell4 = "neoDaily";
    $scope.cell5 = "neoHigh";
    $scope.cell6 = "neoLow";
});

app.controller('QtumController', function ($scope) {
    $scope.graph = "Qtumgraph.html";
    $scope.next = "#/OmiseGO";
    $scope.previous = "#/Neo";
    $scope.cell1 = "qtmBuying";
    $scope.cell2 = "qtmSelling";
    $scope.cell3 = "qtmVolume";
    $scope.cell4 = "qtmDaily";
    $scope.cell5 = "qtmHigh";
    $scope.cell6 = "qtmLow";
});

app.controller('OmiseGOController', function ($scope) {
    $scope.graph = "OmiseGOgraph.html";
    $scope.next = "#/Santiment";
    $scope.previous = "#/Qtum";
    $scope.cell1 = "omgBuying";
    $scope.cell2 = "omgSelling";
    $scope.cell3 = "omgVolume";
    $scope.cell4 = "omgDaily";
    $scope.cell5 = "omgHigh";
    $scope.cell6 = "omgLow";
});

app.controller('SantimentController', function ($scope) {
    $scope.graph = "Santimentgraph.html";
    $scope.next = "#/Bitcoin";
    $scope.previous = "#/OmiseGO";
    $scope.cell1 = "sanBuying";
    $scope.cell2 = "sanSelling";
    $scope.cell3 = "sanVolume";
    $scope.cell4 = "sanDaily";
    $scope.cell5 = "sanHigh";
    $scope.cell6 = "sanLow";
});


// JS for coin api goes here

//Bitcoin
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("btcBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("btcSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("btcVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("btcDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("btcHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("btcLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Litecoin
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("ltcBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("ltcSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("ltcVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("ltcDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("ltcHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("ltcLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Ethereum
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("ethBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("ethSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("ethVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("ethDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("ethHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("ethLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Iota
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("iotBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("iotSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("iotVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("iotDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("iotHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("iotLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Neo
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("neoBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("neoSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("neoVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("neoDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("neoHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("neoLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//OmiseGO
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("omgBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("omgSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("omgVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("omgDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("omgHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("omgLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Tron
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("trxBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("trxSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("trxVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("trxDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("trxHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("trxLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Santiment
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("sanBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("sanSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("sanVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("sanDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("sanHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("sanLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Ripple
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("xrpBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("xrpSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("xrpVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("xrpDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("xrpHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("xrpLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Dashcoin
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("dshBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("dshSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("dshVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("dshDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("dshHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("dshLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Monero
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("xmrBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("xmrSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("xmrVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("xmrDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("xmrHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("xmrLow").innerHTML = "Daily Low: $" + response[10];
    };
};
//Qtum
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
	var x = response[8];
	x = Math.round(x * 100) / 100;
    if (hb != "hb") {
        document.getElementById("qtmBuying").innerHTML = "Buying Price: $" + response[3];
        document.getElementById("qtmSelling").innerHTML = "Selling Price: $" + response[1];
        document.getElementById("qtmVolume").innerHTML = "Daily Volume: $" + x;
        document.getElementById("qtmDaily").innerHTML = "Daily Change: $" + response[5];
        document.getElementById("qtmHigh").innerHTML = "Daily High: $" + response[9];
        document.getElementById("qtmLow").innerHTML = "Daily Low: $" + response[10];
    };
};
