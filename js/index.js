$(document).ready(function(){ 
var sessiontimer=25, breaktimer=5, timer, timerOn=0, sessionOn=0, s, m=sessiontimer;
document.getElementById('clock').innerHTML = m + ":" + "00";
document.getElementById('tomato-img').classList.add("apply-shake");
  
function getsessiontimer () {
  if(sessiontimer>=0 && sessiontimer<=60){
   $("#session").html(sessiontimer);
  }
}
function getbreaktimer () {
   if(breaktimer>=0 && breaktimer<=60){
  $("#break").html(breaktimer);
   }
}
  $("button").on("click", function(){
  if(this.id==="plus-session"){
    sessiontimer= sessiontimer + 1;
    getsessiontimer();
  }
  else if(this.id==="plus-break") {
          breaktimer= breaktimer + 1;
          getbreaktimer();
          }  
  else if(this.id==="minus-session") {
    sessiontimer= sessiontimer - 1;
    getsessiontimer();
          }
  else if(this.id==="minus-break") {
    breaktimer= breaktimer - 1; 
    getbreaktimer();
          }
});
function startSessionTimer() {
  sessionOn=1;
  var presentTime = document.getElementById('clock').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  m = timeArray[0];
  s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m==0 && s==00){ 
    document.getElementById('tomato-img').classList.add("apply-shake");
    document.getElementById('tomato-img').src = 'https://drive.google.com/uc?id=1LHVBgWvSw-u9DovCIxGZwhoeZhcZ_IDf';
    console.log('session');
     s="00";
     m=breaktimer;
     clearInterval(timer);
     timer=setInterval(startBreakTimer, 1000);
  }
  document.getElementById('clock').innerHTML = m + ":" + s; 
}
     function startBreakTimer() {
  sessionOn=0;
         var presentTime = document.getElementById('clock').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  s = checkSecond((timeArray[1] - 1));
  m = timeArray[0];
  if(s==59){m=m-1}
  if(m==0 && s==00){
    document.getElementById('tomato-img').classList.add("apply-shake");
    document.getElementById('tomato-img').src = " https://drive.google.com/uc?id=1ABGBQjEre-8f05ywH8tcvbZtMiYcMdSq";
    console.log('break');
     s="00";
     m=sessiontimer;
    clearInterval(timer); 
    timer=setInterval(startSessionTimer, 1000);
  }  
  document.getElementById('clock').innerHTML = m + ":" + s; 
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}  
  $("input").on("click", function(){
   if(this.id==="stop") {
         timerOn=0;
        sessionOn= !sessionOn;
        clearInterval(timer);  
            }
   else if(this.id==="start") {
           if(!timerOn) {
             if(!sessionOn){
               timer=setInterval(startSessionTimer, 1000);
             }else{
               timer=setInterval(startBreakTimer, 1000);
             }
             timerOn=1;
              }
            }
   else if(this.id==="reset") {
            clearInterval(timer);  
            m= sessiontimer;
            s= 0;
            timerOn=0;
            sessionOn=0;    
        document.getElementById('clock').innerHTML =
    m + ":" + "00";
            }
 });
 

 });