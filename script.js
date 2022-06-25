/*Add your JavaScript here*/
var fluteScore = 0;
var percScore = 0;

var answered = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", function(){ 
  flute(); 
  q1a1.disabled = true; 
  q1a2.disabled = true; });
q1a2.addEventListener("click", function(){ 
  perc(); 
  q1a1.disabled = true; 
  q1a2.disabled = true; });

q2a1.addEventListener("click", function(){ 
  flute(); 
  q2a1.disabled = true; 
  q2a2.disabled = true; });
q2a2.addEventListener("click", function(){ 
  perc(); 
  q2a1.disabled = true; 
  q2a2.disabled = true; });

q3a1.addEventListener("click", function(){ 
  perc(); 
  q3a1.disabled = true; 
  q3a2.disabled = true; });

q3a2.addEventListener("click", function(){ 
  flute(); 
  q3a1.disabled = true; 
  q3a2.disabled = true; });

document.getElementById("reset").addEventListener("click", reset);

function flute(){
  
  fluteScore++;
  answered++;
  console.log("Flute: " + fluteScore + " Questions: " + answered);

  if(answered == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function perc(){
  percScore++;
  answered++;
  console.log("Percussion: " + percScore + " Questions: " + answered);

  if(answered == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult(){
  document.getElementById("display_result").addEventListener("click", displayResult);
}

function displayResult(){
  if(fluteScore > percScore){
    result.innerHTML = "You are a flutist";
    console.log("You are a flutist");
  }else{
    result.innerHTML = "You are a percussionist";
    console.log("You are a percussionist");
  }
}

function reset(){
  fluteScore = 0;
  percScore = 0;
  answered = 0;
  result.innerHTML = "You are a ...";

  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
}
