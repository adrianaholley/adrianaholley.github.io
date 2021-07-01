import { Grid } from '@material-ui/core';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import Newpie from './Newpie.js';
import Newgraph from './Newgraph.js';

var siteupdatetime = "Last updated Wednesday, November 18 at 5:25pm CST."
var notice = "Data for Oct 28 - Oct 30 is affected by a delay in reporting from labs. This will affect the 7-day average for the first week of November."
class New extends Component {

    render() {
        return (
            <div className='responsivecontainer'>

                {/* red bar */}
                <svg width="100%" height="139">
                    <g>
                        <rect width="100%" height="100%" fill="#B32317" />
                        <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                    </g>
                </svg>

                {/* page title, subtitle */}
                <p className="popinfo"><i><font color="blue" size="3">
                    <div>
                        Note from the Developer: 
                        Thank you for your support during my daily updates throughout the Fall 2020 semester. 
                        Your donations and kind words were much appreciated. 
                        Get vaccinated as soon as you can, and be sure to stay up to date on CDC guidelines to help reduce spread of the more contagious COVID variants.
                    </div>
                </font></i></p>

                <h3 style={{ marginBottom: 0 }}>Daily Reported Cases</h3>
                <a><font size="2">{siteupdatetime}</font></a>
                <br/>
                <a><b><font color="cc0000" size="2">{notice}</font></b></a>

                <center>

                    {/* show graphs */}
                    <Grid container>
                        <Grid item xs><Newpie /></Grid>
                        {isMobile ? (<Newgraph />) : (<Grid item xs={7}><Newgraph /></Grid>)}
                    </Grid>

                    {/* show texts */}
                    <BrowserView>
                        <div className="adjustabletext">
                            <Grid container spacing={5}>

                                {/* left */}
                                <Grid item xs alignItems={"left"}>
                                    <h4>Notable Dates</h4>
                                    <font size="4"><p style={{ textAlign: "left" }}>
                                        <li>August 3: Campus doors opened<br /></li>
                                        <li>August 8: Dorms open for move-in<br /></li>
                                        <li>August 24: First day of MWF classes<br /></li>
                                        <li>August 25: First day of TR classes<br /></li>
                                        <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                        <li>September 4: Opening of on-campus testing center<br /></li>
                                        <li>September 5-7: Labor Day weekend<br /></li>
                                        <li>September 9: Census Date for Texas Tech<br /></li>
                                        <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                        <li>September 12: First football game, played at home</li>
                                        <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                        <li>September 26: Second home game</li>
                                    </p></font>
                                </Grid>

                                {/* right */}
                                <Grid item xs>
                                    <h4>How are projections made?</h4>
                                    <p>
                                        <font size="4">
                                            As of Sept 19, projections are now made comparing week-over-week and day-by-day case growth, using only data from the two most recent weeks.
                                            For example, to create Monday's projection, we take the Fri-Mon case growth from a week before, and the Fri-Mon case growth from two weeks before.
                                            We see if the growth rate has increased or decreased, and by how much.
                                            Projections assume that growth rate trend will continue.
                                            Projections <b>do not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.
                                        </font>
                                    </p>
                                    <h4>What is logarithmic scale?</h4>
                                    <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
                                </Grid>

                            </Grid>
                        </div>
                    </BrowserView>

                    <MobileView>
                        <div className="adjustabletextmobile">

                            {/* top */}
                            <h4>How are projections made?</h4>
                            <p>
                                <font size="4">
                                    As of Sept 19, projections are now made comparing week-over-week and day-by-day case growth, using only data from the two most recent weeks.
                                    For example, to create Monday's projection, we take the Fri-Mon case growth from a week ago, and the Fri-Mon case growth from two weeks ago.
                                    We see if the growth rate has increased or decreased, and by how much.
                                    Projections assume that growth rate trend will continue.
                                    Projections <b>do not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.
                                </font>
                            </p>

                            {/* middle */}
                            <h4>What is logarithmic scale?</h4>
                            <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>

                            {/* bottom */}
                            <h4>Notable Dates</h4>
                            <font size="4"><p style={{ textAlign: "left" }}>
                                <li>August 3: Campus doors opened<br /></li>
                                <li>August 8: Dorms open for move-in<br /></li>
                                <li>August 24: First day of MWF classes<br /></li>
                                <li>August 25: First day of TR classes<br /></li>
                                <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                <li>September 4: Opening of on-campus testing center<br /></li>
                                <li>September 5-7: Labor Day weekend<br /></li>
                                <li>September 9: Census Date for Texas Tech<br /></li>
                                <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                <li>September 12: First football game, played at home</li>
                                <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                <li>September 26: Second home game</li>
                            </p></font>
                        </div>
                    </MobileView>

                </center>
            </div>
        )
    }
}

export default New;