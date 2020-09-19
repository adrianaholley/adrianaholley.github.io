import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView } from "react-device-detect";
import React, { Component } from 'react';
import Totalpie from './Totalpie.js';
import Totalpiemobile from './Totalpiemobile.js';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";

const zeroweeks = [
    {
        "name": "Aug 3",
        "Total": 18,
        "nodata": 0
    },
    {
        "name": "Aug 4",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 5",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 6",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 7",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 8",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 9",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 10",
        "Total": 44,
        "nodata": 0
    },
    {
        "name": "Aug 11",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 12",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 13",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 14",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 15",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 16",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 17",
        "Total": 67,
        "nodata": 0
    },
    {
        "name": "Aug 18",
        "Total": 75,
        "nodata": 0
    },
    {
        "name": "Aug 19",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 20",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 21",
        "Total": 103,
        "nodata": 0
    },
    {
        "name": "Aug 22",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 23",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 24",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 25",
        "Total": 149,
        "nodata": 0
    },
    {
        "name": "Aug 26",
        "Total": 206,
        "nodata": 0
    },
    {
        "name": "Aug 27",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 28",
        "Total": 260,
        "nodata": 0
    },
    {
        "name": "Aug 29",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 30",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 31",
        "Total": 378,
        "nodata": 0
    },
    {
        "name": "Sept 1",
        "Total": 551,
        "nodata": 0
    },
    {
        "name": "Sept 2",
        "Total": 624,
        "nodata": 0
    },
    {
        "name": "Sept 3",
        "Total": 671,
        "nodata": 0
    },
    {
        "name": "Sept 4",
        "Total": 717,
        "nodata": 0
    },
    {
        "name": "Sept 5",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 6",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 7",
        "Total": 945,
        "nodata": 0
    },
    {
        "name": "Sept 8",
        "Total": 1020,
        "nodata": 0
    },
    {
        "name": "Sept 9",
        "Total": 1055,
        "nodata": 0
    },
    {
        "name": "Sept 10",
        "Total": 1064,
        "nodata": 0
    },
    {
        "name": "Sept 11",
        "Total": 1091,
        "nodata": 0
    },
    {
        "name": "Sept 12",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 13",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 14",
        "Total": 1280,
        "nodata": 0
    },
    {
        "name": "Sept 15",
        "Total": 1293,
        "nodata": 0
    },
    {
        "name": "Sept 16",
        "Total": 1343,
        "nodata": 0
    },
    {
        "name": "Sept 17",
        "Total": 1375,
        "nodata": 0
    },
    {
        "name": "Sept 18",
        "Total": 1407,
        "nodata": 0
    }
]

const oneweek = [
    {
        "name": "Aug 3",
        "Total": 18,
        "nodata": 0
    },
    {
        "name": "Aug 4",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 5",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 6",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 7",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 8",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 9",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 10",
        "Total": 44,
        "nodata": 0
    },
    {
        "name": "Aug 11",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 12",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 13",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 14",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 15",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 16",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 17",
        "Total": 67,
        "nodata": 0
    },
    {
        "name": "Aug 18",
        "Total": 75,
        "nodata": 0
    },
    {
        "name": "Aug 19",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 20",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 21",
        "Total": 103,
        "nodata": 0
    },
    {
        "name": "Aug 22",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 23",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 24",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 25",
        "Total": 149,
        "nodata": 0
    },
    {
        "name": "Aug 26",
        "Total": 206,
        "nodata": 0
    },
    {
        "name": "Aug 27",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 28",
        "Total": 260,
        "nodata": 0
    },
    {
        "name": "Aug 29",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 30",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Aug 31",
        "Total": 378,
        "nodata": 0
    },
    {
        "name": "Sept 1",
        "Total": 551,
        "nodata": 0
    },
    {
        "name": "Sept 2",
        "Total": 624,
        "nodata": 0
    },
    {
        "name": "Sept 3",
        "Total": 671,
        "nodata": 0
    },
    {
        "name": "Sept 4",
        "Total": 717,
        "nodata": 0
    },
    {
        "name": "Sept 5",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 6",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 7",
        "Total": 945,
        "nodata": 0
    },
    {
        "name": "Sept 8",
        "Total": 1020,
        "nodata": 0
    },
    {
        "name": "Sept 9",
        "Total": 1055,
        "nodata": 0
    },
    {
        "name": "Sept 10",
        "Total": 1064,
        "nodata": 0
    },
    {
        "name": "Sept 11",
        "Total": 1091,
        "nodata": 0
    },
    {
        "name": "Sept 12",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 13",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 14",
        "Total": 1280,
        "nodata": 0
    },
    {
        "name": "Sept 15",
        "Total": 1293,
        "nodata": 0
    },
    {
        "name": "Sept 16",
        "Total": 1343,
        "nodata": 0
    },
    {
        "name": "Sept 17",
        "Total": 1375,
        "nodata": 0
    },
    {
        "name": "Sept 18",
        "Total": 1407,
        "nodata": 0
    },
    {
        "name": "Sept 19",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 20",
        "nodata": 0,
        "nodata": 0
    },
    {
        "name": "Sept 21",
        "Total": null,
        "Sept18": 1540
    },
    {
        "name": "Sept 22",
        "nodata": 0,
        "Sept18": 1542
    },
    {
        "name": "Sept 23",
        "nodata": 0,
        "Sept18": 1609
    },
    {
        "name": "Sept 24",
        "nodata": 0,
        "Sept18": 1716
    },
    {
        "name": "Sept 25",
        "nodata": 0,
        "Sept18": 1753
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

const RedRadio = withStyles({
    root: {
        color: grey[700],
        '&$checked': {
            color: red[700],
        },
        '&$checked + $track': {
            backgroundColor: red[700],
        },
    },
    checked: {},
    track: {},
})(Radio);

class Totalclass extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            OneWeek: true,
            TwoWeeks: true,
            data: {},
            LogView: true
        };
    }

    // constructor() {
    //     super();
    //     this.state = {
    //       name: "React"
    //     };
    //     this.onChangeValue = this.onChangeValue.bind(this);
    //   }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className='responsivecontainer'>
                <svg width="100%" height="139">
                    <g>
                        <rect width="100%" height="100%" fill="#B32317" />
                        <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                    </g>
                </svg>
                <h1></h1>
                <h3 style={{ marginBottom: 0 }}>Total Reported Cases</h3>
                <a><font size="2">Last updated Saturday, September 19 at 3:20pm. </font></a>
                <center>
                    <div>
                        <BrowserView>

                            <div>
                                <Grid container>
                                    <Grid item xs>
                                        <Grid item>
                                            <h5 style={{ marginBottom: 0, marginTop: 5 }}>Percent That Has Had COVID</h5>
                                            <a><i><font size="2">1,407 positive reports from 46,000* students and employees.</font></i></a>
                                            <Totalpie />
                                        </Grid>
                                        <Grid>
                                            <a><font size="3">One week before Sept 18:<b> 2.37%</b></font></a>
                                            <br />
                                            <a><font size="3">Two weeks before Sept 18:<b> 1.56%</b></font></a>

                                        </Grid>
                                        <div className="adjustabletext">
                                            <p className="popinfo"><i><font size="2">
                                                *The total population includes those who are 100% remote and is an estimate,
                                                as Dr. Schovanec stated Sept 16 that there are "more than 46,000" students and employees.
                                                The Interim Director of Emergency Management did not respond to a request for the exact metric.
                                        </font></i></p>
                                        </div>


                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid>
                                            <h5 style={{ marginBottom: 0, marginTop: 5 }}>Cases by Day Since August 1</h5>
                                            <div className="adjustabletext">

                                                <a><i><font size="2">
                                                    Case counts reflect the date reported on TTU's website, not first date of symptoms.
                                                    They do not include those still needing to self-report, nor those waiting 0-3 days for results.
                                            </font></i></a>
                                            </div>
                                        </Grid>
                                        <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                                        {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TwoWeeks: this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projection - 2 Weeks" /> */}
                                        <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                                        <ResponsiveContainer width={'100%'} height={"100%"} aspect='2.4'>

                                            {this.state.OneWeek ? (
                                                <ComposedChart data={oneweek} margin={{ top: 0, right: 40, bottom: 0, left: 0 }}>
                                                    <CartesianGrid />
                                                    <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                                    {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 500']} fontSize="12" />)}
                                                    <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="12" /></Bar>
                                                    {this.state.OneWeek ? (<Line dataKey="Sept18" connectNulls={true} stroke="#333333" fill="#333333" strokeDasharray="1 2" />) : ("")}
                                                    {/* {this.state.OneWeek ? (<Line dataKey="Sept21" connectNulls={true}stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
                                                    <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                                </ComposedChart>
                                            )

                                                : (
                                                    <ComposedChart data={zeroweeks} margin={{ top: 0, right: 40, bottom: 0, left: 0 }}>
                                                        <CartesianGrid />
                                                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 850']} fontSize="12" />)}
                                                        <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="12" /></Bar>
                                                        {this.state.OneWeek ? (<Line dataKey="Sept18" connecttNulls={true} stroke="#333333" fill="#333333" strokeDasharray="3 3" />) : ("")}
                                                        {/* {this.state.OneWeek ? (<Line dataKey="Sept21" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
                                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                                    </ComposedChart>
                                                )}
                                        </ResponsiveContainer>
                                    </Grid>
                                </Grid>
                            </div>
                        </BrowserView>

                        <MobileView>
                            <br />
                            <h5 style={{ marginBottom: 0, marginTop: 5 }}>Percent That Has Had COVID</h5>
                            <a><i><font size="2">1,375 positive reports from 46,000* students and employees.</font></i></a>
                            <Totalpiemobile />
                            <a><font size="3">One week before Sept 18:<b> 2.37%</b></font></a>
                            <br />
                            <a><font size="3">Two weeks before Sept 18:<b> 1.56%</b></font></a>
                            <p className="popinfo"><i><font size="2">
                                <div className="adjustabletextmobile">
                                    *The total population includes those who are 100% remote and is an estimate,
                                    as Dr. Schovanec stated Sept 16 that there are "more than 46,000" students and employees.
                                    The Interim Director of Emergency Management did not respond to a request for the exact metric.
                                </div>
                            </font></i></p>

                            <br />
                            <h5 style={{ marginBottom: 0, marginTop: 5 }}>Cases by Day Since August 1</h5>
                            <Grid>
                                <a><i><font size="2">
                                    <div className="adjustabletextmobile">
                                        Case counts reflect the date reported on TTU's website, not first date of symptoms.
                                        They do not include those still needing to self-report, nor those waiting 0-3 days for results.
                                    </div>
                                </font></i></a>
                            </Grid>
                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel con   trol={<RedSwitch onChange={() => this.setState({ TwoWeeks: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projection - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width={'99%'} height={"99%"} aspect='1'>

                                {this.state.OneWeek ? (

                                    <ComposedChart data={oneweek} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                        <CartesianGrid />
                                        <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 500']} fontSize="12" />)}
                                        <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="7" /></Bar>
                                        {this.state.OneWeek ? (<Line dataKey="Sept18" connectNulls={true} stroke="#333333" fill="#333333" strokeDasharray="1 2" />) : ("")}
                                        {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept11" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                ) : (
                                        <ComposedChart data={zeroweeks} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                            <CartesianGrid />
                                            <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 850']} fontSize="12" />)}
                                            <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="7" /></Bar>
                                            {this.state.OneWeek ? (<Line dataKey="Sept18" connectNulls={true} stroke="#333333" fill="#333333" strokeDasharray="1 2" />) : ("")}
                                            {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept11" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
                                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                        </ComposedChart>

                                    )}

                            </ResponsiveContainer>
                        </MobileView>

                        <br />

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
                                        <h4>How are projections made?</h4>
                                        <p>
                                            <font size="4">
                                                As of Sept 19, projections are now made comparing week-over-week and day-by-day case growth, using only data from the two most recent weeks.
                                                For example, to create Monday's projection, we take the Fri-Mon case growth from a week ago, and the Fri-Mon case growth from two weeks ago.
                                                We see if the growth rate has increased or decreased, and by how much.
                                                Projections assume that growth rate trend will continue.
                                                Projections <b>do not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.
                                            </font>
                                        </p>
                                        <h4>What is logarithmic sclae?</h4>
                                        <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>

                                    </Grid>
                                </Grid>
                            </div>
                        </BrowserView>


                        <MobileView>
                            <div className="adjustabletextmobile">
                                <h4>How are projections made?</h4>
                                <p>
                                    <font size="4">
                                        As of Sept 19, projections are now made comparing week-over-week and day-by-day case growth, using only data from the two most recent weeks.
                                        For example, to create Monday's projection, we take the Fri-Mon case growth from a week ago, and the Fri-Mon case growth from two weeks ago.
                                        We see if the growth rate has increased or decreased, and by how much.
                                        Projections assume that growth rate trend will continue.
                                        Projections <b>do not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.
                                    </font>
                                </p>
                                <h4>What is logarithmic sclae?</h4>
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
                    </div>
                </center>
            </div>
        )
    }
}

export default Totalclass;