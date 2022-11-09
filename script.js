<script src="script.js" type="text/javascript"></script>
var data = "";

document.getElementById("generate_qr").addEventListener("click", function () {
    gather();
    generateQRCode();
});
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("copy").addEventListener("click", function () {
    gather();
    document.getElementById("display").innerHTML = data;
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = data;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
});

document.getElementById("dark_mode").addEventListener("click", function () {
    var element = document.body;
    element.classList.toggle("dark_mode");
});

var autonHigh = document.getElementById("auton_high");
var autonLow = document.getElementById("auton_low");
var teleopHigh = document.getElementById("teleop_high");
var teleopLow = document.getElementById("teleop_low");
var opposingHigh = document.getElementById("opposing_high");
var opposingLow = document.getElementById("opposing_low");

var auton_high_scored = 0;
var auton_low_scored = 0;
var teleop_high_scored = 0;
var teleop_low_scored = 0
var opposing_high_scored = 0;
var opposing_low_scored = 0;

document.getElementById("increment_auton_high").addEventListener("click", function () { auton_high_scored++; autonHigh.innerHTML = auton_high_scored; });
document.getElementById("decrement_auton_high").addEventListener("click", function () { if (auton_high_scored > 0) { auton_high_scored--; autonHigh.innerHTML = auton_high_scored; } });

document.getElementById("increment_auton_low").addEventListener("click", function () { auton_low_scored++; autonLow.innerHTML = auton_low_scored; });
document.getElementById("decrement_auton_low").addEventListener("click", function () { if (auton_low_scored > 0) { auton_low_scored--; autonLow.innerHTML = auton_low_scored; } });

document.getElementById("increment_teleop_high").addEventListener("click", function () { teleop_high_scored++; teleopHigh.innerHTML = teleop_high_scored; });
document.getElementById("decrement_teleop_high").addEventListener("click", function () { if (teleop_high_scored > 0) { teleop_high_scored--; teleopHigh.innerHTML = teleop_high_scored; } });

document.getElementById("increment_teleop_low").addEventListener("click", function () { teleop_low_scored++; teleopLow.innerHTML = teleop_low_scored; });
document.getElementById("decrement_teleop_low").addEventListener("click", function () { if (teleop_low_scored > 0) { teleop_low_scored--; teleopLow.innerHTML = teleop_low_scored; } });

document.getElementById("increment_opposing_high").addEventListener("click", function () { opposing_high_scored++; opposingHigh.innerHTML = opposing_high_scored; });
document.getElementById("decrement_opposing_high").addEventListener("click", function () { if (opposing_high_scored > 0) { opposing_high_scored--; opposingHigh.innerHTML = opposing_high_scored; } });

document.getElementById("increment_opposing_low").addEventListener("click", function () { opposing_low_scored++; opposingLow.innerHTML = opposing_low_scored; });
document.getElementById("decrement_opposing_low").addEventListener("click", function () { if (opposing_low_scored > 0) { opposing_low_scored--; opposingLow.innerHTML = opposing_low_scored; } });

//scoring position
var tarmac = document.getElementById("tarmac");
var launch_pad = document.getElementById("launchpad");
var other = document.getElementById("other");

tarmac.addEventListener("click", function () { tarmac.disabled = true; });
launchpad.addEventListener("click", function () { launchpad.disabled = true; });
other.addEventListener("click", function () { other.disabled = true; });

document.getElementById("reset_score_pos").addEventListener("click", function () {
    resetScorePos();
})

function resetScorePos() {
    tarmac.disabled = false;
    launchpad.disabled = false;
    other.disabled = false;
}
//climb level
var none = document.getElementById("none");
var attempted = document.getElementById("attempted");
var low = document.getElementById("low");
var middle = document.getElementById("middle");
var high = document.getElementById("high");
var traversal = document.getElementById("traversal");

none.addEventListener("click", function () { none.disabled = true; });
attempted.addEventListener("click", function () { attempted.disabled = true; });
low.addEventListener("click", function () { low.disabled = true; });
middle.addEventListener("click", function () { middle.disabled = true; });
high.addEventListener("click", function () { high.disabled = true; });
traversal.addEventListener("click", function () { traversal.disabled = true; });

document.getElementById("reset_climb").addEventListener("click", function () {
    resetClimb()
})

function resetClimb() {
    none.disabled = false;
    attempted.disabled = false;
    low.disabled = false;
    middle.disabled = false;
    high.disabled = false;
    traversal.disabled = false;
}

//fouls
var foul_object = document.getElementById("foul");
var tech_foul_object = document.getElementById("tech_foul");
var yellow_object = document.getElementById("yellow");
var red_object = document.getElementById("red");

foul_object.addEventListener("click", function () { foul_object.disabled = true; });
tech_foul_object.addEventListener("click", function () { tech_foul_object.disabled = true; });
yellow_object.addEventListener("click", function () { yellow_object.disabled = true; });
red_object.addEventListener("click", function () { red_object.disabled = true; });

//flags
var crashing_object = document.getElementById("crashing");
//var opposing_object = document.getElementById("opposing");
var drivetrain_object = document.getElementById("drivetrain");
var defense_object = document.getElementById("defense");

crashing_object.addEventListener("click", function () { crashing_object.disabled = true; });
//opposing_object.addEventListener("click", function(){opposing_object.disabled = true;});
drivetrain_object.addEventListener("click", function () { drivetrain_object.disabled = true; });
defense_object.addEventListener("click", function () { defense_object.disabled = true; });

document.getElementById("reset_flags").addEventListener("click", function () {
    resetFlags();
})

function resetFlags() {
    foul_object.disabled = false;
    tech_foul_object.disabled = false;
    yellow_object.disabled = false;
    red_object.disabled = false;
    crashing_object.disabled = false;
    drivetrain_object.disabled = false;
    defense_object.disabled = false;
}


var startZone = "";
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14 = false;
document.getElementById("zone1").addEventListener("click", function () {
    startZone = "Zone1";
    b1 = !b1;
    if (b1) {
        document.getElementById("zone_display").innerHTML += " Ball 1,";
    } else { removeZone(" Ball 1,"); }
});
document.getElementById("zone2").addEventListener("click", function () {
    startZone = "Zone2";
    b2 = !b2;
    if (b2) {
        document.getElementById("zone_display").innerHTML += " Ball 2,";
    } else { removeZone(" Ball 2,"); }
});
document.getElementById("zone3").addEventListener("click", function () {
    startZone = "Zone3";
    b3 = !b3;
    if (b3) {
        document.getElementById("zone_display").innerHTML += " Ball 3,";
    } else { removeZone(" Ball 3,"); }
});
document.getElementById("zone4").addEventListener("click", function () {
    startZone = "Zone4";
    b4 = !b4;
    if (b4) {
        document.getElementById("zone_display").innerHTML += " Ball 4,";
    } else { removeZone(" Ball 4,"); }
});

document.getElementById("zone5").addEventListener("click", function () {
    startZone = "Zone5";
    b5 = !b5;
    if (b5) {
        document.getElementById("zone_display").innerHTML += " Ball 5,";
    } else { removeZone(" Ball 5,"); }
});
document.getElementById("zone6").addEventListener("click", function () {
    startZone = "Zone6";
    b6 = !b6;
    if (b6) {
        document.getElementById("zone_display").innerHTML += " Ball 6,";
    } else { removeZone(" Ball 6,"); }
});
document.getElementById("zone7").addEventListener("click", function () {
    startZone = "Zone7";
    b7 = !b7;
    if (b7) {
        document.getElementById("zone_display").innerHTML += " Ball 7,";
    } else { removeZone(" Ball 7,"); }
});
document.getElementById("zone8").addEventListener("click", function () {
    startZone = "Zone8";
    b8 = !b8;
    if (b8) {
        document.getElementById("zone_display").innerHTML += " Ball 8,";
    } else { removeZone(" Ball 8,"); }
});

document.getElementById("zone9").addEventListener("click", function () {
    startZone = "Zone9";
    b9 = !b9;
    if (b9) {
        document.getElementById("zone_display").innerHTML += " Ball 9,";
    } else { removeZone(" Ball 9,"); }
});
document.getElementById("zone10").addEventListener("click", function () {
    startZone = "Zone10";
    b10 = !b10;
    if (b10) {
        document.getElementById("zone_display").innerHTML += " Ball 10,";
    } else { removeZone(" Ball 10,"); }
});
document.getElementById("zone11").addEventListener("click", function () {
    startZone = "Zone11";
    b11 = !b11;
    if (b11) {
        document.getElementById("zone_display").innerHTML += " Ball 11,";
    } else { removeZone(" Ball 11,"); }
});
document.getElementById("zone12").addEventListener("click", function () {
    startZone = "Zone12";
    b12 = !b12;
    if (b12) {
        document.getElementById("zone_display").innerHTML += " Ball 12,";
    } else { removeZone(" Ball 12,"); }
});

document.getElementById("zone13").addEventListener("click", function () {
    startZone = "Zone13";
    b13 = !b13;
    if (b13) {
        document.getElementById("zone_display").innerHTML += " Ball 13,";
    } else { removeZone(" Ball 13,"); }
});
document.getElementById("zone14").addEventListener("click", function () {
    startZone = "Zone14";
    b14 = !b14;
    if (b14) {
        document.getElementById("zone_display").innerHTML += " Ball 14,";
    } else { removeZone(" Ball 14,"); }
});

var scoutName = document.getElementById("scout_name");
var teamNumber = document.getElementById("team_number");
var matchNumber = document.getElementById("match_number");
var allianceColor = document.getElementById("alliance_color");
var robotPresent = document.getElementById("robot_present");
var exitedTarmac = document.getElementById("exited_tarmac");

function gather() {
    data = "";
    data += scoutName.value + "."; //string
    data += teamNumber.value + "."; //number
    data += matchNumber.value + "."; //number
    data += allianceColor.value + "."; //string: "red" or "blue"
    data += robotPresent.value + "."; //string: "Yes" or "No"
    data += exitedTarmac.value + "."; //string: "Yes" or "No"
    data += (document.getElementById("zone_display").innerHTML.replace('Balls Selected:', '')).replaceAll(" Ball ", '/').replaceAll(",", "") + ".";//string: "/#"
    data += auton_high_scored + "."; //integer
    data += auton_low_scored + "."; //integer
    data += teleop_high_scored + "."; //integer
    data += teleop_low_scored + "."; //integer
    data += boolToChar(tarmac) + "."; //char: "t" or "f"
    data += boolToChar(launchpad) + "."; //char: "t" or "f"
    data += boolToChar(other) + "."; //char: "t" or "f"
    data += climbLevel() + "."; //string: "none" - did not attempt, "attempted", "low", "middle", "high", "traversal", "" - no input
    data += boolToChar(foul_object) + "."; //char: "t" or "f"
    data += boolToChar(tech_foul_object) + "."; //char: "t" or "f"
    data += boolToChar(yellow_object) + "."; //char: "t" or "f"
    data += boolToChar(red_object) + "."; //char: "t" or "f"
    data += opposing_high_scored + "."; //integer 
    data += opposing_low_scored + "."; //integer 
    data += boolToChar(crashing_object) + "."; //char: "t" or "f"
    data += boolToChar(drivetrain_object) + "."; //char: "t" or "f"
    data += boolToChar(defense_object) + "."; //char: "t" or "f"
    //document.getElementById("display").innerHTML = data; 
}

function climbLevel() {
    if (none.disabled) {
        return "none";
    } else if (attempted.disabled) {
        return "attempted";
    } else if (low.disabled) {
        return "low";
    } else if (middle.disabled) {
        return "middle";
    } else if (high.disabled) {
        return "high";
    } else if (traversal.disabled) {
        return "traversal";
    } else {
        return "";
    }
}

function removeZone(str) {
    document.getElementById("zone_display").innerHTML = document.getElementById("zone_display").innerHTML.replace(str, '');
}
function boolToChar(object) {
    if (object.disabled) {
        return 't';
    } else {
        return 'f';
    }
}
function clear() {
    scoutName.value = "";
    teamNumber.value = 0;
    matchNumber.value = 0;
    allianceColor.value = "";
    robotPresent.value = "";
    exitedTarmac.value = "";
    document.getElementById("zone_display").innerHTML = "Balls Selected: ";
    autonHigh.innerHTML = "#";
    auton_high_scored = 0;
    autonLow.innerHTML = "#";
    auton_low_scored = 0;
    teleopHigh.innerHTML = "#";
    teleop_high_scored = 0;
    teleopLow.innerHTML = "#";
    teleop_low_scored = 0;
    opposing_high_scored = 0;
    opposingHigh.innerHTML = "#";
    opposing_low_scored = 0;
    opposingLow.innerHTML = "#";
    resetScorePos();
    resetClimb();
    resetFlags();
    document.getElementById("display").innerHTML = "";
    data = "";
}

function generateQRCode() {
    str = ""
    var count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data.charAt(i) == '.') {
            count++;
        }
        if (count == 24) {
            str = data.substring(0, i) + ",";
            break;
        }
    }
    //print(str);
    //https://github.com/davidshimjs/qrcodejs/blob/master/README.md
    new QRCode(document.getElementById("display"), str);
}
