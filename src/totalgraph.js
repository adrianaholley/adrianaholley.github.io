import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from "recharts";

const datereported = [
    {
        "name": "Jul 31",
        "Real Total": 19,
        "Total": null
    },
    {
        "name": "Aug 1",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 1",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 3",
        "Real Total": null,
        "Total": 18
    },
    {
        "name": "Aug 4",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 5",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 6",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 7",
        "Real Total": 29,
        "Total": null
    },
    {
        "name": "Aug 8",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 9",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 10",
        "Real Total": null,
        "Total": 44
    },
    {
        "name": "Aug 11",
        "Real Total": 50,
        "Total": null
    },
    {
        "name": "Aug 12",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 13",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 14",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 15",
        "Real Total": 62,
        "Total": null
    },
    {
        "name": "Aug 16",
        "Real Total": 68,
        "Total": null
    },
    {
        "name": "Aug 17",
        "Real Total": null,
        "Total": 67
    },
    {
        "name": "Aug 18",
        "Real Total": 92,
        "Total": 75
    },
    {
        "name": "Aug 19",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 20",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 21",
        "Real Total": 116,
        "Total": 103
    },
    {
        "name": "Aug 22",
        "Real Total": 139,
        "Total": null
    },
    {
        "name": "Aug 23",
        "Real Total": 178,
        "Total": null
    },
    {
        "name": "Aug 24",
        "Real Total": 201,
        "Total": null
    },
    {
        "name": "Aug 25",
        "Real Total": 234,
        "Total": 149
    },
    {
        "name": "Aug 26",
        "Real Total": null,
        "Total": 206
    },
    {
        "name": "Aug 27",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Aug 28",
        "Real Total": 326,
        "Total": 260
    },
    {
        "name": "Aug 29",
        "Real Total": 377,
        "Total": null
    },
    {
        "name": "Aug 30",
        "Real Total": 424,
        "Total": null
    },
    {
        "name": "Aug 31",
        "Real Total": 502,
        "Total": 378
    },
    {
        "name": "Sept 1",
        "Real Total": 646,
        "Total": 551
    },
    {
        "name": "Sept 2",
        "Real Total": null,
        "Total": 624
    },
    {
        "name": "Sept 3",
        "Real Total": null,
        "Total": 671
    },
    {
        "name": "Sept 4",
        "Real Total": 800,
        "Total": 717
    },
    {
        "name": "Sept 5",
        "Real Total": 917,
        "Total": null
    },
    {
        "name": "Sept 6",
        "Real Total": 1153,
        "Total": null
    },
    {
        "name": "Sept 7",
        "Real Total": 1170,
        "Total": 945
    },
    {
        "name": "Sept 8",
        "Real Total": 1201,
        "Total": 1020
    },
    {
        "name": "Sept 9",
        "Real Total": null,
        "Total": 1055
    },
    {
        "name": "Sept 10",
        "Real Total": null,
        "Total": 1064
    },
    {
        "name": "Sept 11",
        "Real Total": 1240,
        "Total": 1091
    },
    {
        "name": "Sept 12",
        "Real Total": 1251,
        "Total": null
    },
    {
        "name": "Sept 13",
        "Real Total": 1267,
        "Total": null
    },
    {
        "name": "Sept 14",
        "Real Total": 1297,
        "Total": 1280
    },
    {
        "name": "Sept 15",
        "Real Total": 1319,
        "Total": 1293
    },
    {
        "name": "Sept 16",
        "Real Total": null,
        "Total": 1343
    },
    {
        "name": "Sept 17",
        "Real Total": null,
        "Total": 1375
    },
    {
        "name": "Sept 18",
        "Real Total": 1343,
        "Total": 1407
    },
    {
        "name": "Sept 19",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Sept 20",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Sept 21",
        "Real Total": null,
        "Total": 1481
    },
    {
        "name": "Sept 22",
        "Real Total": null,
        "Total": 1490
    },
    {
        "name": "Sept 23",
        "Real Total": null,
        "Total": 1530
    },
    {
        "name": "Sept 24",
        "Real Total": null,
        "Total": 1553
    },
    {
        "name": "Sept 25",
        "Real Total": null,
        "Total": 1585
    },
    {
        "name": "Sept 26",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Sept 27",
        "Real Total": null,
        "Total": null
    },
    {
        "name": "Sept 28",
        "Total": 1643,
        "Projection for this date": 1643
    },
    {
        "name": "Sept 29",
        "Real Total": null,
        "Projection for this date": 1649
    },
    {
        "name": "Sept 30",
        "Real Total": null,
        "Projection for this date": 1680
    },
    {
        "name": "Oct 1",
        "Real Total": null,
        "Projection for this date": 1696
    },
    {
        "name": "Oct 2",
        "Real Total": null,
        "Projection for this date": 1727
    },
    {
        "name": "Oct 3",
        "Real Total": null,
        "Projection for this date": null
    },
    {
        "name": "Oct 4",
        "Real Total": null,
        "Projection for this date": null
    },
    {
        "name": "Oct 5",
        "Real Total": null,
        "Projection for this date": 1771
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
            TrueStartDateIsOff: true,
            TwoWeeks: true,
            data: {},
            LogViewIsOff: true
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
                    <h5 style={{ marginBottom: 0, marginTop: 5 }}>{this.state.TrueStartDateIsOff ? ('Total Cases by Day Reported to University') : ('Total Cases by First Day of Symptoms')}</h5>
                    {/* switches */}
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TrueStartDateIsOff: !this.state.TrueStartDateIsOff })} name="TrueStartDateIsOff" />} label="Show by first day of illness*" />
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogViewIsOff: !this.state.LogViewIsOff })} />} label="View on logarithmic scale" />

                    <a><i><font size="2">
                        <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")} >
                            Case counts reflect the&nbsp;
                            <b><u>{this.state.TrueStartDateIsOff ? ("date reported") : ("date of first symptoms")}</u></b>
                            {this.state.TrueStartDateIsOff ?
                                (" on TTU's website, not first date of symptoms. Due to testing delays, it can take 0-3 days for a case to be reflected in this view. ")
                                :
                                (' (or date of test for asymptomatic cases).  Due to sporadic reporting intervals by the university, a few cases may have start dates 1-2 days earlier (or greater, for August cases) than shown here. ')}
                            {this.state.TrueStartDateIsOff ? ("If a student or employee tests at a non-TTU testing location, it is not included on this site unless it was self-reported to the university. ") : ('')}
                            {this.state.TrueStartDateIsOff ? ('') : ('*Read more about the data ')}
                            <a href="https://bit.ly/347xkvU">{this.state.TrueStartDateIsOff ? ('') : ('here')}</a>
                            {this.state.TrueStartDateIsOff ? ('') : ('. ')}
                        </div>
                    </font></i></a>
                </Grid>

                <Grid>
                    {/* bar chart */}
                    <ResponsiveContainer width={isMobile ? ('99%') : ('100%')} height={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('2.4')}>
                        <ComposedChart data={datereported} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 80, bottom: 0, left: 0 })}>
                            <CartesianGrid />
                            <XAxis interval={isMobile ? (2) : (1)} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                            {this.state.LogViewIsOff ? (<YAxis interval={0} angle={-14} fontSize="12" domain={['dataMin - 18', 'dataMax + 29']} />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 508']} fontSize="12" />)}
                            <Bar dataKey={this.state.TrueStartDateIsOff ? ("Total") : ("Real Total")} fill="#333333" ><LabelList dataKey={this.state.TrueStartDateIsOff ? ("none") : ("none")} position="top" fontSize={isMobile ? ("8") : ("12")} /></Bar>
                            <Area type="monotone" dataKey="Total" fill="#333" stroke="#cc0000" connectNulls={true} fillOpacity={.1} />
                            <Line dataKey="Projection for this date" connectNulls={true} dot={false} stroke="#cc0000" fill="#333333" strokeDasharray="3 4" />
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={920} stroke="#333" strokeDasharray="2"><Label value="2% of all students and employees (920)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1380} stroke="#333" strokeDasharray="2"><Label value="3% of all students and employees (1,380)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1840} stroke="#333" strokeDasharray="2"><Label value="4% of all students and employees (1,840)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                    <a><i><font size="1">
                        <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")}>
                            <b>Uhhh, why does the data look off for Sept 18?</b> This data assumes a 10-day illness.
                        Some may last longer, meaning some cases that started Sept 18 have not recovered yet and will be listed under a later recovery date.
                        All data is not reflective of the higher, actual number of cases due to some students not self-reporting to the university and asymptomatic individuals never being tested.
                    </div>
                    </font></i></a>
                </Grid>
            </center>
        )
    }
}

export default Totalgraph;