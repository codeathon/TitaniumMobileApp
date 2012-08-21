var CompareWindow = function CompareWindow(_rowerArray,_title) {
	
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title:_title,
		layout:'horizontal'
	});

	var rowerDetailRowerView = Ti.UI.createView({
		layout:'vertical',
		top:0,
		width:'100%',
		height:'70%'
	});
	self.add(rowerDetailRowerView);

	var raceView = Ti.UI.createTableView({
		backgroundColor:'orange',
		height:'30%',
		width:'auto',
		bottom:0
	});
	self.add(raceView);

	var rowerCompareTableView = Ti.UI.createTableView({
		backgroundColor:'blue',
		height:'80%',
		width:'40%',
		left:0,
		top:0,
		data:_rowerArray
	});
	compareHeight = (rowerCompareTableView.height)/(_rowerArray.length);
	rowerCompareTableView.rowHeight = compareHeight;
	Ti.API.info('rowerCompareTableView row height:'+ compareHeight);
	rowerDetailRowerView.add(rowerCompareTableView);

	var rowerCompareDetailTableView = Ti.UI.createTableView({
		backgroundColor:'cyan',
		height:'80%',
		width:'60%',
		top:0,
		right:0
	});
	rowerDetailRowerView.add(rowerCompareDetailTableView);
	
	
	return self;	
};
module.exports = CompareWindow;