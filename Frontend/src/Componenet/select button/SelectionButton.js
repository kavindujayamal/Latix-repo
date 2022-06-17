import "../select button/SelectionButton.css";

export default function SelectionButton({
  valueList,
  pickedValue,
  setPickvalue,
  radioPadStyle,
  radioStyle,
  radioWrapper,
  radioSelected,
  labelText
}) {
  const handleRadios = (e) => {
    setPickvalue(e.target.value === "x" ? "*" : e.target.value);
  };

  const options = valueList.map((loan, key) => {
    const isCurrent = pickedValue === loan;
    return (
      <div key={key} className={radioPadStyle} >
        <label className={isCurrent ? radioSelected : radioWrapper}>
        
          <input
            className={radioStyle}
            type="radio"
            name="Types"
            id={loan}
            value={loan}
            onChange={handleRadios}
          /> 
         <span className={labelText}>{loan === "*" ? "x" : loan === "/" ? "÷" : loan}</span> 
        </label>
      </div>
    );
  });

  return <div>{options}</div>;
}
