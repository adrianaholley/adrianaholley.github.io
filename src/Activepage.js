import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import Activegraph from './Activegraph';

var siteupdatetime = "Last updated Wednesday, September 30 at 5:00pm CST."

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
                <h1></h1>
                <h3 style={{ marginBottom: 0 }}>Active Reported Cases</h3>
                <a><font size="2">{siteupdatetime}</font></a>

                <center>

                    <Grid container>
                        <Grid item xs>
                            <br />
                            
                            <h5 style={{ marginBottom: -10, marginTop: 5 }}>
                                <div className="adjustabletext">
                                    *How is the start date found? 
                                </div>
                            </h5>
                            <p><font size={isMobile ? (3) : (4)}>
                                <div className="adjustabletext">
                                    Each time Tech posts an update, they share the number of cases moved into "recovery" on that date. 
                                    For example, Sept 14 they shared there were 154 new recoveries. 
                                    Since the majority of COVID illnesses last 10 days from first symptoms or test date, we assume these cases began on Sept 4. 
                                    
                                </div>
                            </font></p>

                            <h5 style={{ marginBottom: -10, marginTop: 5 }}>
                                <div className="adjustabletext">
                                    What if recovery numbers are shared on a Monday?
                                </div>
                            </h5>
                            <p><font size={isMobile ? (3) : (4)}>
                                <div className="adjustabletext">
                                    Updates given on Mondays (or any update after a gap, really), are cumulative from the weekend, and Sept 14 was a Monday. 
                                    That means some of those cases may have recovered on Sept 12 or Sept 13, which means they actually started Sept 2 or 3. 
                                </div>
                            </font></p>

                            <h5 style={{ marginBottom: -10, marginTop: 5 }}>
                                <div className="adjustabletext">
                                    Why don't the 10 most recent days have bars?
                                </div>
                            </h5>
                            <p><font size={isMobile ? (3) : (4)}>
                                <div className="adjustabletext">
                                    We (you and I) only know the number of illnesses that started during this time by counting 10 days backward once they've recovered. 
                                    Since the cases that started in the past 10 days have not recovered yet, we don't know how many cases started during that time. 
                                    If you think Tech's official dashboard should show cases by test date like&nbsp;
                                    <a href="https://bit.ly/3jTn8hb">
                                        Texas State's
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
                                        <li>September 26: Second home game</li>
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
                                <li>September 26: Second home game</li>
                            </p></font>
                        </div>
                    </MobileView>

                </center>
            </div>
        )
    }
}

export default Activepage;