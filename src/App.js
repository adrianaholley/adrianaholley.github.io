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
import { BrowserView, MobileView, } from 'react-device-detect';
import Shadows from '@material-ui/system';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom';
import Total, { totaldata } from './components/total';
import Active, { activedata } from './components/active';
import { ResponsiveContainer } from "recharts";
import { Checkbox, Appbar, Grid } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';
import './faq.js'
import { ReactComponent as hat } from './maskhat.png'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* Appbar */}
        <HashRouter>

          <BrowserView>
            <div>
              <AppBar boxShadow={3} style={{ minHeight: 84 }} className="MuiAppBar" color="white" >
                <Toolbar>
                  <Grid container justify={"center"} alignItems={"center"}>
                    <img src="https://user-images.githubusercontent.com/32581742/92211600-53dfde80-ee56-11ea-9568-f5178fd2ab80.png" height="60" width="60" />
                    <Grid item xs={5}>
                      {/* <div style={{ paddingInlineEnd:200 }}> */}
                      <div style={{ paddingInlineEnd: 200 }}>
                        <p style={{ fontFamily: "Georgia" }}>
                          <font size="5" color="#333333">
                            &nbsp;&nbsp;Coronavirus (COVID-19) Dashboard
                      </font>
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <Link style={{ textDecoration: 'none' }} to="/total">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="3" color="#555555">
                            <b>
                              Total
                          </b>
                          </font>
                        </p>
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link style={{ textDecoration: 'none' }} to="/active">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="3" color="#555555">
                            <b>Active</b>
                          </font>
                        </p>
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link style={{ textDecoration: 'none' }} to="/faq">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="3" color="#555555">
                            <b>FAQ</b>
                          </font>
                        </p>
                      </Link>
                    </Grid>
                    <Grid item xs>
                      {/* <div style={{ paddingInlineEnd:200 }}> */}
                      <Link style={{ textDecoration: 'none' }} to="/contact">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="3" color="#555555">
                            <b>Contact</b>
                          </font>
                        </p>
                      </Link>
                      {/* </div> */}
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </div>
          </BrowserView>

          <MobileView>
            <div>
              <AppBar boxShadow={3} style={{ minHeight: 84 }} className="MuiAppBar" color="white" >
                <Toolbar>
                  <Grid container justify={"center"} alignItems={"center"}>
                    <img src="https://user-images.githubusercontent.com/32581742/92211600-53dfde80-ee56-11ea-9568-f5178fd2ab80.png" height="60" width="60" />
                    <Grid item xs={5}>
                      <div style={{ paddingInlineEnd: 0 }}>
                        <p style={{ fontFamily: "Georgia" }}>
                          <font size="2" color="#333333">
                            &nbsp;&nbsp;Coronavirus (COVID-19) Dashboard
                      </font>
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <Link style={{ textDecoration: 'none' }} to="/total">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="2" color="#555555">
                            <b>
                              Total
                          </b>
                          </font>
                        </p>
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link style={{ textDecoration: 'none' }} to="/active">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="2" color="#555555">
                            <b>Active</b>
                          </font>
                        </p>
                      </Link>
                    </Grid>
                    <Grid item xs>
                      <Link style={{ textDecoration: 'none' }} to="/faq">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="2" color="#555555">
                            <b>FAQ</b>
                          </font>
                        </p>
                      </Link>
                    </Grid>
                    <Grid item xs>
                      {/* <div style={{ paddingInlineEnd:200 }}> */}
                      <Link style={{ textDecoration: 'none' }} to="/contact">
                        <p style={{ fontStretch: "condensed" }}>
                          <font size="2" color="#555555">
                            <b>Contact</b>
                          </font>
                        </p>
                      </Link>
                      {/* </div> */}
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </div>
          </MobileView>

          <Switch>
            <Route path="/total"><Total /></Route>
            <Route path="/active"><Active /></Route>
            <Route path="/faq"><Faq /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
        </HashRouter>
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
