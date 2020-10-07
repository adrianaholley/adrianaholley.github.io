import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from "recharts";

const datereported = [
	{
		"name": "Jul 29",
		"Real Total": 19,
		"Total": null
	},
	{
		"name": "Jul 30",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Jul 31",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 1",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 1",
		"Real Total": 26,
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
		"Real Total": 29,
		"Total": null
	},
	{
		"name": "Aug 6",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 7",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 8",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 9",
		"Real Total": 50,
		"Total": null
	},
	{
		"name": "Aug 10",
		"Real Total": null,
		"Total": 44
	},
	{
		"name": "Aug 11",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 12",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 13",
		"Real Total": 62,
		"Total": null
	},
	{
		"name": "Aug 14",
		"Real Total": 70,
		"Total": 63
	},
	{
		"name": "Aug 15",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 16",
		"Real Total": 84,
		"Total": null
	},
	{
		"name": "Aug 17",
		"Real Total": null,
		"Total": 67
	},
	{
		"name": "Aug 18",
		"Real Total": null,
		"Total": 75
	},
	{
		"name": "Aug 19",
		"Real Total": 110,
		"Total": null
	},
	{
		"name": "Aug 20",
		"Real Total": 132,
		"Total": null
	},
	{
		"name": "Aug 21",
		"Real Total": 171,
		"Total": 103
	},
	{
		"name": "Aug 22",
		"Real Total": 194,
		"Total": null
	},
	{
		"name": "Aug 23",
		"Real Total": 227,
		"Total": null
	},
	{
		"name": "Aug 24",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Aug 25",
		"Real Total": null,
		"Total": 149
	},
	{
		"name": "Aug 26",
		"Real Total": 319,
		"Total": 206
	},
	{
		"name": "Aug 27",
		"Real Total": 370,
		"Total": null
	},
	{
		"name": "Aug 28",
		"Real Total": 443,
		"Total": 260
	},
	{
		"name": "Aug 29",
		"Real Total": 521,
		"Total": null
	},
	{
		"name": "Aug 30",
		"Real Total": 665,
		"Total": null
	},
	{
		"name": "Aug 31",
		"Real Total": null,
		"Total": 378
	},
	{
		"name": "Sept 1",
		"Real Total": null,
		"Total": 551
	},
	{
		"name": "Sept 2",
		"Real Total": 819,
		"Total": 624
	},
	{
		"name": "Sept 3",
		"Real Total": 936,
		"Total": 671
	},
	{
		"name": "Sept 4",
		"Real Total": 1172,
		"Total": 717
	},
	{
		"name": "Sept 5",
		"Real Total": 1189,
		"Total": null
	},
	{
		"name": "Sept 6",
		"Real Total": 1220,
		"Total": null
	},
	{
		"name": "Sept 7",
		"Real Total": null,
		"Total": 945
	},
	{
		"name": "Sept 8",
		"Real Total": null,
		"Total": 1020
	},
	{
		"name": "Sept 9",
		"Real Total": 1259,
		"Total": 1055
	},
	{
		"name": "Sept 10",
		"Real Total": 1270,
		"Total": 1064
	},
	{
		"name": "Sept 11",
		"Real Total": 1286,
		"Total": 1091
	},
	{
		"name": "Sept 12",
		"Real Total": 1316,
		"Total": null
	},
	{
		"name": "Sept 13",
		"Real Total": 1338,
		"Total": null
	},
	{
		"name": "Sept 14",
		"Real Total": null,
		"Total": 1280
	},
	{
		"name": "Sept 15",
		"Real Total": null,
		"Total": 1293
	},
	{
		"name": "Sept 16",
		"Real Total": 1383,
		"Total": 1343
	},
	{
		"name": "Sept 17",
		"Real Total": 1415,
		"Total": 1375
	},
	{
		"name": "Sept 18",
		"Real Total": 1467,
		"Total": 1407
	},
	{
		"name": "Sept 19",
		"Real Total": 1501,
		"Total": null
	},
	{
		"name": "Sept 20",
		"Real Total": 1535,
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
		"Real Total": 1564,
		"Total": 1530
	},
	{
		"name": "Sept 24",
		"Real Total": 1572,
		"Total": 1553
	},
	{
		"name": "Sept 25",
		"Real Total": 1631,
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
		"Real Total": null,
		"Total": 1643
	},
	{
		"name": "Sept 29",
		"Real Total": null,
		"Total": 1647
	},
	{
		"name": "Sept 30",
		"Real Total": null,
		"Total": 1689
	},
	{
		"name": "Oct 1",
		"Real Total": null,
		"Total": 1711
	},
	{
		"name": "Oct 2",
		"Real Total": null,
		"Total": 1738
	},
	{
		"name": "Oct 3",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Oct 4",
		"Real Total": null,
		"Total": null
	},
	{
		"name": "Oct 5",
		"Real Total": null,
		"Total": 1766
	},
	{
		"name": "Oct 6",
		"Real Total": null,
		"Total": 1768
	},
	{
		"name": "Oct 7",
		"Projection for this date": 1783,
		"Total": 1783
	},
	{
		"name": "Oct 8",
		"Projection for this date": 1803,
		"Total": null
	},
	{
		"name": "Oct 9",
		"Projection for this date": 1825,
		"Total": null
	},
	{
		"name": "Oct 10",
		"Projection for this date": null,
		"Total": null
	},
	{
		"name": "Oct 11",
		"Projection for this date": null,
		"Total": null
	},
	{
		"name": "Oct 12",
		"Projection for this date": 1838,
		"Total": null
	},
	{
		"name": "Oct 13",
		"Projection for this date": 1839,
		"Total": null
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
                    <ResponsiveContainer width={isMobile ? ('99%') : ('100%')} height={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('2.3')}>
                        <ComposedChart data={datereported} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 80, bottom: 0, left: 0 })}>
                            <CartesianGrid />
                            <XAxis interval={isMobile ? (2) : (1)} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                            {this.state.LogViewIsOff ? (<YAxis interval={0} angle={-14} fontSize="12" domain={['dataMin - 18', 'dataMax + 161']} />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 332']} fontSize="12" />)}
                            <Bar dataKey={this.state.TrueStartDateIsOff ? ("Total") : ("Real Total")} fill="#333333" ><LabelList dataKey={this.state.TrueStartDateIsOff ? ("none") : ("none")} position="top" fontSize={isMobile ? ("8") : ("12")} /></Bar>
                            <Area dataKey="Total" fill="#333" stroke="#cc0000" connectNulls={true} fillOpacity={.1} />
                            <Line dataKey="Projection for this date" connectNulls={true} dot={false} stroke="#cc0000" fill="#333333" strokeDasharray="3 4" />
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={920} stroke="#333" strokeDasharray="2"><Label value="2% of all students and employees (920)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1380} stroke="#333" strokeDasharray="2"><Label value="3% of all students and employees (1,380)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1840} stroke="#333" strokeDasharray="2"><Label value="4% of all students and employees (1,840)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>

                    {this.state.TrueStartDateIsOff ? ('') : ('')}
                </Grid>
            </center>
        )
    }
}

export default Totalgraph;