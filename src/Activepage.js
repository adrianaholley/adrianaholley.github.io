import { Grid } from '@material-ui/core';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import Activegraph from './Activegraph';

var siteupdatetime = "Last updated Wednesday, November 18 at 5:25pm CST."
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

                {/* title, subtitle */}
                {/* <p className="popinfo"><i><font color="blue" size="3">
                    <div>
                        Note from the Developer: 
                        Thank you for your support during my daily updates throughout the Fall 2020 semester. 
                        Your donations and kind words were much appreciated. 
                        Get vaccinated as soon as you can, and be sure to stay up to date on CDC guidelines to help reduce spread of the more contagious COVID variants.
                    </div>
                </font></i></p> */}

                <h3 style={{ marginBottom: 0 }}>Active Reported Cases</h3>
                <a><font size="2">{siteupdatetime}</font></a>
                <br/>
                {/* <a><b><font color="cc0000" size="2">{notice}</font></b></a> */}

                <center>

                        {/* show graphs */}
                        {isMobile ? (<Activegraph />) : (<Grid item xs={7}><Activegraph /></Grid>)}

                    {/* show texts */}

                </center>
            </div>
        )
    }
}

export default Activepage;