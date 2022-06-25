var data = "";

var generate = document.getElementById("generate_qr").addEventListener("click", gather);

var auton_high_scored = 0;
var auton_low_scored = 0;
var teleop_high_scored = 0;
var teleop_low_scored = 0;

document.getElementById("increment_auton_high").addEventListener("click", function(){
    //console.log("auton high increment");
    auton_high_scored++;
    document.getElementById("auton_high").innerHTML = auton_high_scored + " ";
});
document.getElementById("decrement_auton_high").addEventListener("click", function(){
    //console.log("auton high decrement");
    auton_high_scored--;
    document.getElementById("auton_high").innerHTML = auton_high_scored + " ";
});

document.getElementById("increment_auton_low").addEventListener("click", function(){
    //console.log("auton high decrement");
    auton_low_scored++;
    document.getElementById("auton_low").innerHTML = auton_low_scored;
});
document.getElementById("decrement_auton_low").addEventListener("click", function(){
    //console.log("auton high decrement");
    auton_low_scored--;
    document.getElementById("auton_low").innerHTML = auton_low_scored;
});

document.getElementById("increment_teleop_high").addEventListener("click", function(){
    //console.log("auton high decrement");
    teleop_high_scored++;
    document.getElementById("teleop_high").innerHTML = teleop_high_scored + " ";
});
document.getElementById("decrement_teleop_high").addEventListener("click", function(){
    //console.log("auton high decrement");
    teleop_high_scored--;
    document.getElementById("teleop_high").innerHTML = teleop_high_scored + " ";
});

document.getElementById("increment_teleop_low").addEventListener("click", function(){
    //console.log("auton high decrement");
    teleop_low_scored++;
    document.getElementById("teleop_low").innerHTML = teleop_low_scored + " ";
});
document.getElementById("decrement_teleop_low").addEventListener("click", function(){
    //console.log("auton high decrement");
    teleop_low_scored--;
    document.getElementById("teleop_low").innerHTML = teleop_low_scored + " ";
});

var foul_object = document.getElementById("foul");
foul_object.addEventListener("click", function(){
    foul_object.disabled = true;
});

var tech_foul_object = document.getElementById("tech_foul");
tech_foul_object.addEventListener("click", function(){
    tech_foul_object.disabled = true;
});

var yellow_object = document.getElementById("yellow");
yellow_object.addEventListener("click", function(){
    yellow_object.disabled = true;
});

var red_object = document.getElementById("red");
red_object.addEventListener("click", function(){
    red_object.disabled = true;
});

var crashing_object = document.getElementById("crashing");
crashing_object.addEventListener("click", function(){
    crashing_object.disabled = true;
});

var opposing_object = document.getElementById("opposing");
opposing_object.addEventListener("click", function(){
    opposing_object.disabled = true;
});

var drivetrain_object = document.getElementById("drivetrain");
drivetrain_object.addEventListener("click", function(){
    drivetrain_object.disabled = true;
});

var defense_object = document.getElementById("defense");
defense_object.addEventListener("click", function(){
    defense_object.disabled = true;
});

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

function gather(){
    data = document.getElementById("scout_name").value;
    data += document.getElementById("team_number").value;
    data += document.getElementById("match_number").value;
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
    data += document.getElementById("transversal").checked;
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