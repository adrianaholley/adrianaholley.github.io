import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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

class Activegraph extends Component {
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

                {isMobile ? (<br />) : ('')}

                {/* show disclaimers */}
                <Grid>
                    <h5 style={{ marginBottom: 10, marginTop: 5 }}>Active Cases Known on Given Date</h5>
                    <a><i><font size="2">
                        <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")} >
                            An active case is only included in these numbers starting the date reported to TTU's site.
                            Due to reporting delays, this means a case could be included on the site for only 3-9 days instead of the 10-day minimum illness length.
                            Past dates are not updated with new case data found.
                        </div>
                    </font></i></a>
                </Grid>

                <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />

                {/* show graphs */}
                <ResponsiveContainer height={'65%'} width={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('2.5')}>
                    <ComposedChart data={noprojections} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 80, bottom: 0, left: 0 })}>
                        <CartesianGrid />
                        <XAxis interval={isMobile ? (2) : (1)} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 1550']} fontSize="12" />)}
                        <Bar dataKey="Active cases" fill="#cc0000"><LabelList dataKey="Active cases" position="top" fontSize={isMobile ? (8) : (12)} /></Bar>
                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        )
    }
}

export default Activegraph;