let seconds = 0
let minutes = 0
let hours = 0
let timer
let isRunning

function startWatch() {
  if (!isRunning) {
    isRunning = true
    timer = setInterval(updateTime, 1000);
  }
}

function stopWatch() {
  isRunning = false
  clearInterval(timer)
}

function resetWatch() {
  isRunning = false
  clearInterval(timer)
  seconds = 0
  minutes = 0
  hours = 0
  document.querySelector('.js-time')
    .innerHTML = '00:00:00'
}

function updateTime() {
  seconds++
  if (seconds === 60) {
    seconds = 0
    minutes++
    if (minutes === 60) {
      minutes = 0
      hours++
    }
  }
  displayTime()
}

function displayTime() {
  let hoursFormat = hours < 10 ? `0${hours}`: `${hours}`
  let minutesFormat = minutes < 10 ? `0${minutes}` : `${minutes}`
  let secondsFormat = seconds < 10 ? `0${seconds}` : `${seconds}`
  
  document.querySelector('.js-time')
    .innerHTML = `${hoursFormat}:${minutesFormat}:${secondsFormat}`
}

document.querySelector('.js-stop-button')
  .addEventListener('click', () => {
    stopWatch()
  })

document.querySelector('.js-start-button')
  .addEventListener('click', () => {
    startWatch()
  })

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    resetWatch()
  })

  document.querySelector('.js-time')
    .innerHTML = '00:00:00'