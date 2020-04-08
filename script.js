const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');

let countSec = 0;
let countMin = 0;

const updateText = () =>{
  minutes.innerHTML = (countMin);
  seconds.innerHTML = (countSec);
}
updateText();


const countDown = () => {
if (document.getElementById('second').value > 0) {
countSec = parseInt(document.getElementById('second').value)
}
if (document.getElementById('minute').value > 0) {
countMin = parseInt(document.getElementById('minute').value)
}
let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<h1>ВРЕМЯ ИСТЕКЛО</h1>'
  }
  if(countSec > 0) { countSec--
  document.getElementById('second').value--
  }else{
  	countSec = 59;
    countMin--;
  document.getElementById('minute').value--
  } 
  updateText();
}


plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

start.onclick = () => {
	  countDown();  
	  $('#second').hide()
	  $('#minute').hide()
}


function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

const $ = (e) => new jQuery(e);
