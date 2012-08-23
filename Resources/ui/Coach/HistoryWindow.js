function HistoryWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundImage:'images/stats.png'
	});
	return self;
};
module.exports = HistoryWindow;