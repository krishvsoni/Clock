setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();


// random theme generator

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const main = document.querySelector('#main')
const button = document.querySelector('.btn')
const clock  = document.querySelector('.clock') 

function Random(params) {
  const min = Math.floor(1 + Math.random() * 255)
  const med = Math.floor(1 + Math.random() * 255)
  const max = Math.floor(1 + Math.random() * 255)

  return `rgb(${min},${med},${max})`
}
function light(params) {
  const min = Math.floor(140 + Math.random() * 255)


  return `rgb(255,${min},${min})`
}


button.addEventListener('click',()=>{
  main.style.background = Random()
  clock.style.background = light()
  clock.style.color = '#000'
  hour.style.background = '#000'
  hour.style.border = 'none'
  minute.style.background = 'blue'
  second.style.background = 'red'
  mode.style.background = '#000'
  mode.style.fill = '#fff'
})


// adding dark and light mode 

const mode = document.querySelector('.mode')
const num = document.querySelectorAll('.number1')
let flag = 0;
mode.addEventListener('click',()=>{

  if (flag ==0) {
    main.style.background = '#000'
    clock.style.backgroundColor = '#222222'
    clock.style.color = '#fff'
    hour.style.background = '#fff'
    minute.style.background = 'rgb(42, 78, 80)'
    minute.style.border = 'none'
    second.style.background = 'green'
    second.style.border = 'none'
    mode.style.background = '#fff'
    mode.style.fill = '#000'
    console.log("yello");
    // button.style.border = '2px solid #fff'

    flag = 1    

  }  else  {
    console.log("hello");
    main.style.background = '#fff'
    clock.style.backgroundColor = '#fff'
    clock.style.color = '#000'
    hour.style.background = '#000'
    minute.style.background = '#000'
    minute.style.border = 'none'
    second.style.background = '#000'
    mode.style.background = '#000'
    mode.style.fill = '#fff'

    flag = 0
  } 


})