/*
 * Parse the jSON and create appropriate data arrays
 */

var ProfileWindow = function ProfileWindow(title) {

var win22 = Titanium.UI.createWindow({
	layout:'absolute',
	title:title,
	    backgroundGradient:{
			type:'linear',
			colors:[
			{color:'#cccccc',position:0.0},
			{color:'#ffcc66',position:0.50},
			{color:'#ffff66',position:1.0}
			]
		},
});

var athleteLabel = Ti.UI.createLabel({
	text:'Athletes',
	top:20,
	left:30,
	font:{fontSize:20},
	textAlign:'center'
});
win22.add(athleteLabel);

var coachLabel = Ti.UI.createLabel({
	text:'Welcome Coach, Neil',
	height:50,
	width:90,
	top:0,
	right:90
})
win22.add(coachLabel);

var coachImage = Ti.UI.createImageView({
	image:'images/ns.png',
	top:0,
	right:20,
	width:50,
	height:50
})
win22.add(coachImage);

var path = Titanium.Filesystem.resourcesDirectory;

var editButton =  Ti.UI.createButton({
	title:'Edit',
	objName: 'Editbutton',
	top:20,
	left:300
});
win22.add(editButton);

var status = false;
editButton.addEventListener('click', function(e){
	if(status == false) {
		rowerTableView.moving = 'true';
		rowerTableView.editing = 'true';
		status = true;
		editButton.title = 'Done';
	}
	else {
		rowerTableView.moving = 'false';
		rowerTableView.editing = 'false';
		status = false;
		editButton.title = 'Edit';
	}
});

var addAthleteButton = Ti.UI.createButton({
	image:'images/images.jpeg',
	width:30,
	height:30,
	top:20,
	left:370,
});
win22.add(addAthleteButton);

addAthleteButton.addEventListener("click", function(e) {
	alert("Add new Athlete");
});

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

for (var i=0; i <images.length; i++) {
	var CustomRow = require('ui/Coach/CustomRow');
	row = new CustomRow(images[i],names[i],'m',22,75,195,images.length);
	Ti.API.info('Post Row height '+row.height);
	rowers.push(row);
}

var rowerTableView = Titanium.UI.createTableView({
	objName:'rowerTable',
    data:rowers,
    touchEnabled:'true',
    separatorColor:'#000000',
    height:964,
    top:60,
    width:'50%',
    backgroundColor:'#a4a4a4',
    left:0,
    maxRowHeight:964,
    borderColor:'#000000',
    shadowColor:'#000000',
    separatorStyle:1,
    scrollable:true,
    opacity:2,
    shadowOffset:{x:0,y:1},
    borderRadius:5,
    
    showVerticalScrollIndicator:false,
    showHorizontalScrollIndicator:false
});
win22.add(rowerTableView);

rowerTableView.addEventListener('click', function(e) {
	// event data
        var index = e.index;
        var section = e.section;
        var row = e.row;
        var rowdata = e.rowData;
        //row.hasCheck = true;
        var check = true;
 
        if(row.hasCheck == false) {
            row.hasCheck = true;
            Ti.API.info("checked");
        }
 
        else {
            row.hasCheck = false;
            Ti.API.info("unchecked");
        }
 
        Ti.API.info("click");
        Ti.API.info(row.hasCheck);
});


var setupSessionButton = Ti.UI.createButton({
	title:'Setup Session',
	backgroundGradient:{type:'linear',
	startPoint:{x:0,y:0},
	endPoint:{x:10,y:50},
	colors:['#CCCCCC','#999999']},
	right:30,
	bottom:10,
	width:150,
	height:40,
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
win22.add(setupSessionButton);

setupSessionButton.addEventListener("click", function(e) {
	Ti.API.info('Inside Setup session click');
	var TabGroupRace = require('ui/Coach/TabGroupRace'),
	theTabGroupRace = new TabGroupRace();
	theTabGroupRace.open();
});
		
var rowerDetailView = Ti.UI.createView({
	rowHeight:200,
	layout:'horizontal',
	top:60,
	bottom:70,
	right:0,
	width:'50%',
	borderColor:'#000000',
	backgroundColor:'#3300CC',
	borderRadius:2,
});
win22.add(rowerDetailView);

var timeSMView = Ti.UI.createView({
	layout:'horizontal',
	height:'33.3%',
	width:'auto'
});
rowerDetailView.add(timeSMView);

var timeView = Ti.UI.createView({
	left:0,
	width:'75%',
	height:'auto',
	backgroundColor:'black',
});
timeSMView.add(timeView);

		// Create a Label.
var Time = Ti.UI.createLabel({
		text : 'Time',
		color : '#ffffff',
		font : {fontSize:20},
		height : 'auto',
		width : 'auto',
		textAlign : 'center'
});
	
// Add to the parent view.
timeView.add(Time);

var smView = Ti.UI.createView({
	width:'25%',
	height:'auto',
	backgroundColor:'orange'
});
timeSMView.add(smView);

	
// Create a Label.
var SplitMinute = Ti.UI.createLabel({
		text : 'Split/min',
		color : '#ffffff',
		font : {fontSize:12},
		height : 'auto',
		width : 'auto',
		textAlign : 'center'
});
	
// Add to the parent view.
smView.add(SplitMinute);

var wattView = Ti.UI.createView({
	height:'33.3%',
	width:'auto',
	backgroundColor:'red'
});
rowerDetailView.add(wattView);


// Create a Label.
var wattViewLabel = Ti.UI.createLabel({
		text : 'Watts',
		color : '#ffffff',
		font : {fontSize:20},
		height : 'auto',
		width : 'auto',
		textAlign : 'center'
});
	
// Add to the parent view.
wattView.add(wattViewLabel);

var averageWattView = Ti.UI.createView({
	height:'33.3%',
	width:'auto',
	backgroundColor:'purple'
});
rowerDetailView.add(averageWattView);

	// Create a Label.
	var averageWattViewLabel = Ti.UI.createLabel({
		text : 'Avg Watt',
		color : '#ffffff',
		font : {fontSize:20},
		height : 'auto',
		width : 'auto',
		textAlign : 'center'
	});
	
	// Add to the parent view.
	averageWattView.add(averageWattViewLabel);
	


var wide = Titanium.Platform.displayCaps.platformWidth,
	len =  Titanium.Platform.displayCaps.platformHeight;

Ti.API.info(wide);
Ti.API.info(len);

return win22;
};

module.exports = ProfileWindow;