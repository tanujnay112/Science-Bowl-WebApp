var clientId = "568327038315-5gc1eovtfcrgpco0sumpbhfaffhi93ja.apps.googleusercontent.com";
var config = {
      apiKey: "AIzaSyC5vrJU4FkBRmGzAYMvtqYXu3F06OC7bQM",
      authDomain: "science-bowl.firebaseapp.com",
      databaseURL: "https://science-bowl.firebaseio.com",
      storageBucket: "science-bowl.appspot.com",
    };
var LOGIN = "index.html";
var ENTRY = "entry.html";
var CONF = "confirmation.html";
function populate(s1, s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML="";
    var optionArray;
    if(s1.value == "Biology"){
        optionArray = ["Anatomy|Anatomy","Plant Biology|Plant Biology", "Ecology|Ecology"];
    }else if(s1.value == "Chemistry"){
        optionArray = ["Sub1|Sub1","Sub2|Sub2","Sub3|Sub3","Sub4|Sub4","Sub5|Sub5"];
    }else if(s1.value == "Physics"){
        optionArray = ["Sub1|Sub1","Sub2|Sub2","Sub3|Sub3","Sub4|Sub4","Sub5|Sub5"];
    }else if(s1.value == "Earth Science"){
        optionArray = ["Sub1|Sub1","Sub2|Sub2","Sub3|Sub3","Sub4|Sub4","Sub5|Sub5"];
    }else if(s1.value == "Astronomy"){
        optionArray = ["Sub1|Sub1","Sub2|Sub2","Sub3|Sub3","Sub4|Sub4","Sub5|Sub5"];
    }else if(s1.value == "Energy"){
        optionArray = ["Sub1|Sub1","Sub2|Sub2","Sub3|Sub3","Sub4|Sub4","Sub5|Sub5"];
    }else if(s1.value == "Math"){
        optionArray = ["Sub1|Sub1","Sub2|Sub2","Sub3|Sub3","Sub4|Sub4","Sub5|Sub5"];
    }
    for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}