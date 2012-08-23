var CustomRaceRow = function CustomRaceRow(_rowerNumber) {
	var heightRow = (964/(_rowerNumber+1));
	

	/*
	 * Returns a row for a race - basically returns a race lane
	 * 1. Boat Image
	 * 2. Lane markers
	 */
	var self = Ti.UI.createTableViewRow({
		backgroundImage:'images/water.jpeg',
		touchEnabled:'true',
		moveable:'true',
		borderRadius:4
	});
	self.height = heightRow;
	
	var boatImage = Ti.UI.createImageView({
		image:'images/singleRow.png',
		width:40,
		height:40,
		left:0
	});
	self.add(boatImage);
	
	Ti.API.addEventListener('race', function(e) {
		var randomValue = randomMaxnMin(30000,40000);
		Ti.API.info('Random Value:'+ randomValue);
		var t = Titanium.UI.create3DMatrix();
		t = t.translate(380,0,0);
		t.m34 = 1.0/-2000;
		boatImage.animate({transform:t, duration:randomValue, autoreverse:false});
	});

	
	return self;
};

function randomMaxnMin(min,max) {
	var now = new Date();
	var seed = now.getSeconds();
	var randomValue = min + (Math.random(seed)*(max-min));
	return Math.round(randomValue);
}

module.exports = CustomRaceRow;