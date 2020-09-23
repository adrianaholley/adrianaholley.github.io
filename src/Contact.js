import React, { useState } from 'react';


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
              <p><bold>Have a question or comment about Texas Tech's COVID Response plan?</bold><br />
                <font size="4">Email the Interim Director of Emergency Management at <a href="https://bit.ly/32SyRFI" target='_blank'>covid19@ttu.edu</a></font></p>
              <p><bold>Like my work?</bold><br />
                <font size="4"><a href='https://bit.ly/320hDal' target='_blank'>Buy me a coffee.</a></font></p>
              <p><bold>Join the discussion.</bold><br />
                <font size="4">Every weekday I post update notes and an analysis <a href='https://bit.ly/33N9x4g' target='_blank'>here</a> on Reddit.</font></p>
              <font size="3"><a href='https://bit.ly/2F0GOk8' target="_blank">Site purpose and source code</a></font>
            </div>
          </header>
        </div>
      </div>
    )
  }

  export default Contact;