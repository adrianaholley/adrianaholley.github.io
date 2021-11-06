import { Box, Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import SemesterComparisons from './SemesterComparisons.js';
import Activegraph from './Activegraph';
import { globaldate } from './fall2020.js';

// var notice = "Data for Oct 28 - Oct 30 is affected by a delay in reporting from labs."

class Activepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ZeroWeeks: true,
            OneWeek: true,
            TwoWeeks: true,
            activedata: {},
            LogViewIsOff: true
        };
    }

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

                {/* page title */}
                <div className="page-heading">
                    <div>
                        <span className="page-heading-title">
                            Daily Reported Cases
                        </span>
                    </div>
                    <div>
                        <span className="page-heading-subtitle">
                            {globaldate}
                        </span>
                    </div>
                </div>

                <center>
                    {/* show graphs */}
                    <Grid container spacing={1}>

                        {/* if mobile, don't show table first */}
                        {isMobile ? (
                            ''
                        ) : (
                            <Grid item xs>
                                <Box border={1} borderRadius={4}>
                                    <Card >
                                        <SemesterComparisons />
                                    </Card>
                                </Box>
                            </Grid>
                        )}

                        <Grid item xs={isMobile ? ('0') : ('8')}>
                            <Card>
                                <Activegraph />
                            </Card>
                        </Grid>

                        {/* mobile, so show table last */}
                        {isMobile ? (
                            <Box border={1} borderRadius={4}>
                                <Card >
                                    <SemesterComparisons />
                                </Card>
                            </Box>
                        ) : (
                            ''
                        )}
                    </Grid>
                </center>
            </div>
        )
    }
}

export default Activepage;