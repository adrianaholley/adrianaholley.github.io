import React, { useState } from 'react';
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

function Faq() {
  const [isSC1Open, setIsSC1Open] = useState(false)
  const [isSC2Open, setIsSC2Open] = useState(false);
  const [isSC3Open, setIsSC3Open] = useState(false)
  const [isSC4Open, setIsSC4Open] = useState(false)
  const [isSC5Open, setIsSC5Open] = useState(false)
  const [isSC6Open, setIsSC6Open] = useState(false)
  const [isSC7Open, setIsSC7Open] = useState(false)

  const [isCR1Open, setIsCR1Open] = useState(false)
  const [isCR2Open, setIsCR2Open] = useState(false);
  const [isCR3Open, setIsCR3Open] = useState(false)
  const [isCR4Open, setIsCR4Open] = useState(false)
  const [isCR5Open, setIsCR5Open] = useState(false)
  const [isCR6Open, setIsCR6Open] = useState(false)

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
                  <button onClick={() => setIsSC1Open(!isSC1Open)} class="accordion"><center>What is Texas Tech's test positivity rate?</center></button>
                  <div class={isSC1Open ? "" : "panel"}>
                  <p><font size={2}>Although <a href="https://www.baylor.edu/coronavirus/index.php?id=972342" target='_blank'>Baylor University</a> and other schools provide this data for their communities, Texas Tech has not publicized the number of tests performed so there is no official positivity rate. If this is something you'd like to see, reach out to <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC2Open(!isSC2Open)} class="accordion"><center>Why aren't there updates during the weekend?</center></button>
                  <div class={isSC2Open ? "" : "panel"}>
                  <p><font size={2}>If you would like to Texas Tech to provide weekend updates like <a href="https://www.txstate.edu/coronavirus/road-map.html" target='_blank'>Texas State University</a> and other schools do, email <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC3Open(!isSC3Open)} class="accordion"><center>How are the quarantine capacity levels?</center></button>
                  <div class={isSC3Open ? "" : "panel"}>
                  <p><font size={2}><a href="https://uasystem.edu/covid-19-dashboard/" target='_blank'>The University of Alabama</a> provides this data for its school system, but Texas Tech does not provide any data for the capacity of the quarantine dorms and isolation dorms, nor their current occupancy levels. If you think this missing data is important, please reach out to <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a> to let them know.</font></p>
                  </div>

                  <button onClick={() => setIsSC4Open(!isSC4Open)} class="accordion"><center>How accurate is this data?</center></button>
                  <div class={isSC4Open ? "" : "panel"}>
                  <p><font size={2}>The total and active case counts come from <a href="https://www.depts.ttu.edu/communications/emergency/coronavirus/">Texas Tech</a>. Please keep in mind that if a student or employee tests outside of the university, their result will not be counted here unless they self-report. Also, there are currently presymptomatic and asymptomatic cases unaccounted for. TTU's site does not give any past data. If you would like them to provide that, let them know at <a href="mailto:covid19@ttu.edu">covid19@ttu.edu</a>. </font></p>
                  </div>

                  <button onClick={() => setIsSC5Open(!isSC5Open)} class="accordion"><center>Have any of these cases been hostpitalized?</center></button>
                  <div class={isSC5Open ? "" : "panel"}>
                  <p><font size={2}>As of Wednesday, September 2, there have been no COVID-19 hospitalizataions within the Texas Tech community.</font></p>
                  </div>

                  <button onClick={() => setIsSC6Open(!isSC6Open)} class="accordion"><center>Where are the recovery numbers?</center></button>
                  <div class={isSC6Open ? "" : "panel"}>
                  <p><font size={2}>This dasboard currently focuses on predicting the total spread of the virus. Active cases contribute to the spread so they are also noted here. The number of recoveries does not help us analyze the current spread so there is no graph for them.</font></p>
                  </div>

                  <button onClick={() => setIsSC7Open(!isSC7Open)} class="accordion"><center>I don't like exponential regressions.</center></button>
                  <div class={isSC7Open ? "" : "panel"}>
                  <p><font size={2}>Exponential regressions are not perfect. As we can see, the prediction changes each time we get new data. It doesn't use any machine learning, compare spread at similarly-sized schools, or predict effects of increased sanitation. It's only based on our past data. However, COVID spread at Texas Tech<i>is</i> exponential. It fits the community's COVID projection needs, as neither the University or the city have published any other projections. If you'd like to ask them to share any projectoins, reach to them at <a href="mailto:covid19@ttu.edu">covid19@ttu.edu</a>.</font></p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <h5>TTU COVID Response</h5>
                  <button onClick={() => setIsCR1Open(!isCR1Open)} class="accordion"><center>How often must Texas Tech students get tested?</center></button>
                  <div class={isCR1Open ? "" : "panel"}>
                    <p><font size={2}>Many schools are mandating tests as a part of their robust COVID response plan. For example, <a href="https://www.bu.edu/back2bu/files/2020/08/COVID_GridTestFreqency_FINAL.pdf">Boston University</a> is mandating all dorm residents to take a coronavirus test twice a week. The <a href="https://nypost.com/2020/08/29/university-of-arizona-is-screening-for-covid-19-via-dorms-poop/">University of Arizona</a> has screened sewage to find previously undetected COVID cases in dorm halls. Texas Tech has not mandated any testing at any frequency, and no plans of early detection screening have been announced. </font></p>
                  </div>

                  <button onClick={() => setIsCR2Open(!isCR2Open)} class="accordion"><center>How soon will I be notified that a classmate tested positive?</center></button>
                  <div class={isCR2Open ? "" : "panel"}>
                    <p><font size={2}>It is not guaranteed that you will be notified. A memo to instructors aquired August 26 stated a class would only be notified if in-person sessions had to be temporarily moved online. For this to happen, a positive student must have attended class within 48 hours of a diagnosis and either came within 6 feet of another individual or did not wear a mask during class. (There was no specification whether mask must have covered both nose and mouth.) With these policies, several positive students could attend one class but no one would ever be notified they were at risk. </font></p>
                  </div>

                  <button onClick={() => setIsCR3Open(!isCR3Open)} class="accordion"><center>Are there any disciplinary procedures for improper mask wear?</center></button>
                  <div class={isCR3Open ? "" : "panel"}>
                    <p><font size={2}>Individuals <a href="http://www.texastech.edu/downloads/ttus-policy-face-coverings.pdf">will be given</a> a warning, then disciplinary action. The disciplinary actions for students have not been specified. For university employees, a first violation <a href="http://www.depts.ttu.edu/operations/Documents/docs/MandatoryFaceCoveringPolicy_.pdf">will result in</a> an informal meeting with their supervisor; the second will result in a verbal warning; the third will result in formal written reprimand with a warning and disciplinary meeting; the fourth will result in a final written reprimand as a final warning and disciplinary meeting; the fifth will result in a request for temination of employment.</font></p>
                  </div>

                  <button onClick={() => setIsCR4Open(!isCR4Open)} class="accordion"><center>What percent of courses are online?</center></button>
                  <div class={isCR4Open ? "" : "panel"}>
                    <p><font size={2}>In <a href="http://www.dailytoreador.com/news/schovanec-addresses-first-fall-classes-next-steps-amid-pandemic/article_20925b36-e648-11ea-9dfb-df8d8da322ee.html">an interview</a> with the student newspaper released August 24, Dr. Schovanec shared that less than half of classes were solely online. 39% were online, 24% were hybrid, and 37% were in in-person. Freshmen courses made up about 72% of all class with some degree of face-to-face instruction. Since the article, more courses have shifted online for two weeks. Some due to a moderate-to-high risk of COVID exposure, some as a precaution. </font></p>
                  </div>

                  <button onClick={() => setIsCR5Open(!isCR5Open)} class="accordion"><center>How many cases must there be for Texas Tech to return to 100% online classes?</center></button>
                  <div class={isCR5Open ? "" : "panel"}>
                    <p><font size={2}>Texas Tech has not announced a total case or active case threshold for campus closure. </font></p>
                  </div>

                  <button onClick={() => setIsCR6Open(!isCR6Open)} class="accordion"><center>What constitutes a "COVID recovery?"</center></button>
                  <div class={isCR6Open ? "" : "panel"}>
                    <p><font size={2}>Many countries that have seen success in battling COVID require two negative tests to be considered COVID-free. According to the CDC, no test is necessary. One is "recovered" if 10 days have passed since one's first symptoms and they have been fever-free for 24 hours. There is no recommendation for a test to be taken, even if one still has a cough or other symptoms.</font></p>
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
                  <button onClick={() => setIsSC1Open(!isSC1Open)} class="accordion"><center>What is Texas Tech's test positivity rate?</center></button>
                  <div class={isSC1Open ? "" : "panel"}>
                    <p><font size={2}>Although <a href="https://www.baylor.edu/coronavirus/index.php?id=972342" target='_blank'>Baylor University</a> and other schools provide this data for their communities, Texas Tech has not publicized the number of tests performed so there is no official positivity rate. If this is something you'd like to see, reach out to <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC2Open(!isSC2Open)} class="accordion"><center>Why aren't there updates during the weekend?</center></button>
                  <div class={isSC2Open ? "" : "panel"}>
                    <p><font size={2}>If you would like to Texas Tech to provide weekend updates like <a href="https://www.txstate.edu/coronavirus/road-map.html" target='_blank'>Texas State University</a> and other schools do, email <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC3Open(!isSC3Open)} class="accordion"><center>How are the quarantine dorm capacity levels?</center></button>
                  <div class={isSC3Open ? "" : "panel"}>
                    <p><font size={2}><a href="https://uasystem.edu/covid-19-dashboard/" target='_blank'>The University of Alabama</a> provides this data for its school system, but Texas Tech does not provide any data for the capacity of the quarantine dorms and isolation dorms, nor their current occupancy levels. If you think this missing data is important, please reach out to <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a> to let them know.</font></p>
                  </div>

                  <button onClick={() => setIsSC4Open(!isSC4Open)} class="accordion" target='_blank'><center>How accurate is this data?</center></button>
                  <div class={isSC4Open ? "" : "panel"}>
                  <p><font size={2}>The total and active case counts come from <a href="https://www.depts.ttu.edu/communications/emergency/coronavirus/">Texas Tech</a>. Please keep in mind that if a student or employee tests outside of the university, their result will not be counted here unless they self-report. Also, there are currently presymptomatic and asymptomatic cases unaccounted for. TTU's site does not give any past data. If you would like them to provide that, let them know at <a href="mailto:covid19@ttu.edu">covid19@ttu.edu</a>. </font></p>
                  </div>

                  <button onClick={() => setIsSC5Open(!isSC5Open)} class="accordion"><center>Have any of these cases been hostpitalized?</center></button>
                  <div class={isSC5Open ? "" : "panel"}>
                    <p><font size={2}>As of Wednesday, September 2, there have been no COVID-19 hospitalizataions within the Texas Tech community.</font></p>
                  </div>

                  <button onClick={() => setIsSC6Open(!isSC6Open)} class="accordion"><center>Where are the recovery numbers?</center></button>
                  <div class={isSC6Open ? "" : "panel"}>
                    <p><font size={2}>This dasboard currently focuses on predicting the total spread of the virus. Active cases contribute to the spread so they are also noted here. The number of recoveries does not help us analyze the current spread so there is no graph for them.</font></p>
                  </div>

                  <button onClick={() => setIsSC7Open(!isSC7Open)} class="accordion"><center>I don't like exponential regressions.</center></button>
                  <div class={isSC7Open ? "" : "panel"}>
                    <p><font size={2}>Exponential regressions are not perfect. As we can see, the prediction changes each time we get new data. It doesn't use any machine learning, compare spread at similarly-sized schools, or predict effects of increased sanitation. It's only based on our past data. However, COVID spread at Texas Tech<i>is</i> exponential. It fits the community's COVID projection needs, as neither the University or the city have published any other projections. If you'd like to ask them to share any projectoins, reach to them at <a href="mailto:covid19@ttu.edu">covid19@ttu.edu</a>.</font></p>
                  </div>
                </Grid>
                <Grid item xs>
                  <h5>TTU COVID Response</h5>
                  <button onClick={() => setIsCR1Open(!isCR1Open)} class="accordion"><center>How often must Texas Tech students get tested?</center></button>
                  <div class={isCR1Open ? "" : "panel"}>
                  <p><font size={2}>Many schools are mandating tests as a part of their robust COVID response plan. For example, <a href="https://www.bu.edu/back2bu/files/2020/08/COVID_GridTestFreqency_FINAL.pdf">Boston University</a> is mandating all dorm residents to take a coronavirus test twice a week. The <a href="https://nypost.com/2020/08/29/university-of-arizona-is-screening-for-covid-19-via-dorms-poop/">University of Arizona</a> has screened sewage to find previously undetected COVID cases in dorm halls. Texas Tech has not mandated any testing at any frequency, and no plans of early detection screening have been announced. </font></p>
                  </div>

                  <button onClick={() => setIsCR2Open(!isCR2Open)} class="accordion"><center>How soon will I be notified that a classmate tested positive?</center></button>
                  <div class={isCR2Open ? "" : "panel"}>
                  <p><font size={2}>It is not guaranteed that you will be notified. A memo to instructors aquired August 26 stated a class would only be notified if in-person sessions had to be temporarily moved online. For this to happen, a positive student must have attended class within 48 hours of a diagnosis and either came within 6 feet of another individual or did not wear a mask during class. (There was no specification whether mask must have covered both nose and mouth.) With these policies, several positive students could attend one class but no one would ever be notified they were at risk. </font></p>
                  </div>

                  <button onClick={() => setIsCR3Open(!isCR3Open)} class="accordion"><center>Are there any disciplinary procedures for improper mask wear?</center></button>
                  <div class={isCR3Open ? "" : "panel"}>
                  <p><font size={2}>Individuals <a href="http://www.texastech.edu/downloads/ttus-policy-face-coverings.pdf">will be given</a> a warning, then disciplinary action. The disciplinary actions for students have not been specified. For university employees, a first violation <a href="http://www.depts.ttu.edu/operations/Documents/docs/MandatoryFaceCoveringPolicy_.pdf">will result in</a> an informal meeting with their supervisor; the second will result in a verbal warning; the third will result in formal written reprimand with a warning and disciplinary meeting; the fourth will result in a final written reprimand as a final warning and disciplinary meeting; the fifth will result in a request for temination of employment.</font></p>
                  </div>

                  <button onClick={() => setIsCR4Open(!isCR4Open)} class="accordion"><center>What percent of courses are online?</center></button>
                  <div class={isCR4Open ? "" : "panel"}>
                  <p><font size={2}>In <a href="http://www.dailytoreador.com/news/schovanec-addresses-first-fall-classes-next-steps-amid-pandemic/article_20925b36-e648-11ea-9dfb-df8d8da322ee.html">an interview</a> with the student newspaper released August 24, Dr. Schovanec shared that less than half of classes were solely online. 39% were online, 24% were hybrid, and 37% were in in-person. Freshmen courses made up about 72% of all class with some degree of face-to-face instruction. Since the article, more courses have shifted online for two weeks. Some due to a moderate-to-high risk of COVID exposure, some as a precaution. </font></p>
                  </div>

                  <button onClick={() => setIsCR5Open(!isCR5Open)} class="accordion"><center>How many cases must there be for Texas Tech to return to 100% online classes?</center></button>
                  <div class={isCR5Open ? "" : "panel"}>
                  <p><font size={2}>Texas Tech has not announced a total case or active case threshold for campus closure. </font></p>
                  </div>

                  <button onClick={() => setIsCR6Open(!isCR6Open)} class="accordion"><center>What constitutes a "COVID recovery?"</center></button>
                  <div class={isCR6Open ? "" : "panel"}>
                  <p><font size={2}>Many countries that have seen success in battling COVID require two negative tests to be considered COVID-free. According to the CDC, no test is necessary. One is "recovered" if 10 days have passed since one's first symptoms and they have been fever-free for 24 hours. There is no recommendation for a test to be taken, even if one still has a cough or other symptoms.</font></p>
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
