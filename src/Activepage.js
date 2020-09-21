import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Activegraph from './Activegraph';

const noprojections = [
    {
        "name": "Aug 3",
        "Active cases": 18
    },
    {
        "name": "Aug 4",
        "nodata": 0
    },
    {
        "name": "Aug 5",
        "nodata": 0
    },
    {
        "name": "Aug 6",
        "nodata": 0
    },
    {
        "name": "Aug 7",
        "nodata": 0
    },
    {
        "name": "Aug 8",
        "nodata": 0
    },
    {
        "name": "Aug 9",
        "nodata": 0
    },
    {
        "name": "Aug 10",
        "Active cases": 25
    },
    {
        "name": "Aug 11",
        "nodata": 0
    },
    {
        "name": "Aug 12",
        "nodata": 0
    },
    {
        "name": "Aug 13",
        "nodata": 0
    },
    {
        "name": "Aug 14",
        "nodata": 0
    },
    {
        "name": "Aug 15",
        "nodata": 0
    },
    {
        "name": "Aug 16",
        "nodata": 0
    },
    {
        "name": "Aug 17",
        "Active cases": 38
    },
    {
        "name": "Aug 18",
        "nodata": 0
    },
    {
        "name": "Aug 19",
        "nodata": 0
    },
    {
        "name": "Aug 20",
        "nodata": 0
    },
    {
        "name": "Aug 21",
        "Active cases": 53
    },
    {
        "name": "Aug 22",
        "nodata": 0
    },
    {
        "name": "Aug 23",
        "nodata": 0
    },
    {
        "name": "Aug 24",
        "nodata": 0
    },
    {
        "name": "Aug 25",
        "Active cases": 87
    },
    {
        "name": "Aug 26",
        "Active cases": 146
    },
    {
        "name": "Aug 27",
        "nodata": 0
    },
    {
        "name": "Aug 28",
        "Active cases": 176
    },
    {
        "name": "Aug 29",
        "nodata": 0
    },
    {
        "name": "Aug 30",
        "nodata": 0
    },
    {
        "name": "Aug 31",
        "Active cases": 268
    },
    {
        "name": "Sept 1",
        "Active cases": 418
    },
    {
        "name": "Sept 2",
        "Active cases": 453
    },
    {
        "name": "Sept 3",
        "Active cases": 477
    },
    {
        "name": "Sept 4",
        "Active cases": 490
    },
    {
        "name": "Sept 5",
        "nodata": 0
    },
    {
        "name": "Sept 6",
        "nodata": 0
    },
    {
        "name": "Sept 7",
        "Active cases": 626
    },
    {
        "name": "Sept 8",
        "Active cases": 650
    },
    {
        "name": "Sept 9",
        "Active cases": 612
    },
    {
        "name": "Sept 10",
        "Active cases": 543
    },
    {
        "name": "Sept 11",
        "Active cases": 426
    },
    {
        "name": "Sept 12",
        "nodata": 0
    },
    {
        "name": "Sept 13",
        "nodata": 0
    },
    {
        "name": "Sept 14",
        "Active cases": 461
    },
    {
        "name": "Sept 15",
        "Active cases": 357
    },
    {
        "name": "Sept 16",
        "Active cases": 171
    },
    {
        "name": "Sept 17",
        "Active cases": 186
    },
    {
        "name": "Sept 18",
        "Active cases": 187
    },
    {
        "name": null
    }
]

const RedSwitch = withStyles({
    switchBase: {
        color: grey[300],
        '&$checked': {
            color: red[700],
        },
        '&$checked + $track': {
            backgroundColor: red[700],
        },
    },
    checked: {},
    track: {},
})(Switch);

class Activepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ZeroWeeks: true,
            OneWeek: true,
            TwoWeeks: true,
            activedata: {},
            LogView: true
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
                <h1></h1>
                <h3 style={{ marginBottom: 0 }}>Active Reported Cases*</h3>
                <a><font size="2">Last updated Sunday, September 20 at 5:50pm.</font></a>

                <center>

                    <Grid container>

                        <Grid item xs>
                            <br />
                            <h5 style={{ marginBottom: -10, marginTop: 5 }}>
                                <div className="adjustabletext">
                                    *This data is <u><i>not</i></u> an accurate reflection of active cases on a given date.
                                </div>
                            </h5>
                            <p><font size={isMobile ? (3) : (4)}>
                                <div className="adjustabletext">
                                    Past dates' counts are not updated to show the true number of active COVID cases once discovered.
                                </div>
                            </font></p>

                            <h5 style={{ marginBottom: -10, marginTop: 5 }}>
                                <div className="adjustabletext">
                                    What does this mean?
                                </div>
                            </h5>
                            <p><font size={isMobile ? (3) : (4)}>
                                <div className="adjustabletext">
                                    Let's say that 50 positive people took a test today, and 50 positive people took one yesterday.
                                    Since it takes a while to get results back, let's assume we don't see these cases reflected on the site until 2 days after tests are taken.
                                    That means today's active case count should really be updated 2 days from now to add 100 more cases.
                                </div>
                            </font></p>

                            <h5 style={{ marginBottom: -10, marginTop: 5 }}>
                                <div className="adjustabletext">
                                    Why aren't these numbers accurate?
                                </div>
                            </h5>
                            <p><font size={isMobile ? (3) : (4)}>
                                <div className="adjustabletext">
                                    Texas Tech doesn't release that information.
                                    If you think Texas Tech should show cases by test date like&nbsp;
                                    <a href="https://bit.ly/3jTn8hb">
                                        Texas State
                                    </a>
                                    &nbsp;does, email&nbsp;
                                    <a href="mailto:covid19@ttu.edu">
                                        covid19@ttu.edu
                                    </a>
                                    .
                                </div>
                            </font></p>
                        </Grid>

                        {/* show graphs */}
                        {isMobile ? (<Activegraph />) : (<Grid item xs={7}><Activegraph /></Grid>)}

                    </Grid>

                    {/* show texts */}
                    <BrowserView>
                        <div className="adjustabletext">
                            <Grid container spacing={5}>
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
                                    </p></font>
                                </Grid>
                                <Grid item xs>
                                    <h4>What is logarithmic scale?</h4>
                                    <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
                                </Grid>
                            </Grid>
                        </div>
                    </BrowserView>

                    <MobileView>
                        <div className="adjustabletextmobile">
                            <h4>What is logarithmic scale?</h4>
                            <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
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
                            </p></font>
                        </div>
                    </MobileView>

                </center>
            </div>
        )
    }
}

export default Activepage;