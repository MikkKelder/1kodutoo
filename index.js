/*jshint esversion:6*/
let clockContainer;
let changeColor;
let dayContainer;
let monthContainer;

window.onload = function () {
  init();
};

function init() {
  dragElement(document.getElementById("mydiv"));
  startClock();
    changeColor=document.querySelector('#change-color');
    changeColor.addEventListener('click', changeBackgroundColor);
    window.addEventListener('onclick', changeBackgroundColor);
}
function spotify() {

}
function startClock() {
  clockContainer=document.querySelector('#clockContainer');
  monthContainer=document.querySelector('#monthContainer');
  updateMonth();
  updateClock();
  window.setInterval(function(){
    updateClock();
    updateMonth();
  }, 1000);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function updateMonth() {
  const date = new Date();
  monthContainer.innerHTML = date;
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
  monthContainer.innerHTML = month;
}

function updateClock() {
  const date = new Date();
  clockContainer.innerHTML = date;
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
