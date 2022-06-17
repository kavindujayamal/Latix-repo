import { useRef,useState } from "react";
import './copy.button.css';
import { FaClone } from 'react-icons/fa'

export default function CopyButton({value}) {

   const inputRef = useRef(null);  
   const [activeClass, setactiveClass] = useState("copy-text")

  const handleClick = () => 
  {
    setactiveClass("copy-text active")
    inputRef.current.select();
    setTimeout(function() {
        setactiveClass("copy-text")
    }, 1500)
    navigator.clipboard.writeText(value);
  }

  return (
      <div className={activeClass}>
        <input type="text" readOnly ref={inputRef} className="text copy-button-text" value={value}/>
        <button onClick={handleClick}>
          <i> <FaClone /></i>
        </button>
      </div>
  );
}
