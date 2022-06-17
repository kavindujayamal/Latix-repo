import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import { Card3D } from "../3Dcard/3DCard";
import { faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
// import { ModelPRIVACY,ModelTerm,ContactUs} from "../modals/newmodel";
import { Card3D } from "../Componenet/3Dcard/3DCard";
import {
  ModelPRIVACY,
  ModelTerm,
  ContactUs,
} from "../Componenet/modals/newmodel";

const Home = () => {
  const [modalpry, setModalpry] = React.useState(false);
  const [modalterm, setModalterm] = React.useState(false);
  const [modalcon, setModalcon] = React.useState(false);
  return (
    <>
      <div className="container-fluid vh-100 ">
        <div className="row align-items-center text-center   h-10">
          <div className="col-md-4 "></div>
          <div className="col-md-4 position-front">
            <img className="logo-style " src={`/Assets/logo.svg`} alt="Latix" />
          </div>
          <div className="col-md-4 "></div>
        </div>
        <div className="row h-10 align-items-center mt-5">
          <div className="col-md-12  justify-content-center">
            <div className="Welcome-text position-front">Welcome to Latix </div>
          </div>
        </div>
        <div className="row h-60 align-items-center">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row ">
              <div className="col-md-12 d-flex justify-content-center mt-3">
                <label className="home-hint position-front">
                  {" "}
                  What would like to Play?
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex justify-content-end">
                <Link to="/Singleplayer" className="cardstyle">
                  <Card3D
                    Title="Single User"
                    Cardtex="Single User"
                    CardContent="Start Here &gt; &gt;"
                    Icon={faUser}
                  />
                </Link>
              </div>
              <div className="col-md-6 d-flex justify-content-start">
                <Link to="/Multiplay" className="cardstyle">
                  <Card3D
                    Title="Multi User"
                    Cardtex="Multi User"
                    CardContent="Start Here &gt; &gt;"
                    Icon={faUsers}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row bottom-bar position-front h-15">
          <div className="col-md-12 ">
            <div className="row justify-content-center mt-1">
              <div className="col-md-4 d-flex justify-content-center">
                <div className="model-link" onClick={() => setModalterm(true)}>
                  <div className="bottom-text">Terms of Service</div>
                </div>
                <ModelTerm
                  show={modalterm}
                  onHide={() => setModalterm(false)}
                />
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <div className="model-link" onClick={() => setModalpry(true)}>
                  <div className="bottom-text"> Privacy </div>
                </div>

                <ModelPRIVACY
                  show={modalpry}
                  onHide={() => setModalpry(false)}
                />
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                {/* Privacy policy */}
                <div className="model-link" onClick={() => setModalcon(true)}>
                  <div className="bottom-text"> About Us </div>
                </div>
                <ContactUs show={modalcon} onHide={() => setModalcon(false)} />
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-md-12 text-center ">
                {/* Made With ❤️ by USJ */}
                <div className="bottom-credit">All Rights Reserved</div>
                <div className="bottom-credit "> Copyright (©) 2022 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
