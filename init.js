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
        optionArray = ["Anatomy_Physiology|Anatomy & Physiology","Plant_Biology|Plant & Biology", "Cellular_Microbiology|Cellular & Microbiology", "Genetics_Evolution|Genetics & Evolution","Misc|Misc"];
    }else if(s1.value == "Chemistry"){
        optionArray = ["Organic|Organic","Electrochemistry|Electrochemistry","Thermochemistry|Thermochemistry","General_Reactions|General Reactions","Periodic Table_Atomic Structure|Periodic Table & Atomic Structure","Misc|Misc"];
    }else if(s1.value == "Physics"){
        optionArray = ["Mechanics|Mechanics","Thermodynamics|Thermodynamics","Electricity_Magnetism|Electricity & Magnetism","Fluid Dynamics|Fluid Dynamics","Nuclear|Nuclear","Misc|Misc"];
    }else if(s1.value == "Astronomy"){
        optionArray = ["Astrometry|Astrometry","Stars|Stars","Cosmology|Cosmology","Planets|Planets","Observation|Observation","Extra-solar_Bodies|Extra-solar Bodies","Misc|Misc"];
    }else if(s1.value == "Earth Science"){
        optionArray = ["Rocks_Minerals|Rocks & Minerals","Geologic_Time|Geologic Time","Water_Bodies|Water Bodies","Natural_Disasters|Natural Disasters","Weather|Weather", "Crust_Ice_Bodies|Crust & Ice Bodies", "Misc|Misc"];
    }else if(s1.value == "Energy"){
        optionArray = ["Renewable|Renewable","Non-Renewable|Non-Renewable","Statistics|Statistics","Applications|Applications","Misc|Misc"];
    }else if(s1.value == "Math"){
        optionArray = ["Calculus|Calculus","Geometry|Geometry","Algebra|Algebra","Misc|Misc"];
    }
    for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}