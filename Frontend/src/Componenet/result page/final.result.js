import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./final.result.css";
import { Top } from "./component/top/top";
import { List } from "./component/list/list";
import { IconButton } from "../Button/ButtonIcon/Button";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function FinalResult({
  resultList,
  tempCreator,
  handelPlayAgain,
  // handelPlayAgainPlayer,
  playAgainInvite,
  creatorName,
}) {
  const [anime, setanime] = useState("");
  const history = useHistory();

  useEffect(() => {
    setanime("anime");
  }, [anime]);

  const onGoBackHome = () => {
    history.push("/");
    history.go(0);
  };

  try {
    const TopResult = resultList.map((data, index) => {
      return index === 0 ? (
        <Top
          key={index}
          place="one"
          No={1}
          Image={`/Assets/Avatar list/${data.Avatar}.svg`}
          Name={data.ClientName}
          time={data.Result.Time}
          correct={data.Result.Correct}
          incorrect={data.Result.InCorrect}
        />
      ) : index === 1 ? (
        <Top
          key={index}
          place="two"
          No={2}
          Image={`/Assets/Avatar list/${data.Avatar}.svg`}
          Name={data.ClientName}
          time={data.Result.Time}
          correct={data.Result.Correct}
          incorrect={data.Result.InCorrect}
        />
      ) : index === 2 ? (
        <Top
          place="three"
          key={index}
          No={3}
          Image={`/Assets/Avatar list/${data.Avatar}.svg`}
          Name={data.ClientName}
          time={data.Result.Time}
          correct={data.Result.Correct}
          incorrect={data.Result.InCorrect}
        />
      ) : (
        <span key={index}></span>
      );
    });
  

  const SecondaryResult = resultList.map((data, index) => {
    return (
      <List
        No={index + 1}
        name={data.ClientName}
        time={data.Result.Time}
        correct={data.Result.Correct}
        incorrect={data.Result.InCorrect}
        Image={`/Assets/Avatar list/${data.Avatar}.svg`}
      />
    );
  });

  return (
    <>
      <div className="center">
        <div className="top3">{TopResult}</div>
        {resultList.length > 3 ? (
          <div className="list scroll">{SecondaryResult}</div>
        ) : (
          <span></span>
        )}

        <div className="list ">
          {tempCreator ? (
            <>
              <div className="d-flex justify-content-center mt-3">
                <IconButton
                  icon={faHome}
                  height={"55px"}
                  width={"80px"}
                  fontSize={"20px"}
                  onClick={onGoBackHome}
                />
                <button
                  onClick={handelPlayAgain}
                  className="custom-btn btn-2 "
                  style={{
                    width: "150px",
                    height: "55px",
                    fontSize: "20px",
                    marginLeft: "20px",
                  }}
                >
                  Play Again
                </button>
              </div>
            </>
          ) : playAgainInvite ? (
            <>
              <label className="lobby-label position-front">
                {creatorName} invite you to play again
              </label>
              {/* <button onClick={handelPlayAgainPlayer}>Play </button> */}
            </>
          ) : (
            <div className="d-flex justify-content-center mt-3">
              <IconButton
                icon={faHome}
                height={"55px"}
                width={"80px"}
                fontSize={"20px"}
                onClick={onGoBackHome}
              />
              <label className="lobby-label position-front ms-5">
                Waiting for {creatorName} response
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );

} catch (e) {
  // console.log("error:", e);
  onGoBackHome();
}
}
