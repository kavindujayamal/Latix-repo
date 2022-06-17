import React from "react";
import './no.mobile.css';

export default function NoMobile() {
  return (
    <div>
      <div className="container-fluid mobile-container">
        <div className="row mobile-first-row align-items-center text-center">
          <div className="col-md-12">
          <img
                className="mobile-image"
                src={`/Assets/mobile/mobi.svg`}
                alt="avatar"
              />
          </div>
        </div>
        {/* <div className="row align-items-center text-center">
          <div className="col-md-12">
           <label className="mobile-text">   Oops!<br></br> We are not available yet for mobile. <br></br> Try us using desktop.</label>
          </div>
        </div> */}
      </div>
    </div>
  );
}
