var AccountWindow = function AccountWindow(title) {

var self = Titanium.UI.createWindow({
	layout:'absolute',
	title:title
});
/*
* Interface
*/
var view = Titanium.UI.createView({
    top:300,
});
self.add(view);

var username = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	width:300,
	height:40,
	hintText:'Username',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
view.add(username);

var password1 = Titanium.UI.createTextField({
	color:'#336699',
	top:60,
	width:300,
	height:40,
	hintText:'Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
view.add(password1);

var password2 = Titanium.UI.createTextField({
	color:'#336699',
	top:110,
	width:300,
	height:40,
	hintText:'Re-type Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
view.add(password2);

var names = Titanium.UI.createTextField({
	color:'#336699',
	top:160,
	width:300,
	height:40,
	hintText:'Name',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
view.add(names);

var email = Titanium.UI.createTextField({
	color:'#336699',
	top:210,
	width:300,
	height:40,
	hintText:'email',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
view.add(email);

var createBtn = Titanium.UI.createButton({
	title:'Create Account',
	top:260,
	width:130,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
view.add(createBtn);

var webViewTemp = Ti.UI.createWebView({
	url:'http://www.google.co.in'
})
view.add(webViewTemp);

return self;

};

module.exports = AccountWindow;
