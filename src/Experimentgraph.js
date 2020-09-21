import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const noprojections = [
	{
		"name": null,
		"Active cases": null,
		"aandm": null
	},
	{
		"name": null,
		"Active cases": null,
		"aandm": null
	},
	{
		"name": null,
		"Active cases": null,
		"aandm": null
	},
	{
		"name": null,
		"Active cases": null,
		"aandm": null
	},
	{
		"name": null,
		"Active cases": null,
		"aandm": null
	},
	{
		"name": "Aug 3",
		"Active cases": 18,
		"aandm": 18
	},
	{
		"name": "Aug 4",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 5",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 6",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 7",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 8",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 9",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 10",
		"Active cases": 25,
		"aandm": 44
	},
	{
		"name": "Aug 11",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 12",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 13",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 14",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 15",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 16",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 17",
		"Active cases": 38,
		"aandm": 49
	},
	{
		"name": "Aug 18",
		"Active cases": 0,
		"aandm": 57
	},
	{
		"name": "Aug 19",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 20",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 21",
		"Active cases": 53,
		"aandm": 59
	},
	{
		"name": "Aug 22",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 23",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 24",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 25",
		"Active cases": 87,
		"aandm": 85
	},
	{
		"name": "Aug 26",
		"Active cases": 146,
		"aandm": 142
	},
	{
		"name": "Aug 27",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 28",
		"Active cases": 176,
		"aandm": 165
	},
	{
		"name": "Aug 29",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 30",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Aug 31",
		"Active cases": 268,
		"aandm": 255
	},
	{
		"name": "Sept 1",
		"Active cases": 418,
		"aandm": 392
	},
	{
		"name": "Sept 2",
		"Active cases": 453,
		"aandm": 465
	},
	{
		"name": "Sept 3",
		"Active cases": 477,
		"aandm": 512
	},
	{
		"name": "Sept 4",
		"Active cases": 490,
		"aandm": 550
	},
	{
		"name": "Sept 5",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Sept 6",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Sept 7",
		"Active cases": 626,
		"aandm": 667
	},
	{
		"name": "Sept 8",
		"Active cases": 650,
		"aandm": 742
	},
	{
		"name": "Sept 9",
		"Active cases": 612,
		"aandm": 777
	},
	{
		"name": "Sept 10",
		"Active cases": 543,
		"aandm": 668
	},
	{
		"name": "Sept 11",
		"Active cases": 426,
		"aandm": 558
	},
	{
		"name": "Sept 12",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Sept 13",
		"Active cases": 0,
		"aandm": null
	},
	{
		"name": "Sept 14",
		"Active cases": 461,
		"aandm": 563
	},
	{
		"name": "Sept 15",
		"Active cases": 357,
		"aandm": 576
	},
	{
		"name": "Sept 16",
		"Active cases": 171,
		"aandm": 626
	},
	{
		"name": "Sept 17",
		"Active cases": 186,
		"aandm": 430
	},
	{
		"name": "Sept 18",
		"Active cases": 187,
		"aandm": 387
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
                            Dolor sit amet
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
                        <Area type="monotone" dataKey="aandm" fill="#1741b3" connectNulls={true}><LabelList dataKey="aandm" position="top" fontSize={isMobile ? (8) : (12)} /></Area>
                        <Line type="monotone" dataKey="Active cases" fill="#333333" connectNulls={true} dot={true} stroke="#333333" strokeDasharray="3 4"></Line>
                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        )
    }
}

export default Experimentgraph;