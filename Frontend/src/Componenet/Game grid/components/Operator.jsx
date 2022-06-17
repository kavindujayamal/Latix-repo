
import "./Styles/OperatorStyle.css"
import {useState,useEffect} from "react";


function Operator(parms)
{
    const[gridsizeClass,setGridsizeClass] = useState("operator operator-size-default");

    useEffect(() => {
    
        if(parms.gridSize < 6)
    {
        setGridsizeClass("operator operator-size-5");
    }
    else if(parms.gridSize === 6)
    {
        setGridsizeClass("operator operator-size-6");
    }
    else if(parms.gridSize === 7)
    {
        setGridsizeClass("operator operator-size-7");
    }
    else if(parms.gridSize === 8)
    {
        setGridsizeClass("operator operator-size-8");
    }
    else if(parms.gridSize > 8 && parms.gridSize < 11)
    {
        setGridsizeClass("operator operator-size-10");
    }
    else
    {
        setGridsizeClass("operator operator-size-default");
    }
    
    }, [parms.gridSize]);
    return (
    <div className={gridsizeClass}>
           <input type="text"  className={parms.color} value={parms.Operator==="*" ? "X":parms.Operator==="/" ? "÷":parms.Operator }  readOnly={true} />
       </div>
    )
}

export default Operator;