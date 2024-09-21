import React, { useEffect, useState } from 'react'

function CountDownDate({target}) {
    const [days, setDays] = useState() ; 
    const [hours, setHours] = useState() ;
    const [minutes, setMinutes] = useState() ;
    const [seconds, setSeconds] = useState() ;
    let interval  ; 
    const updateTime = ()=>{
        const currentTime = new Date().getTime();
        const diffTime = target - currentTime ;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
        setDays(diffDays)
        setHours(diffHours)
        setMinutes(diffMinutes)
        setSeconds(diffSeconds)
    }

    useEffect(()=>{
        updateTime()
        interval = setInterval(updateTime, 1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [])

  return <div className='countdown__wrapper'>
    <div className='countdown__data'>
        <div className='days'>
            <h1>Days</h1>
            <h5>{days}</h5>
        </div>
        <div className='hours'>
            <h1>Hours</h1>
            <h5>{hours}</h5>
        </div>
        <div className='minutes'>
            <h1>Minute</h1>
            <h5>{minutes}</h5>
        </div>
        <div className='seconds'>
            <h1>Seconds</h1>
            <h5>{seconds}</h5>
        </div>

    </div>
  </div>
}

export default CountDownDate ; 