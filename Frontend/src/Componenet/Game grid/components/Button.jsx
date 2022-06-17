
import "./btnStyle.css"
import react from "react"

function Button({onshow,onClicked})
{
    function chnage(e){  // call parent onshow method for updating button click flag as TRUE
        
        onshow(true)
        if(onClicked !== undefined)
        {
          onClicked()
        }
    }

    // className="button"
  return  <button className="Grid-submit-button btn-submit" type="submit" onClick={chnage}>Submit Answers</button>
}

export default react.memo(Button);