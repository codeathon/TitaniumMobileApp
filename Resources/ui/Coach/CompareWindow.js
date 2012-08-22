var CompareWindow = function CompareWindow(_rowerArray,_title,_raceView) {
	
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:_title,
		layout:'vertical'
	});

	var rowerDetailRowerView = Ti.UI.createView({
		layout:'horizontal',
		top:0,
		backgroundColor:'green',
		width:'100%',
		height:'70%'
	});
	self.add(rowerDetailRowerView);

	var raceView = _raceView;
	raceView.left = 0;
	raceView.width = '100%';
	raceView.height = 'auto';
	raceView.scrollable = 'true';
	raceView.rowHeight = 20;
	self.add(raceView);

	var rowerCompareTableView = Ti.UI.createTableView({
		backgroundColor:'blue',
		height:'auto',
		width:'40%',
		left:0,
		top:0,
		data:_rowerArray
	});
	rowerDetailRowerView.add(rowerCompareTableView);

	var rowerCompareDetailTableView = Ti.UI.createTableView({
		backgroundColor:'black',
		height:'auto',
		width:'60%',
		top:0
	});
	rowerDetailRowerView.add(rowerCompareDetailTableView);

	return self;	
};
module.exports = CompareWindow;