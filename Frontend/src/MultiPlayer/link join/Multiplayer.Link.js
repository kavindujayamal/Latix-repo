import { useState } from "react";
import { useParams, useHistory } from "react-router";
import { useSocket } from "../../Services/SocketProvider";
import Avatar from "../../Componenet/avatar slider/Avatar";
import { IconButton } from '../../Componenet/Button/ButtonIcon/Button';
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";



export default function MultiplayerLinkJoin({name,setName,setGameId, Setavatar, avatar}) {
  const { code } = useParams();
  const history = useHistory();
  const socket = useSocket();
  const [username,SetUsername] = useState("");
  const [avatarLocal,SetavatarLocal] = useState(avatar);


  const handleavavatarChnage = (val) => 
  {
    Setavatar(val);
    SetavatarLocal(val)
  }

  const handleSubmit = (e) => {

    // console.log(name);

    e.preventDefault();
    
    socket.emit("JoinGame",
        {
            UserName:username,
            GameId:code,
            Avatar:avatarLocal
        },(res)=>
        {
            if(res.Status === 0)
            {
                alert(`${res.Message}`);
            }
            else if (res.Status === 1)
            {
                setGameId(code);
                history.push('/Multiplay/lobby');
            }
        });
  };

  const HandleNameChange = (e) => 
  {
    setName(e);
    SetUsername(e.target.value);
  }

  const onGoBackHome = () =>
  {
      history.push("/");
  }

  return (
    // <div className="container-fluid vh-100">
    //   <div className="row align-items-center text-center   h-10">
    //       <div
    //         className="col-md-4 "
    //       >
    //       </div>
    //       <div
    //         className="col-md-4"
    //       >
    //          <img
    //             className="logo-style position-front"
    //             src={`/Assets/logo.svg`}
    //             alt="Latix"
    //           />
    //       </div>
    //       <div
    //         className="col-md-4 "
    //       >
    //       </div>
    //     </div>
    //   <div className="row">
    //     <div className="col-md-2 text-center ">
    //     </div>
    //     <div className="col-md-8 text-center ">
    //     {/* <div  style={{fontSize: "5rem",color:"white", fontFamily: '"Dongle", sans-serif' }}className="position-front">Welcome to Latix</div> */}
    //     </div>
    //     <div className="col-md-2 "></div>
    //   </div>
    //   <div className="row mt-2 h-60">
    //     <div className="col-md-2"></div>
    //     <div className="col-md-8 ">
          
    //       <div className="row mb-2">
    //         <div className="col-md-2"></div>
    //         <div className="col-md-8 d-flex justify-content-center ">
    //         <div className="Login-header-avatar-select position-front">Select Your Avatar</div>
    //         </div>
    //         <div className="col-md-2"></div>
    //       </div>
    //       <div className="row ">
    //         <div className="col-md-2"></div>
    //         <div className="col-md-8 d-flex justify-content-center ">
    //           <Avatar OnChangeAvatar = {handleavavatarChnage}/>
    //         </div>
    //         <div className="col-md-2"></div>
    //       </div>
    //       <div className="row mt-3 ">
    //         <div className="col-md-2"></div>
    //         <div className="col-md-8 d-flex justify-content-center ">
    //         <div className="Login-header-avatar-select position-front">Enter Your Name:</div>
    //         </div>
    //         <div className="col-md-2"></div>
    //       </div>
    //       <div className="row  ">
    //         <div className="col-md-2"></div>
    //         <div className="col-md-8 ">
    //           <form onSubmit={(e) => handleSubmit(e)}>
    //             <div className="row pt-2 justify-content-center position-front">
    //               <input
    //                 className="input-field"
    //                 placeholder="Name"
    //                 type="text"
    //                 name="name"
    //                 value={name}
    //                 onChange={HandleNameChange}
    //                 required
    //                 maxLength={15}
    //               />
    //             </div>
    //             <div className="row pt-4 justify-content-center">
    //             <button
    //                 type="submit"
    //                 className="custom-btn btn-2 "
    //                 style={{ width: "150px", height: "55px", fontSize: "35px" }}
    //               >
    //                 <div className="btn-con">Login</div>
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //         <div className="col-md-2"></div>
    //       </div>
    //     </div>
    //     <div className="col-md-2"></div>
    //   </div>
    //   <div className="row align-items-center">
    //     <div className="col-md-2  mt-2 text-center">
    //     <IconButton
    //         icon={faHome}
    //         height={"80px"}
    //         width={"100px"}
    //         fontSize={"40px"}
    //       />
    //     </div>
    //     <div className="col-md-8 mt-5 text-center"></div>
    //     <div className="col-md-2  text-center"> </div>
    //   </div>
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
      </div>
      <div className="col-md-8 p-3 justify-content-center " style={{height:"80px"}}>
      
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
         
            <Avatar OnChangeAvatar={handleavavatarChnage} />
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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row justify-content-center position-front">
              <input
                    className="input-field"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={HandleNameChange}
                    required
                    maxLength={15}
                  />
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
