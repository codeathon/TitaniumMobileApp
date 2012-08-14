var RaceWindow = function RaceWindow(title) {
	
	Ti.API.info('inside Race Window');
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'#ffffff'
	});
	
	var participantsLabel = Ti.UI.createLabel({
		text:'Participants',
		top:0,
		left:30,
		font:{fontSize:20},
		textAlign:'center'
	});
	self.add(participantsLabel);
	
	var coachImage = Ti.UI.createImageView({
		image:'images/ns.png',
		top:0,
		right:20,
		width:50,
		height:50
	});
	self.add(coachImage);

	var images = [];
	images[0] = 'images/Bluehound.gif';
	images[1] = 'images/Doggie.gif'; 
	images[2] = 'images/Pointy.gif';
	images[3] = 'images/Orange.gif';
	images[4] = 'images/Pear.gif';
	images[5] = 'images/Strawberry.gif';
	images[6] = 'images/PurpGuy.gif';
	images[7] = 'images/RedDog.gif';
	images[8] = 'images/Woof.gif';
	
	var names = [];
	names[0] = 'Rohit';
	names[1] = 'Raghu';
	names[2] = 'Andrew';
	names[3] = 'Anshu';
	names[4] = 'Vaishnav';
	names[5] = 'Zahra';
	names[6] = 'Fan';
	names[7] = 'Bhavna';
	names[8] = 'John';
	
	var rowers = [];
	var row = null;
	
	for (var i=0; i<images.length ; i++) {
		var CustomRow = require('ui/Coach/CustomRow');
		row = new CustomRow(images[i],names[i],'M',22,75,195,images.length);
		rowers.push(row);
	}
	
	var rowerTableView = Titanium.UI.createTableView({
		objName:'rowerTableRace',
		editable:'true',
	    contentWidth:'auto',
	    contentHeight:'auto',
	    touchEnabled:'true',
	    height:Ti.UI.SIZE,
	    separatorColor:'#000000',
	    top:60,
	    width:250,
	    left:0,
	    backgroundColor:'#003366',
	    borderColor:'#000000',
	    shadowColor:'#000000',
	    scrollable:false,
	    separatorStyle:1,
	    shadowOffset:{x:0,y:1},
	    borderRadius:2,
	    showVerticalScrollIndicator:false,
	    showHorizontalScrollIndicator:false,
	    style:1,
	    data:rowers
	});
	self.add(rowerTableView);
	
	/*
	 * The view that displays the Race as it progresses
	 */
	
	var raceRowers = [];
	var raceRow = null;
	
	for(var i=1; i<=images.length; i++) {
		var CustomRaceRow = require('ui/Race/CustomRaceRow');
		raceRow = new CustomRaceRow(images.length);
		raceRowers.push(raceRow);	
	}
	
	var raceView = Titanium.UI.createTableView({
		height:Ti.UI.SIZE,
		editable:false,
	    contentWidth:'auto',
	    contentHeight:'auto',
	    touchEnabled:'true',
	    separatorStyle:2,
	    shadowOffset:{x:0,y:1},
	    showVerticalScrollIndicator:false,
	    showHorizontalScrollIndicator:false,
		top:60,
		right:0,
		width:480,
		borderColor:'#000000',
		borderRadius:2,
		scrollable:false,
		data:raceRowers
	});
	self.add(raceView);
	
	return self;
	};
	
module.exports = RaceWindow;
