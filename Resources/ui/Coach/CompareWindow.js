var CompareWindow = function CompareWindow(_rowerArray,_title) {
	
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:_title,
		layout:'horizontal'
	});

	var rowerCompareTableView = Ti.UI.createTableView({
		backgroundColor:'blue',
		height:'80%',
		width:'30%',
		left:0,
		top:0,
		data:_rowerArray
	});
	self.add(rowerCompareTableView);

	var rowerCompareDetailTableView = Ti.UI.createTableView({
		backgroundColor:'cyan',
		height:'80%',
		width:'70%',
		top:0,
		data:_rowerArray
	});
	self.add(rowerCompareDetailTableView);
	
	var raceView = Ti.UI.createTableView({
		backgroundColor:'orange',
		height:'auto',
		width:'auto',
		bottom:0
	});
	self.add(raceView);
	
	return self;	
};
module.exports = CompareWindow;