var music = document.getElementById("music");
var countTime = 25;
var breakTime = 1;
var seconds = 0;
var minutes = 25;
var counting;


document.getElementById('name').innerHTML = "Session";
minutes = countTime;
document.getElementById('time').innerHTML = minutes + ":0" + seconds;

function count() {
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
}

// document.getElementById("demo").onclick = function() {myFunction()};

// function myFunction() {
//     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
 document.getElementById("name").onclick = function() {start()};

function start() {
	var status = false;
	console.log("woooork");
	if (status === false) {
		console.log("wooasdasoork");
		counting = setInterval(count, 1000);
	 	status = true;
	}else if (status === true){
		console.log("woooorsssk")
		clearInterval(counting);
		status = false;
	}
};








