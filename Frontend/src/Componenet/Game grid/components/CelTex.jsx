import "./Styles/CeltexStyle.css"
import react,{useState,useRef,useEffect, useCallback } from "react";

function CelTex(parms)
{ 
    const[Value,setvalue] =useState('');
    const[corlor,setcorlor] = useState('correct');
    const[correct,setcorrect] = useState(true);
    const[previous,setprivious] = useState(0);
    const[gridsizeClass,setGridsizeClass] = useState("celtex celtex-size-default")

    const sum = useRef('0');

   useEffect(() => {

    if(parms.gridSize < 6)
    {
        setGridsizeClass("celtex celtex-size-5");
    }
    else if(parms.gridSize === 6)
    {
        setGridsizeClass("celtex celtex-size-6");
    }
    else if(parms.gridSize === 7)
    {
        setGridsizeClass("celtex celtex-size-7");
    }
    else if(parms.gridSize === 8)
    {
        setGridsizeClass("celtex celtex-size-8");
    }
    else if(parms.gridSize > 8 && parms.gridSize < 11)
    {
        setGridsizeClass("celtex celtex-size-10");
    }
    else
    {
        setGridsizeClass("celtex celtex-size-default");
    }

    if(parms.MathOperator==='X')
    {
        // eslint-disable-next-line
        let result = eval(parms.item1.toString().concat('*',parms.item2.toString())).toString();
        sum.current = parseInt(result).toString();
    }else
    {
        // eslint-disable-next-line
        let result = eval(parms.item1.toString().concat(parms.MathOperator,parms.item2.toString())).toString();
        sum.current = parseInt(result).toString();
    }
   }, [parms.item1, parms.item2, parms.MathOperator, parms.gridSize]);
   
  
  
    function valuechnage(e)
    {
    if(e.target.value.match("^-?[0-9]{0,3}d*(.d+)?$"))
     {
      setvalue(e.target.value); 
      if(e.target.value === sum.current ||e.target.value==="" ) //  change the color accoring to the correct or wrong
      {
            setcorrect(true);
            setcorlor('correct'); // back text color
      }
      else
      {
          setcorrect(false);
         setcorlor('wrong'); //class for red  text color
      }
    }
    }

  const answerValidate = useCallback ((e) => // call parent function for checking correct answer or wrong answer
    {
        parms.answer(parms.id,sum.current,Value);
        if(correct===false && parms.show)
        {
            
            setcorlor("wrong");
            setvalue(previous);
            
        }

    },[parms, Value, correct, previous]);

  const loseFocus = useCallback((e) =>
    {
        // parms.RowColChnage(parms.id);
        if(correct===false && parms.show)
        {
            setprivious(Value);
            setcorlor("Display");
            setvalue(sum.current)
        }
        
    },[Value, correct, parms.show])

   return(
       <div className={gridsizeClass}>
           <input autoComplete="off" type="text" key={parms.id}  className={(parms.show)?corlor:'correct'} id={parms.id} value={Value} pattern="^-?[0-9]\d*(\.\d+)?$" maxLength="3" onChange={valuechnage} onMouseEnter={loseFocus } onFocus={()=>parms.RowColChnage(parms.id)}  onMouseLeave={answerValidate } readOnly={(parms.show)?true:false}/>
       </div>
   );
}


export default react.memo(CelTex);