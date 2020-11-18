import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Label, LabelList, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const datereported = [
	{
		"name": "Sept 16",
		"Active": 171,
		"Real Active": 243
	},
	{
		"name": "Sept 17",
		"Active": 186,
		"Real Active": 278
	},
	{
		"name": "Sept 18",
		"Active": 187,
		"Real Active": 281
	},
	{
		"name": "Sept 19",
		"Active": null,
		"Real Active": 315
	},
	{
		"name": "Sept 20",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Sept 21",
		"Active": 222,
		"Real Active": null
	},
	{
		"name": "Sept 22",
		"Active": 220,
		"Real Active": 294
	},
	{
		"name": "Sept 23",
		"Active": 244,
		"Real Active": 286
	},
	{
		"name": "Sept 24",
		"Active": 237,
		"Real Active": 315
	},
	{
		"name": "Sept 25",
		"Active": 247,
		"Real Active": 305
	},
	{
		"name": "Sept 26",
		"Active": null,
		"Real Active": 349
	},
	{
		"name": "Sept 27",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Sept 28",
		"Active": 260,
		"Real Active": null
	},
	{
		"name": "Sept 29",
		"Active": 232,
		"Real Active": 310
	},
	{
		"name": "Sept 30",
		"Active": 222,
		"Real Active": 300
	},
	{
		"name": "Oct 1",
		"Active": 210,
		"Real Active": 279
	},
	{
		"name": "Oct 2",
		"Active": 203,
		"Real Active": 260
	},
	{
		"name": "Oct 3",
		"Active": null,
		"Real Active": 274
	},
	{
		"name": "Oct 4",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Oct 5",
		"Active": 202,
		"Real Active": null
	},
	{
		"name": "Oct 6",
		"Active": 196,
		"Real Active": 260
	},
	{
		"name": "Oct 7",
		"Active": 152,
		"Real Active": 207
	},
	{
		"name": "Oct 8",
		"Active": 156,
		"Real Active": 200
	},
	{
		"name": "Oct 9",
		"Active": 134,
		"Real Active": 200
	},
	{
		"name": "Oct 10",
		"Active": null,
		"Real Active": 218
	},
	{
		"name": "Oct 11",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Oct 12",
		"Active": 157,
		"Real Active": null
	},
	{
		"name": "Oct 13",
		"Active": 125,
		"Real Active": 171
	},
	{
		"name": "Oct 14",
		"Active": 137,
		"Real Active": 171
	},
	{
		"name": "Oct 15",
		"Active": 148,
		"Real Active": 173
	},
	{
		"name": "Oct 16",
		"Active": 163,
		"Real Active": 175
	},
	{
		"name": "Oct 17",
		"Active": null,
		"Real Active": 213
	},
	{
		"name": "Oct 18",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Oct 19",
		"Active": 188,
		"Real Active": null
	},
	{
		"name": "Oct 20",
		"Active": 189,
		"Real Active": 228
	},
	{
		"name": "Oct 21",
		"Active": 191,
		"Real Active": 238
	},
	{
		"name": "Oct 22",
		"Active": 197,
		"Real Active": 227
	},
	{
		"name": "Oct 23",
		"Active": 206,
		"Real Active": 237
	},
	{
		"name": "Oct 24",
		"Active": null,
		"Real Active": 270
	},
	{
		"name": "Oct 25",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Oct 26",
		"Active": 222,
		"Real Active": null
	},
	{
		"name": "Oct 27",
		"Active": 214,
		"Real Active": 264
	},
	{
		"name": "Oct 28",
		"Active": 197,
		"Real Active": 285
	},
	{
		"name": "Oct 29",
		"Active": 183,
		"Real Active": 282
	},
	{
		"name": "Oct 30",
		"Active": 179,
		"Real Active": 263
	},
	{
		"name": "Oct 31",
		"Active": null,
		"Real Active": 291
	},
	{
		"name": "Nov 1",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Nov 2",
		"Active": 193,
		"Real Active": null
	},
	{
		"name": "Nov 3",
		"Active": 188,
		"Real Active": 261
	},
	{
		"name": "Nov 4",
		"Active": 192,
		"Real Active": 257
	},
	{
		"name": "Nov 5",
		"Active": 189,
		"Real Active": null
	},
	{
		"name": "Nov 6",
		"Active": 198,
		"Real Active": null
	},
	{
		"name": "Nov 7",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Nov 8",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Nov 9",
		"Active": 237,
		"Real Active": null
	},
	{
		"name": "Nov 10",
		"Active": 214,
		"Real Active": null
	},
	{
		"name": "Nov 11",
		"Active": 257,
		"Real Active": null
	},
	{
		"name": "Nov 12",
		"Active": 280,
		"Real Active": null
	},
	{
		"name": "Nov 13",
		"Active": 274,
		"Real Active": null
	},
	{
		"name": "Nov 14",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Nov 15",
		"Active": null,
		"Real Active": null
	},
	{
		"name": "Nov 16",
		"Active": 322,
		"Real Active": null
	},
	{
		"name": "Nov 17",
		"Active": 326,
		"Real Active": null
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
                            {this.state.LogViewIsOff ? (<YAxis fontSize="12" interval={0} angle={-14} domain={this.state.TrueStartDateIsOff ? (['dataMin - 125', 'dataMax + 74']) : (['dataMin - 125', 'dataMax + 51'])} />) : (<YAxis interval={8} scale="log" domain={this.state.TrueStartDateIsOff ? (['0', 'dataMax + 200']) : (['0', 'dataMax + 200'])} fontSize="12" />)}
                            <Bar dataKey={this.state.TrueStartDateIsOff ? ("Active") : ("Real Active")} fill="#cc0000"><LabelList dataKey="Active cases" position="top" fontSize={isMobile ? (8) : (12)} /></Bar>
                            <Area dataKey="Active" fill="#cc0000" stroke="#333333" connectNulls={true} fillOpacity={.1} />
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={920} stroke="#333" strokeDasharray="2"><Label value="2% of all students and employees (920)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={230} stroke="#333" strokeDasharray="2"><Label value="0.5% of all students and employees (230)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={690} stroke="#333" strokeDasharray="2"><Label value="1.5% of all students and employees (690)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
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