import { useState,useEffect } from "react";
import { useSocket } from "../Services/SocketProvider";
import { useHistory } from "react-router-dom";
import "./join/Multiplayer.join.css";
import { IconButton } from "../Componenet/Button/ButtonIcon/Button";
// eslint-disable-next-line
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function MultiplayerJoin({ name, setGameId, avatar }) {
  const [gameCode, setGameCode] = useState("");
  const socket = useSocket();
  const history = useHistory();

  useEffect(() => {
    if(name === undefined)
    {
      onGoBackHome();
    }

  },);
  

  const handleGameCode = (val) => {
    setGameCode(val.target.value);
  };

  const onSubmit = () => {
    socket.emit(
      "JoinGame",
      {
        UserName: name,
        GameId: gameCode,
        Avatar: avatar,
      },
      (res) => {
        if (res.Status === 0) {
          alert(`${res.Message}`);
        } else if (res.Status === 1) {
          setGameId(gameCode);
          // console.log(res);
          history.push("/Multiplay/lobby");
        }
      }
    );
  };

  const onGoBackHome = () => {
    history.push("/");
  };

  const onGoBack = () => 
  {
    history.push("/Multiplay/login");
  }


  return (
    <div className="container-fluid vh-100">
      <div className="row align-items-center text-center   h-10">
        <div className="col-md-4 "></div>
        <div className="col-md-4 position-front">
          <img className="logo-style" src={`/Assets/logo.svg`} alt="Latix" />
        </div>
        <div className="col-md-4 position-front"></div>
      </div>
      <div className="row justify-content-start">
        <div className="col-md-2 text-center ">
        <IconButton
            icon={faArrowLeft}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoBack}
          />
        </div>
        <div className="col-md-8 p-3 justify-content-center "></div>
        <div className="col-md-2 "></div>
      </div>
      <div className="row align-items-end h-40">
        <div className="col-md-12">
          <div className="row pt-3 justify-content-center">
            <div className="col-md-12 d-flex justify-content-center">
              <img
                className="join-avatar position-front"
                src={`/Assets/Avatar list/${avatar}.svg`}
                alt="avatar"
              />
            </div>
          </div>
          <div className="row pt-2 justify-content-center">
            <div className="col-md-12">
              <label className="join-title-1   position-front">Hi {name}</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-2"></div>
        <div className="col-md-8  ">
          <div className="row  justify-content-center">
            <div className="col-md-12  d-flex justify-content-center">
              <label className="join-textbox-text  position-front">
                Enter Your Game code Here
              </label>
              <div></div>
            </div>
          </div>
          <div>
            <div className="row pt-2 justify-content-center">
              <div className="col-md-12  d-flex justify-content-center">
                <input
                  className="input-field  position-front"
                  placeholder="Code"
                  type="text"
                  name="Code"
                  value={gameCode}
                  onChange={handleGameCode}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row  align-items-center">
        <div className="col-md-2 p-2 text-center">
          <IconButton
            icon={faHome}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoBackHome}
          />
        </div>
        <div className="col-md-8 text-center">
          <button
            onClick={onSubmit}
            type="submit"
            className="custom-btn btn-2 "
            style={{ width: "150px", height: "55px", fontSize: "35px" }}
          >
            <div className="btn-con">Login</div>
          </button>
        </div>
        <div className="col-md-2  text-center"></div>
      </div>
    </div>
  );
}
