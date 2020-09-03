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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Total, { totaldata } from './components/total';
import Active, { activedata } from './components/active';
import { ResponsiveContainer } from "recharts";
import { Checkbox } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';
import './faq.js'

function App() {

  function myFunction(val) {
    alert("hi")
  }



  return (
    <div className="App">
      <header className="App-header">
        {/* Appbar */}
        <Router>
          <div>
            <AppBar style={{ minHeight: 84 }} color="#ffffff" >
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

        </Router>

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
    <h1>contact</h1>
  )
}

function Faq() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Faq
        </p>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="tab-content">
                <div id="tab1" class="tab-pane fade show active">
                  <div class="accordion">
                    <div class="card">
                      <div class="card-header" id="infraOne">
                        sample text
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}



export default App;
