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

                {/* page title */}
                <div className={isMobile ? ("page-heading-mobile") : ("page-heading")}>
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

                {/* show graphs */}
                {isMobile ? (
                    /* mobile */
                    <div>
                        <div className="row-top-mobile">
                            <Card className="card-padding">
                                <Newgraph />
                            </Card>
                        </div>
                        <div className="row-middle-mobile">                    
                            <Card className="card-padding">
                                <Newpie />
                            </Card>
                        </div> 
                        <div className="row-bottom-mobile">                    
                            <Box border={1} borderRadius={4}>
                                <SemesterComparisons />
                            </Box>
                        </div> 
                    </div>
                ) : (
                    /* desktop */
                    <div>
                        <div className="row-top">
                            <Card className="card-padding">
                                <Newpie />
                            </Card>
                        
                            <Card className="card-padding">
                                <Newgraph />
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

export default New;