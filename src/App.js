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
                      <div style={{ paddingInlineEnd: 200 }}>
                        <Link style={{ textDecoration: 'none' }} to="/total">
                          <p style={{ fontFamily: "Georgia" }}>
                            <font size="5" color="#333333">
                              &nbsp;&nbsp;Coronavirus (COVID-19) Dashboard
                            </font>
                          </p>
                        </Link>
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
      <div className='responsivecontainer'>
        <svg width="100vw" height="139">
          <g>
            <rect width="100%" height="100%" fill="#B32317" />
            <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
          </g>
        </svg>
      </div>

      <div className="App">
        <header className="App-header">
          <h3>Contact</h3>
          <div>
            <br />
            <p><bold>Have a question or comment about the site?</bold><br />
              <font size="4"><a href="https://bit.ly/3jKvDL7" target='_blank'>Reach out to me.</a></font></p>
            <br />
            <p><bold>Have a question or comment about Texas Tech's COVID Response plan?</bold><br />
              <font size="4">Email the Interim Director of Emergency Management at <a href="https://bit.ly/32SyRFI" target='_blank'>covid19@ttu.edu</a></font></p>
            <br />
            <p><bold>Like my work?</bold><br />
              <font size="4"><a href='https://bit.ly/320hDal' target='_blank'>Buy me a coffee.</a></font></p>
            <br />
            <font size="3"><a href='https://bit.ly/331nECI' target="_blank">Website source code</a></font>
          </div>
        </header>
      </div>
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
      <div className='responsivecontainer'>
        <svg width="100vw" height="139">
          <g>
            <rect width="100%" height="100%" fill="#B32317" />
            <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
          </g>
        </svg>
      </div>

      <div className="App">
        <header className="App-header">
          <h3 >Frequently Asked Questions</h3>

          <BrowserView>
            <div>
              <Grid container spacing={3} justify={"center"}>
                <Grid item xs={4}>
                  <h5>Site Content</h5>
                  <button class="accordion"><center>What is Texas Tech's test positivity rate?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>Why aren't there updates during the weekend?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>How are the quarantine capacity levels?</center></button>
                  <div class="panel">
                    <p>Although the University of Texas provides this data for its community, Texas Tech does not. Data for the capacity of the quarantine dorms and isolation dorms, as well as their current occupancy levels, was requested on Tuesday, September 4, 2020. If you think this missing data is important, please reach out to covid19@ttu.edu to ask.</p>
                  </div>

                  <button class="accordion"><center>How accurate is this data?</center></button>
                  <div class="panel">
                    <p>The total and active case counts come from Texas Tech. Please keep in mind that if a student or employee tests outside of the university, their result will not be counted here unless they self-report. In addition, there are currently presymptomatic and asymptomatic cases unaccounted for.</p>
                  </div>

                  <button class="accordion"><center>Have any of these cases been hostpitalized?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>Where are the recovery numbers?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>I don't like exponential regressions.</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <h5>TTU COVID Response</h5>
                  <button class="accordion"><center>How often must Texas Tech students get tested?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>How soon will I be notified that a classmate tested positive?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>Are there any disciplinary procedures for improper mask wear?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>What percent of courses are online?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>How many cases must there be for Texas Tech to return to 100% online classes?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </BrowserView>

          <MobileView>
            <div>
              <Grid container spacing={1} justify={"center"}>
                <Grid item xs>
                  <h5>Site Content</h5>
                  <button class="accordion"><center>What is Texas Tech's test positivity rate?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>Why aren't there updates during the weekend?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>How are the quarantine capacity levels?</center></button>
                  <div class="panel">
                    <p>Although the University of Texas provides this data for its community, Texas Tech does not. Data for the capacity of the quarantine dorms and isolation dorms, as well as their current occupancy levels, was requested on Tuesday, September 4, 2020. If you think this missing data is important, please reach out to covid19@ttu.edu to ask.</p>
                  </div>

                  <button class="accordion"><center>How accurate is this data?</center></button>
                  <div class="panel">
                    <p>The total and active case counts come from Texas Tech. Please keep in mind that if a student or employee tests outside of the university, their result will not be counted here unless they self-report. In addition, there are currently presymptomatic and asymptomatic cases unaccounted for.</p>
                  </div>

                  <button class="accordion"><center>Have any of these cases been hostpitalized?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>Where are the recovery numbers?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>I don't like exponential regressions.</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>
                </Grid>
                <Grid item xs>
                  <h5>TTU COVID Response</h5>
                  <button class="accordion"><center>How often must Texas Tech students get tested?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>How soon will I be notified that a classmate tested positive?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>Are there any disciplinary procedures for improper mask wear?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>What percent of courses are online?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"><center>How many cases must there be for Texas Tech to return to 100% online classes?</center></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>

                  <button class="accordion"></button>
                  <div class="panel">
                    <p>Lorem ipsum...</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </MobileView>

          <div className="adjustabletext">
            <br />
            <p><bold>Got a question?</bold><br />
              <font size="4"><Link to="/contact" color="#cc0000" >Reach out to me.</Link></font></p>
          </div>


        </header>
      </div >
    </div>
  );
}

export default App;
