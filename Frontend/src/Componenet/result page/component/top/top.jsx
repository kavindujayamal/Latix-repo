import "./top.css";
export function Top({ place, No, Image, Name, time, correct, incorrect }) {
  return (
    <div className={"item " + place}>
     <div className="pos"> <img
                className="pos-avatar"
                src={`/Assets/result medles/${No}.svg`}
                alt="avatar"
              /></div>
      <div
      >
        <img  className="pic" src={Image} alt="avatar" />
      </div>
      <div className="top-body">
      <div className="name">{Name}</div>
      <div className="score">Time : {time}</div>
      <div className="score">Correct : {correct}</div>
      <div className="score">Incorrect : {incorrect}</div>
      </div>
    </div>
  );
}
