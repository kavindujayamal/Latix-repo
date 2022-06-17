
import react from "react";
import "./TextStyle.css";


function TextBox({text,value})
{
    return(
        <div className="top">
            <label className="lable" > {text}</label>
            <input type="text" className="text" name="text" id="text" value={value} readOnly={true}/>
        </div>
    );
}

export default react.memo(TextBox);