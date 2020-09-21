import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const noprojections = [
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

const projections = [
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
        "Projection for this date": 1407
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
        "Projection for this date": 1540
    },
    {
        "name": "Sept 22",
        "nodata": 0,
        "Projection for this date": 1542
    },
    {
        "name": "Sept 23",
        "nodata": 0,
        "Projection for this date": 1609
    },
    {
        "name": "Sept 24",
        "nodata": 0,
        "Projection for this date": 1716
    },
    {
        "name": "Sept 25",
        "nodata": 0,
        "Projection for this date": 1753
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

class Totalgraph extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            AddCurrentProjections: true,
            TwoWeeks: true,
            data: {},
            LogView: true
        };
    }

    onChangeValue(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <center>
                {isMobile ? (<br />) : ('')}

                {/* title, subtitle */}
                <Grid>
                    <h5 style={{ marginBottom: 10, marginTop: 5 }}>Cases by Day Since August 1</h5>
                    <a><i><font size="2">
                    <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")} >
                            Case counts reflect the <b>date reported</b> on TTU's website, not first date of symptoms.
                            They do not include those still needing to self-report, nor those waiting 0-3 days for results.
                        </div>
                    </font></i></a>
                </Grid>

                {/* switches */}
                <FormControlLabel control={<RedSwitch checked={this.state.AddCurrentProjections} onChange={() => this.setState({ AddCurrentProjections: !this.state.AddCurrentProjections })} name="AddCurrentProjections" />} label="Add projections" />
                <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />

                {/* bar chart */}
                <ResponsiveContainer width={isMobile ? ('99%') : ('100%')} height={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('2.6')}>
                    <ComposedChart data={this.state.AddCurrentProjections ? (projections) : (noprojections)} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 80, bottom: 0, left: 0 })}>
                        <CartesianGrid />
                        <XAxis interval={isMobile ? (2) : (1)} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={this.state.AddCurrentProjections ? (['0', 'dataMax + 447']) : (['0', 'dataMax + 793'])} fontSize="12" />)}
                        <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize={isMobile ? ("8") : ("12")} /></Bar>
                        {this.state.AddCurrentProjections ? (<Line dataKey="Projection for this date" connectNulls={true} dot={false} stroke="#333333" fill="#333333" strokeDasharray="3 4" />) : ("")}
                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                    </ComposedChart>
                </ResponsiveContainer>
            </center>
        )
    }
}

export default Totalgraph;