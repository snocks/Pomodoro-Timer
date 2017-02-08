
var music = document.getElementById("music");
var countTime = 25;
var breakTime = 1;
var seconds = 0;
var minutes = 25;
var run = false;
var counting;

function onLoad() {
	document.getElementById('name').innerHTML = "Session";
	minutes = countTime;
	document.getElementById('time').innerHTML = minutes + ":0" + seconds;
	document.getElementById("breakMinutes").innerHTML = breakTime;
	document.getElementById('breakMinutes').innerHTML = breakTime;
	document.getElementById('sessionMinutes').innerHTML = countTime;

	obj = {
		count:function () {
			if (minutes == 0 && seconds == 1) {
				music.play()
			}

			if(minutes == 0 && seconds == 0){
				if (document.getElementById('name').innerHTML == "Session") {
					document.getElementById('name').innerHTML = "Break";
					minutes = breakTime;
					document.getElementById('time').innerHTML = minutes + ":0" + seconds;

				}else if (document.getElementById('name').innerHTML == "Break") {
					document.getElementById('name').innerHTML ="Session";
					minutes = countTime;
					document.getElementById('time').innerHTML = minutes + ":0" + seconds;
				}
			}else{
				if (seconds == 0) {
					seconds = 60;	
					minutes--;
				}
				seconds--;
				document.getElementById('time').innerHTML = minutes + ":" + seconds;
				
				if (seconds < 10) {
					document.getElementById('time').innerHTML = minutes + ":0" + seconds;
				}
			}
		},
		minusB: function () {
		    if(run === false){
			    if(breakTime > 1){
			    	breakTime--;
			    	document.getElementById("breakMinutes").innerHTML = breakTime;
			    	document.getElementById("name").innerHTML = 'Session'; 
			    	document.getElementById("time").innerHTML = countTime + ":00";
			   	}
		    }
  		},
  		plusB: function () {
		    if(run === false){
			    	breakTime++;
			    	document.getElementById("breakMinutes").innerHTML = breakTime;
			    	document.getElementById("name").innerHTML = 'Session'; 
			    	document.getElementById("time").innerHTML = countTime + ":00";
		    }
  		},
  		minusS: function () {
		    if(run === false){
			    if(countTime > 1){
			    	countTime--;
			    	document.getElementById("sessionMinutes").innerHTML = countTime;
			    	document.getElementById("name").innerHTML = 'Session'; 
			    	document.getElementById("time").innerHTML = countTime + ":00";
			   	}
		    }
  		},
  		plusS: function () {
		    if(run === false){
			    	countTime++;
			    	document.getElementById("sessionMinutes").innerHTML = countTime;
			    	document.getElementById("name").innerHTML = 'Session'; 
			    	document.getElementById("time").innerHTML = countTime + ":00";
		    }
  		},
		start: function () {
			if (run === false) {
				counting = setInterval(onLoad().count, 1000);
			 	run = true;
			}
		},
		pause: function () {
			if (run == true) {
				clearInterval(counting);
			 	run = false;
		 	}
		},
		reset: function () {
			if (run === false || true) {
				clearInterval(counting);
				run = false;
				countTime = 25;
				breakTime = 1;
				seconds = 0;
			   	document.getElementById("breakMinutes").innerHTML = breakTime;
			   	document.getElementById("sessionMinutes").innerHTML = countTime;
				document.getElementById('name').innerHTML = "Session";
				document.getElementById('time').innerHTML = countTime + ":0" + seconds;
			}
		}
	}
	return obj;
};





