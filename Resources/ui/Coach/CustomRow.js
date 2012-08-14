var CustomRow = function(_rowerImage, _rowerName, _rowerSex, _rowerAge, _rowerWeight, _rowerHeight, _rowerNumber) {
	var heightRow = (964/(_rowerNumber+1));
	self = Ti.UI.createTableViewRow({
		objName:'listRowers',
		touchEnabled:'true',
		hasDetail:'true',
		moveable:'true',
		left:0
	});
	self.height = heightRow;
	Titanium.API.info('Height of a row '+self.height);
	
	var rowerImageNamesexView = Ti.UI.createView({
		layout:'vertical',
		left:0,
		width:'55%',
		backgroundColor:'blue'
	});
	self.add(rowerImageNamesexView);
	
	var rowerInfoView = Ti.UI.createView({
		layout:'vertical',
		right:0,
		width:'45%',
		backgroundColor:'cyan'
	});
	self.add(rowerInfoView);

	var nameSexView = Ti.UI.createView({
		layout:'horizontal',
		width:'auto',
		backgroundColor:'orange'
	});
		
	var rowerNameLabel = Ti.UI.createLabel({
		text:_rowerName+',',
		left:0,
		bottom:0
	});
	
	var rowerSexLabel = Ti.UI.createLabel({
		text:_rowerSex,
		right:0,
		bottom:0
	});
			
	var rowerAgeLabel = Ti.UI.createLabel({
		text:'Age: '+_rowerAge+', ',
		bottom:0	
	});
	
	nameSexView.add(rowerNameLabel);
	nameSexView.add(rowerAgeLabel);
	nameSexView.add(rowerSexLabel);
	
	var rowerImage = Ti.UI.createImageView({
		image:_rowerImage,
		left:0
	});

	rowerImageNamesexView.add(rowerImage);
	rowerImageNamesexView.add(nameSexView);

	var rowerHeight = Ti.UI.createLabel({
		text:'Height: '+_rowerHeight
	});
	
	var rowerWeight = Ti.UI.createLabel({
		text:'Weight: '+_rowerWeight
	});

	var rowerSplit = Ti.UI.createLabel({
		text:'Split: 25spm'
	});

	rowerInfoView.add(rowerSplit);
	rowerInfoView.add(rowerHeight);
	rowerInfoView.add(rowerWeight);

	return self;
};

module.exports = CustomRow;