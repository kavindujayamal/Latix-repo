import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../Componenet/avatar slider/Avatar";
import "./login/Multiplayer.creator.login.css";
// import { IoHome, IoChevronBackCircleSharp } from "react-icons/io5";
import { IconButton } from "../Componenet/Button/ButtonIcon/Button";
// eslint-disable-next-line
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function MultiplayerLogin({
  userName,
  setName,
  Setavatar,
  showCheckBox,
  setIsJoinAsPlayer,
  HandleShowCheckBox,
}) {
  const [checked, setChecked] = useState(true);
  const history = useHistory();

  const handleSubmit = () => {
    if (showCheckBox) {
      history.push("/Multiplay/create");
    } else {
      history.push("/Multiplay/join");
    }
  };

  useEffect(() => {
    return () => {
      HandleShowCheckBox(false);
    };
  }, [HandleShowCheckBox]);

  const HandleCheckbox = () => {
    setChecked(!checked);
    if (!checked) {
      setIsJoinAsPlayer(true);
    } else {
      setIsJoinAsPlayer(false);
    }
  };

  const onGoBackHome = () => 
  {
    history.push("/");
  }

  const onGoBack = () => 
  {
    history.push("/Multiplay/Mode");
  }


  return (
    // <div>
    //     <div>
    //    <form onSubmit={handleSubmit} >

    //    <input
    //    placeholder="Name"
    //     type="text"
    //     name="name"
    //     value={userName}
    //     onChange={setName}
    //     required
    //   />

    //    {showCheckBox ? <div>
    //  <input
    //  name="isGoing"
    //  type="checkbox"
    //  checked={checked}
    //  onChange={HandleCheckbox} />
    //  <label style={{color:'white'}} >Join As a player</label>
    //   </div>
    // : <span> </span>}

    // <div>
    //    <button>Login
    //    </button>
    // </div>

    //    </form>

    //     </div>
    // </div>
    <div className="container-fluid vh-100">
      <div className="row align-items-center text-center   h-10">
        <div className="col-md-4 "></div>
        <div className="col-md-4 position-front">
          <img className="logo-style" src={`/Assets/logo.svg`} alt="Latix" />
        </div>
        <div className="col-md-4 "></div>
      </div>
      <div className="row justify-content-start">
        <div className="col-md-2 text-center ">
          {/* <button className="home-navigate-button">
            
            <IoChevronBackCircleSharp />
          </button> */}
          <IconButton
            icon={faArrowLeft}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoBack}
          />
        </div>
        <div className="col-md-8 p-3 justify-content-center ">
        
        </div>
        <div className="col-md-2 ">
          
        </div>
      </div>
      <div className="row h-60">
        <div className="col-md-2 ">
        </div>
        <div className="col-md-8 ">
          <div className="row mb-2">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
            <div className="Login-header-avatar-select-Avatar position-front align-items-center text-center ">
                Select Your Avatar
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row ">
            <div className="col-md-2">
           
            </div>
            <div className="col-md-8 d-flex  justify-content-center ">
           
              <Avatar OnChangeAvatar={Setavatar} />
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
              <div className="Login-header-avatar-select position-front">
                Enter Your Name:
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row  ">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
              <form onSubmit={handleSubmit}>
                <div className="row justify-content-center position-front">
                  <input
                    className="input-field"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={userName}
                    onChange={setName}
                    maxLength="15"
                    required
                  />
                </div>
                <div className="row pt-3 justify-content-center">
                  {showCheckBox ? (
                    <div className="col-md-12 d-flex justify-content-center position-front">
                      <input
                        className="login-checkbox-multiplayer"
                        type="checkbox"
                        id="check"
                        name="check"
                        checked={checked}
                        onChange={HandleCheckbox}
                      />
                      <label
                        className="login-checkbox-label-multiplayer p-1 position-front"
                        htmlFor="check"
                      >
                        <span></span>Join As a player
                      </label>
                    </div>
                  ) : (
                    <span> </span>
                  )}
                </div>
                <div className="row justify-content-center p-2 position-front">
                  <button
                    type="submit"
                    className="custom-btn btn-2 "
                    style={{ width: "150px", height: "55px", fontSize: "35px" }}
                  >
                    <div className="btn-con">Login</div>
                  </button>
                  {/* <TextButton content={"Login"} height={'60px'} width={'130px'} fontSize={'35px'} /> */}
                </div>
              </form>
            </div>
            {/* <div className="col-md-2"></div> */}
          </div>
        </div>
        {/* <div className="col-md-2"></div> */}
      </div>
      <div className="row  justify-content-start">
        <div className="col-md-2 p-4 text-center">
          <IconButton
            icon={faHome}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
            onClick={onGoBackHome}
          />
        </div>
      </div>
    </div>
  );
}
