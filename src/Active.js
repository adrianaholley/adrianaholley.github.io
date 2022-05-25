import { Box } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { isMobile } from "react-device-detect";
import React, { Component } from 'react';
import SemesterComparisons from './SemesterComparisons.js';
import ActiveGraph from './ActiveGraph';
import { globaldate } from './data.js';

// var notice = "Data for Oct 28 - Oct 30 is affected by a delay in reporting from labs."

class Active extends Component {
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
                        <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">
                            Powered by a concerned Red Raider
                        </text>
                    </g>
                </svg>

                {/* page title */}
                <div className={isMobile ? ("page-heading-mobile") : ("page-heading")}>
                    <div>
                        <span className="page-heading-title">
                            Daily Active Cases
                        </span>
                    </div>
                    <div>
                        <span className="page-heading-subtitle">
                            {globaldate}
                        </span>
                    </div>
                    <div>
                        <span className="page-heading-notice">
                            <font color="blue">
                                Unfortuantely, Texas Tech University ended its Covid data reporting on March 3, 2022. 
                                Hopefully the university resumes its campus reporting in Fall 2022 so students and staff are better able to conduct risk assessment for their health and safety. 
                            </font>
                        </span>
                    </div>
                </div>

                {/* show graphs */}
                {isMobile ? (
                    /* mobile */
                    <div>
                        <div className="row-top-mobile">
                            <Card className="card-padding">
                                <ActiveGraph />
                            </Card>
                        </div>
                        <div className="row-bottom-mobile">
                            <Card className="card-padding">
                                <Box border={1} borderRadius={4}>
                                    <SemesterComparisons />
                                </Box>
                            </Card>
                        </div>
                    </div>
                ) : (
                    /* desktop */
                    <div>
                        <div className="row-top">
                            <Card className="card-padding">
                                <ActiveGraph />
                            </Card>
                        </div>
                        <div className="row-bottom">
                            <Card className="card-padding">
                                <Box border={1} borderRadius={4}>
                                    <SemesterComparisons />
                                </Box>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Active;