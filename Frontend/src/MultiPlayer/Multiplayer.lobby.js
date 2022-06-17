import { useEffect, useState} from "react";
import { useSocket } from "../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import "./lobby/Multiplayer.Lobby.css";
import Leaderboard from "../Componenet/leaderboard/leaderboard";
import CopyButton from "../Componenet/copy button/copy.button";
import { ReactComponent as Countdown } from "./lobby/countdown/countdown.svg";
import { IconButton } from "../Componenet/Button/ButtonIcon/Button";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function MultiplayerLobby({
  setColoumNumbers,
  setRowNumbers,
  HandleSelectedOperator,
  HandleSetSize,
  HandleSetTime,
  name,
  Gameid,
  setisCreator,
}) {
  const [userList, setUserList] = useState([]);
  const [tempCreator, setTempCreator] = useState(false);
  const [showCountdown, setshowCountdown] = useState("lobby-countdown");
  const socket = useSocket();
  const history = useHistory();
  const [url, setURL] = useState("Empty");

  const onGoBackHome = () => 
  {
    history.push("/");
    history.go(0);
  }
  

  useEffect(() => {

    // if(socket === undefined || name === undefined)
    // {
    //   onGoBackHome();
    // }
   
  try {


    socket.on("GetUser", (res) => {
      setUserList(res);
      // console.log("lobby", res);
      res.filter((user) => {
        if (user.UserId === socket.id) {
          if (user.Owner) {
            setisCreator(true);
            setTempCreator(user.Owner);
          }
        }
        return user;
      });
    });

    socket.on("GetGame", (res) => {
      setColoumNumbers(res.Column);
      setRowNumbers(res.Row);
      HandleSelectedOperator(res.Operator);
      HandleSetSize(parseInt(res.Size));
      HandleSetTime(parseInt(res.Time));

      setshowCountdown("lobby-countdown show-countdown");

      setTimeout(function () {
        setshowCountdown("lobby-countdown");
        history.push("/Multiplay/play");
      }, 4400);
    });

    setURL(window.location.origin.concat("/Multiplay/join/" + Gameid));

  }
  catch(e)
  {
    // console.log(e);
    onGoBackHome();
  }

    return () => {
      socket.off("GetUser");
      socket.off("GetGame");
      setshowCountdown("lobby-countdown");
    };
  }, [name, socket, Gameid, setisCreator, setColoumNumbers, setRowNumbers, HandleSelectedOperator, HandleSetSize, HandleSetTime, history]);

  const handleStart = () => {
    socket.emit(
      "GetGame",
      {
        GameId: Gameid,
      },
      (res) => {
        // console.log(res);
      }
    );
  };

  const randomKey = () => {
    return Math.floor(Math.random() * 10000) + 10000;
  };

  

  const onGoBack = () => 
  {
    socket.disconnect();
    socket.connect();
    history.push("/Multiplay/create");
  }

 

  return (
    <>
      <div key={randomKey()} className={showCountdown}>
        <Countdown className="lobby-countdown-img" />
      </div>
      <div className="container-fluid vh-100 ">
      <div className="row align-items-center text-center   h-10">
          <div
            className="col-md-4 "
          >
          </div>
          <div
            className="col-md-4"
          >
             <img
                className="logo-style position-front"
                src={`/Assets/logo.svg`}
                alt="Latix"
              />
          </div>
          <div
            className="col-md-4 "
          >
          </div>
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
        <div className="row vh-60 align-items-center">
          <div className="col-md-7 text-center">
            <div className="row">
              <div className="col-md-12 text-center ">
                <label className="lobby-title position-front">Share with friends</label>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <label className="lobby-label position-front">Game Link:</label>
                <CopyButton value={url} />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <label className="lobby-label position-front">Game Code:</label>
                <CopyButton value={Gameid} />
              </div>
            </div>
          </div>
          <div className="col-md-5 ">
            <Leaderboard userList={userList} />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-2  text-center">
          <IconButton
            icon={faHome}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoBackHome}
          />
          </div>
          <div className="col-md-8 text-center position-front">
            {tempCreator ? (
                  userList.length < 3 ? <label className="lobby-label position-front">At least 3 players Need to Start Game</label> :
                  //  <button className="lobby-start-game " onClick={handleStart}>
                  //   Start Game
                  // </button>
                  <button
                    type="submit"
                    className="custom-btn btn-2 "
                    style={{ width: "200px", height: "60px", fontSize: "38px" }}
                    onClick={handleStart}
                  >
                    <div className="btn-con">Start Game</div>
                  </button>
                  
            ) : (
             <label className="lobby-label position-front">Waiting for Start</label>
           )} 
          </div>
          <div className="col-md-2  text-center"> </div>
        </div>
      </div>
    </>
  );
}
