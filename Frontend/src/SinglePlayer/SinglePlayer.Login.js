import { useHistory } from "react-router-dom";
import Avatar from "../Componenet/avatar slider/Avatar";
 // eslint-disable-next-line
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../Componenet/Button/ButtonIcon/Button";



function SinglePlayerLogin({ name, OnChangeName,OnChangeAvatar }) {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/SinglePlayer/Create");
  };

  const onChange = (e) => {
    OnChangeName(e.target.value);
  };

  const onGoBack = () => 
  {
    history.push("/");
  }

  return (
    <div className="container-fluid vh-100">
      <div className="row align-items-center text-center   h-10">
        <div className="col-md-4 "></div>
        <div className="col-md-4 position-front">
          <img className="logo-style" src={`/Assets/logo.svg`} alt="Latix" />
        </div>
        <div className="col-md-4 "></div>
      </div>
      <div className="row">
        <div className="col-md-2 text-center ">
          {/* <button className="home-navigate-button">
            {" "}
            <IoChevronBackCircleSharp />{" "}
          </button> */}
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
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
            <div className="Login-header-avatar-select position-front">Select Your Avatar</div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
              <Avatar OnChangeAvatar = {OnChangeAvatar}/>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center ">
            <div className="Login-header-avatar-select position-front">Enter Your Name:</div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row  ">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
              <form onSubmit={onSubmit}>
                <div className="row pt-2 justify-content-center position-front">
                  <input
                    className="input-field"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                    maxLength={15}
                  />
                </div>
                <div className="row justify-content-center p-4 position-front">
               <button
                    type="submit"
                    className="custom-btn btn-2 "
                    style={{ width: "150px", height: "55px", fontSize: "35px" }}
                  >
                    <div className="btn-con">Login</div>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-2  mt-5 text-center">
          {/* <IconButton
            icon={faHome}
            height={"80px"}
            width={"100px"}
            fontSize={"40px"}
          /> */}
        </div>
        <div className="col-md-8 mt-5 text-center"></div>
        <div className="col-md-2  text-center"> </div>
      </div>
    </div>
  );
}

export default SinglePlayerLogin;
