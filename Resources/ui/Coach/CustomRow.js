var CustomRow = function(_rowerImage, _rowerName, _rowerSex, _rowerAge, _rowerWeight, _rowerHeight, _rowerNumber) {
	var heightRow = _rowerNumber
	
	var self = Ti.UI.createTableViewRow({
		objName:'listRowers',
		touchEnabled:'true',
		hasDetail:'true',
		moveable:'true',
		left:0,
		height:100
	});
	
	var rowerImageNamesexView = Ti.UI.createView({
		layout:'vertical',
		left:0,
		width:'55%',
		height:'100%',
		backgroundColor:'blue'
	});
	self.add(rowerImageNamesexView);
	
	var rowerInfoView = Ti.UI.createView({
		layout:'vertical',
		right:0,
		width:'45%',
		height:'auto',
		backgroundColor:'cyan'
	});
	self.add(rowerInfoView);

	var nameSexView = Ti.UI.createView({
		layout:'horizontal',
		width:'auto',
		height:'35%',
		bottom:0,
		backgroundColor:'orange'
	});
		
	var rowerNameLabel = Ti.UI.createLabel({
		text:_rowerName+',',
		width:'auto',
		left:0,
		bottom:0,
		font: {fontSize:20}
	});
	
	var rowerSexLabel = Ti.UI.createLabel({
		text:_rowerSex,
		width:'auto',
		right:0,
		bottom:0
	});
			
	var rowerAgeLabel = Ti.UI.createLabel({
		text:'Age: '+_rowerAge+', ',
		font: {fontSize:20},
		width:'auto',
		bottom:0	
	});
	
	nameSexView.add(rowerNameLabel);
	nameSexView.add(rowerAgeLabel);
	nameSexView.add(rowerSexLabel);
	
	var rowerImage = Ti.UI.createImageView({
		image:_rowerImage,
		left:0,
		top:3,
		width:'40%',
		height:'40%'
	});

	rowerImageNamesexView.add(rowerImage);
	rowerImageNamesexView.add(nameSexView);

	var rowerHeight = Ti.UI.createLabel({
		text:'Height: '+_rowerHeight,
		font: {fontSize:20}
	});
	
	var rowerWeight = Ti.UI.createLabel({
		text:'Weight: '+_rowerWeight,
		font: {fontSize:20}
	});

	var rowerSplit = Ti.UI.createLabel({
		text:'Split: 25spm',
		font:{fontSize:20}
	});

	rowerInfoView.add(rowerSplit);
	rowerInfoView.add(rowerHeight);
	rowerInfoView.add(rowerWeight);

	return self;
};

module.exports = CustomRow;