var data = "";

document.getElementById("generate_qr").addEventListener("click", gather);
document.getElementById("clear").addEventListener("click", clear);

var autonHigh = document.getElementById("auton_high");
var autonLow = document.getElementById("auton_low");
var teleopHigh = document.getElementById("teleop_high");
var teleopLow = document.getElementById("teleop_low");

var auton_high_scored = 0;
var auton_low_scored = 0;
var teleop_high_scored = 0;
var teleop_low_scored = 0;

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

var scoutName = document.getElementById("scout_name");
var teamNumber = document.getElementById("team_number");
var matchNumber = document.getElementById("match_number");
var allianceColor = document.getElementById("alliance_color");
var robotPresent = document.getElementById("robot_present");
var exitedTarmac = document.getElementById("exited_tarmac");

function gather(){
    data += scoutName.value;
    data += teamNumber.value;
    data += matchNumber.value;
    data += allianceColor.value;
    data += robotPresent.value;
    data += exitedTarmac.value;
    data += auton_high_scored;
    data += auton_low_scored;
    data += teleop_high_scored;
    data += teleop_low_scored;
    data += document.getElementById("tarmac").checked;
    data += document.getElementById("launchpad").checked;
    data += document.getElementById("other").checked;
    data += document.getElementById("none").checked;
    data += document.getElementById("low").checked;
    data += document.getElementById("middle").checked;
    data += document.getElementById("high").checked;
    data += document.getElementById("traversal").checked;
    data += !foul_object.disabled;
    data += !tech_foul_object.disabled;
    data += !yellow_object.disabled;
    data += !red_object.disabled;
    data += !crashing_object.disabled;
    data += !opposing_object.disabled;
    data += !drivetrain_object.disabled;
    data += !defense_object.disabled;
    document.getElementById("display").innerHTML = data;
    generateQRCode();
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
}