import { memo, useRef, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Timer from "../Componenet/Timer/Timer";
import Grid from "../Componenet/Game grid/grid";
import Button from "../Componenet/Game grid/components/Button";
import CorrectIncorrectDisplay from "../Componenet/crt.incrt.display/Correct.Incorrect.Display";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./play/singleplayer.play.css";
import { IconButton } from "../Componenet/Button/ButtonIcon/Button";

function SinglePlayerPlay({
  name,
  avatar,
  setTimeSpent,
  Correct,
  incorrect,
  setinCorrectCount,
  setCorrectCount,
  time,
  operator,
  gridSize,
  columnNumbers,
  rowNumbers,
}) {
  const setShowRef = useRef();
  const resultValueCountRef = useRef();
  const [timeSpentRef, settimeSpentRef] = useState("0.0");
  const showResult = useRef(true);
  const history = useHistory();

  // const isSubmitClick = use(false);
  const [isSubmitClick, setisSubmitClick] = useState(false);

  useEffect(() => {
    if (name === undefined) {
      onGoHome();
    }
  });

  const onGoHome = () => {
    history.push("/");
    history.go(0);
  };

  const handleTimeSpent = (val) => {
    settimeSpentRef(val);
    setTimeSpent(val);
  };

  const setshowResult = (val) => {
    setisSubmitClick(true);
    showResult.current = val;
  };

  const handlePlayAgain = () => 
  {
    history.push("/SinglePlayer/Create");
  }


  return (
    <div className="container-fluid vh-100">
      <div className="row align-items-center text-center   h-10">
        <div className="col-md-2 mt-2">  <IconButton
            icon={faHome}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoHome}
          /></div>
        <div className="col-md-8 position-front">
          <img
            className="single-logo-style "
            src={`/Assets/logo.svg`}
            alt="Latix"
          />
        </div>
        <div className="col-md-2 d-flex text-center justify-content-center profile">
        <img
                className="single-play-avatar  position-front"
                src={`/Assets/Avatar list/${avatar}.svg`}
                alt="avatar"
              />
              <br></br>
              <label className="single-play-subtitle-1  position-front">
                {name}
              </label>
        </div>
      </div>
      <div className="row vh-80  align-items-center">
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-12 position-front mt-4">
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
          <div className="row align-items-center">
            <div className="col-md-12 d-flex justify-content-between position-front">
             
            </div>
          </div>
        </div>
        <div className=" pe-3 col-md-4 text-center vh-60 ">
          <div className="row align-items-center ">
            <div className="col-md-12">
              <label className="single-play-subtitle-2 position-front">
                Time Remaining
              </label>
              <Timer
                setTimeSpent={handleTimeSpent}
                showValRef={setShowRef}
                initMinute={time}
                TimeOutBtn = {setshowResult}
              />
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-md-12 position-front">
           <img
                className="single-play-avatar  position-front"
                src={`/Assets/Avatar list/${avatar}.svg`}
                alt="avatar"
              />
              <br></br>
              <label className="single-play-subtitle-1  position-front">
                {name}
              </label>
            </div>
          </div> */}
          <div className="row align-items-center">
            <div className="col-md-12 position-front">
            <CorrectIncorrectDisplay
                ref={resultValueCountRef}
                timeSpentRef={timeSpentRef}
                showResult={showResult.current}
              />
            </div>
          </div>
          <div className="row single-play-submit-wrapper ">
            <div className="col-md-12 ">
              <div className="bottom">
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-2 ">
        </div>
        <div className="col-md-8 text-center button-top">
          { !isSubmitClick?
        <Button
                  onshow={() => {
                    setShowRef.current.setShow(true);
                    setshowResult(true);
                  }}
                /> : 
                
                <button className="multi-play-admin-btn" onClick={handlePlayAgain}>Play Again</button>
                }
        </div>
        <div className="col-md-2 text-center"></div>
      </div>
    </div>
  );
}

export default memo(SinglePlayerPlay);
