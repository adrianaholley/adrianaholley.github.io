import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Label, LabelList, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const datereported = [
	{
		"name": "Jul 29",
		"Real Active": 19,
		"Active": null
	},
	{
		"name": "Jul 30",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Jul 31",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 1",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 2",
		"Real Active": 26,
		"Active": null
	},
	{
		"name": "Aug 3",
		"Real Active": null,
		"Active": 18
	},
	{
		"name": "Aug 4",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 5",
		"Real Active": 29,
		"Active": null
	},
	{
		"name": "Aug 6",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 7",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 8",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 9",
		"Real Active": 50,
		"Active": null
	},
	{
		"name": "Aug 10",
		"Real Active": null,
		"Active": 25
	},
	{
		"name": "Aug 11",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 12",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 13",
		"Real Active": 43,
		"Active": null
	},
	{
		"name": "Aug 14",
		"Real Active": 44,
		"Active": 37
	},
	{
		"name": "Aug 15",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 16",
		"Real Active": 58,
		"Active": null
	},
	{
		"name": "Aug 17",
		"Real Active": null,
		"Active": 38
	},
	{
		"name": "Aug 18",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 19",
		"Real Active": 81,
		"Active": null
	},
	{
		"name": "Aug 20",
		"Real Active": 103,
		"Active": null
	},
	{
		"name": "Aug 21",
		"Real Active": 121,
		"Active": 53
	},
	{
		"name": "Aug 22",
		"Real Active": 144,
		"Active": null
	},
	{
		"name": "Aug 23",
		"Real Active": 177,
		"Active": null
	},
	{
		"name": "Aug 24",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Aug 25",
		"Real Active": null,
		"Active": 87
	},
	{
		"name": "Aug 26",
		"Real Active": 249,
		"Active": 146
	},
	{
		"name": "Aug 27",
		"Real Active": 300,
		"Active": null
	},
	{
		"name": "Aug 28",
		"Real Active": 359,
		"Active": 176
	},
	{
		"name": "Aug 29",
		"Real Active": 437,
		"Active": null
	},
	{
		"name": "Aug 30",
		"Real Active": 581,
		"Active": null
	},
	{
		"name": "Aug 31",
		"Real Active": null,
		"Active": 268
	},
	{
		"name": "Sept 1",
		"Real Active": null,
		"Active": 418
	},
	{
		"name": "Sept 2",
		"Real Active": 648,
		"Active": 453
	},
	{
		"name": "Sept 3",
		"Real Active": 742,
		"Active": 477
	},
	{
		"name": "Sept 4",
		"Real Active": 945,
		"Active": 490
	},
	{
		"name": "Sept 5",
		"Real Active": 962,
		"Active": null
	},
	{
		"name": "Sept 6",
		"Real Active": 993,
		"Active": null
	},
	{
		"name": "Sept 7",
		"Real Active": null,
		"Active": 626
	},
	{
		"name": "Sept 8",
		"Real Active": null,
		"Active": 650
	},
	{
		"name": "Sept 9",
		"Real Active": 816,
		"Active": 612
	},
	{
		"name": "Sept 10",
		"Real Active": 749,
		"Active": 543
	},
	{
		"name": "Sept 11",
		"Real Active": 621,
		"Active": 426
	},
	{
		"name": "Sept 12",
		"Real Active": 651,
		"Active": null
	},
	{
		"name": "Sept 13",
		"Real Active": 673,
		"Active": null
	},
	{
		"name": "Sept 14",
		"Real Active": null,
		"Active": 461
	},
	{
		"name": "Sept 15",
		"Real Active": null,
		"Active": 357
	},
	{
		"name": "Sept 16",
		"Real Active": 211,
		"Active": 171
	},
	{
		"name": "Sept 17",
		"Real Active": 226,
		"Active": 186
	},
	{
		"name": "Sept 18",
		"Real Active": 247,
		"Active": 187
	},
	{
		"name": "Sept 19",
		"Real Active": 281,
		"Active": null
	},
	{
		"name": "Sept 20",
		"Real Active": 315,
		"Active": null
	},
	{
		"name": "Sept 21",
		"Real Active": null,
		"Active": 222
	},
	{
		"name": "Sept 22",
		"Real Active": null,
		"Active": 220
	},
	{
		"name": "Sept 23",
		"Real Active": 278,
		"Active": 244
	},
	{
		"name": "Sept 24",
		"Real Active": 256,
		"Active": 237
	},
	{
		"name": "Sept 25",
		"Real Active": 293,
		"Active": 247
	},
	{
		"name": "Sept 26",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Sept 27",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Sept 28",
		"Real Active": null,
		"Active": 260
	},
	{
		"name": "Sept 29",
		"Real Active": null,
		"Active": 232
	},
	{
		"name": "Sept 30",
		"Real Active": null,
		"Active": 222
	},
	{
		"name": "Oct 1",
		"Real Active": null,
		"Active": 210
	},
	{
		"name": "Oct 2",
		"Real Active": null,
		"Active": 203
	},
	{
		"name": "Oct 3",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Oct 4",
		"Real Active": null,
		"Active": null
	},
	{
		"name": "Oct 5",
		"Real Active": null,
		"Active": 202
	},
	{
		"name": "Oct 6",
		"Real Active": null,
		"Active": 196
    },
    {
        "name": "Oct 7",
        "Real Active": null,
        "Active": 152
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
            TrueStartDateIsOff: true,
            OneWeek: true,
            TwoWeeks: true,
            activedata: {},
            LogViewIsOff: true
        };
    }

    render() {
        return (
            <div className='responsivecontainer'>

                {isMobile ? (<br />) : ('')}

                {/* title, subtitle12 */}
                <Grid>
                    <h5 style={{ marginBottom: 0, marginTop: 5 }}>{this.state.TrueStartDateIsOff ? ('Active Cases Known on Given Date') : ('Active Cases by First Day of Symptoms')}</h5>

                    {/* switches */}
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TrueStartDateIsOff: !this.state.TrueStartDateIsOff })} name="TrueStartDateIsOff" />} label="Show by first day of illness*" />
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogViewIsOff: !this.state.LogViewIsOff })} />} label="View on logarithmic scale" />

                    <a><i><font size="2">
                        <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")} >
                            An active case is
                            {this.state.TrueStartDateIsOff ? (' only ') : (' ')}
                            included in these numbers starting the&nbsp;
                            <b><u>{this.state.TrueStartDateIsOff ? ('date reported') : ('date of first symptoms')}</u></b>
                            {this.state.TrueStartDateIsOff ? (" to TTU's site, not first date of symptoms. ") : (' (or date of test for asymptomatic cases). ')}
                            {this.state.TrueStartDateIsOff ?
                                ("Due to reporting delays, this means a case could be included on the site for only 3-9 days instead of the 10-day minimum illness length. ")
                                :
                                ("This data assumes a 12-day illness. Due to sporadic reporting intervals by the university, a few cases may have start-end dates 1-2 days earlier (or greater, for August cases) than shown here. ")
                            }
                            {this.state.TrueStartDateIsOff ? ("Past dates are not updated with new case data found. ") : ("")}
                        </div>
                    </font></i></a>
                </Grid>

                <Grid>
                    {/* show graphs */}
                    <ResponsiveContainer height={'65%'} width={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('2.3')}>
                        <ComposedChart data={datereported} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 80, bottom: 0, left: 0 })}>
                            <CartesianGrid />
                            <XAxis interval={isMobile ? (2) : (1)} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                            {this.state.LogViewIsOff ? (<YAxis fontSize="12" interval={0} angle={-14} domain={this.state.TrueStartDateIsOff ? (['dataMin - 18', 'dataMax + 350']) : (['dataMin - 18', 'dataMax + 7'])} />) : (<YAxis interval={8} scale="log" domain={this.state.TrueStartDateIsOff ? (['0', 'dataMax + 1550']) : (['0', 'dataMax + 1207'])} fontSize="12" />)}
                            <Bar dataKey={this.state.TrueStartDateIsOff ? ("Active") : ("Real Active")} fill="#cc0000"><LabelList dataKey="Active cases" position="top" fontSize={isMobile ? (8) : (12)} /></Bar>
                            <Area dataKey="Active" fill="#cc0000" stroke="#333333" connectNulls={true} fillOpacity={.1} />
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={920} stroke="#333" strokeDasharray="2"><Label value="2% of all students and employees (920)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1380} stroke="#333" strokeDasharray="2"><Label value="3% of all students and employees (1,380)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1840} stroke="#333" strokeDasharray="2"><Label value="4% of all students and employees (1,840)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>

                    {this.state.TrueStartDateIsOff ? ('') : (
                        ''
                    )}
                </Grid>
            </div>
        )
    }
}

export default Activegraph;