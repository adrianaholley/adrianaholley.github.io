import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { isMobile } from "react-device-detect";
import React, { Component } from 'react';
import { data } from './data.js';
import { Area, Bar, CartesianGrid, ComposedChart, Label, LabelList, Legend, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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

class ActiveGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PastDataIsOff: true,
            OneWeek: true,
            TwoWeeks: true,
            activedata: {},
            LogViewIsOff: true
        };
    }

    render() {
        return (
            <center>
                {/* title, subtitle12 */}
				<br/>
                <Grid>
                    <h5 style={{ marginBottom: 0, marginTop: 5 }}>Active Cases Known on Given Date</h5>

                    {/* switches */}
                    <FormControlLabel control={<RedSwitch onChange={() => this.setState({ PastDataIsOff: !this.state.PastDataIsOff })} name="PastDataIsOff" />} label="Include 2020-2021 data" />
                    {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogViewIsOff: !this.state.LogViewIsOff })} />} label="View on logarithmic scale" /> */}

                    <a><i><font size="2">
                        <div className={isMobile ? ("adjustabletextmobile") : ("adjustabletext")} >
                            An active case is only included in these numbers starting the date reported to TTU's site, not first date of symptoms. 
							Due to reporting delays, this means a case could be included on the site for only 3-9 days instead of the usual 10-day illness length.
							Past dates are not updated with new case data found.
                        </div>
                    </font></i></a>
                </Grid>

                <Grid>
                    {/* bar chart */}
                    <ResponsiveContainer width={isMobile ? ('99%') : ('100%')} height={isMobile ? ('99%') : ('100%')} aspect={isMobile ? ('1') : ('3.8')}>
                        <ComposedChart data={data} margin={isMobile ? ({ top: 0, right: 20, bottom: 0, left: -10 }) : ({ top: 0, right: 32, bottom: 0, left: 0 })}>
                            <CartesianGrid />

							<XAxis 
								interval={isMobile ? (13) : (6)} 
								dataKey="Date" angle={-45} textAnchor="end" fontSize="12" height="60" 
							/>

                            {this.state.LogViewIsOff ? (
								<YAxis 
									fontSize="12" 
									domain={this.state.PastDataIsOff ? 
										(['dataMin - 17', 'dataMax + 71']) 
										: (['dataMin - 17', 'dataMax + 40'])} 
								/>) : (
								<YAxis interval={8} scale="log" domain={['0', 'dataMax + 350']} fontSize="12" />)
							}

                            {/* 2021 */}
                            <Bar 
                                dataKey={"Active 2021-2022"} 
                                fill="#cc0000" >
                                    <LabelList 
                                        dataKey={"Active 2021-2022"} 
                                        position="top"
                                        fontSize={isMobile ? ("8") : ("12")} 
                                    />
                            </Bar>

                            {/* 2020 */}
                            {this.state.PastDataIsOff ? ("") : 
                                <Bar 
                                    dataKey={"Active 2020-2021"} 
                                    fill="#666666" >
                                        <LabelList 
                                            dataKey="Active 2020-2021"
                                            position="top" 
                                            fontSize={isMobile ? ("8") : ("12")} 
                                        />
                                </Bar>
                            }

                            {/* 2021 */}
                            <Area 
                                dataKey="Active 2021-2022"
                                fill="#cc0000" 
                                stroke="#333333"
                                connectNulls={true} 
                                fillOpacity={.25} 
                            />

                            {/* 2020 */}
                            {this.state.PastDataIsOff ? ("") : 
                                <Area 
                                    dataKey="Active 2020-2021"
                                    fill="#666666" 
                                    strokeDasharray="3 4"
                                    stroke="#666666"
                                    connectNulls={true} 
                                    fillOpacity={.1} 
                                />
                            }

							{this.state.PastDataIsOff ? ('') : (<Line dataKey="Active 2021-2022" stroke="#333333" connectNulls={true} dot={false} fill="#333333" strokeDasharray="1 1" />)}

                            <ReferenceLine y={230} stroke="#333" strokeDasharray="2"><Label value="0.5% of all students and employees (230)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={460} stroke="#333" strokeDasharray="2"><Label value="1.0% of all students and employees (460)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <ReferenceLine y={690} stroke="#333" strokeDasharray="2"><Label value="1.5% of all students and employees (690)" position="insideTopLeft" fontSize={isMobile ? ("8") : ("12")}></Label></ReferenceLine>
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </Grid>
            </center>
        )
    }
}

export default ActiveGraph;