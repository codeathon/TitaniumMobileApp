var LoginWindow = function LoginWindow(title) {

var self = Titanium.UI.createWindow({
	layout:'vertical',
	title:title
});

var imageViewEntire = Ti.UI.createView({
	height:'100%',
	width:'100%',
	opacity:1.0,
	backgroundImage:'images/collageRow.png'
});
self.add(imageViewEntire);

var loginView = Ti.UI.createView({
	layout:'vertical',
	backgroundGradient:{
			type:'linear',
			colors:[
			{color:'#cccccc',position:0.0},
			{color:'#ffcc66',position:0.33},
			{color:'#ffff66',position:0.66}
			]
		},
	backgroundImage:'images/oarlokLogo.png',
	opacity:0.9,
	width:400,
	height:250,
	borderRadius:5,
	borderColor:'#000000',
	borderWidth:3,
	style:1
});
imageViewEntire.add(loginView);

var usernameView = Ti.UI.createView({
	top:30,
	width:'80%',
	height:'20%',
	borderColor:'#888888',
	borderRadius:5,
	borderWidth:5
});
loginView.add(usernameView);

var PasswordView = Ti.UI.createView({
	top:10,
	width:'80%',
	height:'20%',
	borderColor:'#888888',
	borderRadius:5,
	borderWidth:5
});
loginView.add(PasswordView);

var loginBtn = Titanium.UI.createButton({
	top:20,
	title:'Login',
	width:'80%',
	height:'20%',
	borderRadius:1
});
loginView.add(loginBtn);

var username = Titanium.UI.createTextField({
	borderColor:'#333333',
	opacity:1.0,
	width:'100%',
	height:'100%',
	hintText:'OARLOK UserID',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
usernameView.add(username);

var password = Titanium.UI.createTextField({
	borderColor:'#333333',
	opacity:1.0,
	width:'100%',
	height:'100%',
	hintText:'Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
PasswordView.add(password);

loginBtn.addEventListener('click',function(e)
{
	//connectToServer(username.value,password.value);
	
	var TabGroupCoach = require('ui/Coach/TabGroupCoach'),
	theTabGroupCoach = new TabGroupCoach();
	theTabGroupCoach.open();
});
	
	
function connectToServer(username, password) {

Titanium.API.info("connecting to server with username:" + username + "password:" + password);

var socket = Ti.Network.Socket.createTCP();

var connectSocket = Ti.Network.Socket.createTCP({

host : '172.16.1.177',

port : 9999,

connected : function(e) {

Ti.API.info("Socket <" + e.socket + "> connected to host <" + e.socket.host + ">");

postConnect();

try {

var initialAuth = Ti.createBuffer({

value : username + "@=@" + password + "@=@eater\n"

});

var bytesWritten = connectSocket.write(initialAuth);

Ti.API.info("<" + bytesWritten + "> bytes written to socket");

Ti.API.info("trying to read from socket");

var readBuffer = Ti.createBuffer({

length : 2048

});

var bytesRead = 0;

while (( bytesRead = connectSocket.read(readBuffer)) > -1) {

var stringData = Ti.Codec.decodeString({

source : readBuffer,

length : bytesRead

});

Ti.API.info("received <" + bytesRead + "> bytes of data. String representation of data is <" + stringData + ">");

if (stringData=="@end\n")

break;

readBuffer.clear();

//insert line here to call/pass stringData to the UI updating function which processes the data and displays things


}

connectSocket.close();

Ti.API.info("socket has closed");



} catch (e) {

Titanium.API.info(e);

}



Ti.API.info("Ended Session");



},

error : function(e) {

Ti.API.error("Socket <" + e.socket + "> encountered error when connecting");

Ti.API.error(" error code <" + e.errorCode + ">");

Ti.API.error(" error description <" + e.error + ">");

return null;

}

});

connectSocket.connect();

}	

return self;
};

module.exports = LoginWindow;