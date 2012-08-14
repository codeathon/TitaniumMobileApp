var CustomRaceRow = function CustomRaceRow(_rowerNumber) {
	var heightRow = (964/(_rowerNumber+1));
	/*
	 * Returns a row for a race - basically returns a race lane
	 * 1. Boat Image
	 * 2. Lane markers
	 */
	var self = Ti.UI.createTableViewRow({
		backgroundColor:'blue',
		borderRadius:4
	});
	self.height = heightRow;
	
	var boatImage = Ti.UI.createImageView({
		image:'images/boat.png',
		width:30,
		height:30,
		left:0
	});
	self.add(boatImage);
	
	return self;
};

module.exports = CustomRaceRow;