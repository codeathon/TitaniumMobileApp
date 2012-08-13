var RaceWindow = function RaceWindow(title) {
	
	Ti.API.info('inside Race Window');
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'#ffffff'
	});
	
	var participantsLabel = Ti.UI.createLabel({
		title:'Participants',
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
	
	var rowers = [];
	var row = null;

	var rower1 = [{title:"Age:22"},
			  	  {title:"Wt.: 90kgs."},
			  	  {title:"Ht. 195 cms."}
			  	 ];

	for (var i=0; i <=7 ; i++) {
		row = Ti.UI.createTableViewRow({
			height:'auto'
		});
		row.add(Ti.UI.createImageView({
			image:images[i],
			left:0
		}));
	
		row.add(Ti.UI.createTableView({left:120, rowHeight:34, borderColor:'#000000',borderRadius:5,backgroundColor:'#333333', footerTitle:'', scrollable:false, data:rower1}));
		row.add(Ti.UI.createLabel({text:'Rower Name ' + i, left:0}));
		rowers.push(row);
	}

	/*
	 * The List of rowers are inserted into this view
	 */

	var rowerTableView = Titanium.UI.createTableView({
		style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
    	touchEnabled:'true',
  	    separatorColor:'#000000',
	    top:60,
    	height:Ti.UI.SIZE,
    	maxRowHeight:150,
    	rowHeight:'auto',
    	width:300,
	    left:0,
	    backgroundColor:'#666666',
	    borderColor:'#000000',
	    shadowColor:'#000000',
	    separatorStyle:1,
	    shadowOffset:{x:0,y:1},
	    borderRadius:5,
	    showVerticalScrollIndicator:false,
	    showHorizontalScrollIndicator:false,
	    horizontalWrap:true,
	    footerTitle:'',
	    data:rowers
	});
	self.add(rowerTableView);
	
	/*
	 * The view that displays the Race as it progresses
	 */
	var raceView = Titanium.UI.createView({
		rowHeight:250,
		top:100,
		right:0,
		bottom:70,
		width:450,
		borderColor:'#000000',
		borderRadius:5,
	});
	self.add(raceView);
	
	return self;
	};
	
module.exports = RaceWindow;
