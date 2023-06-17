import React from "react";
import { useState } from "react";

function withCalculate(OriginalComponent) {
  return (props) => {
    const [nomor, setNomor] = useState(0);

    const handlerNomor = () => {
      setNomor(nomor + props.counter);
    };
    return <OriginalComponent nomor={nomor} handlerNomor={handlerNomor} counter={props.counter} />;
    //Kalau object dalam props banyak maka kita bisa pakai {...props}
  };
}

export default withCalculate;
