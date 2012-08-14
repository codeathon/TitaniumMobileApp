/*
 * Parse the jSON and create appropriate data arrays
 */

var ProfileWindow = function ProfileWindow(title) {

var win22 = Titanium.UI.createWindow({
	layout:'absolute',
	title:title,
	backgroundColor:'#ffffff'
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

for (var i=0; i <=4; i++) {
	var CustomRow = require('ui/Coach/CustomRow');
	row = new CustomRow(images[i],names[i],'M',22,75,195,5);
	Ti.API.info('Post Row height '+row.height);
	rowers.push(row);
}

var rowerTableView = Titanium.UI.createTableView({
	objName:'rowerTable',
    data:rowers,
	editable:'true',
    touchEnabled:'true',
    separatorColor:'#000000',
    height:964,
    top:60,
    width:400,
    left:0,
    maxRowHeight:964,
    backgroundColor:'#003366',
    borderColor:'#000000',
    shadowColor:'#000000',
    separatorStyle:1,
    scrollable:false,
    shadowOffset:{x:0,y:1},
    borderRadius:5,
    showVerticalScrollIndicator:false,
    showHorizontalScrollIndicator:false,
    style:1,
});
win22.add(rowerTableView);

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
	Ti.API.info('Inside Setu session click');
	var TabGroupRace = require('ui/Coach/TabGroupRace'),
	theTabGroupRace = new TabGroupRace();
	theTabGroupRace.open();
});

var ergs = [{title:'Erg 1'},
  			{title:'Erg 2'},
  			{title:'Erg 3'}];
  			
var ergView = Ti.UI.createView({
	rowHeight:250,
	top:100,
	right:60,
	bottom:70,
	width:300,
	borderColor:'#000000',
	backgroundColor:'#3300CC',
	borderRadius:2,
});
win22.add(ergView);

var wide = Titanium.Platform.displayCaps.platformWidth,
	len =  Titanium.Platform.displayCaps.platformHeight;

Ti.API.info(wide);
Ti.API.info(len);

return win22;
};

module.exports = ProfileWindow;