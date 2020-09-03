import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Sizing from '@material-ui/system';


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

export default Faq;
