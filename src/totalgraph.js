import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
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

class TotalGraph extends Component {
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
                        <span className="chart-title">Total Cases by Day Reported to University</span>
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
										(['dataMin - 116', 'dataMax + 380']) 
										: (['dataMin - 18', 'dataMax + 130'])} 
								/>) : (
								<YAxis interval={8} scale="log" domain={['0', 'dataMax + 350']} fontSize="12" />)
							}

                            {/* 2021 */}
                            <Bar 
                                dataKey={"Total 2021-2022"} 
                                fill="#cc0000" >
                                    <LabelList 
                                        dataKey={"Total 2021-2022"} 
                                        position="top"
										fontSize={isMobile ? ("8") : ("10")}
                                    />
                            </Bar>

                            {/* 2020 */}
                            {this.state.PastDataIsOff ? ("") : 
                                <Bar 
                                    dataKey={"Total 2020-2021"} 
                                    fill="#666666" >
                                        <LabelList 
                                            dataKey="Total 2020-2021"
                                            position="top" 
                                            fontSize={isMobile ? ("8") : ("10")} 
                                        />
                                </Bar>
                            }

                            {/* 2021 */}
                            <Area 
                                dataKey="Total 2021-2022"
                                fill="#cc0000" 
                                stroke="#333333"
                                connectNulls={true} 
                                fillOpacity={.25} 
                            />

                            {/* 2020 */}
                            {this.state.PastDataIsOff ? ("") : 
                                <Area 
                                    dataKey="Total 2020-2021"
                                    fill="#666666" 
                                    strokeDasharray="3 4"
                                    stroke="#666666"
                                    connectNulls={true} 
                                    fillOpacity={.1} 
                                />
                            }

							{this.state.PastDataIsOff ? ('') : (<Line dataKey="Total 2021-2022" stroke="#333333" connectNulls={true} dot={false} fill="#333333" strokeDasharray="1 1" />)}

                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1.0% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={920} stroke="#333" strokeDasharray="2"><Label value="2.0% of all students and employees (920)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1380} stroke="#333" strokeDasharray="2"><Label value="3.0% of all students and employees (1380)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={1840} stroke="#333" strokeDasharray="2"><Label value="4.0% of all students and employees (1840)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={2300} stroke="#333" strokeDasharray="2"><Label value="5.0% of all students and employees (2300)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={2760} stroke="#333" strokeDasharray="2"><Label value="6.0% of all students and employees (2760)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={3220} stroke="#333" strokeDasharray="2"><Label value="7.0% of all students and employees (3220)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>

                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </Grid>
            </center>
        )
    }
}

export default TotalGraph;