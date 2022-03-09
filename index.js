const videoTimes = document.querySelectorAll('[data-time]');
const videoTimesArr = Array.from(videoTimes);
const seconds = videoTimesArr
  .map(videoTime => videoTime.dataset.time)
  .map(timeString => {
    const timeMin = parseInt(timeString.split(':')[0]);
    const timeSec = parseInt(timeString.split(':')[1]);
    const totalVideoSec = (timeMin * 60) + timeSec
    return totalVideoSec;
  });

const totalSeconds = seconds.reduce((currTotal, value) => { return currTotal + value}, 0);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

const totalTimeString = hours + ":" + minutes + ":" + secondsLeft;
