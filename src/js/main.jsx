import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import SecondsCounter from "./components/SecondsCounter";
import ControlledCounter from "./components/ControlledCounter";

let counter = 0;
const raiz = ReactDOM.createRoot(document.getElementById("root"));
const intervalo = setInterval(() => {
  counter++;
  raiz.render(
    <React.StrictMode>
      <ControlledCounter />
    </React.StrictMode>
  );
}, 1000);
