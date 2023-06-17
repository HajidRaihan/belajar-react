import React from "react";
import withCalculate from "../utils/withCalculate";

function Counter(props) {
  return (
    <div>
      <div>
        <h3>x + {props.counter}</h3>
        <p>{props.nomor}</p>
        <button onClick={props.handlerNomor}>tambah</button>
      </div>
    </div>
  );
}
export default withCalculate(Counter);
