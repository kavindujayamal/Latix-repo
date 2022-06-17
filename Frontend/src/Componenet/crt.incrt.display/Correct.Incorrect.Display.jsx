import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import "../crt.incrt.display/Correct.incorrect.display.css";

function CorrectIncorrectDisplay(props, ref) {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setInCorrectCount] = useState(0);

  const [minitSpend, setMinitSpend] = useState("0");
  const [secondsSpend, setSecondsSpend] = useState("00");
  useImperativeHandle(
    ref,
    () => ({
      setResultValueCount: (crt, incrt) => {
        return setResultValueCount(crt, incrt);
      },
    }),
    []
  );

  const setResultValueCount = (correct, incorrect) => {
    setCorrectCount(correct);
    setInCorrectCount(incorrect);
  };

  useEffect(() => {
    let times = props.timeSpentRef.split(".");
    setMinitSpend(times[0]);
    setSecondsSpend(times[1]);
  }, [props.timeSpentRef]);

  return (
    <>
      <div className="crt-incrt-wrap">
        {props.showResult ? (
          <>
            <div className="row CorrectIncorrect-row">
              <div className="col-md-5 d-flex justify-content-end">
                <label className="CorrectIncorrect-lable"> Correct: </label>
              </div>
              <div className="col-md-7">
                <label className="CorrectIncorrect-value">
                  {" "}
                  {correctCount}{" "}
                </label>
              </div>
            </div>

            <div className="row CorrectIncorrect-row">
              <div className="col-md-5 d-flex justify-content-end">
                <label className="CorrectIncorrect-lable"> Incorrect: </label>
              </div>
              <div className="col-md-7">
                <label className="CorrectIncorrect-value">
                  {" "}
                  {incorrectCount}{" "}
                </label>
              </div>
            </div>

            {minitSpend === "0" ? (
              <div className="row CorrectIncorrect-row">
                <div className="col-md-5 d-flex justify-content-end">
                  <label className="CorrectIncorrect-lable">
                    {" "}
                    Time Spend:{" "}
                  </label>
                </div>
                <div className="col-md-7">
                  <label className="CorrectIncorrect-value">
                    {" "}
                    00m : {secondsSpend}s
                  </label>
                </div>
              </div>
            ) : (
              <div className="row CorrectIncorrect-row">
                <div className="col-md-5 d-flex justify-content-end">
                  <label className="CorrectIncorrect-lable">
                    {" "}
                    Time Spend:{" "}
                  </label>
                </div>
                <div className="col-md-7">
                  <label className="CorrectIncorrect-lable CorrectIncorrect-value">
                    {" "}
                    {minitSpend}m :{secondsSpend}s{" "}
                  </label>
                </div>
              </div>
            )}
          </>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
}

export default forwardRef(CorrectIncorrectDisplay);
