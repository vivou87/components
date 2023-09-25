import React from "react";
import "../App.css";
function Carditem(props) {
  return (
    <div className="card-item">
      <h2>{props.name}</h2>
      <img src={props.url} alt="" width="120px" height="140px" />
      <h4>{props.country}</h4>
      <img src={props.flag} alt="" width="40px" height="35px" />
      <h4>{props.number}</h4>
      <h4>{props.age} ans</h4>
    </div>
  );
}

export default Carditem;
