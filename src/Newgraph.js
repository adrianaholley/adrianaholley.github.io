import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from "recharts";

const datereported = [
	{
		"name": "Sept 16",
		"Daily": 50,
		"Daily avg": 41.1,
		"Real daily": 32,
		"Real daily avg": 20.7
	},
	{
		"name": "Sept 17",
		"Daily": 32,
		"Daily avg": 44.4,
		"Real daily": 52,
		"Real daily avg": 25.9
	},
	{
		"name": "Sept 18",
		"Daily": 32,
		"Daily avg": 45.1,
		"Real daily": 34,
		"Real daily avg": 26.4
	},
	{
		"name": "Sept 19",
		"Daily": null,
		"Daily avg": null,
		"Real daily": 34,
		"Real daily avg": 28.1
	},
	{
		"name": "Sept 20",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Sept 21",
		"Daily": 74,
		"Daily avg": 28.7,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Sept 22",
		"Daily": 9,
		"Daily avg": 28.1,
		"Real daily": 29,
		"Real daily avg": 25.9
	},
	{
		"name": "Sept 23",
		"Daily": 40,
		"Daily avg": 26.7,
		"Real daily": 8,
		"Real daily avg": 22.4
	},
	{
		"name": "Sept 24",
		"Daily": 23,
		"Daily avg": 25.4,
		"Real daily": 59,
		"Real daily avg": 23.4
	},
	{
		"name": "Sept 25",
		"Daily": 32,
		"Daily avg": 25.4,
		"Real daily": 12,
		"Real daily avg": 20.3
	},
	{
		"name": "Sept 26",
		"Daily": null,
		"Daily avg": null,
		"Real daily": 44,
		"Real daily avg": 21.7
	},
	{
		"name": "Sept 27",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Sept 28",
		"Daily": 58,
		"Daily avg": 23.1,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Sept 29",
		"Daily": 4,
		"Daily avg": 22.4,
		"Real daily": 38,
		"Real daily avg": 23
	},
	{
		"name": "Sept 30",
		"Daily": 42,
		"Daily avg": 22.7,
		"Real daily": 42,
		"Real daily avg": 27.9
	},
	{
		"name": "Oct 1",
		"Daily": 22,
		"Daily avg": 22.6,
		"Real daily": 13,
		"Real daily avg": 21.3
	},
	{
		"name": "Oct 2",
		"Daily": 27,
		"Daily avg": 21.9,
		"Real daily": 15,
		"Real daily avg": 21.7
	},
	{
		"name": "Oct 3",
		"Daily": null,
		"Daily avg": null,
		"Real daily": 14,
		"Real daily avg": 17.4
	},
	{
		"name": "Oct 4",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 5",
		"Daily": 28,
		"Daily avg": 17.6,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 6",
		"Daily": 2,
		"Daily avg": 17.3,
		"Real daily": 23,
		"Real daily avg": 15.3
	},
	{
		"name": "Oct 7",
		"Daily": 15,
		"Daily avg": 13.4,
		"Real daily": 6,
		"Real daily avg": 10.1
	},
	{
		"name": "Oct 8",
		"Daily": 16,
		"Daily avg": 12.6,
		"Real daily": 5,
		"Real daily avg": 9
	},
	{
		"name": "Oct 9",
		"Daily": 22,
		"Daily avg": 11.9,
		"Real daily": 44,
		"Real daily avg": 13.1
	},
	{
		"name": "Oct 10",
		"Daily": null,
		"Daily avg": null,
		"Real daily": 18,
		"Real daily avg": 13.7
	},
	{
		"name": "Oct 11",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 12",
		"Daily": 61,
		"Daily avg": 16.6,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 13",
		"Daily": 10,
		"Daily avg": 17.7,
		"Real daily": 33,
		"Real daily avg": 15.1
	},
	{
		"name": "Oct 14",
		"Daily": 25,
		"Daily avg": 19.1,
		"Real daily": 13,
		"Real daily avg": 16.1
	},
	{
		"name": "Oct 15",
		"Daily": 26,
		"Daily avg": 20.6,
		"Real daily": 17,
		"Real daily avg": 17.9
	},
	{
		"name": "Oct 16",
		"Daily": 29,
		"Daily avg": 21.6,
		"Real daily": 16,
		"Real daily avg": 13.9
	},
	{
		"name": "Oct 17",
		"Daily": null,
		"Daily avg": null,
		"Real daily": 38,
		"Real daily avg": 16.7
	},
	{
		"name": "Oct 18",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 19",
		"Daily": 48,
		"Daily avg": 19.7,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 20",
		"Daily": 7,
		"Daily avg": 19.3,
		"Real daily": 44,
		"Real daily avg": 18.3
	},
	{
		"name": "Oct 21",
		"Daily": 7,
		"Daily avg": 16.7,
		"Real daily": 15,
		"Real daily avg": 18.6
	},
	{
		"name": "Oct 22",
		"Daily": 50,
		"Daily avg": 20.1,
		"Real daily": 33,
		"Real daily avg": 20.9
	},
	{
		"name": "Oct 23",
		"Daily": 27,
		"Daily avg": 19.9,
		"Real daily": 28,
		"Real daily avg": 22.6
	},
	{
		"name": "Oct 24",
		"Daily": null,
		"Daily avg": null,
		"Real daily": 33,
		"Real daily avg": 21.9
	},
	{
		"name": "Oct 25",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 26",
		"Daily": 49,
		"Daily avg": 20,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Oct 27",
		"Daily": 5,
		"Daily avg": 19.7,
		"Real daily": 40,
		"Real daily avg": 21.3
	},
	{
		"name": "Oct 28",
		"Daily": 0,
		"Daily avg": 18.7,
		"Real daily": 38,
		"Real daily avg": 24.6
	},
	{
		"name": "Oct 29",
		"Daily": 2,
		"Daily avg": 11.9,
		"Real daily": 13,
		"Real daily avg": 21.7
	},
	{
		"name": "Oct 30",
		"Daily": 34,
		"Daily avg": 12.9,
		"Real daily": 19,
		"Real daily avg": 20.4
	},
	{
		"name": "Oct 31",
		"Daily": null,
		"Daily avg": null,
		"Real daily": 28,
		"Real daily avg": 19.7
	},
	{
		"name": "Nov 1",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 2",
		"Daily": 58,
		"Daily avg": 14.1,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 3",
		"Daily": 10,
		"Daily avg": 14.9,
		"Real daily": 29,
		"Real daily avg": 18.1
	},
	{
		"name": "Nov 4",
		"Daily": 37,
		"Daily avg": 20.1,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 5",
		"Daily": 25,
		"Daily avg": 23.4,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 6",
		"Daily": 42,
		"Daily avg": 24.6,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 7",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 8",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 9",
		"Daily": 79,
		"Daily avg": 27.6,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 10",
		"Daily": 15,
		"Daily avg": 28.3,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 11",
		"Daily": 56,
		"Daily avg": 31,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 12",
		"Daily": 42,
		"Daily avg": 33.4,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 13",
		"Daily": 22,
		"Daily avg": 30.6,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 14",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 15",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 16",
		"Daily": 77,
		"Daily avg": 30.3,
		"Projection for this date": 30.3,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 17",
		"Daily": null,
		"Projection for this date": 30.4,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 18",
		"Daily": null,
		"Projection for this date": 31.1,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 19",
		"Daily": null,
		"Projection for this date": 31.7,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 20",
		"Daily": null,
		"Projection for this date": 32,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 21",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 22",
		"Daily": null,
		"Daily avg": null,
		"Real daily": null,
		"Real daily avg": null
	},
	{
		"name": "Nov 23",
		"Daily": null,
		"Projection for this date": 33,
		"Real daily": null,
		"Real daily avg": null
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

class Newgraph extends Component {
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
                    <h5 style={{ marginBottom: 0, marginTop: 5 }}>{this.state.TrueStartDateIsOff ? ('Daily Cases by Day Reported to University') : ('Daily Cases by First Day of Symptoms')}</h5>
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
                            {this.state.LogViewIsOff ? (<YAxis interval={0} angle={-14} fontSize="12" domain={this.state.TrueStartDateIsOff ? (['dataMin', 'dataMax + 21']) : (['dataMin - 5', 'dataMax + 41'])} />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 350']} fontSize="12" />)}
                            <Bar dataKey={this.state.TrueStartDateIsOff ? ("Daily") : ("Real daily")} fill="#666666" ><LabelList dataKey={this.state.TrueStartDateIsOff ? ("Daily") : ("Real daily")} position="top" fontSize={isMobile ? ("8") : ("12")} /></Bar>
                            <Area dataKey={this.state.TrueStartDateIsOff ? ("Daily avg") : ('Real daily avg')} fill="#666666" stroke={this.state.TrueStartDateIsOff ? ('#333333') : ("#333333")} connectNulls={true} fillOpacity={.15} />
							{this.state.TrueStartDateIsOff ? ('') : (<Line dataKey="Daily avg" stroke="#333333" connectNulls={true} dot={false} fill="#333333" strokeDasharray="1 1" />)}
                            <Line dataKey="Projection for this date" connectNulls={true} dot={false} stroke="#333333" fill="#333333" strokeDasharray="3 4" />
                            <ReferenceLine y={230} stroke="#333" strokeDasharray="2"><Label value="0.5% of all students and employees (230)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>

                    {this.state.TrueStartDateIsOff ? ('') : ('')}
                </Grid>
            </center>
        )
    }
}

export default Newgraph;