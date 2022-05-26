import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { BrowserView, MobileView} from 'react-device-detect';
import { BrowserRouter as Link } from 'react-router-dom';

var siteupdatetime = "Last updated Wednesday, November 18, 2020 at 5:25pm CST."

function Faq() {
  const [isSC1Open, setIsSC1Open] = useState(false)
  const [isSC2Open, setIsSC2Open] = useState(false)
  const [isSC3Open, setIsSC3Open] = useState(false)
  const [isSC4Open, setIsSC4Open] = useState(false)
  const [isSC5Open, setIsSC5Open] = useState(false)
  const [isSC6Open, setIsSC6Open] = useState(false)

  const [isCR1Open, setIsCR1Open] = useState(false)
  const [isCR2Open, setIsCR2Open] = useState(false)
  const [isCR3Open, setIsCR3Open] = useState(false)
  const [isCR4Open, setIsCR4Open] = useState(false)
  const [isCR5Open, setIsCR5Open] = useState(false)
  const [isCR6Open, setIsCR6Open] = useState(false)
  const [isCR7Open, setIsCR7Open] = useState(false)

  return (
    <div>
      {/* red bar */}
      <svg width="100vw" height="139">
        <g>
          <rect width="100%" height="100%" fill="#B32317" />
          <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
        </g>
      </svg>

      <div className="App">
        <header className="App-header">
          <h3 style={{ marginBottom: 5}}>Frequently Asked Questions</h3>
          <a><font size="2">{siteupdatetime}</font></a>

          <BrowserView>
            <div>
              <Grid container spacing={3} justify={"center"}>
                <Grid item xs={4}>
                  <h5>Site Content</h5>
                  <button onClick={() => setIsSC1Open(!isSC1Open)} class="accordion"><center>What is Texas Tech's test positivity rate?</center></button>
                  <div class={isSC1Open ? "" : "panel"}>
                    <p><font size={2}>Although <a href="https://bit.ly/3brUpwK" rel="noopener noreferrer" target='_blank'>Baylor University</a> and other schools provide this data for their communities, Texas Tech has not publicized the number of tests performed so there is no official positivity rate. If this is something you'd like to see, reach out to <a href="mailto:covid19@ttu.edu" rel="noopener noreferrer" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC2Open(!isSC2Open)} class="accordion"><center>Are the quarantine dorms full?</center></button>
                  <div class={isSC2Open ? "" : "panel"}>
                    {/* <p><font size={2}><a href="https://bit.ly/2FbJBXp" target='_blank'>The University of Alabama</a> provides this data for its school system, but Texas Tech does not provide any data for the capacity of the quarantine dorms and isolation dorms, nor their current occupancy levels. If you think this missing data is important, please reach out to <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a> to let them know.</font></p> */}
                    <p><font size={2}>
                      The quarantine and isolation dorms are currently full, according to an internal email from the Managing Director of University Student Housing.
                      Students were once able to be moved into a quarantine or isolation dorm within 1-3 hours, but as Thursday, September 4, a student and their roommate must stay in their dorm while waiting 36-48 hours for hotel accomodations.
                      The university is working to provide more hotel room availability so non-positive residents won't have to share restrooms or common areas with COVID-positive students.
                      If you think the university should provide exact counts of COVID dorm and COVID hotel room occupancies, please reach out to <a href="mailto:covid19@ttu.edu" rel="noopener noreferrer" target='_blank'>covid19@ttu.edu</a> to let them know.</font></p>
                  </div>

                  <button onClick={() => setIsSC3Open(!isSC3Open)} class="accordion"><center>Why aren't there updates during the weekend?</center></button>
                  <div class={isSC3Open ? "" : "panel"}>
                    <p><font size={2}>If you would like to Texas Tech to provide weekend updates like <a href="https://bit.ly/3jTn8hb" rel="noopener noreferrer" target='_blank'>Texas State University</a> and other schools do, email <a href="mailto:covid19@ttu.edu" rel="noopener noreferrer" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC4Open(!isSC4Open)} class="accordion"><center>How accurate is this data?</center></button>
                  <div class={isSC4Open ? "" : "panel"}>
                    <p><font size={2}>The total and active case counts come from <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/356VfOn">Texas Tech</a>. Please keep in mind that if a student or employee tests outside of the university, their result will not be counted here unless they self-report. Also, there are currently presymptomatic and asymptomatic cases unaccounted for. TTU's site does not give any past data. If you would like them to provide that, let them know at <a target='_blank' rel="noopener noreferrer" href="mailto:covid19@ttu.edu">covid19@ttu.edu</a>. </font></p>
                  </div>

                  <button onClick={() => setIsSC5Open(!isSC5Open)} class="accordion"><center>Have any of these cases been hostpitalized?</center></button>
                  <div class={isSC5Open ? "" : "panel"}>
                    <p><font size={2}>As of Wednesday, September 2, there have been no COVID-19 hospitalizataions within the Texas Tech community.</font></p>
                  </div>

                  <button onClick={() => setIsSC6Open(!isSC6Open)} class="accordion"><center>Where are the recovery numbers?</center></button>
                  <div class={isSC6Open ? "" : "panel"}>
                    <p><font size={2}>This dashboard currently focuses on predicting the total spread of the virus. Active cases contribute to the spread so they are also noted here. The number of recoveries does not help us analyze the current spread so there is no graph for them.</font></p>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <h5>TTU COVID Response</h5>
                  <button onClick={() => setIsCR1Open(!isCR1Open)} class="accordion"><center>How often must Texas Tech students get tested?</center></button>
                  <div class={isCR1Open ? "" : "panel"}>
                    <p><font size={2}>Many schools are mandating tests as a part of their robust COVID response plan. For example, <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/2QWtkZc">Boston University</a> is mandating all dorm residents to take a coronavirus test twice a week. The <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/31Z7ri2">University of Arizona</a> has screened sewage to find previously undetected COVID cases in dorm halls. Texas Tech has not mandated any testing at any frequency, and no plans of early detection screening have been announced. </font></p>
                  </div>

                  <button onClick={() => setIsCR2Open(!isCR2Open)} class="accordion"><center>How soon will I be notified that a classmate tested positive?</center></button>
                  <div class={isCR2Open ? "" : "panel"}>
                    <p><font size={2}>
                      An email acquired September 8 revealed that guidelines now ask instructors to inform a course of a COVID-positive classmate, no matter the risk severity.
                      This is an update to the memo acquired August 26 that only required notification for moderate to high risk.
                      There is no guarantee that the class will be moved temporarily online after any exposure.
                      </font></p>
                  </div>

                  <button onClick={() => setIsCR3Open(!isCR3Open)} class="accordion"><center>Why wasn't I told a dorm neighbor was positive?</center></button>
                  <div class={isCR3Open ? "" : "panel"}>
                    <p><font size={2}>
                      When asked on September 11, the Section Manager of Assignments and Contracts at TTU Student Housing cited HIPAA.
                      When asked why instructors could provide this information to classes but Housing could not, they were unable to comment.
                    </font></p>
                  </div>

                  <button onClick={() => setIsCR4Open(!isCR4Open)} class="accordion"><center>Are there any disciplinary procedures for improper mask wear?</center></button>
                  <div class={isCR4Open ? "" : "panel"}>
                    <p><font size={2}>Individuals <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/3lP19tj">will be given</a> a warning, then disciplinary action. The disciplinary actions for students have not been specified. For university employees, a first violation <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/2Z4Ur8H">will result in</a> an informal meeting with their supervisor; the second will result in a verbal warning; the third will result in formal written reprimand with a warning and disciplinary meeting; the fourth will result in a final written reprimand as a final warning and disciplinary meeting; the fifth will result in a request for temination of employment.</font></p>
                  </div>

                  <button onClick={() => setIsCR5Open(!isCR5Open)} class="accordion"><center>What percent of courses are online?</center></button>
                  <div class={isCR5Open ? "" : "panel"}>
                    <p><font size={2}>In <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/3gZYysU">an interview</a> with the student newspaper released August 24, Dr. Schovanec shared that less than half of classes were solely online. 39% were online, 24% were hybrid, and 37% were in in-person. Freshmen courses made up about 72% of all class with some degree of face-to-face instruction. Since the article, more courses have shifted online for two weeks. Some due to a moderate-to-high risk of COVID exposure, some as a precaution. </font></p>
                  </div>

                  <button onClick={() => setIsCR6Open(!isCR6Open)} class="accordion"><center>How many cases must there be for Texas Tech to return to 100% online classes?</center></button>
                  <div class={isCR6Open ? "" : "panel"}>
                    <p><font size={2}>Texas Tech has not announced a total case or active case threshold for campus closure. </font></p>
                  </div>

                  <button onClick={() => setIsCR7Open(!isCR7Open)} class="accordion"><center>What constitutes a "COVID recovery?"</center></button>
                  <div class={isCR7Open ? "" : "panel"}>
                    <p><font size={2}>
                      Many countries that have seen success in battling COVID require two negative tests to be considered COVID-free.
                      Because Texas Tech is following CDC guidelines, no test is necessary.
                      According to an email from the University's Directory of Emergency Management dated September 11, typical cases are considered recovered 10 days from first symptoms or 10 days from a positive test.
                      As long as one's symptoms have been improving and they have been fever-free for 24 hours, they will be considered recovered.
                      There is no requirement for a test to be taken, even if one still has a cough or other symptoms.
                    </font></p>
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
                    <p><font size={2}>Although <a href="https://bit.ly/3brUpwK" rel="noopener noreferrer" target='_blank'>Baylor University</a> and other schools provide this data for their communities, Texas Tech has not publicized the number of tests performed so there is no official positivity rate. If this is something you'd like to see, reach out to <a href="mailto:covid19@ttu.edu" rel="noopener noreferrer" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC2Open(!isSC2Open)} class="accordion"><center>How are the quarantine dorm capacity levels?</center></button>
                  <div class={isSC2Open ? "" : "panel"}>
                    {/* <p><font size={2}><a href="https://bit.ly/2FbJBXp" target='_blank'>The University of Alabama</a> provides this data for its school system, but Texas Tech does not provide any data for the capacity of the quarantine dorms and isolation dorms, nor their current occupancy levels. If you think this missing data is important, please reach out to <a href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a> to let them know.</font></p> */}
                    <p><font size={2}>
                      The quarantine and isolation dorms are currently full, according to an internal email from the Managing Director of University Student Housing.
                      Students were once able to be moved into a quarantine or isolation dorm within 1-3 hours, but as Thursday, September 4, a student and their roommate must stay in their dorm while waiting 36-48 hours for hotel accomodations.
                      The university is working to provide more hotel room availability so non-positive residents won't have to share restrooms or common areas with COVID-positive students.
                      If you think the university should provide exact counts of COVID dorm and COVID hotel room occupancies, please reach out to <a rel="noopener noreferrer" href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a> to let them know.</font></p>
                  </div>

                  <button onClick={() => setIsSC3Open(!isSC3Open)} class="accordion"><center>Why aren't there updates during the weekend?</center></button>
                  <div class={isSC3Open ? "" : "panel"}>
                    <p><font size={2}>If you would like to Texas Tech to provide weekend updates like <a href="https://bit.ly/3jTn8hb" rel="noopener noreferrer" target='_blank'>Texas State University</a> and other schools do, email <a rel="noopener noreferrer" href="mailto:covid19@ttu.edu" target='_blank'>covid19@ttu.edu</a>.</font></p>
                  </div>

                  <button onClick={() => setIsSC4Open(!isSC4Open)} class="accordion" target='_blank'><center>How accurate is this data?</center></button>
                  <div class={isSC4Open ? "" : "panel"}>
                    <p><font size={2}>The total and active case counts come from <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/356VfOn">Texas Tech</a>. Please keep in mind that if a student or employee tests outside of the university, their result will not be counted here unless they self-report. Also, there are currently presymptomatic and asymptomatic cases unaccounted for. TTU's site does not give any past data. If you would like them to provide that, let them know at <a target='_blank' rel="noopener noreferrer" href="mailto:covid19@ttu.edu">covid19@ttu.edu</a>. </font></p>
                  </div>

                  <button onClick={() => setIsSC5Open(!isSC5Open)} class="accordion"><center>Have any of these cases been hostpitalized?</center></button>
                  <div class={isSC5Open ? "" : "panel"}>
                    <p><font size={2}>As of Wednesday, September 2, there have been no COVID-19 hospitalizataions within the Texas Tech community.</font></p>
                  </div>

                  <button onClick={() => setIsSC6Open(!isSC6Open)} class="accordion"><center>Where are the recovery numbers?</center></button>
                  <div class={isSC6Open ? "" : "panel"}>
                    <p><font size={2}>This dashboard currently focuses on predicting the total spread of the virus. Active cases contribute to the spread so they are also noted here. The number of recoveries does not help us analyze the current spread so there is no graph for them.</font></p>
                  </div>
                </Grid>
                <Grid item xs>
                  <h5>TTU COVID Response</h5>
                  <button onClick={() => setIsCR1Open(!isCR1Open)} class="accordion"><center>How often must Texas Tech students get tested?</center></button>
                  <div class={isCR1Open ? "" : "panel"}>
                    <p><font size={2}>Many schools are mandating tests as a part of their robust COVID response plan. For example, <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/2QWtkZc">Boston University</a> is mandating all dorm residents to take a coronavirus test twice a week. The <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/31Z7ri2">University of Arizona</a> has screened sewage to find previously undetected COVID cases in dorm halls. Texas Tech has not mandated any testing at any frequency, and no plans of early detection screening have been announced. </font></p>
                  </div>

                  <button onClick={() => setIsCR2Open(!isCR2Open)} class="accordion"><center>How soon will I be notified that a classmate tested positive?</center></button>
                  <div class={isCR2Open ? "" : "panel"}>
                    <p><font size={2}>
                      An email acquired September 8 revealed that guidelines now ask instructors to inform a course of a COVID-positive classmate, no matter the risk severity.
                      This is an update to the memo acquired August 26 that only required notification for moderate to high risk.
                      There is no guarantee that the class will be moved temporarily online after any exposure.
                    </font></p>
                  </div>

                  <button onClick={() => setIsCR3Open(!isCR3Open)} class="accordion"><center>Why wasn't I told a dorm neighbor was positive?</center></button>
                  <div class={isCR3Open ? "" : "panel"}>
                    <p><font size={2}>
                      When asked on September 11, the Section Manager of Assignments and Contracts at TTU Student Housing cited HIPAA.
                      When asked why instructors could provide this information to classes but Housing could not, they were unable to comment.
                    </font></p>
                  </div>

                  <button onClick={() => setIsCR4Open(!isCR4Open)} class="accordion"><center>Are there any disciplinary procedures for improper mask wear?</center></button>
                  <div class={isCR4Open ? "" : "panel"}>
                    <p><font size={2}>Individuals <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/3lP19tj">will be given</a> a warning, then disciplinary action. The disciplinary actions for students have not been specified. For university employees, a first violation <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/2Z4Ur8H">will result in</a> an informal meeting with their supervisor; the second will result in a verbal warning; the third will result in formal written reprimand with a warning and disciplinary meeting; the fourth will result in a final written reprimand as a final warning and disciplinary meeting; the fifth will result in a request for temination of employment.</font></p>
                  </div>

                  <button onClick={() => setIsCR5Open(!isCR5Open)} class="accordion"><center>What percent of courses are online?</center></button>
                  <div class={isCR5Open ? "" : "panel"}>
                    <p><font size={2}>In <a target='_blank' rel="noopener noreferrer" href="https://bit.ly/3gZYysU">an interview</a> with the student newspaper released August 24, Dr. Schovanec shared that less than half of classes were solely online. 39% were online, 24% were hybrid, and 37% were in in-person. Freshmen courses made up about 72% of all class with some degree of face-to-face instruction. Since the article, more courses have shifted online for two weeks. Some due to a moderate-to-high risk of COVID exposure, some as a precaution. </font></p>
                  </div>

                  <button onClick={() => setIsCR6Open(!isCR6Open)} class="accordion"><center>How many cases must there be for Texas Tech to return to 100% online classes?</center></button>
                  <div class={isCR6Open ? "" : "panel"}>
                    <p><font size={2}>Texas Tech has not announced a total case or active case threshold for campus closure. </font></p>
                  </div>

                  <button onClick={() => setIsCR7Open(!isCR7Open)} class="accordion"><center>What constitutes a "COVID recovery?"</center></button>
                  <div class={isCR7Open ? "" : "panel"}>
                    <p><font size={2}>
                      Many countries that have seen success in battling COVID require two negative tests to be considered COVID-free.
                      Because Texas Tech is following CDC guidelines, no test is necessary.
                      According to an email from the University's Directory of Emergency Management dated September 11, typical cases are considered recovered 10 days from first symptoms or 10 days from a positive test.
                      As long as one's symptoms have been improving and they have been fever-free for 24 hours, they will be considered recovered.
                      There is no requirement for a test to be taken, even if one still has a cough or other symptoms.
                      </font></p>
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

export default Faq;