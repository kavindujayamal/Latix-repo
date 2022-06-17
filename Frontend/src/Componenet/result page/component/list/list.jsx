import "./list.css";

export function List({ No, Image, name, time, correct, incorrect }) {
  return (
    <div className="item">
      <div className="pos">{No}</div>
      <div

// className="pic"
        // style={{
        //   backgroundImage: `url(${Image})`,
        // }}
      >
        <img  className="pic" src={Image} alt="avatar" />
      </div>
      <div className="name">{name}</div>
      <div className="score">Time : {time}</div>
      <div className="score">Correct : {correct}</div>
      <div className="score">Incorrect : {incorrect}</div>
    </div>
  );
}
