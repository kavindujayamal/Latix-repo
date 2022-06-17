//  import "./style.css"
import "./Styles/CelStyle.css";
import react,{useState,useEffect} from "react";

function Cel(parms)
{
    const[gridsizeClass,setGridsizeClass] = useState("CelDiv CelDiv-size-default");

    useEffect(() => {
       
        if(parms.gridSize < 6)
    {
        setGridsizeClass("CelDiv CelDiv-size-5");
    }
    else if(parms.gridSize === 6)
    {
        setGridsizeClass("CelDiv CelDiv-size-6");
    }
    else if(parms.gridSize === 7)
    {
        setGridsizeClass("CelDiv CelDiv-size-7");
    }
    else if(parms.gridSize === 8)
    {
        setGridsizeClass("CelDiv CelDiv-size-8");
    }
    else if(parms.gridSize > 8 && parms.gridSize < 11)
    {
        setGridsizeClass("CelDiv CelDiv-size-10");
    }
    else
    {
        setGridsizeClass("CelDiv CelDiv-size-default");
    }





    
    }, [parms.gridSize]);
    

     let color = 'norml' // hold the color

    function chnagecolor() // chnage color while rendering where column ID or row ID is match
    {
        if(parms.id === parms.iden)
        {
           // color='enter';
           color = parms.color;
        }
    }

    return(
        <div className={gridsizeClass}>
            {chnagecolor() }
           <input type="text" key={parms.id} className={color} id={parms.id} value={parms.No} pattern="\d*$" maxLength="3" readOnly={true} />
       </div>
    );
}

export default react.memo(Cel);