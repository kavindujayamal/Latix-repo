import { useState,useEffect } from "react";
import SelectionButton from "../../Componenet/select button/SelectionButton";
import ValueButton from "../../Componenet/value button/ValueButton";
import useSlider from "../../Componenet/range slider/RangeSlide";
import { randomUnique } from "../../Componenet/Game grid/components/getrandom";
import { useHistory } from "react-router-dom";
import { IconButton } from "../../Componenet/Button/ButtonIcon/Button";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Multiplayer.create.css";

export default function MultiPlayerCreate({
  CreateGame,
  setRowNumbers,
  setColoumNumbers,
  HandleSetSize,
  HandleSetTime,
  HandleSelectedOperator,
  HandleShowCheckBox,
  name
}) {
  const history = useHistory();

  const [operators] = useState(["+", "-", "/", "*"]);

  const [operator, setOperator] = useState("+");
  const [time, setTime] = useState(5);
  const [size, setSize] = useState(5);
  const [rangeStarts, rangeStartComponent] = useSlider(1, 0, 30 - size);
  const [rangeEnd, rangeEndComponent] = useSlider(
    parseInt(rangeStarts) + size,
    parseInt(rangeStarts) + size,
    30
  );


  const onGoBackHome = () => {
    history.push("/");
    history.go(0);
  };

  const onGoBack = () => {
    HandleShowCheckBox(true);
    history.push("/Multiplay/Login");
  };

  useEffect(() => {
    if(name === undefined )
    {
      onGoBackHome();
   }
  },);
  

  try {
    const HandleCreateGame = () => {
      setRowNumbers(
        randomUnique(parseInt(rangeStarts), parseInt(rangeEnd), parseInt(size))
      );
      setColoumNumbers(
        randomUnique(parseInt(rangeStarts), parseInt(rangeEnd), parseInt(size))
      );
      CreateGame(history);
    };

    const HandlesetTime = (val) => {
      setTime(val);
      HandleSetTime(val);
    };
    const HandlesetSize = (val) => {
      setSize(val);
      HandleSetSize(val);
    };

    const HandleSetOperator = (val) => {
      if (val === "x") {
        HandleSelectedOperator("*");
        setOperator("*");
      } else {
        HandleSelectedOperator(val);
        setOperator(val);
      }
    };

    return (
      <>
        <div className="container-fluid vh-100">
          <div className="row align-items-center text-center   h-10">
            <div className="col-md-4 "></div>
            <div className="col-md-4">
              <img
                className="logo-style position-front"
                src={`/Assets/logo.svg`}
                alt="Latix"
              />
            </div>
            <div className="col-md-4 "></div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center ">
              <IconButton
                icon={faArrowLeft}
                height={"80px"}
                width={"100px"}
                fontSize={"40px"}
                onClick={onGoBack}
              />
            </div>
            <div className="col-md-8 "></div>
            <div className="col-md-2 "></div>
          </div>
          <div className="row h-10">
            <div className="col-md-12">
              <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                  <label className="multi-create-title pt-2 position-front">
                    Select your game Settings
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row h-50">
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <div className="row align-items-center ">
                    <div className="col-md-2 text-center"> </div>
                    <div className="col-md-10 text-center">
                      <h2 className="multi-create-option-title position-front">
                        Select operator
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="row align-items-center ">
                    <div className="col-md-10 text-center">
                      <h2 className="multi-create-option-title text-center position-front">
                        Set time : minutes
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center ">
                <div className="col-md-6 text-center">
                  {/* <h2 style={{ color: "white" }}>Select operator</h2> */}
                  <div className="row align-items-center ">
                    <div className="col-md-2 text-center"> </div>
                    <div className="col-md-10 text-center">
                      <SelectionButton
                        valueList={operators}
                        pickedValue={operator}
                        setPickvalue={HandleSetOperator}
                        radioPadStyle="multi-create-radioPad"
                        radioStyle="multi-create-radioPad__radio"
                        radioWrapper="multi-create-radioPad__wrapper"
                        radioSelected="multi-create-radioPad__wrapper multi-create-radioPad__wrapper--selected"
                        labelText="operator-text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  {/* <h2 style={{ color: "white" }}>Set time : minutes</h2> */}
                  <div className="row align-items-center ">
                    <div className="col-md-10 text-center">
                      <ValueButton
                        rangeEnd={10}
                        rangeStart={1}
                        value={time}
                        HandleValue={HandlesetTime}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row align-items-center mt-4">
            <div className="col-md-6 text-center"> */}
              {/* <div className="row align-items-center">
                <div className="col-md-4 text-center "> </div>
                <div className="col-md-8 text-center">
                  <h2 className="multi-create-option-title position-front">
                    Set Grid size
                  </h2>
                </div>
              </div> */}
              {/* </div>
            <div className="col-md-6 text-center">
              <h2 className="text-center multi-create-option-title position-front">
                Set Number range
              </h2>
            </div>
          </div> */}
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  {/* <h2 style={{color:'white'}} >Set Grid size</h2> */}
                  {/* edit and add home button */}
                  <div className="row align-items-center">
                    <div className="col-md-2 text-center"></div>
                    <div className="col-md-10 text-center">
                      <h2 className="multi-create-option-title position-front">
                        Set Grid size
                      </h2>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                      {/* <IconButton
                    icon={faHome}
                    height={"80px"}
                    width={"100px"}
                    fontSize={"40px"}
                    onClick={onGoBackHome}
                  /> */}
                    </div>
                    <div className="col-md-10 text-center">
                      <ValueButton
                        rangeEnd={10}
                        rangeStart={5}
                        value={size}
                        HandleValue={HandlesetSize}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  {/* <h2 style={{color:'white'}} className="text-center">Set Number range</h2> */}
                  <div className="row align-items-center">
                    <div className="col-md-10 text-center">
                      <h2 className="text-center multi-create-option-title position-front">
                        Set Number range
                      </h2>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-10 text-center">
                      <label className="multi-range-text">Start</label>
                      {rangeStartComponent}
                      <label className="multi-range-text">End</label>
                      {rangeEndComponent}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center alingment-content ">
                <div className="col-md-2 text-center">
                  <IconButton
                    icon={faHome}
                    height={"80px"}
                    width={"100px"}
                    fontSize={"40px"}
                    onClick={onGoBackHome}
                  />
                </div>
                <div className="col-md-8 text-center">
                  {/* <button
                className="multi-create-button"
                onClick={HandleCreateGame}
              >
                Create game
              </button> */}
                  {/* <TextButton content={"Create Game"} height={"60px"} width={"200px"} fontSize={"35px"} onClick ={{HandleCreateGame}} /> */}
                  <button
                    type="submit"
                    className="custom-btn btn-2 "
                    style={{ width: "200px", height: "60px", fontSize: "35px" }}
                    onClick={HandleCreateGame}
                  >
                    <div className="btn-con">Create game</div>
                  </button>
                </div>
                <div className="col-md-2  text-center"> </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </>
    );
  } catch (e) 
  {
    // console.log(e);
    onGoBackHome();
  }
}
