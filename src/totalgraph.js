import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from "recharts";

const datereported = [
	{
		"name": "Sept 18",
		"Total": 1407,
		"Real Total": 1501
	},
	{
		"name": "Sept 19",
		"Total": null,
		"Real Total": 1535
	},
	{
		"name": "Sept 20",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Sept 21",
		"Total": 1481,
		"Real Total": null
	},
	{
		"name": "Sept 22",
		"Total": 1490,
		"Real Total": 1564
	},
	{
		"name": "Sept 23",
		"Total": 1530,
		"Real Total": 1572
	},
	{
		"name": "Sept 24",
		"Total": 1553,
		"Real Total": 1631
	},
	{
		"name": "Sept 25",
		"Total": 1585,
		"Real Total": 1643
	},
	{
		"name": "Sept 26",
		"Total": null,
		"Real Total": 1687
	},
	{
		"name": "Sept 27",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Sept 28",
		"Total": 1643,
		"Real Total": null
	},
	{
		"name": "Sept 29",
		"Total": 1647,
		"Real Total": 1725
	},
	{
		"name": "Sept 30",
		"Total": 1689,
		"Real Total": 1767
	},
	{
		"name": "Oct 1",
		"Total": 1711,
		"Real Total": 1780
	},
	{
		"name": "Oct 2",
		"Total": 1738,
		"Real Total": 1795
	},
	{
		"name": "Oct 3",
		"Total": null,
		"Real Total": 1809
	},
	{
		"name": "Oct 4",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Oct 5",
		"Total": 1766,
		"Real Total": null
	},
	{
		"name": "Oct 6",
		"Total": 1768,
		"Real Total": 1832
	},
	{
		"name": "Oct 7",
		"Total": 1783,
		"Real Total": 1838
	},
	{
		"name": "Oct 8",
		"Total": 1799,
		"Real Total": 1843
	},
	{
		"name": "Oct 9",
		"Total": 1821,
		"Real Total": 1887
	},
	{
		"name": "Oct 10",
		"Total": null,
		"Real Total": 1905
	},
	{
		"name": "Oct 11",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Oct 12",
		"Total": 1882,
		"Real Total": null
	},
	{
		"name": "Oct 13",
		"Total": 1892,
		"Real Total": 1938
	},
	{
		"name": "Oct 14",
		"Total": 1917,
		"Real Total": 1951
	},
	{
		"name": "Oct 15",
		"Total": 1943,
		"Real Total": 1968
	},
	{
		"name": "Oct 16",
		"Total": 1972,
		"Real Total": 1984
	},
	{
		"name": "Oct 17",
		"Total": null,
		"Real Total": 2022
	},
	{
		"name": "Oct 18",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Oct 19",
		"Total": 2020,
		"Real Total": null
	},
	{
		"name": "Oct 20",
		"Total": 2027,
		"Real Total": 2047
	},
	{
		"name": "Oct 21",
		"Total": 2034,
		"Real Total": 2081
	},
	{
		"name": "Oct 22",
		"Total": 2084,
		"Real Total": 2114
	},
	{
		"name": "Oct 23",
		"Total": 2111,
		"Real Total": 2142
	},
	{
		"name": "Oct 24",
		"Total": null,
		"Real Total": 2175
	},
	{
		"name": "Oct 25",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Oct 26",
		"Total": 2160,
		"Real Total": null
	},
	{
		"name": "Oct 27",
		"Total": 2165,
		"Real Total": 2215
	},
	{
		"name": "Oct 28",
		"Total": 2166,
		"Real Total": 2253
	},
	{
		"name": "Oct 29",
		"Total": 2167,
		"Real Total": 2266
	},
	{
		"name": "Oct 30",
		"Total": 2201,
		"Real Total": 2285
	},
	{
		"name": "Oct 31",
		"Total": null,
		"Real Total": 2313
	},
	{
		"name": "Nov 1",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Nov 2",
		"Total": 2259,
		"Real Total": null
	},
	{
		"name": "Nov 3",
		"Total": 2269,
		"Real Total": 2342
	},
	{
		"name": "Nov 4",
		"Total": 2306,
		"Real Total": 2411
	},
	{
		"name": "Nov 5",
		"Total": 2331,
		"Real Total": null
	},
	{
		"name": "Nov 6",
		"Total": 2373,
		"Real Total": null
	},
	{
		"name": "Nov 7",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Nov 8",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Nov 9",
		"Total": 2452,
		"Real Total": null
	},
	{
		"name": "Nov 10",
		"Total": 2467,
		"Real Total": null
	},
	{
		"name": "Nov 11",
		"Total": 2523,
		"Real Total": null
	},
	{
		"name": "Nov 12",
		"Total": 2565,
		"Real Total": null
	},
	{
		"name": "Nov 13",
		"Total": 2587,
		"Real Total": null
	},
	{
		"name": "Nov 14",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Nov 15",
		"Total": null,
		"Real Total": null
	},
	{
		"name": "Nov 16",
		"Total": 2664,
		"Projection for this date": null
	},
	{
		"name": "Nov 17",
		"Total": 2697,
		"Projection for this date": null
	},
	{
		"name": "Nov 18",
		"Total": 2725,
		"Projection for this date": 2725
	},
	{
		"name": "Nov 19",
		"Total": null,
		"Projection for this date": 2795
	},
	{
		"name": "Nov 20",
		"Total": null,
		"Projection for this date": 2806
	},
	{
		"name": "Nov 21",
		"Total": null,
		"Projection for this date": null
	},
	{
		"name": "Nov 22",
		"Total": null,
		"Projection for this date": null
	},
	{
		"name": "Nov 23",
		"Total": null,
		"Projection for this date": 2881
	},
	{
		"name": "Nov 24",
		"Total": null,
		"Projection for this date": 2953
	},
	{
		"name": "Nov 25",
		"Total": null,
		"Projection for this date": 2967
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
                            {this.state.LogViewIsOff ? (<YAxis interval={0} angle={-14} fontSize="12" domain={['dataMin - 1407', 'dataMax + 233']} />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 433']} fontSize="12" />)}
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