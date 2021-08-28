import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import Newpie from './Newpie.js';
import Newgraph from './Newgraph.js';

var siteupdatetime = "Last updated Wednesday, November 18 at 5:25pm CST."
// var notice = "Data for Oct 28 - Oct 30 is affected by a delay in reporting from labs. This will affect the 7-day average for the first week of November."
class New extends Component {

    render() {
        return (
            <div className='responsivecontainer'>

                {/* red bar */}
                <svg width="100%" height="139">
                    <g>
                        <rect width="100%" height="100%" fill="#B32317" />
                        <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">
                            Powered by a concerned Red Raider
                        </text>
                    </g>
                </svg>

                {/* page title, subtitle */}
                {/* <p className="popinfo"><i><font color="blue" size="3">
                    <div>
                        Note from the Developer: 
                        Thank you for your support during my daily updates throughout the Fall 2020 semester. 
                        Your donations and kind words were much appreciated. 
                        Get vaccinated as soon as you can, and be sure to stay up to date on CDC guidelines to help reduce spread of the more contagious COVID variants.
                    </div>
                </font></i></p> */}

                <h3 style={{ marginBottom: 0 }}>Daily Reported Cases</h3>
                <a><font size="2">{siteupdatetime}</font></a>
                <br/>
                <br/>
                {/* <a><b><font color="cc0000" size="2">{notice}</font></b></a> */}

                <center>

                    {/* show graphs */}
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <Card>
                                <Newpie />
                            </Card>
                        </Grid>
                        {isMobile ? (
                            <Newgraph />
                        ) : (
                            <Grid item xs={8}>
                                <Card>
                                    <Newgraph />
                                </Card>
                            </Grid>)}
                    </Grid>

                    {/* show texts */}
                    <BrowserView>
                        <div className="adjustabletext">
                            <h4>What is logarithmic scale?</h4>
                            <p><font size="4">
                                Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. 
                                A logarithmic scale is a more helpful way to see that. 
                                Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. 
                                For example, 20, 200, and 2000 each increase tenfold.  
                            </font></p>
                        </div>
                    </BrowserView>

                    <MobileView>
                        <div className="adjustabletextmobile">
                            <h4>What is logarithmic scale?</h4>
                            <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
                        </div>
                    </MobileView>

                </center>
            </div>
        )
    }
}

export default New;