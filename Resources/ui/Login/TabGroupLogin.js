var TabGroupLogin = function TabGroupLogin() {
	Titanium.UI.setBackgroundColor('#fff');
	
	// create module instances
	var self = Ti.UI.createTabGroup(),
		LoginWindow = require('ui/Login/LoginWindow'),
	    AccountWindow = require('ui/Login/AccountWindow');
	
	// create app tabs
	var loginWin = new LoginWindow(L('Login')),
		accountWin = new AccountWindow(L('Account'));
	
	var loginTab = Ti.UI.createTab({
		title:L('Login'),
		icon:'/images/login.png',
		window:loginWin
	});
	loginWin.containingTab = loginTab;
	self.addTab(loginTab);
	
	var accountTab = Ti.UI.createTab({
		title:L('Account'),
		icon:'images/user_male_white_orange.png',
		window:accountWin
	});
	accountWin.containingTab = accountTab;
	self.addTab(accountTab);
	
	self.setActiveTab(0);
	
	return self;
};

module.exports = TabGroupLogin;