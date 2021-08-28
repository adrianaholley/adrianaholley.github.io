import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { fall2020 } from './fall2020.js';
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from "recharts";

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
            PastDataIsOff: true,
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
                    <h5 style={{ marginBottom: 0, marginTop: 5 }}>{this.state.PastDataIsOff ? ('Daily Cases by Day Reported to University') : ('Daily Cases by First Day of Symptoms')}</h5>
                    {/* switches */}
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ PastDataIsOff: !this.state.PastDataIsOff })} name="PastDataIsOff" />} label="Also show 2020 data" />
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogViewIsOff: !this.state.LogViewIsOff })} />} label="View on logarithmic scale" />

                    <a><i><font size="2">
                        <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")} >
                            Case counts reflect the&nbsp;<b><u>date reported</u></b> on TTU's website, not first date of symptoms. 
							Due to testing delays, it can take 0-3 days for a case to be reflected in this view.
                            If a student or employee tests at a non-TTU testing location, it is not included on this site unless it was self-reported to the university.
                        </div>
                    </font></i></a>
                </Grid>

                <Grid>
                    {/* bar chart */}
                    <ResponsiveContainer width={isMobile ? ('99%') : ('100%')} height={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('2.3')}>
                        <ComposedChart data={fall2020} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 80, bottom: 0, left: 0 })}>
                            <CartesianGrid />
							<XAxis 
								interval={isMobile ? (2) : (1)} 
								dataKey="Date" angle={-45} textAnchor="end" fontSize="12" height="60" 
							/>
                            {this.state.LogViewIsOff ? (
								<YAxis 
									interval={0} angle={-14} fontSize="12" 
									domain={this.state.PastDataIsOff ? 
										(['dataMin - 16.6', 'dataMax + 134']) 
										: (['dataMin', 'dataMax + 22'])} 
								/>) : (
								<YAxis interval={8} scale="log" domain={['0', 'dataMax + 350']} fontSize="12" />)
							}

                            <Bar dataKey={this.state.PastDataIsOff ? ("Daily 2021") : ("Daily 2020")} fill="#666666" ><LabelList dataKey={this.state.PastDataIsOff ? ("Daily 2021") : ("Daily 2020")} position="top" fontSize={isMobile ? ("8") : ("12")} /></Bar>
                            <Area dataKey={this.state.PastDataIsOff ? ("Daily 2021 avg") : ('Daily 2020 avg')} fill="#666666" stroke={this.state.PastDataIsOff ? ('#333333') : ("#333333")} connectNulls={true} fillOpacity={.15} />
							{this.state.PastDataIsOff ? ('') : (<Line dataKey="Daily 2021 avg" stroke="#333333" connectNulls={true} dot={false} fill="#333333" strokeDasharray="1 1" />)}
                            <Line dataKey="Projection for this date" connectNulls={true} dot={false} stroke="#333333" fill="#333333" strokeDasharray="3 4" />
                            <ReferenceLine y={230} stroke="#333" strokeDasharray="2"><Label value="0.5% of all students and employees (230)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>

                    {this.state.PastDataIsOff ? ('') : ('')}
                </Grid>
            </center>
        )
    }
}

export default Newgraph;