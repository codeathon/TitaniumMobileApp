var TabCompare = function TabCompare(_rowerArray) {
	Ti.API.info('in Tab Group Race');
	var self = Ti.UI.createTabGroup(),
		CompareWindow = require('ui/coach/compareWindow');

	var compareWin = new CompareWindow(_rowerArray,'Compare Rowers');
	
	var compareTab = Ti.UI.createTab({
		title:'Compare',
		icon:'images/group_star.png',
		window:compareWin
	});
	compareWin.containingTab = compareTab; 
	self.addTab(compareTab);
	self.setActiveTab(0);
	return self;
};
module.exports = TabCompare;