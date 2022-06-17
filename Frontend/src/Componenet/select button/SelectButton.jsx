import { useState} from "react";
import "./SelectButton.css"

export default function SelectOperator({ contentsArr, btnStyle, btnSelectedStyle,onValueChange}) {
     
    const[ event,setEvent] = useState();
    const[ defaultbtn,setdefaultbtn] = useState(`${btnSelectedStyle} `);

    const btnClick = (val) =>
    {
        
        if(event != null)
        {
            event.target.className = `${btnStyle} `
        }
        else
        {
            setdefaultbtn(`${btnStyle} `);
        }
        setEvent(val);
        val.target.className =`${btnSelectedStyle} `;
        onValueChange(val.target.id);
    }



    const buttonList = contentsArr.map((op,index) =>{
        return <button  key ={index} id ={index}  className={index ===0 ? defaultbtn : btnStyle} onClick = { (e) =>{btnClick(e)}} type="button" > {op} </button>
    })



    return (
        <div className="button-list">
         { buttonList }
        </div>
    )
}




