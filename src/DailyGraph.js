import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
// import { InfoIcon } from '@material-ui/icons/InfoIcon';
import { isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { data } from './data.js';
import { Area, Bar, CartesianGrid, ComposedChart, LabelList, Legend, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from "recharts";

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

class DailyGraph extends Component {
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
                {/* title, subtitle */}
                <br/>
                <Grid>
                    <div>
                        <span className="chart-title">Daily Cases by Day Reported to University</span>
                    </div>
                    
                    {/* switches */}
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ PastDataIsOff: !this.state.PastDataIsOff })} name="PastDataIsOff" />} label="Include 2020-2021 data" />

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
                    <ResponsiveContainer width={isMobile ? ('99%') : ('100%')} height={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('3')}>
                        <ComposedChart data={data} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 40, bottom: 0, left: 0 })}>
                            <CartesianGrid />

							<XAxis 
								interval={isMobile ? (13) : (6)} 
								dataKey="Date" angle={-45} textAnchor="end" fontSize="12" height="60" 
							/>

                            {this.state.LogViewIsOff ? (
								<YAxis 
									fontSize="12" 
									domain={this.state.PastDataIsOff ? 
										(['dataMin - 1', 'dataMax + 21']) 
										: (['dataMin', 'dataMax + 21'])} 
								/>) : (
								<YAxis interval={8} scale="log" domain={['0', 'dataMax + 350']} fontSize="12" />)
							}

                            {/* 2021 */}
                            <Bar 
                                dataKey={"Daily 2021-2022"} 
                                fill="#cc0000" >
                                    <LabelList 
                                        dataKey={"Daily 2021-2022"} 
                                        position="top"
                                        fontSize={isMobile ? ("8") : ("12")} 
                                    />
                            </Bar>

                            {/* 2020 */}
                            {this.state.PastDataIsOff ? ("") : 
                                <Bar 
                                    dataKey={"Daily 2020-2021"} 
                                    fill="#666666" >
                                        <LabelList 
                                            dataKey="Daily 2020-2021"
                                            position="top" 
                                            fontSize={isMobile ? ("8") : ("12")} 
                                        />
                                </Bar>
                            }

                            {/* 2021 */}
                            <Area 
                                dataKey="Daily 2021-2022 avg"
                                fill="#cc0000" 
                                stroke="#333333"
                                connectNulls={true} 
                                fillOpacity={.25} 
                            />

                            {/* 2020 */}
                            {this.state.PastDataIsOff ? ("") : 
                                <Area 
                                    dataKey="Daily 2020-2021 avg"
                                    fill="#666666" 
                                    strokeDasharray="3 4"
                                    stroke="#666666"
                                    connectNulls={true} 
                                    fillOpacity={.1} 
                                />
                            }

							{this.state.PastDataIsOff ? ('') : (<Line dataKey="Daily 2021-2022 avg" stroke="#333333" connectNulls={true} dot={false} fill="#333333" strokeDasharray="1 1" />)}

                            <ReferenceLine y={230} stroke="#333" strokeDasharray="2"><Label value="0.5% of all students and employees (230)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>

                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </Grid>
            </center>
        )
    }
}

export default DailyGraph;