var TabGroupRace = function TabGroupRace() {
	Ti.API.info('in Tab Group Race');
	var self = Ti.UI.createTabGroup(),
		RaceWindow = require('ui/Coach/RaceWindow');
		
	var raceWin = new RaceWindow('Race');
	
	var raceTab = Ti.UI.createTab({
		title:'Race',
		window:raceWin
	});
	raceWin.containingTab = raceTab;
	
	
	self.addTab(raceTab);

	self.setActiveTab(0);
	return self;
};
module.exports = TabGroupRace;