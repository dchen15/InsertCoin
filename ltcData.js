var ws = new WebSocket("wss://api.bitfinex.com/ws");

ws.onopen = function(){
	ws.send(JSON.stringify({"event":"subscribe", "channel":"ticker", "pair":"LTCUSD"}))
};

ws.onmessage = function(msg){
	var response = JSON.parse(msg.data);
	var hb = response[1];
	if(hb != "hb"){
		document.getElementById("ltcBuyingUSD").innerHTML = "Buying Price: $" + response[3]; 
		document.getElementById("ltcSellingUSD").innerHTML = "Selling Price: $" + response[1];
		document.getElementById("ltcVolumeUSD").innerHTML = "Volume: $" + response[8];
		};
	};