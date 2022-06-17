import "./styles/3DCard.css";
// import {FaUserAlt} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card3D({ Title, Cardtex, CardContent, Icon }) {
  return (
    <div className="MDoverlay MDoverlay--light">
      <div className="MDcard MDcard--light">
        <div className="MDcard__title">{Title}</div>
        <div className="MDcard_icon">
          <FontAwesomeIcon icon={Icon} />
        </div>
        <div className="MDcardtex">{Cardtex}</div>
        {/* <div className="card__content">{CardContent}</div> */}
      </div>
    </div>
  );
  
}

// export default Card3D;
