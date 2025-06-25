import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DigitCounter = (props) => {
  return (
    <div className="p-3 bg-black text-light border-dark rounded text-center fw-bold">
      {props.tiempo}
    </div>
  );
};

const SecondsCounter = (props) => {
  return (
    <div className="container d-flex bg-dark justify-content-center align-items-center gap-1 mt-3 ">
      <div className="p-2 m-1 bg-black text-light border-dark rounded text-center">
        <h3>
          <i className="fa-regular fa-clock fw-bold"></i>
        </h3>
      </div>
      <DigitCounter
        tiempo={Math.floor((props.seconds % 1000000) / 100000)}
      ></DigitCounter>
      <DigitCounter
        tiempo={Math.floor((props.seconds % 100000) / 10000)}
      ></DigitCounter>
      <DigitCounter
        tiempo={Math.floor((props.seconds % 10000) / 1000)}
      ></DigitCounter>
      <DigitCounter
        tiempo={Math.floor((props.seconds % 1000) / 100)}
      ></DigitCounter>
      <DigitCounter
        tiempo={Math.floor((props.seconds % 100) / 10)}
      ></DigitCounter>
      <DigitCounter
        tiempo={Math.floor((props.seconds % 10) / 1)}
      ></DigitCounter>
    </div>
  );
};

export default SecondsCounter;
