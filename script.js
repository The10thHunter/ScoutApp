var data = "";

document.getElementById("generate_qr").addEventListener("click", gather);
document.getElementById("clear").addEventListener("click", clear);

document.getElementById("dark_mode").addEventListener("click", function(){
  var element = document.body;
  element.classList.toggle("dark_mode");
});

var autonHigh = document.getElementById("auton_high");
var autonLow = document.getElementById("auton_low");
var teleopHigh = document.getElementById("teleop_high");
var teleopLow = document.getElementById("teleop_low");

var auton_high_scored = 0;
var auton_low_scored = 0;
var teleop_high_scored = 0;
var teleop_low_scored = 0

document.getElementById("increment_auton_high").addEventListener("click", function(){auton_high_scored++; autonHigh.innerHTML = auton_high_scored; });
document.getElementById("decrement_auton_high").addEventListener("click", function(){auton_high_scored--; autonHigh.innerHTML = auton_high_scored;});

document.getElementById("increment_auton_low").addEventListener("click", function(){auton_low_scored++; autonLow.innerHTML = auton_low_scored;});
document.getElementById("decrement_auton_low").addEventListener("click", function(){auton_low_scored--; autonLow.innerHTML = auton_low_scored;});

document.getElementById("increment_teleop_high").addEventListener("click", function(){teleop_high_scored++; teleopHigh.innerHTML = teleop_high_scored;});
document.getElementById("decrement_teleop_high").addEventListener("click", function(){teleop_high_scored--; teleopHigh.innerHTML = teleop_high_scored;});

document.getElementById("increment_teleop_low").addEventListener("click", function(){teleop_low_scored++; teleopLow.innerHTML = teleop_low_scored;});
document.getElementById("decrement_teleop_low").addEventListener("click", function(){teleop_low_scored--; teleopLow.innerHTML = teleop_low_scored;});

//fouls
var foul_object = document.getElementById("foul");
var tech_foul_object = document.getElementById("tech_foul");
var yellow_object = document.getElementById("yellow");
var red_object = document.getElementById("red");

foul_object.addEventListener("click", function(){foul_object.disabled = true;});
tech_foul_object.addEventListener("click", function(){tech_foul_object.disabled = true;});
yellow_object.addEventListener("click", function(){yellow_object.disabled = true;});
red_object.addEventListener("click", function(){red_object.disabled = true;});

//flags
var crashing_object = document.getElementById("crashing");
var opposing_object = document.getElementById("opposing");
var drivetrain_object = document.getElementById("drivetrain");
var defense_object = document.getElementById("defense");

crashing_object.addEventListener("click", function(){crashing_object.disabled = true;});
opposing_object.addEventListener("click", function(){opposing_object.disabled = true;});
drivetrain_object.addEventListener("click", function(){drivetrain_object.disabled = true;});
defense_object.addEventListener("click", function(){defense_object.disabled = true;});

document.getElementById("reset_flags").addEventListener("click", function(){
    foul_object.disabled = false;
    tech_foul_object.disabled = false;
    yellow_object.disabled = false;
    red_object.disabled = false;
    crashing_object.disabled = false;
    opposing_object.disabled = false;
    drivetrain_object.disabled = false;
    defense_object.disabled = false;
})

var startZone= "";
document.getElementById("zone1").addEventListener("click", function(){
    startZone = "Zone1";
    document.getElementById("zone_display").innerHTML = "Zone 1 Selected";
});
document.getElementById("zone2").addEventListener("click", function(){
    startZone = "Zone2";
    document.getElementById("zone_display").innerHTML = "Zone 2 Selected";
});
document.getElementById("zone3").addEventListener("click", function(){
    startZone = "Zone3";
    document.getElementById("zone_display").innerHTML = "Zone 3 Selected";
});
document.getElementById("zone4").addEventListener("click", function(){
    startZone = "Zone4";
    document.getElementById("zone_display").innerHTML = "Zone 4 Selected";
});

document.getElementById("zone5").addEventListener("click", function(){
    startZone = "Zone5";
    document.getElementById("zone_display").innerHTML = "Zone 5 Selected";
});
document.getElementById("zone6").addEventListener("click", function(){
    startZone = "Zone6";
    document.getElementById("zone_display").innerHTML = "Zone 6 Selected";
});
document.getElementById("zone7").addEventListener("click", function(){
    startZone = "Zone7";
    document.getElementById("zone_display").innerHTML = "Zone 7 Selected";
});
document.getElementById("zone8").addEventListener("click", function(){
    startZone = "Zone8";
    document.getElementById("zone_display").innerHTML = "Zone 8 Selected";
});

document.getElementById("zone9").addEventListener("click", function(){
    startZone = "Zone9";
    document.getElementById("zone_display").innerHTML = "Zone 9 Selected";
});
document.getElementById("zone10").addEventListener("click", function(){
    startZone = "Zone10";
    document.getElementById("zone_display").innerHTML = "Zone 10 Selected";
});
document.getElementById("zone11").addEventListener("click", function(){
    startZone = "Zone11";
    document.getElementById("zone_display").innerHTML = "Zone 11 Selected";
});
document.getElementById("zone12").addEventListener("click", function(){
    startZone = "Zone12";
    document.getElementById("zone_display").innerHTML = "Zone 12 Selected";
});

document.getElementById("zone13").addEventListener("click", function(){
    startZone = "Zone13";
    document.getElementById("zone_display").innerHTML = "Zone 13 Selected";
});
document.getElementById("zone14").addEventListener("click", function(){
    startZone = "Zone14";
    document.getElementById("zone_display").innerHTML = "Zone 14 Selected";
});
document.getElementById("zone15").addEventListener("click", function(){
    startZone = "Zone15";
    document.getElementById("zone_display").innerHTML = "Zone 15 Selected";
});

var scoutName = document.getElementById("scout_name");
var teamNumber = document.getElementById("team_number");
var matchNumber = document.getElementById("match_number");
var allianceColor = document.getElementById("alliance_color");
var robotPresent = document.getElementById("robot_present");
var exitedTarmac = document.getElementById("exited_tarmac");

function gather(){
    data += scoutName.value + ".";
    data += teamNumber.value + ".";
    data += matchNumber.value + ".";
    data += allianceColor.value + ".";
    data += robotPresent.value + ".";
    data += exitedTarmac.value + ".";
    data += startZone + ".";
    data += auton_high_scored + ".";
    data += auton_low_scored + ".";
    data += teleop_high_scored + ".";
    data += teleop_low_scored + ".";
    data += boolToChar_Check("tarmac") + ".";
    data += boolToChar_Check("launchpad") + ".";
    data += boolToChar_Check("other") + ".";
    data += boolToChar_Check("none")  + ".";
    data += boolToChar_Check("low")  + ".";
    data += boolToChar_Check("middle")  + ".";
    data += boolToChar_Check("high")  + ".";
    data += boolToChar_Check("traversal")  + ".";
    data += boolToChar_Button(foul_object) + ".";
    data += boolToChar_Button(tech_foul_object) + ".";
    data += boolToChar_Button(yellow_object) + ".";
    data += boolToChar_Button(red_object) + ".";
    data += boolToChar_Button(crashing_object)+ ".";
    data += boolToChar_Button(opposing_object) + ".";
    data += boolToChar_Button(drivetrain_object) + ".";
    data += boolToChar_Button(defense_object);
    //document.getElementById("display").innerHTML = data;
    generateQRCode();
}
function boolToChar_Check(string){
    if(document.getElementById(string).checked){
        return 't';
    }else{
        return 'f';
    }
}
function boolToChar_Button(object){
    if(object.disabled){
        return 't';
    }else{
        return 'f'; 
    }
}
function clear(){
    scoutName.value = "";
    teamNumber.value = 0;
    matchNumber.value = 0;
    allianceColor.value = "";
    robotPresent.value = "";
    exitedTarmac.value = "";
    auton_high_scored = 0;
    auton_low_scored = 0;
    teleop_high_scored = 0;
    teleop_low_scored = 0;
    document.getElementById("tarmac").checked;
    document.getElementById("launchpad").checked;
    document.getElementById("other").checked;
    document.getElementById("none").checked;
    document.getElementById("low").checked;
    document.getElementById("middle").checked;
    document.getElementById("high").checked;
    document.getElementById("traversal").checked;
    foul_object.disabled = false;
    tech_foul_object.disabled = false;
    yellow_object.disabled = false;
    red_object.disabled = false;
    crashing_object.disabled = false;
    opposing_object.disabled = false;
    drivetrain_object.disabled = false;
    defense_object.disabled = false; 
    document.getElementById("display").innerHTML = "";
}

function generateQRCode(){
    //https://github.com/davidshimjs/qrcodejs/blob/master/README.md
    new QRCode(document.getElementById("display"), data);
}
