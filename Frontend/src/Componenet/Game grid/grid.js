import {useEffect, memo, useRef, forwardRef,useImperativeHandle } from 'react';
import Generate from './components/Generate';
// import { randomUnique } from "./components/getrandom";
import { useHistory } from 'react-router';



function Grid({columnNumbers,rowNumbers, resultValueCountRef,setCorrectCount ,setinCorrectCount,MathOperator,gridSize},ref) {

    
    const history = useHistory();
    const setShowref = useRef();

    useImperativeHandle(ref, () => ({setShow: (bool) => {return setShowref.current.setShow(bool) },showVals: () => {return setShowref.current.showVal() }}), []);


    useEffect(() => {
        
        window.dispatchEvent(new CustomEvent("navigationhandler"));


        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
          };
        
          window.addEventListener("beforeunload", unloadCallback);
          return () => window.removeEventListener("beforeunload", unloadCallback);




    }, [history,MathOperator, gridSize])

   

    return (
            < Generate ref={setShowref}  resultValueCountRef={ resultValueCountRef} setCorrectCount={setCorrectCount} setinCorrectCount={setinCorrectCount} MathOperator={MathOperator} gridSize ={gridSize} rowNumbers={rowNumbers} coloumNumbers={columnNumbers}/>
    )
}


export default memo(forwardRef(Grid));
