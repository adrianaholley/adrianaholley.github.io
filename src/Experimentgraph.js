import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Label, Legend, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const noprojections = [
	{
		"name": "Jul 29",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Jul 30",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Jul 31",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 1",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 2",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 3",
		"Active cases": 18,
		"aandm": 18,
		"missingfirst6days": 18,
		"missingfirst5days": 18,
		"missingfirst4 days": 18,
		"missingfirst2days": 18,
		"missing1stday": 18,
		"txst": 18
	},
	{
		"name": "Aug 4",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 5",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 6",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 7",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 8",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 9",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 10",
		"Active cases": 25,
		"aandm": 44,
		"missingfirst6days": 26,
		"missingfirst5days": 26,
		"missingfirst4 days": 26,
		"missingfirst2days": 44,
		"missing1stday": 44,
		"txst": 44
	},
	{
		"name": "Aug 11",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 12",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 13",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 14",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 15",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 16",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 17",
		"Active cases": 38,
		"aandm": 49,
		"missingfirst6days": 23,
		"missingfirst5days": 23,
		"missingfirst4 days": 23,
		"missingfirst2days": 49,
		"missing1stday": 49,
		"txst": 57
	},
	{
		"name": "Aug 18",
		"Active cases": null,
		"aandm": 57,
		"missingfirst6days": 31,
		"missingfirst5days": 31,
		"missingfirst4 days": 31,
		"missingfirst2days": 31,
		"missing1stday": 57,
		"txst": 31
	},
	{
		"name": "Aug 19",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 20",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 21",
		"Active cases": 53,
		"aandm": 59,
		"missingfirst6days": 36,
		"missingfirst5days": 59,
		"missingfirst4 days": 59,
		"missingfirst2days": 59,
		"missing1stday": 59,
		"txst": 59
	},
	{
		"name": "Aug 22",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 23",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 24",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 25",
		"Active cases": 87,
		"aandm": 85,
		"missingfirst6days": 26,
		"missingfirst5days": 54,
		"missingfirst4 days": 54,
		"missingfirst2days": 62,
		"missing1stday": 85,
		"txst": 119
	},
	{
		"name": "Aug 26",
		"Active cases": 146,
		"aandm": 142,
		"missingfirst6days": 83,
		"missingfirst5days": 83,
		"missingfirst4 days": 111,
		"missingfirst2days": 111,
		"missing1stday": 119,
		"txst": 165
	},
	{
		"name": "Aug 27",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 28",
		"Active cases": 176,
		"aandm": 165,
		"missingfirst6days": 137,
		"missingfirst5days": 137,
		"missingfirst4 days": 137,
		"missingfirst2days": 165,
		"missing1stday": 165,
		"txst": 165
	},
	{
		"name": "Aug 29",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 30",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Aug 31",
		"Active cases": 268,
		"aandm": 255,
		"missingfirst6days": 172,
		"missingfirst5days": 172,
		"missingfirst4 days": 229,
		"missingfirst2days": 255,
		"missing1stday": 255,
		"txst": 465
	},
	{
		"name": "Sept 1",
		"Active cases": 418,
		"aandm": 392,
		"missingfirst6days": 255,
		"missingfirst5days": 309,
		"missingfirst4 days": 309,
		"missingfirst2days": 392,
		"missing1stday": 392,
		"txst": 512
	},
	{
		"name": "Sept 2",
		"Active cases": 453,
		"aandm": 465,
		"missingfirst6days": 328,
		"missingfirst5days": 328,
		"missingfirst4 days": 382,
		"missingfirst2days": 439,
		"missing1stday": 465,
		"txst": 550
	},
	{
		"name": "Sept 3",
		"Active cases": 477,
		"aandm": 512,
		"missingfirst6days": 375,
		"missingfirst5days": 375,
		"missingfirst4 days": 375,
		"missingfirst2days": 429,
		"missing1stday": 486,
		"txst": 493
	},
	{
		"name": "Sept 4",
		"Active cases": 490,
		"aandm": 550,
		"missingfirst6days": 321,
		"missingfirst5days": 439,
		"missingfirst4 days": 439,
		"missingfirst2days": 493,
		"missing1stday": 493,
		"txst": 493
	},
	{
		"name": "Sept 5",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Sept 6",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Sept 7",
		"Active cases": 626,
		"aandm": 667,
		"missingfirst6days": 292,
		"missingfirst5days": 339,
		"missingfirst4 days": 412,
		"missingfirst2days": 667,
		"missing1stday": 667,
		"txst": 777
	},
	{
		"name": "Sept 8",
		"Active cases": 650,
		"aandm": 742,
		"missingfirst6days": 303,
		"missingfirst5days": 367,
		"missingfirst4 days": 414,
		"missingfirst2days": 624,
		"missing1stday": 742,
		"txst": 668
	},
	{
		"name": "Sept 9",
		"Active cases": 612,
		"aandm": 777,
		"missingfirst6days": 338,
		"missingfirst5days": 338,
		"missingfirst4 days": 402,
		"missingfirst2days": 522,
		"missing1stday": 659,
		"txst": 558
	},
	{
		"name": "Sept 10",
		"Active cases": 543,
		"aandm": 668,
		"missingfirst6days": 347,
		"missingfirst5days": 347,
		"missingfirst4 days": 347,
		"missingfirst2days": 458,
		"missing1stday": 531,
		"txst": 485
	},
	{
		"name": "Sept 11",
		"Active cases": 426,
		"aandm": 558,
		"missingfirst6days": 146,
		"missingfirst5days": 374,
		"missingfirst4 days": 374,
		"missingfirst2days": 438,
		"missing1stday": 485,
		"txst": 438
	},
	{
		"name": "Sept 12",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": 374,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Sept 13",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": 146,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Sept 14",
		"Active cases": 461,
		"aandm": 563,
		"missingfirst6days": 216,
		"missingfirst5days": 225,
		"missingfirst4 days": 260,
		"missingfirst2days": 563,
		"missing1stday": 563,
		"txst": 626
	},
	{
		"name": "Sept 15",
		"Active cases": 357,
		"aandm": 576,
		"missingfirst6days": 202,
		"missingfirst5days": 229,
		"missingfirst4 days": 238,
		"missingfirst2days": 348,
		"missing1stday": 576,
		"txst": 430
	},
	{
		"name": "Sept 16",
		"Active cases": 171,
		"aandm": 626,
		"missingfirst6days": 252,
		"missingfirst5days": 252,
		"missingfirst4 days": 279,
		"missingfirst2days": 323,
		"missing1stday": 398,
		"txst": 387
	},
	{
		"name": "Sept 17",
		"Active cases": 186,
		"aandm": 430,
		"missingfirst6days": 284,
		"missingfirst5days": 284,
		"missingfirst4 days": 284,
		"missingfirst2days": 320,
		"missing1stday": 355,
		"txst": 352
	},
	{
		"name": "Sept 18",
		"Active cases": 187,
		"aandm": 387,
		"missingfirst6days": 127,
		"missingfirst5days": 316,
		"missingfirst4 days": 316,
		"missingfirst2days": 343,
		"missing1stday": 352,
		"txst": 343
	},
	{
		"name": "Sept 19",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Sept 20",
		"Active cases": null,
		"aandm": null,
		"missingfirst6days": null,
		"missingfirst5days": null,
		"missingfirst4 days": null,
		"missingfirst2days": null,
		"missing1stday": null,
		"txst": null
	},
	{
		"name": "Sept 21",
		"Active cases": 222,
		"aandm": 390,
		"missingfirst6days": 106,
		"missingfirst5days": 138,
		"missingfirst4 days": 188,
		"missingfirst2days": 390,
		"missing1stday": 390,
		"txst": 443
	},
	{
		"name": "Sept 22",
		"Active cases": 220,
		"aandm": 399,
		"missingfirst6days": 83,
		"missingfirst5days": 115,
		"missingfirst4 days": 147,
		"missingfirst2days": 210,
		"missing1stday": 399,
		"txst": 254
	},
	{
		"name": "Sept 23",
		"Active cases": 244,
		"aandm": 443,
		"missingfirst6days": 127,
		"missingfirst5days": 127,
		"missingfirst4 days": 159,
		"missingfirst2days": 241,
		"missing1stday": 254,
		"txst": 241
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

class Experimentgraph extends Component {
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
                    <h5 style={{ marginBottom: 10, marginTop: 5 }}>Active Cases Shown 3 Ways</h5>
                    <a><i><font size="2">
                        <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")} >
                            TXST method's current and previous day are subject to change.
                        </div>
                    </font></i></a>
                </Grid>

                <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />

                {/* show graphs */}
                <ResponsiveContainer height={'65%'} width={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('2.5')}>
                    <ComposedChart data={noprojections} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 80, bottom: 0, left: 0 })}>
                        <CartesianGrid />
                        <Legend />
                        <XAxis interval={isMobile ? (2) : (1)} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 1550']} fontSize="12" />)}
                        {/* <Area type="monotone" dataKey="missing1stday" fill="#ff0000" stroke="#ff0000" connectNulls={true}   fillOpacity={.1}/> */}
                        {/* <Area type="monotone" dataKey="missingfirst2days" fill="#ff0000" stroke="#ff0000" connectNulls={true}   fillOpacity={.1}/> */}
                        {/* <Area type="monotone" dataKey="missingfirst5days" fill="#ff0000" stroke="#ff0000" connectNulls={true}   fillOpacity={.1}/> */}
                        {/* <Area type="monotone" dataKey="missingfirst6days" fill="#ff0000" stroke="#ff0000" connectNulls={true}   fillOpacity={.1}/> */}
                        
                        <Area type="monotone" dataKey="txst"  fill="#DAA520" stroke="#DAA520" connectNulls={true}  fillOpacity={.1} />
                        <Line type="monotone" dataKey="Active cases" fill="#333333" connectNulls={true} dot={true} stroke="#333333" strokeDasharray="3 4" />
                        <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize="12"></Label></ReferenceLine>
                        <ReferenceLine y={920} stroke="#333" strokeDasharray="2"><Label value="2% of all students and employees (920)" position="insideTopLeft" fontSize="12"></Label></ReferenceLine>
                        <ReferenceLine y={1380} stroke="#333" strokeDasharray="2"><Label value="3% of all students and employees (1,380)" position="insideTopLeft" fontSize="12"></Label></ReferenceLine>
                        <ReferenceLine y={1840} stroke="#333" strokeDasharray="2"><Label value="4% of all students and employees (1,840)" position="insideTopLeft" fontSize="12"></Label></ReferenceLine>
                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        )
    }
}

export default Experimentgraph;