import { useRef, useEffect,useState } from "react";
import Timer from "../../Componenet/Timer/Timer";
import Grid from "../../Componenet/Game grid/grid";
import Submitbutton from "../../Componenet/Game grid/components/Button";
import CorrectIncorrectDisplay from "../../Componenet/crt.incrt.display/Correct.Incorrect.Display";
import FinishList from "./Finish List/FinishList";
import { useSocket } from "../../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import CreatorControls from "./CreatorControls";
import './Multiplayer.play.css';
import { IconButton } from "../../Componenet/Button/ButtonIcon/Button";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function MultiplayerPlay({
  SubmitAnswers,
  isJoinAsPlayer,
  isCreator,
  setisCreator,
  name,
  Gameid,
  setTimeSpent,
  Correct,
  incorrect,
  setinCorrectCount,
  setCorrectCount,
  time,
  gridSize,
  operator,
  columnNumbers,
  rowNumbers,
  setUserResult,
  avatar
}) {
  const setShowRef = useRef();
  const resultValueCountRef = useRef();
  // const timeSpentRef = useRef("0.0");
  const [timeSpentRef, settimeSpentRef] = useState("0.0");
  const showResult = useRef(false);
  const socket = useSocket();
  const history = useHistory();

  const [timeSubmit, settimeSubmit] = useState(false);

  const isSubmitClick = useRef(false);

  const setshowResult = (val) =>
  {
    showResult.current = val;
  }

  const setisSubmitClick = (val) => 
  {
    isSubmitClick.current = val;
  }

  useEffect(() => {
     
    if(name === undefined)
    {
      onGoBackHome();
    }

    if (isCreator && !isJoinAsPlayer) {
      setShowRef.current.setShow(true);
    }

    socket.on("GetResult", (res) => {

      if (setShowRef.current !== null) {
        setShowRef.current.setShow(true);
      }

      setUserResult(res);

      history.push("/Multiplay/result");
    });
  });


  const onGoBackHome = () => 
  {
    history.push("/");
    history.go(0);
  }

  const handleTimeSpent = (val) => 
  {
    settimeSpentRef(val);
    setTimeSpent(val);
  }

  const clickBtn = () =>
  {
    setshowResult(true);
    setisSubmitClick(true);
  }

  const ans = () => 
  {
    clickBtn();
    settimeSubmit(true);
    SubmitAnswers();
  }

  return (
   
    <div className="container-fluid vh-100">
     <div className="row align-items-center text-center   vh-10">
          <div
            className="col-md-2 "
          >
            <IconButton
            icon={faHome}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoBackHome}
          />
          </div>
          <div
            className="col-md-8"
          >
             <img
                className="multi-logo-style position-front"
                src={`/Assets/logo.svg`}
                alt="Latix"
              />
          </div>
          <div
            className="col-md-2 d-flex text-center justify-content-center profile"
          >
            {/* <img
                className="single-play-avatar  position-front"
                src={`/Assets/Avatar list/${avatar}.svg`}
                alt="avatar"
              />
              <br></br>
              <label className="single-play-subtitle-1  position-front">
                {name}
              </label> */}
          </div>
        </div>
      <div className="row  align-items-center">
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-12 position-front">
            <Grid
          ref={setShowRef}
          resultValueCountRef={resultValueCountRef}
          setCorrectCount={setCorrectCount}
          setinCorrectCount={setinCorrectCount}
          gridSize={gridSize}
          columnNumbers={columnNumbers}
          rowNumbers={rowNumbers}
          MathOperator={operator}
        />
            </div>
          </div>
          
        </div>
        <div className=" pe-3 col-md-4 text-center ">
          { !isSubmitClick.current ||  !timeSubmit  ?
          <div className="row align-items-center">
            <div className="col-md-12">
            <label className="multi-play-time-label position-front">Time Remaining</label>
            <Timer
                isJoinAsPlayer={isJoinAsPlayer}
                SubmitAnswers={ans}
                setTimeSpent={handleTimeSpent}
                showValRef={isJoinAsPlayer ? setShowRef : false}
                initMinute={time}
                TimeOutBtn = {clickBtn}
              />
            </div>
          </div> : <span></span>}
          <div className="row ">
            <div className=" col-md-12 gx-0 d-flex justify-content-center position-front">
            <FinishList />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 gx-0 d-flex justify-content-center position-front">
            {(isJoinAsPlayer && isJoinAsPlayer) ? (
          <CorrectIncorrectDisplay ref={resultValueCountRef} timeSpentRef={timeSpentRef} showResult={showResult.current} /> 
        ) : (
          <span></span>
        )}
            </div>
          </div>
          {/* <div className="row multi-submit-row">
            <div className="col-md-12 ">
           
            </div>
          </div> */}
        </div>
      </div>
      <div className="row vh-5 align-items-center">
            <div  className="col-md-2 ">
            </div>
            <div className="col-md-8 text-center">
            {isJoinAsPlayer ? (
              <div>
                <div className="bottom">
                  { !isSubmitClick.current || !timeSubmit ?
                  <Submitbutton
                    onshow={() => {
                      setShowRef.current.setShow(true);
                    }}
                    onClicked={clickBtn}
                  /> :
                  <CreatorControls isCreator={isCreator} setisCreator={setisCreator} Gameid = {Gameid}/>
}
                </div>
              </div>
            ) : (
              <CreatorControls isCreator={isCreator} setisCreator={setisCreator} Gameid = {Gameid}/>
            )}
            </div>
            <div  className="col-md-2 text-center">
            </div>
          </div>
    </div>




  );
}
