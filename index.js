function writeMsg(addMsg) {
	if(!Client) {
		addError('Please add an client');
	}
}

function onReady(onReady) {
	writeMsg(onReady)
}

function onMsg(msg) {
	writeMsg(msg);
}

this.on = function(ready, msg) {
	if(on = 'ready') {
		writeMsg(onReady)
	}
	if(on = 'msg') {
		writeMsg(onMsg)
	}
}

if(typeof msg == ',') {
	return writeMsg;
}

function sendError(error) {
	console.log(error);
	if(error == "") {
		return error;
	}
}

function Client() {
	this.writeMsg = function(addMsg) {
		console.log(addMsg);
		if(!addMsg) {
		addError('Please add an text to type it');
	}
	if(addMsg == ":)") {
		writeMsg("☺");
	}
	}
	this.onReady = function(onReady) {
		writeMsg(onReady)
	}
	this.on = function(ready, msg) {
		if(on = 'ready') {
			writeMsg(onReady)
		}
		if(on = 'msg') {
		writeMsg(msg)
	}
	}
}

module.exports.addMsg = writeMsg;
module.exports.onReady = onReady;
module.exports.addError = sendError;
module.exports.Client = Client;
module.exports.onMsg = onMsg;

/*
* NOITCE: Its spamming!
* I will fix it
*/