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

                {/* show graphs */}
                <div className="row1">
                    <Card className="card-padding">
                        <Newpie />
                    </Card>
                
                    <Card className="card-padding">
                        <Newgraph />
                    </Card>
                </div>
                
                <div className="row2">                    
                    <Card className="card-padding">
                        <SemesterComparisons />
                    </Card>
                </div>
            </div>
        )
    }
}

export default New;