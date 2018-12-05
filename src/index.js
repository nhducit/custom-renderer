import React from "react";
import ReactDOM from "react-dom";
import MyCustomRenderer from "./myCustomRenderer";

import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
MyCustomRenderer.render(<App />, rootElement);
