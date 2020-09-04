import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Sizing from '@material-ui/system';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';
import Total, { totaldata } from './components/total';
import Active, { activedata } from './components/active';
import { ResponsiveContainer } from "recharts";
import { Checkbox, Appbar } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';
import './faq.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* Appbar */}
        <HashRouter>
          <div>
            <AppBar style={{ minHeight: 84 }} className="MuiAppBar" color="white" >
              <Toolbar>
                <Typography>
                  Coronavirus (COVID-19) Dashboard
              </Typography>
                <div className="toolbarButtons">
                  <Link style={{ textDecoration: 'none' }} to="/total">Total</Link>
                  <Link style={{ textDecoration: 'none' }} to="/active">Active</Link>
                  <Link style={{ textDecoration: 'none' }} to="/faq">FAQ</Link>
                  <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <Switch>
            <Route path="/total"><Total /></Route>
            <Route path="/active"><Active /></Route>
            <Route path="/faq"><Faq /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
        </HashRouter>
        {/* Graph and selections */}

        {/* <div class="selections">
              <FormControl>
                <FormLabel>Case Type</FormLabel>
                <RadioGroup>
                  <FormControlLabel value="Total Reported Cases" disabled control={<Radio />} label="Total Reported Cases" />
                  <FormControlLabel value="Active Reported Cases" control={<Radio />} label="Active Reported Cases" />
                </RadioGroup>
              </FormControl>
            </div> */}
        {/* <div class="selections">
              <FormControl>
                <FormLabel>Coming Soon - Show Past Projections</FormLabel>
                <FormControlLabel disabled value="September 2" control={<Checkbox />} label="September 2" />
                <FormControlLabel disabled value="September 1" control={<Checkbox />} label="September 1" />
              </FormControl>
            </div> */}
      </header>
    </div>

  );
}

function Contact() {
  return (
    <div>
      <br />
      <h1>Like my work? </h1>
      <p><a href='https://ko-fi.com/adrianaholley' target='_blank'>Buy me a coffee!</a></p>
      <p><a href='https://ko-fi.com/adrianaholley'>Buy me a coffee!</a></p>
      <p><a href='https://ko-fi.com/adrianaholley'>Buy me a coffee!</a></p>
      <p><a href='https://ko-fi.com/adrianaholley'>Buy me a coffee!</a></p>
    </div>
  )
}

function Dothing() {
    
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

function Faq() {
  return (
    <div>
      <div>
        <svg width="100%" height="139">
          <g>
            <rect width="100%" height="100%" fill="#B32317" />
            <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
          </g>
        </svg>
      </div>
      <div className="App">
        <header className="App-header">
          <p>
            Faq
        </p>
          <button class="accordion">Section 1</button>
          <div class="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button class="accordion">Section 2</button>
          <div class="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button class="accordion">Section 3</button>
          <div class="panel">
            <p>Lorem ipsum...</p>
          </div>
        </header>
      </div >
    </div>
  );
}



export default App;
