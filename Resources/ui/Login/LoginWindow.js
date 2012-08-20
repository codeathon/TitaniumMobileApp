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
	if (username.value == '' && password.value == '')
	{
		self.close();
		
		Ti.API.info("Login Button was clicked");
		var TabGroupCoach = require('ui/Coach/TabGroupCoach'),
			theTabGroupCoach = new TabGroupCoach();
			theTabGroupCoach.open();
	}
	else
	{
		alert("Username/Password are incorrect");
	}
});
return self;
};

module.exports = LoginWindow;