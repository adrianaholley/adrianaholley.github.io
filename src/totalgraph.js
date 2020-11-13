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
		"Real Total": 1643,
		"Total": null
	},
	{
		"name": "Sept 27",
		"Real Total": 1687,
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
		"Real Total": 1725,
		"Total": 1689
	},
	{
		"name": "Oct 1",
		"Real Total": 1767,
		"Total": 1711
	},
	{
		"name": "Oct 2",
		"Real Total": 1780,
		"Total": 1738
	},
	{
		"name": "Oct 3",
		"Real Total": 1795,
		"Total": null
	},
	{
		"name": "Oct 4",
		"Real Total": 1809,
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
		"Real Total": 1832,
		"Total": 1783
	},
	{
		"name": "Oct 8",
		"Real Total": 1838,
		"Total": 1799
	},
	{
		"name": "Oct 9",
		"Real Total": 1843,
		"Total": 1821
	},
	{
		"name": "Oct 10",
		"Real Total": 1887,
		"Total": null
	},
	{
		"name": "Oct 11",
		"Real Total": 1905,
		"Total": null
	},
	{
		"name": "Oct 12",
		"Projection for this date": null,
		"Total": 1882
	},
	{
		"name": "Oct 13",
		"Projection for this date": null,
		"Total": 1892
    },
    {
        "name": "Oct 14",
		"Real Total": 1938,
        "Total": 1917
    },
    {
        "name": "Oct 15",
        "Real Total": 1951,
        "Total": 1943
    },
    {
        "name": "Oct 16",
        "Real Total": 1968,
        "Total": 1972
	},
    {
        "name": "Oct 17",
        "Real Total": 1984,
        "Total": null
	},
    {
        "name": "Oct 18",
        "Real Total": 2022,
        "Total": null
	},
    {
        "name": "Oct 19",
        "Projection for this date": null,
        "Total": 2020
	},
    {
        "name": "Oct 20",
        "Projection for this date": null,
        "Total": 2027
	},
	{
		"name": "Oct 21",
		"Real Total": 2047,
		"Total": 2034
	},
	{
		"name": "Oct 22",
		"Real Total": 2081,
		"Total": 2084
	},
	{
		"name": "Oct 23",
		"Real Total": 2114,
		"Total": 2111
	},
	{
		"name": "Oct 24",
		"Real Total": 2142
	},
	{
		"name": "Oct 25",
		"Real Total": 2175
	},
	{
		"name": "Oct 26",
		"Total": 2160
	},
	{
		"name": "Oct 27",
		"Total": 2165
	},
	{
		"name": "Oct 28*",
		"Total": 2165,
		"Real Total": 2215
	},
	{
		"name": "Oct 29",
		"Total": 2167,
		"Real Total": 2253
	},
	{
		"name": "Oct 30",
		"Total": 2201,
		"Real Total": 2266
	},
	{
		"name": "Oct 31",
		"Real Total": 2285
	},
	{
		"name": "Nov 1"
	},
	{
		"name": "Nov 2",
		"Total": 2259,
		"Projection for this date": null
	},
	{
		"name": "Nov 3",
		"Total": 2269,
		"Real Total": null
	},
	{
		"name": "Nov 4",
		"Total": 2306,
		"null": 2306
	},
	{
		"name": "Nov 5",
		"Total": 2331,
		"null": 2331
	},
	{
		"name": "Nov 6",
		"Total": 2373,
		"Projection for this date": null
	},
	{
		"name": "Nov 7"
	},
	{
		"name": "Nov 8"
	},
	{
		"name": "Nov 9",
		"Total": 2452,
		"Projection for this date": null
	},
	{
		"name": "Nov 10",
		"Total": 2467,
		"Projection for this date": null
	},
	{
		"name": "Nov 11",
		"Total": 2523,
		"Projection for this date": null
	},
	{
		"name": "Nov 12",
		"Total": 2565,
		"Projection for this date": 2565
	},
	{
		"name": "Nov 13",
		"Projection for this date": 2618
	},
	{
		"name": "Nov 14"
	},
	{
		"name": "Nov 15"
	},
	{
		"name": "Nov 16",
		"Projection for this date": 2728
	},
	{
		"name": "Nov 17",
		"Projection for this date": 2751
	},
	{
		"name": "Nov 18",
		"Projection for this date": 2838
	},
	{
		"name": "Nov 19",
		"Projection for this date": 2911
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
                            {this.state.LogViewIsOff ? (<YAxis interval={0} angle={-14} fontSize="12" domain={['dataMin - 18', 'dataMax + 89']} />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 289']} fontSize="12" />)}
                            <Bar dataKey={this.state.TrueStartDateIsOff ? ("Total") : ("Real Total")} fill="#333333" ><LabelList dataKey={this.state.TrueStartDateIsOff ? ("none") : ("none")} position="top" fontSize={isMobile ? ("8") : ("12")} /></Bar>
                            <Area dataKey="Total" fill="#333" stroke="#cc0000" connectNulls={true} fillOpacity={.1} />
                            <Line dataKey="Projection for this date" connectNulls={true} dot={false} stroke="#cc0000" fill="#333333" strokeDasharray="3 4" />
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={920} stroke="#333" strokeDasharray="2"><Label value="2% of all students and employees (920)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1380} stroke="#333" strokeDasharray="2"><Label value="3% of all students and employees (1,380)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1840} stroke="#333" strokeDasharray="2"><Label value="4% of all students and employees (1,840)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={2300} stroke="#333" strokeDasharray="2"><Label value="5% of all students and employees (2,300)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={2760} stroke="#333" strokeDasharray="2"><Label value="6% of all students and employees (2,760)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
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