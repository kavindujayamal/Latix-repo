import {useCallback, useRef, useEffect} from "react";
import {Switch, Route,Redirect} from 'react-router-dom';
import SinglePlayerLogin from './SinglePlayer.Login';
import SinglePlayerCreate from './SinglePlayer.Create';
import SinglePlayerPlay from "./SinglePlayer.Play";
import { randomUnique } from "../Componenet/Game grid/components/getrandom";

export default function SinglePlayer()  {


  useEffect(() => {
    window.dispatchEvent(new CustomEvent("navigationhandler"));
    
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  },);
  


const name = useRef();
const avatar = useRef(1);

const Correct = useRef(0);
const incorrect = useRef(0);
const timeSpent = useRef("00:00");


const gridSize = useRef(4);
const operator = useRef('+');
// const time = useRef(1);
const time = useRef(5);   //chnage again
const numberRangeStart = useRef(1);
const numberRangeEnd = useRef(10);

const rowNumbers = useRef([]);
const columnNumbers = useRef([]);

const HandleNumberGenarate = async () =>
{
  if(operator.current==="/")
  {
    rowNumbers.current = randomUnique(parseInt(numberRangeStart.current),parseInt((numberRangeEnd.current)-5),parseInt(gridSize.current))
    columnNumbers.current = randomUnique(parseInt((numberRangeStart.current)+4),parseInt(numberRangeEnd.current),parseInt(gridSize.current))
  }
  else
  {
    rowNumbers.current =  randomUnique(parseInt(numberRangeStart.current),parseInt(numberRangeEnd.current),parseInt(gridSize.current))
    columnNumbers.current =  randomUnique(parseInt(numberRangeStart.current),parseInt(numberRangeEnd.current),parseInt(gridSize.current))
  }
  
}


const setCorrectCount =useCallback((value) =>
{
  Correct.current = value;
},[]);

const setinCorrectCount =useCallback((value) =>
{
  incorrect.current = value;
},[]);

const setTimeSpent = (val)=>
{
   timeSpent.current = val;
}


const changeName =(value) =>
{
  name.current = value;
};

const SetGridSize = (value) =>
{
  
  gridSize.current = value;
}


const SetOperator =  (value) =>
{
  operator.current =value;
}


const SetTime = (value) =>
{
  time.current = value;
}

const SetnumberRangeStart = (value) =>
{
  numberRangeStart.current = value;
}

const SetnumberRangeEnd = (value) =>
{
  numberRangeEnd.current =value;
}

const Setavatar = (value) => 
{
  avatar.current = value;
}


        return (
            <div>
            <Switch>
            <Route  path="/SinglePlayer/Login" component={()=> <SinglePlayerLogin name={name.current} OnChangeName={changeName} OnChangeAvatar = {Setavatar} />}/>
            <Route  path="/SinglePlayer/Create" component={()=> <SinglePlayerCreate name={name.current} avatar={avatar.current} HandleNumberGenarate={HandleNumberGenarate} name={name.current} SetGridSize={SetGridSize} SetOperator={SetOperator} SetTime={SetTime} SetnumberRangeStart={SetnumberRangeStart} SetnumberRangeEnd={SetnumberRangeEnd} />} />
            <Route  path="/SinglePlayer/play" component={()=> < SinglePlayerPlay name={name.current}avatar={avatar.current} columnNumbers={columnNumbers.current} rowNumbers={rowNumbers.current} setTimeSpent={setTimeSpent} Correct={Correct.current} incorrect={incorrect.current}  setinCorrectCount={setinCorrectCount} setCorrectCount={setCorrectCount} time={time.current}  gridSize ={gridSize.current} operator = {operator.current} />} />
            <Redirect to="/SinglePlayer/Login" />  
          </Switch>
            </div>
        );
}
