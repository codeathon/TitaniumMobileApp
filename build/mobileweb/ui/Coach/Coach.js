function Coach() {
	this.coachName = false;
	this.coachProfileImage = false;
	this.coachUsername = false;
	this.coachPassword = false;
	this.coachEmail = false;
	this.coachRowerTable = false;
	
	this.addRowerRow = function(){
		
	};
	
	this.buildRowerTable = function(){
		if(!this.coachRowerTable) {
			this.coachRowerTable = Titanium.UI.createTableView({
			    contentWidth:'auto',
			    contentHeight:'auto',
			    touchEnabled:'true',
			    separatorColor:'#000000',
			    top:60,
			    width:300,
			    left:0,
			    backgroundColor:'#666666',
			    borderColor:'#000000',
			    shadowColor:'#000000',
			    separatorStyle:1,
			    shadowOffset:{x:0,y:1},
			    borderRadius:5,
			    showVerticalScrollIndicator:true,
			    showHorizontalScrollIndicator:false,
			    style:1,
  		}
	};
	
	this.submitNewCoach = function(newCoach) {
		// Code to make an http client call to send new coach information to be pushed into database
	};
};