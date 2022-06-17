import "./Styles/GenerateStyle.css";
import "./Styles/GridStyle.css"
import { useState,useEffect, useCallback, memo, forwardRef,useImperativeHandle} from "react";
import Cel from "./Cel";
import CelTex from "./CelTex";
import Operator from "./Operator";

function Generate({resultValueCountRef,setCorrectCount , setinCorrectCount ,rowNumbers,coloumNumbers,gridSize,MathOperator},ref)
{ 
  // const[Correct_,setcorrect]=useState(0); // store the current number of correct
  // const[incorrect_,setincorrect] = useState(0); // store the current number of incorrect
  const[wrong] = useState([]); // store id of the incorrect answer
  const[Correct] = useState([]); // store the correct answer  as array
  const[rowstat,setrow] = useState(''); // store the value chage row 
  const[column,setcolumn] = useState(""); //  store the value chnage column
  const[showBool,setshow] = useState(false); //  store wether submit button is click or not
  const[Color,setColor] = useState('');
 useEffect(()=>
 {
   color();
   function color()
   {
     if(MathOperator === "+")
     {
         setColor('LightBule')
     }
     else if (MathOperator==='-')
     {
       setColor('LightYellow')
     }
     else if(MathOperator==='/')
     {
       setColor('LightOrang')
     }
     else
     {
       setColor('LightRed')
     }
   }
 })
 
  
  const setShowbool  =useCallback((bool)=> // handdling the sumbit or not 
  {
    if(!(resultValueCountRef.current === undefined)){
    // console.log(resultValueCountRef);
    resultValueCountRef.current.setResultValueCount(Correct.length,wrong.length);
    }
    setshow(bool);
     
  },[Correct.length,resultValueCountRef, wrong.length]);
  

  // useImperativeHandle(ref, () => ({}), [showBool]);
  useImperativeHandle(ref, () => ({setShow: (bool) => {return setShowbool(bool)},showVal: () => {return showBool}}), [setShowbool, showBool]);
 


    const RowColChnage =useCallback((ID)=>  //  function for exacting column, row from ID
    {
      setrow('row-'+ID[0]);
      setcolumn('col-'+ID[1]);  
    },[setrow,setcolumn]);

    const Update = useCallback (() => //  updating current correct and wrong answers
    {
      // console.log(Correct.length ,wrong.length );
      setCorrectCount(Correct.length);
      setinCorrectCount(wrong.length);
    },[setCorrectCount,setinCorrectCount,Correct.length,wrong.length]);
    

    const answercheck=useCallback ((id,correct,aswer)=> //  function for checking answers
    {
       
        if(aswer!==''&&aswer!==" "&&!showBool)
        {
           if(correct=== aswer)
           {
              if(!Correct.includes(id))
               {
                   
                   if(wrong.includes(id))
                   {
                     wrong.pop(id); 
                     Correct.push(id); 
                     Update();
                    
                   }
                   else
                   {
                    Correct.push(id);
                    Update();
                  
                   }
               }
             
            }
            
        
         else
         {
           if(!wrong.includes(id))
           {
             
             if(Correct.includes(id))
             {
               Correct.pop(id);  
               wrong.push(id);
               Update();
             }
             else
             {
               wrong.push(id);
               Update();
             }
          }
        }
      }
        else
        {
          
          if(Correct.includes(id)&&!showBool)
          {
            //console.log("yes enters");
            Correct.pop(id);
            Update();
          }
          else if(wrong.includes(id)&&!showBool)
          {
            wrong.pop(id);
            Update();
          }
            
        }
    },[Correct, Update, showBool, wrong]);

    
     
     
     let operator =  <Operator key="Operator" gridSize={gridSize} Operator={MathOperator} color={Color} />    //<Cel key="Operator" id="Operator" No="+" />
    const row1 = rowNumbers.map((item,index)=>
      { 
       return <Cel  gridSize={gridSize} key={"col-"+index} id={"col-"+index} No={item} iden={column} color={Color} />
       } );
         const rows = coloumNumbers.map((item,index)=>
         {
             let row =[];
             let cell = <Cel gridSize={gridSize} key={"row-"+index} id={"row-"+index} No={item} iden={rowstat} color={Color} />;
             
            row.push(cell);
            
             for(let i=0;i<gridSize;i++)
             {
                row.push(
                 <CelTex gridSize={gridSize} MathOperator={MathOperator} key={index.toString()+i.toString()} item1={item} item2={rowNumbers[i]} id={index.toString()+i.toString()} RowColChnage={RowColChnage} answer={answercheck} show={showBool}  />
                )
             }
             return(
             
              <div key={index} className="flex-box">
                {row}
              </div>
             );
         });
           
          // const button = (
          //     <div className="bottom">
          //     <Button onshow={onshow}/>
          //     <Text text="Correct" value={(show)?Correct_:0}/>
          //     <Text text = "Wrong" value={(show)?incorrect_:0} />
          //    </div>
          // )
    return( 
      <>
       <div className="grid-Container ">
      <div className="Grid1">
        <div className="flex-box">
          <div className="flex-box">{operator}{row1}</div> 
           {rows}
        </div>
      </div>
      </div>
    </>
    )
}

export default memo(forwardRef(Generate));
