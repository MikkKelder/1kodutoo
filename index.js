/*jshint esversion:6*/
let clockContainer;
let changeColor;
let changeFontColor;
let dayContainer;
let monthContainer;
let fullTimeContainer;
var audio = new Audio('gong.mp3');


window.onload = function () {
  init();
};

function init() {
//  dragElement(document.getElementById("mydiv"));
  startClock();
    changeColor=document.querySelector('#change-color');
    changeColor.addEventListener('click', changeBackgroundColor);
    window.addEventListener('onclick', changeBackgroundColor);
    changeFontColor=document.querySelector('#change-font-color');
    changeFontColor.addEventListener('click', changeTextColor);
    window.addEventListener('onclick', changeTextColor);
}

function startClock() {
  clockContainer=document.querySelector('#clockContainer');
  monthContainer=document.querySelector('#monthContainer');
  fullTimeContainer=document.querySelector('#fullTime');
  updateMonth();
  updateDay();

  window.setInterval(function(){
    updateDay();
    //updateMonth();
  }, 1000);
}

function updateMonth() {
  const date = new Date();
  monthContainer = document.querySelector('#monthContainer');
  let month;
  switch(new Date().getMonth()){
    case 0:
      month = "Jaanuar";
      break;
    case 1:
      month = "Veebruar";
      break;
    case 2:
      month = "Märts";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "Mai";
      break;
    case 5:
      month = "Juuni";
      break;
    case 6:
      month = "Juuli";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "Oktoober";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "Detsember";
      break;

  }
  today= new Date().getDate();
  month= today + ". " + month;
  monthContainer.innerHTML = month;
}

function updateDay() {
  const date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0"+hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0"+minutes;
  }
  let seconds = date.getSeconds();
  if (seconds < 10){
    seconds = "0"+seconds;
  }
  if (minutes == 59){
    if (seconds == 57){
          audio.play();
    }
  }
  let fullTime = hours+":"+minutes+":"+seconds;
  clockContainer.innerHTML = fullTime;
  dayContainer = document.querySelector('#dayContainer');
  let day;
  switch(new Date().getDay()){
    case 0:
      day = "Pühapäev";
      break;
    case 1:
      day = "Esmaspäev";
      break;
    case 2:
      day = "Teisipäev";
      break;
    case 3:
      day = "Kolmapäev";
      break;
    case 4:
      day = "Neljapäev";
      break;
    case 5:
      day = "Reede";
      break;
    case 6:
      day = "Laupäev";
      break;
  }
  dayContainer.innerHTML = day;
}

function changeBackgroundColor() {
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
//  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function changeTextColor() {
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
//  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
document.body.style.color = `rgb(${red},${green},${blue})`;
}

function changeFont(font){
    document.getElementById("clockContainer").style.fontFamily = font.value;
}
