const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearConteiner = document.querySelector('#year')
const sphinnerLoading =document.querySelector('#loading')
const countdownContainer =document.querySelector('#countdown')


const nextYear = new Date().getFullYear()+1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearConteiner.textContent=nextYear
const getTimeUnit= unit=>unit<10 ?'0'+unit:unit

const insertCountdownValues =({days,hours,minutes,seconds}) =>{
    secondsContainer.textContent=getTimeUnit(seconds)
    minutesContainer.textContent=getTimeUnit(minutes)
    hoursContainer.textContent=getTimeUnit(hours)
    daysContainer.textContent=getTimeUnit(days)

}

const updateCountdown  = ()=> {

    const corruntTime= new Date()
    const difference = newYearTime-corruntTime
    const days= Math.floor(difference/1000 /60 /60 /24)
    const hours= Math.floor(difference/1000 /60 /60)%24
    const minutes= Math.floor(difference/1000 /60)%60
    const seconds= Math.floor(difference/1000)%60
    insertCountdownValues({days,hours,minutes,seconds})
    
}
   const handleCountdownDisplay = ()=>{
 
        sphinnerLoading.remove()
        countdownContainer.style.display='flex'
        
        
        
   
   }

   setTimeout(handleCountdownDisplay,1000)
    setInterval(updateCountdown,1000)