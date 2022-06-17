import {useState,useEffect} from "react";
import './route.loader.css'

export default function RouteLoader({loaderVal,loaderMsg}) {

  const [showLoader] = useState(loaderVal);

  useEffect(() => {
    // console.log(loaderVal);
  });
  
 
  return (
  <>
   {showLoader ?
   <div className="loader-container position-front">
       <img className="loader-svg position-front" src={`/Assets/loader.svg`} alt="Latix" />
       <h3 className="loader-msg position-front" >{loaderMsg}</h3>
   </div> 
   : <span></span>}
   </>
  );
}
