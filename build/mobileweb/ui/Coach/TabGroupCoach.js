var TabGroupCoach = function TabGroupCoach() {

	// create module instances
	var self = Ti.UI.createTabGroup(),
	ProfileWindow = require('ui/Coach/ProfileWindow'),
	HistoryWindow = require('ui/Coach/HistoryWindow'),
	SettingsWindow = require('ui/Coach/SettingsWindow');
	
	// create app tabs
	var profileWin = new ProfileWindow(L('Profile')),
		historyWin = new HistoryWindow(L('History')),
		settingsWin = new SettingsWindow(L('Settings'));
		
	var profileTab = Ti.UI.createTab({
		title:L('Profile'),
		icon:'images/user.png',
		window:profileWin
	});
	profileWin.containingTab = profileTab;
	self.addTab(profileTab);
	
	var historyTab = Ti.UI.createTab({
		title:L('History'),
		icon:'images/history3.png',
		window:historyWin
	});
	historyWin.containingTab = historyTab;
	self.addTab(historyTab);

	var settingsTab = Ti.UI.createTab({
		title:L('Settings'),
		icon:'images/24_settings.png',
		window:settingsWin
	});
	settingsWin.containingTab = settingsTab;
	self.addTab(settingsTab);
	self.setActiveTab(0);
	
	return self;
};

module.exports = TabGroupCoach;
