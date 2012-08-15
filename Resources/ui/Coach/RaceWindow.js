var RaceWindow = function RaceWindow(title) {
	
	Ti.API.info('inside Race Window');
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'#aaaaaa'
	});
	
	var participantsLabel = Ti.UI.createLabel({
		text:'Participants',
		top:0,
		left:30,
		font:{fontSize:20},
		textAlign:'center'
	});
	self.add(participantsLabel);
	
	var startRace = Ti.UI.createButton({
		title:'Start Race',
		left:150,
		top:0
	});
	self.add(startRace);
	
	var compareRowers = Ti.UI.createButton({
		title:'Compare',
		left:250,
		top:0
	});
	self.add(compareRowers);
	
	var rowCheckedForCompare = [];
	
	compareRowers.addEventListener('click', function(e){
		/*
		 * Open the 'Compare' tab and display the Detail view for the rowers
		 */
		var dataRows = rowerTableView.data[0].rows;
		
		for(var count = 0; count < rowerTableView.data[0].rowCount; count++) {
			Ti.API.info(dataRows[count]);
			if(dataRows[count].hasCheck == true){
				rowCheckedForCompare.push(dataRows[count]);
			}
		}
		Ti.API.info(rowCheckedForCompare);
		var TabCompare = require('ui/Coach/TabCompare'),
		theTabCompare = new TabCompare(rowCheckedForCompare);
		theTabCompare.open();
	});
	
	var coachImage = Ti.UI.createImageView({
		image:'images/ns.png',
		top:0,
		right:20,
		width:50,
		height:50
	});
	self.add(coachImage);

	var images = [];
	images[0] = 'images/profile1.gif';
	images[1] = 'images/profile2.jpeg'; 
	images[2] = 'images/profile3.jpeg';
	images[6] = 'images/profile4.jpeg';
	images[4] = 'images/profile5.jpeg';
	images[5] = 'images/profile6.jpeg';
	images[3] = 'images/profile7.jpeg';
	images[7] = 'images/profile8.jpeg';
	images[8] = 'images/profile9.jpeg';
	
	var names = [];
	names[0] = 'Rohit Ainapure';
	names[1] = 'Raghu Prabhakar';
	names[2] = 'Andrew Jenkins';
	names[3] = 'Anshu Prabhat';
	names[4] = 'Vaishnav Desai';
	names[5] = 'Zahra Nazari';
	names[6] = 'Fan Yang';
	names[7] = 'Jack Sparrow';
	names[8] = 'John Pavan';
	
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
		width:'50%',
	    separatorColor:'#000000',
	    top:60,
	    left:0,
	    backgroundColor:'#003366',
	    borderColor:'#000000',
	    borderWidth:2,
	    shadowColor:'#000000',
	    scrollable:true,
	    separatorStyle:1,
	    shadowOffset:{x:0,y:1},
	    borderRadius:2,
	    showVerticalScrollIndicator:false,
	    showHorizontalScrollIndicator:false,
	    data:rowers
	});
	self.add(rowerTableView);
	
	var rowCheckCount = 0;
	rowerTableView.addEventListener('click', function(e) {
	// event data
        var index = e.index;
        var section = e.section;
        var row = e.row;
        var rowdata = e.rowData;
        //row.hasCheck = true;
        var check = true;
 
        if(row.hasCheck === true) {
        	rowCheckCount--;
            row.hasCheck = false;
            Ti.API.info("unchecked");
        }
 
        else {
        	rowCheckCount++;
            row.hasCheck = true;
            Ti.API.info("checked");
        }
 
        Ti.API.info("click");
        Ti.API.info(row.hasCheck);
});
	
	/*
	 * The view that displays the Race as it progresses
	 */
	
	var raceRowers = [];
	var raceRow = null;
	
	for(var i=1; i<=images.length; i++) {
		var CustomRaceRow = require('ui/Race/CustomRaceRow');
		raceRow = new CustomRaceRow(images.length);
		raceRow.addEventListener('click', function(e) {
			
		});
		raceRowers.push(raceRow);	
	}
	
	startRace.addEventListener("click", function(e) {
	});
	
	var raceView = Titanium.UI.createTableView({
		height:Ti.UI.SIZE,
		editable:false,
	    contentWidth:'auto',
	    contentHeight:'auto',
	    touchEnabled:'true',
	    separatorStyle:1,
	    shadowOffset:{x:0,y:1},
	    showVerticalScrollIndicator:false,
	    showHorizontalScrollIndicator:false,
		top:60,
		right:0,
		width:'50%',
		borderColor:'#000000',
		borderRadius:2,
		scrollable:false,
		data:raceRowers
	});
	self.add(raceView);
	
	return self;
	};
	
module.exports = RaceWindow;
