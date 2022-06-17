import '../value button/ValueButton.css'

export default function ValueButton({value,rangeEnd,rangeStart,HandleValue}) {


  const onIncrement = () => {
    if(value < rangeEnd )
    {
      HandleValue(value+1);
    }
  }

 const onDecrement = () => 
 {
   if(rangeStart<value)
   {
    HandleValue(value-1);
   }
   
 }


  return (


    <>

{/* <div className="value">{value}Minutes</div>
<input type="range" onChange={HanleSli} min="0" max="10" step="1" value={value}/> */}

    {/* <div className="wrap"> */}
      <div className="counter">
        <input
          className="counter__input"
          type="text"
          value={value}
          name="counter"
          size="5"
          readOnly="readonly"
        />
        <button onClick={onIncrement} className="counter__increment" >
          +
        </button>
        <button onClick={onDecrement} className="counter__decrement">
          &ndash;
        </button>
      </div>
    {/* </div> */}

    </>
  );
}
