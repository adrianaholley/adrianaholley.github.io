import { Box, Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import SemesterComparisons from './SemesterComparisons.js';
import Newpie from './Newpie.js';
import Newgraph from './Newgraph.js';
import { globaldate } from './fall2020.js';

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

                <h3 style={{ marginBottom: 0 }}>Daily Reported Cases</h3>
                <a><font size="2">{globaldate}</font></a>
                <br/>
                <br/>

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