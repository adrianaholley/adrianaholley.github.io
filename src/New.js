import { Box, Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import SemesterComparisons from './SemesterComparisons.js';
import Newpie from './Newpie.js';
import Newgraph from './Newgraph.js';

var siteupdatetime = "Last updated Friday, August 27, 2021 at 9:00pm CST."
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

                            {/* if mobile, don't show table first */}
                            {isMobile ? ('') : (
                                <Box border={1} borderRadius={4}>
                                    <Card >
                                        <SemesterComparisons />
                                    </Card>
                                </Box>
                            )}

                            {/* if mobile, don't show pie next */}
                            {isMobile ? ('') : (
                                <Box paddingTop={1}>
                                    <Card>
                                        <Newpie />
                                    </Card>
                                </Box>
                            )}
                            

                        </Grid>

                        <Grid item xs={isMobile ? ('0') : ('8')}>
                            <Card>
                                <Newgraph />
                            </Card>
                        </Grid>

                        {/* mobile, so show pie second  */}
                        {isMobile ? (
                        <Card>
                            <Newpie />
                        </Card>
                        ) : ('')}
                        


                        {/* mobile, so show table last */}
                        {isMobile ? (
                            <Box border={1} borderRadius={4}>
                            <Card >
                                <SemesterComparisons />
                            </Card>
                        </Box>
                        ) : ('')}

                    </Grid>

                </center>
            </div>
        )
    }
}

export default New;