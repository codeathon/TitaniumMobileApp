function SettingsWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'#ffffff'
	});
	
	return self;
};

module.exports = SettingsWindow;