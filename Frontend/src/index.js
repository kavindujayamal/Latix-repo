import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line
import { HashRouter,BrowserRouter } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Componenet/misc css/buttonStyle.css'
import './Componenet/misc css/inputStyle.css'


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import { SocketProvider } from "./Services/SocketProvider";

ReactDOM.render(
  // <HashRouter>
  <BrowserRouter>
    <SocketProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </SocketProvider>
  </BrowserRouter>,
  // </HashRouter>, 
  document.getElementById("root")
);
