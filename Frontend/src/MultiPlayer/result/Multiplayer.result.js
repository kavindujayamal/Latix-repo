import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSocket } from "../../Services/SocketProvider";
import FinalResult from "../../Componenet/result page/final.result";
import "./celebration.style.css";

export default function MultiplayerResult({
  isCreator,
  setisCreator,
  userResult,
  name,
}) {
  const [result] = useState(userResult);
  const history = useHistory();
  const socket = useSocket();
  // eslint-disable-next-line
  const [tempCreator, setTempCreator] = useState(isCreator);
  const [playAgainInvite, setPlayAgainInvite] = useState(false);
  const [creatorName, setCreatorName] = useState("Creator");

  useEffect(() => {
    if (name === undefined || userResult === undefined ) {
      onGoBackHome();
    }

    socket.on("GetUser", (res) => {
      res.filter((user) => {
        if (user.UserId === socket.id) {
          if (user.Owner) {
            setisCreator(true);
            setTempCreator(user.Owner);
          }
        }
        return user;
      });

      // console.log(res);
      res.filter((user) => {
        if (user.Owner) {
          setCreatorName(user.User);
        }
        return user;
      });
    });

    if (!isCreator) {
      socket.on("UpdateGame", (res) => {
        // console.log("result", res);
        if (res.IsUpdate) {
          setPlayAgainInvite(true);
          history.push("/Multiplay/lobby");
        }
      });
    }

    return () => {
      socket.off("UpdateGame");
      socket.off("GetUser");
    };
  });

  const onGoBackHome = () => {
    history.push("/");
    history.go(0);
  };

  // eslint-disable-next-line
  const handelPlayAgain = () => {
    history.push("/Multiplay/create");
  };

  // const handelPlayAgainPlayer = () => {
  //   history.push("/Multiplay/lobby");
  // };

  return (
    <div className="scroll-hide">
      <div className="pyro position-front">
        <div className="before position-front"></div>
        <div className="after position-front"></div>
      </div>
      <FinalResult
        resultList={result}
        tempCreator={tempCreator}
        handelPlayAgain={handelPlayAgain}
        // handelPlayAgainPlayer={handelPlayAgainPlayer}
        playAgainInvite={playAgainInvite}
        creatorName={creatorName}
      />
      {/* <div>
        {tempCreator ? 
          <button  onClick={handelPlayAgain}>Play Again</button>
         :
          <span></span>
        }
      </div>  */}
    </div>
  );
}
