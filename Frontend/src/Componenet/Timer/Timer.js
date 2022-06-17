import { useState,useEffect,Fragment  } from 'react'
import './Timer.css'


export default function Timer({ isJoinAsPlayer, SubmitAnswers, setTimeSpent,initMinute,showValRef,TimeOutBtn}) {
    const [minutes, setMinutes] = useState(initMinute-1)
    const [seconds, setSeconds] = useState(59);

    let showVal = showValRef.current===undefined ? false : showValRef.current.showVals();


    const MultitPlayerSubmit = () => 
    {
       if(isJoinAsPlayer !== undefined)
       {
         if(isJoinAsPlayer)
         {
          setTimeSpent(String((initMinute-1) - minutes).concat("."+String(60 - seconds)));
          SubmitAnswers();
         }
       }
    }

  
    useEffect(() => {
      let myInterval;
      if(!showVal){
      myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval)
            if(!(showValRef.current===undefined))
            {
              MultitPlayerSubmit();
              if(TimeOutBtn !== undefined)
              {
      setTimeSpent(String((initMinute-1) - minutes).concat("."+String(60 - seconds)));

                TimeOutBtn();
              }
              showValRef.current.setShow(true);
              
            }
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }, 1000)
    }
    else
    {
      // console.log("time original",String((initMinute-1) - minutes).concat("."+String(60 - seconds)));
      setTimeSpent(String((initMinute-1) - minutes).concat("."+String(60 - seconds)));
      MultitPlayerSubmit();
    }
      return () => {
        clearInterval(myInterval)
      }
    })
  
    return (
     <Fragment>
            {/* <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1> */}
            <div className="clock">
          <div>
            <p className="minutes">{minutes < 10 ? `0${minutes}` : minutes}</p>
            <p>Minutes</p>
          </div>
          <div>
            <p className="seconds">{seconds < 10 ? `0${seconds}` : seconds}</p>
            <p>Seconds</p>
          </div>
        </div>
     </Fragment>
     )
  }
  