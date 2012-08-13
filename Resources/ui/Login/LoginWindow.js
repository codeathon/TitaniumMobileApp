var LoginWindow = function LoginWindow(title) {

var win = Titanium.UI.createWindow({
	layout:'vertical',
	title:title
});

var username = Titanium.UI.createTextField({
	color:'#336699',
	top:400,
	width:300,
	height:40,
	hintText:'Username',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(username);

var password = Titanium.UI.createTextField({
	color:'#336699',
	width:300,
	height:40,
	hintText:'Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(password);

var loginBtn = Titanium.UI.createButton({
	title:'Login',
	width:90,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(loginBtn);

loginBtn.addEventListener('click',function(e)
{
	if (username.value == '' && password.value == '')
	{
		win.close();
		
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
return win;
};

module.exports = LoginWindow;