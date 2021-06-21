import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { NashSSHub } from "./components/NashSSHub.js"
import './index.css';
import moment from "moment";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NashSSHub />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
