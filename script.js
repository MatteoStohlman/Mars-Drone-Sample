var levelCols=47;							// width, in tiles
var levelRows=44;							// height, in tiles
var tileSize=11;							//pixels per tile
var orientations = ['N','E','S','W'];		//cardinal direction array
var level = [        						// the 47x44 grid - 1=edge, 0=empty space
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

		
	];	

(function(){
	localStorage.clear();
	var canvas = document.getElementById("canvas");   // the canvas where plateaus will be drawn
	var context = canvas.getContext("2d"); 
	
	canvas.width=tileSize*levelCols;                   // canvas width.  
	canvas.height=tileSize*levelRows;                   // canvas height. 

	renderPlateau();
	
	
	function renderPlateau(){//initial display of field
		// clear the canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
		// edge = brown boxes
		for(i=0;i<levelRows;i++){
			for(j=0;j<levelCols;j++){
				if(level[i][j]==1){
					context.fillStyle = "#8B4513";
					context.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);	
				}
				else{//fill the rest with bg color
					context.fillStyle = "rgba(146,98,57,.5)";
					context.fillRect(j*tileSize,i*tileSize,tileSize,tileSize);	
				}
			}
		}
		
	}



})();

function createRover(){//function to create new rovers
	var x = document.getElementById('roverDropX').value;
	var y = document.getElementById('roverDropY').value;
	if(x>47 || y>44){alert('Commander, we lost a rover. Try to keep the coordinates inside the plateau.');return;}//validation for coordinates
	var roverCount = localStorage.getItem('roverCount');
	if(roverCount==undefined){
		roverCount=1;
		localStorage.setItem('roverCount',roverCount);
	}
	else if(roverCount==4){
		alert("That's all the rovers we have commander");//validation for number of rovers limit
		return;
	}
	else{
		roverCount=Number(roverCount)+1;
		localStorage.setItem("roverCount",Number(roverCount));
	}
	var newRover = new Rover(roverCount,[x,y],"N");
	localStorage.setItem("Rover "+roverCount,JSON.stringify(newRover));
	var canvas = document.getElementById("canvas");   // the canvas where field will be drawn
	var context = canvas.getContext("2d"); 
	var playerYPos=y*tileSize;				// converting Y player position from tiles to pixels
	var playerXPos=x*tileSize;    
	context.fillStyle="#00ff00";
	context.fillRect(playerXPos,playerYPos,tileSize,tileSize);//place new rover on field

}
function Rover(number, location, orientation) {//function to create new rover object
    this.number = number;
    this.location = location;
    this.orientation = orientation;
}

function updatePlateau(){//Moving rovers
	var activeRoverName = $('.nav-pills .active').text();
	if(activeRoverName==undefined){
		alert('Commander, we need to select a rover before submitting orders.');//validating a rover has been selected
		return;
	}
	if(localStorage.getItem(activeRoverName)==undefined){
		alert('Commander, we have not yet launched this Rover.');//validating selected rover is currently launched
	}
	var activeRover= JSON.parse(localStorage.getItem(activeRoverName)); //get rover data from localStorage
	var commandInput = $("#command_input").val();
	var canvas = document.getElementById("canvas");   // the canvas where field will be drawn
	var context = canvas.getContext("2d"); 
	context.fillStyle="00ff00";
	var playerYPos=activeRover.location[1]*tileSize;				// converting Y player position from tiles to pixels
	var playerXPos=activeRover.location[0]*tileSize;
	context.fillRect(playerXPos,playerYPos,tileSize,tileSize);
	for(step=0;step<commandInput.length;step++){
		if(commandInput[step]!="M" && commandInput[step]!="L" && commandInput[step]!="R" ){
			alert('Commander, we have received invalid input! Awaiting new orders.');//Validating directional input
			return;
		}
	}
	for(step=0;step<commandInput.length;step++){//step by step rover movement
		var currentStep = commandInput[step];
		var currentX = Number(activeRover.location[0]);
		var currentY = Number(activeRover.location[1]);
		var currentOrientationNumber = orientations.indexOf(activeRover.orientation);
		switch(currentStep){
			case "L": //Processing L command
				if (currentOrientationNumber-1>=0){var newOrientationNumber=Number(currentOrientationNumber)-1;}
				else{newOrientationNumber=3}
				activeRover.orientation=orientations[newOrientationNumber];
				break;
			case "R": //Processing L command
				if (currentOrientationNumber+1<=3){var newOrientationNumber=Number(currentOrientationNumber)+1;}
				else{newOrientationNumber=0}
				activeRover.orientation=orientations[newOrientationNumber];
				break;
			case "M": //Processing M command
				switch(currentOrientationNumber){
					case 0:
						currentY-=1;
						break
					case 1:
						currentX+=1;
						break;
					case 2:
						currentY+=1;
						break;
					case 3:
						currentX-=1;
						break;
				}
				activeRover.location=[currentX,currentY];

				var playerYPos=currentY*tileSize;				// converting Y player position from tiles to pixels
				var playerXPos=currentX*tileSize;
				context.fillStyle="#00ff00";
				context.fillRect(playerXPos,playerYPos,tileSize,tileSize);
				break;			
		}
		localStorage.removeItem(activeRoverName);
		localStorage.setItem(activeRoverName,JSON.stringify(activeRover));
		
	}
	context.fillStyle="#006400";
	context.fillRect(playerXPos,playerYPos,tileSize,tileSize);

	
		
	}
(function(){ //Adding active css class to rover navigation/selection
	$('.nav-pills li a').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
		var roverName = $(this).text();
		if(localStorage.getItem(roverName)==undefined){//updating rover info section on rover selection changes
			$("#roverName").text(roverName);
			$("#roverInfo").text('Location: Standing by for dispatch');
		}
		else{
			var roverData = JSON.parse(localStorage.getItem(roverName));
			$("#roverName").text(roverName);
			$("#roverInfo").text('Location: '+roverData.location+" Orientation: "+roverData.orientation);
		}
		
		});
})();

function rotate(direction){//processing left and right rotate button clicks.
	switch (direction){
		case "L":
			$("#command_input").val($("#command_input").val()+"L");
			break;
		case "R":
			$("#command_input").val($("#command_input").val()+"R");
			break;
	}
}
function move(direction){ ///oriocessing MOVE button click
	$("#command_input").val($("#command_input").val()+"M");	
}
function clearCommands(){ //processing clear button click 
	$("#command_input").val("");
}