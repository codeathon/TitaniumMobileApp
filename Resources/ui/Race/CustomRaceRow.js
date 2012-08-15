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
	
	return self;
};

module.exports = CustomRaceRow;