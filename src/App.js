import React, { useState } from 'react';
import './App.css';
import './Faq.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserView, MobileView, } from 'react-device-detect';
import { BrowserRouter as Router, Switch, Redirect, Route, Link, HashRouter } from 'react-router-dom';
import Total, { totaldata } from './components/Total';
import Active, { activedata } from './components/Active';
import { Appbar, Grid } from '@material-ui/core';
import { ReactComponent as hat } from './maskhat.png'
import Faq from './Faq.js';
import Contact from './Contact.js';
import Totalpage from './Totalpage.js';
import Activepage from './Activepage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Appbar */}
        <HashRouter>
          <BrowserView basename={window.location.pathname || ''}>
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
            <Route exact path="/"><Redirect to="/total" /></Route>
            <Route path="/total"><Totalpage /></Route>
              <Route path="/active"><Activepage /></Route>
              <Route path="/faq"><Faq /></Route>
              <Route path="/contact"><Contact /></Route>
          </Switch>
        </HashRouter>
      </header>
    </div>

  );
}

export default App;
