function HistoryWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'#ffffff'
	});
	
	return self;
};

module.exports = HistoryWindow;