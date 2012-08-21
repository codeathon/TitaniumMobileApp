var CustomRowCompare = function(_rowerImage, _rowerName, _rowerSex, _rowerAge, _rowerWeight, _rowerHeight, _rowerNumber) {
	var heightRow = (964/(_rowerNumber+1));
	var rowerNameToUpper = _rowerName.toUpperCase();
	
	self = Ti.UI.createTableViewRow({
		objName:'listRowers',
		touchEnabled:'true',
		moveable:'true',
		left:0
	});
	self.height = 96.4;
	Titanium.API.info('Height of a row '+self.height);

	var rowerImageNamesexView = Ti.UI.createView({
		layout:'horizontal',
		left:0,
		width:'55%',
		height:'auto',
	    backgroundGradient:{
			type:'linear',
			colors:[
			{color:'#d4d4d4',position:0.0},
			{color:'#c4c4c4',position:0.50},
			{color:'#a4a4a4',position:1.0}
			]
		}
	});
	self.add(rowerImageNamesexView);

	var rowerInfoView = Ti.UI.createView({
		layout:'vertical',
		right:0,
		height:'auto',
		width:'45%',
	    backgroundGradient:{
			type:'linear',
			colors:[
			{color:'#d4d4d4',position:0.0},
			{color:'#c4c4c4',position:0.50},
			{color:'#a4a4a4',position:1.0}
			]
		},
	});
	self.add(rowerInfoView);

	var nameSexView = Ti.UI.createView({
		left:10,
		top:10,
		layout:'vertical',
		width:'auto'
	});
		
	var rowerNameLabel = Ti.UI.createLabel({
		text:rowerNameToUpper+',',
		color:'#ffffff',
		font:{fontSize:16,fontStyle:'bold'},
		left:0,
		bottom:0
	});
	
	var rowerSexLabel = Ti.UI.createLabel({
		font:{fontSize:12},
		color:'#ffffff',
		text:_rowerSex.toUpperCase(),
		left:0,
		bottom:0
	});
			
	var rowerAgeLabel = Ti.UI.createLabel({
		font:{fontSize:12},
		color:'#ffffff',
		text:_rowerAge+', ',
		bottom:0,
		left:0
	});
	
	nameSexView.add(rowerNameLabel);
	nameSexView.add(rowerAgeLabel);
	nameSexView.add(rowerSexLabel);
	
	var rowerImage = Ti.UI.createImageView({
		image:_rowerImage,
		width:'30%',
		height:'100%',
		top:0,
		left:0
	});

	rowerImageNamesexView.add(rowerImage);
	rowerImageNamesexView.add(nameSexView);

	var rowerHeight = Ti.UI.createLabel({
		text:'Height: '+_rowerHeight,
		height:'auto'
	});
	
	var rowerWeight = Ti.UI.createLabel({
		text:'Weight: '+_rowerWeight,
		height:'auto'
	});

	var rowerSplit = Ti.UI.createLabel({
		text:'Split: 25spm',
		height:'auto'
	});

	rowerInfoView.add(rowerSplit);
	rowerInfoView.add(rowerHeight);
	rowerInfoView.add(rowerWeight);

	return self;
};
module.exports = CustomRow;