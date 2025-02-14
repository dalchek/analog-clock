const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    secondsHand.style.transform = `rotate(${seconds * 6}deg)`
    minutesHand.style.transform = `rotate(${minutes * 6 + seconds/10}deg)`
    hoursHand.style.transform = `rotate(${hours * 30 + minutes/2}deg)`
}
setInterval(getTime,100)