import React, { useState,useEffect } from 'react'
import '../range slider/RangeSlide.css';


const SliderComponent = ({state,setState,min,max}) => (
    <div className="range-container">
    <input type="range" onChange={e => setState(e.target.value)} value={state} name="range" id="range" min={min} max={max} />
    <label className='range-label' htmlFor="range">{state}</label>
  </div>
);

export default function useSlider(value,min,max) {

    const[localValue,setLocalValue] = useState(value);

    useEffect(() => {
        setLocalValue(value);
    }, [value])  
    return [
        localValue,
        <SliderComponent state={localValue} setState={setLocalValue} min={min} max={max} />,
        setLocalValue
    ];
            
    
}



