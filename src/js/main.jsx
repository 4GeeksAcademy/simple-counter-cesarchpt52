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

let counter = 510;
const raiz = ReactDOM.createRoot(document.getElementById("root"));
const intervalo = setInterval(() => {
  counter++;
  raiz.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter} />
    </React.StrictMode>
  );
}, 1000);

raiz.render(
  <React.StrictMode>
    <SecondsCounter seconds={counter} />
  </React.StrictMode>
);
