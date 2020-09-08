import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const oneweek = [
    {
        name: 'Aug3', Active: 18, Sept2: 11, Sept3: 11, Sept1: 12, Aug31: 13, Aug28: 14, Sept4: 11, Sept7: 11
    },
    {
        name: 'Aug 4', nodata: 967, Sept2: 12, Sept3: 12, Sept1: 13, Aug31: 15, Aug28: 15, Sept4: 12, Sept7: 12
    },
    {
        name: 'Aug 5', nodata: 1098, Sept2: 14, Sept3: 13, Sept1: 15, Aug31: 16, Aug28: 17, Sept4: 14, Sept7: 14
    },
    {
        name: 'Aug 6', nodata: 1200, Sept2: 15, Sept3: 15, Sept1: 17, Aug31: 18, Aug28: 19, Sept4: 15, Sept7: 15
    },
    {
        name: 'Aug 7', nodata: 1108, Sept2: 17, Sept3: 17, Sept1: 18, Aug31: 19, Aug28: 20, Sept4: 17, Sept7: 17
    },
    {
        name: 'Aug 8', nodata: 680, Sept2: 19, Sept3: 19, Sept1: 20, Aug31: 21, Aug28: 22, Sept4: 19, Sept7: 19
    },
    {
        name: 'Aug 9', nodata: 680, Sept2: 22, Sept3: 21, Sept1: 23, Aug31: 24, Aug28: 24, Sept4: 22, Sept7: 22
    },
    {
        name: 'Aug 10', Active: 25, Sept2: 24, Sept3: 24, Sept1: 25, Aug31: 26, Aug28: 27, Sept4: 24, Sept7: 24
    },
    {
        name: 'Aug 11', nodata: 680, Sept2: 27, Sept3: 27, Sept1: 28, Aug31: 29, Aug28: 29, Sept4: 27, Sept7: 27
    },
    {
        name: 'Aug 12', nodata: 680, Sept2: 30, Sept3: 30, Sept1: 31, Aug31: 32, Aug28: 32, Sept4: 30, Sept7: 30
    },
    {
        name: 'Aug 13', nodata: 680, Sept2: 34, Sept3: 34, Sept1: 35, Aug31: 35, Aug28: 35, Sept4: 34, Sept7: 34
    },
    {
        name: 'Aug 14', nodata: 680, Sept2: 38, Sept3: 38, Sept1: 39, Aug31: 38, Aug28: 38, Sept4: 38, Sept7: 38
    },
    {
        name: 'Aug 15', nodata: 680, Sept2: 43, Sept3: 43, Sept1: 43, Aug31: 42, Aug28: 42, Sept4: 43, Sept7: 43
    },
    {
        name: 'Aug 16', nodata: 680, Sept2: 48, Sept3: 48, Sept1: 48, Aug31: 47, Aug28: 45, Sept4: 48, Sept7: 48
    },
    {
        name: 'Aug 17', Active: 38, Sept2: 53, Sept3: 54, Sept1: 53, Aug31: 51, Aug28: 50, Sept4: 54, Sept7: 54
    },
    {
        name: 'Aug 18', nodata: 680, Sept2: 60, Sept3: 60, Sept1: 59, Aug31: 57, Aug28: 54, Sept4: 61, Sept7: 61
    },
    {
        name: 'Aug 19', nodata: 680, Sept2: 67, Sept3: 68, Sept1: 65, Aug31: 62, Aug28: 60, Sept4: 68, Sept7: 68
    },
    {
        name: 'Aug 20', nodata: 680, Sept2: 75, Sept3: 76, Sept1: 73, Aug31: 69, Aug28: 65, Sept4: 77, Sept7: 77
    },
    {
        name: 'Aug 21', nodata: 0, Sept2: 83, Sept3: 85, Sept1: 81, Aug31: 76, Aug28: 71, Sept4: 86, Sept7: 86
    },
    {
        name: 'Aug 22', nodata: 0, Sept2: 93, Sept3: 95, Sept1: 90, Aug31: 83, Aug28: 78, Sept4: 97, Sept7: 97
    },
    {
        name: 'Aug 23', nodata: 0, Sept2: 104, Sept3: 107, Sept1: 100, Aug31: 92, Aug28: 85, Sept4: 109, Sept7: 109
    },
    {
        name: 'Aug 24', nodata: 0, Sept2: 117, Sept3: 120, Sept1: 111, Aug31: 101, Aug28: 93, Sept4: 122, Sept7: 122
    },
    {
        name: 'Aug 25', Active: 87, Sept2: 130, Sept3: 135, Sept1: 124, Aug31: 112, Aug28: 102, Sept4: 137, Sept7: 137
    },
    {
        name: 'Aug 26', Active: 146, Sept2: 146, Sept3: 151, Sept1: 137, Aug31: 123, Aug28: 112, Sept4: 154, Sept7: 154
    },
    {
        name: 'Aug 27', nodata: 0, Sept2: 163, Sept3: 169, Sept1: 153, Aug31: 135, Aug28: 122, Sept4: 172, Sept7: 173
    },
    {
        name: 'Aug 28', Active: 176, Sept2: 182, Sept3: 190, Sept1: 170, Aug31: 149, Aug28: 134, Sept4: 193, Sept7: 194
    },
    {
        name: 'Aug 29', nodata: 0, Sept2: 204, Sept3: 213, Sept1: 189, Aug31: 164, Aug28: 146, Sept4: 217, Sept7: 218
    },
    {
        name: 'Aug 30', nodata: 0, Sept2: 228, Sept3: 238, Sept1: 210, Aug31: 181, Aug28: 160, Sept4: 244, Sept7: 244
    },
    {
        name: 'Aug 31', Active: 268, Sept2: 255, Sept3: 267, Sept1: 233, Aug31: 200, Aug28: 175, Sept4: 273, Sept7: 274
    },
    {
        name: 'Sept 1', Active: 418, Sept2: 285, Sept3: 300, Sept1: 259, Aug31: 220, Aug28: 192, Sept4: 307, Sept7: 308
    },
    {
        name: 'Sept 2', Active: 453, Sept2: 318, Sept3: 336, Sept1: 288, Aug31: 242, Aug28: 210, Sept4: 345, Sept7: 346
    },
    {
        name: 'Sept 3', Active: 477, Sept2: 355, Sept3: 377, Sept1: 320, Aug31: 267, Aug28: 229, Sept4: 387, Sept7: 388
    },
    {
        name: 'Sept 4', Active: 490, Sept2: 397, Sept3: 422, Sept1: 356, Aug31: 294, Aug28: 251, Sept4: 434, Sept7: 436
    },
    {
        name: 'Sept 5', nodata: 0, Sept2: 444, Sept3: 473, Sept1: 396, Aug31: 324, Aug28: 274, Sept4: 487, Sept7: 489
    },
    {
        name: 'Sept 6', nodata: 0, Sept2: 496, Sept3: 531, Sept1: 440, Aug31: 357, Aug28: 300, Sept4: 547, Sept7: 549
    },
    {
        name: 'Sept 7', Active: 626, Sept2: 555, Sept3: 595, Sept1: 489, Aug31: 394, Aug28: 328, Sept4: 614, Sept7: 616
    },
    {
        name: 'Sept 8', nodata: 0, Sept2: 620, Sept3: 667, Sept1: 544, Aug31: 434, Aug28: 359, Sept4: 689, Sept7: 692
    },
    {
        name: 'Sept 9', nodata: 0, Sept2: 693, Sept3: 748, Sept1: 605, Aug31: 478, Aug28: 393, Sept4: 773, Sept7: 777
    },
    {
        name: 'Sept 10', nodata: 0, Sept2: 774, Sept3: 838, Sept1: 672, Aug31: 527, Aug28: 430, Sept4: 868, Sept7: 872
    },
    {
        name: 'Sept 11', nodata: 0, Sept2: 866, Sept3: 939, Sept1: 747, Aug31: 581, Aug28: 470, Sept4: 974, Sept7: 979
    },
    {
        name: 'Sept 12', nodata: 0, Sept2: 967, Sept3: 1053, Sept1: 831, Aug31: 640, Aug28: 515, Sept4: 1094, Sept7: 1099
    },
    {
        name: 'Sept 13', nodata: 0, Sept2: 1081, Sept3: 1180, Sept1: 923, Aug31: 705, Aug28: 563, Sept4: 1228, Sept7: 1234
    },
    {
        name: 'Sept 14', nodata: 0, Sept2: 1208, Sept3: 1323, Sept1: 1026, Aug31: 777, Aug28: 616, Sept4: 1378, Sept7: 1385
    },
    {
        name: 'Sept 15', nodata: 0, Sept2: 1350, Sept3: 1483, Sept1: 1141, Aug31: 856, Aug28: 674, Sept4: 1547, Sept7: 1555
    }
];

const twoweeks = [
    {
        name: 'Aug3', Active: 18, Sept2: 11, Sept3: 11, Sept1: 12, Aug31: 13, Aug28: 14, Sept4: 11, Sept7: 11
    },
    {
        name: 'Aug 4', nodata: 967, Sept2: 12, Sept3: 12, Sept1: 13, Aug31: 15, Aug28: 15, Sept4: 12, Sept7: 12
    },
    {
        name: 'Aug 5', nodata: 1098, Sept2: 14, Sept3: 13, Sept1: 15, Aug31: 16, Aug28: 17, Sept4: 14, Sept7: 14
    },
    {
        name: 'Aug 6', nodata: 1200, Sept2: 15, Sept3: 15, Sept1: 17, Aug31: 18, Aug28: 19, Sept4: 15, Sept7: 15
    },
    {
        name: 'Aug 7', nodata: 1108, Sept2: 17, Sept3: 17, Sept1: 18, Aug31: 19, Aug28: 20, Sept4: 17, Sept7: 17
    },
    {
        name: 'Aug 8', nodata: 680, Sept2: 19, Sept3: 19, Sept1: 20, Aug31: 21, Aug28: 22, Sept4: 19, Sept7: 19
    },
    {
        name: 'Aug 9', nodata: 680, Sept2: 22, Sept3: 21, Sept1: 23, Aug31: 24, Aug28: 24, Sept4: 22, Sept7: 22
    },
    {
        name: 'Aug 10', Active: 25, Sept2: 24, Sept3: 24, Sept1: 25, Aug31: 26, Aug28: 27, Sept4: 24, Sept7: 24
    },
    {
        name: 'Aug 11', nodata: 680, Sept2: 27, Sept3: 27, Sept1: 28, Aug31: 29, Aug28: 29, Sept4: 27, Sept7: 27
    },
    {
        name: 'Aug 12', nodata: 680, Sept2: 30, Sept3: 30, Sept1: 31, Aug31: 32, Aug28: 32, Sept4: 30, Sept7: 30
    },
    {
        name: 'Aug 13', nodata: 680, Sept2: 34, Sept3: 34, Sept1: 35, Aug31: 35, Aug28: 35, Sept4: 34, Sept7: 34
    },
    {
        name: 'Aug 14', nodata: 680, Sept2: 38, Sept3: 38, Sept1: 39, Aug31: 38, Aug28: 38, Sept4: 38, Sept7: 38
    },
    {
        name: 'Aug 15', nodata: 680, Sept2: 43, Sept3: 43, Sept1: 43, Aug31: 42, Aug28: 42, Sept4: 43, Sept7: 43
    },
    {
        name: 'Aug 16', nodata: 680, Sept2: 48, Sept3: 48, Sept1: 48, Aug31: 47, Aug28: 45, Sept4: 48, Sept7: 48
    },
    {
        name: 'Aug 17', Active: 38, Sept2: 53, Sept3: 54, Sept1: 53, Aug31: 51, Aug28: 50, Sept4: 54, Sept7: 54
    },
    {
        name: 'Aug 18', nodata: 680, Sept2: 60, Sept3: 60, Sept1: 59, Aug31: 57, Aug28: 54, Sept4: 61, Sept7: 61
    },
    {
        name: 'Aug 19', nodata: 680, Sept2: 67, Sept3: 68, Sept1: 65, Aug31: 62, Aug28: 60, Sept4: 68, Sept7: 68
    },
    {
        name: 'Aug 20', nodata: 680, Sept2: 75, Sept3: 76, Sept1: 73, Aug31: 69, Aug28: 65, Sept4: 77, Sept7: 77
    },
    {
        name: 'Aug 21', nodata: 0, Sept2: 83, Sept3: 85, Sept1: 81, Aug31: 76, Aug28: 71, Sept4: 86, Sept7: 86
    },
    {
        name: 'Aug 22', nodata: 0, Sept2: 93, Sept3: 95, Sept1: 90, Aug31: 83, Aug28: 78, Sept4: 97, Sept7: 97
    },
    {
        name: 'Aug 23', nodata: 0, Sept2: 104, Sept3: 107, Sept1: 100, Aug31: 92, Aug28: 85, Sept4: 109, Sept7: 109
    },
    {
        name: 'Aug 24', nodata: 0, Sept2: 117, Sept3: 120, Sept1: 111, Aug31: 101, Aug28: 93, Sept4: 122, Sept7: 122
    },
    {
        name: 'Aug 25', Active: 87, Sept2: 130, Sept3: 135, Sept1: 124, Aug31: 112, Aug28: 102, Sept4: 137, Sept7: 137
    },
    {
        name: 'Aug 26', Active: 146, Sept2: 146, Sept3: 151, Sept1: 137, Aug31: 123, Aug28: 112, Sept4: 154, Sept7: 154
    },
    {
        name: 'Aug 27', nodata: 0, Sept2: 163, Sept3: 169, Sept1: 153, Aug31: 135, Aug28: 122, Sept4: 172, Sept7: 173
    },
    {
        name: 'Aug 28', Active: 176, Sept2: 182, Sept3: 190, Sept1: 170, Aug31: 149, Aug28: 134, Sept4: 193, Sept7: 194
    },
    {
        name: 'Aug 29', nodata: 0, Sept2: 204, Sept3: 213, Sept1: 189, Aug31: 164, Aug28: 146, Sept4: 217, Sept7: 218
    },
    {
        name: 'Aug 30', nodata: 0, Sept2: 228, Sept3: 238, Sept1: 210, Aug31: 181, Aug28: 160, Sept4: 244, Sept7: 244
    },
    {
        name: 'Aug 31', Active: 268, Sept2: 255, Sept3: 267, Sept1: 233, Aug31: 200, Aug28: 175, Sept4: 273, Sept7: 274
    },
    {
        name: 'Sept 1', Active: 418, Sept2: 285, Sept3: 300, Sept1: 259, Aug31: 220, Aug28: 192, Sept4: 307, Sept7: 308
    },
    {
        name: 'Sept 2', Active: 453, Sept2: 318, Sept3: 336, Sept1: 288, Aug31: 242, Aug28: 210, Sept4: 345, Sept7: 346
    },
    {
        name: 'Sept 3', Active: 477, Sept2: 355, Sept3: 377, Sept1: 320, Aug31: 267, Aug28: 229, Sept4: 387, Sept7: 388
    },
    {
        name: 'Sept 4', Active: 490, Sept2: 397, Sept3: 422, Sept1: 356, Aug31: 294, Aug28: 251, Sept4: 434, Sept7: 436
    },
    {
        name: 'Sept 5', nodata: 0, Sept2: 444, Sept3: 473, Sept1: 396, Aug31: 324, Aug28: 274, Sept4: 487, Sept7: 489
    },
    {
        name: 'Sept 6', nodata: 0, Sept2: 496, Sept3: 531, Sept1: 440, Aug31: 357, Aug28: 300, Sept4: 547, Sept7: 549
    },
    {
        name: 'Sept 7', Active: 626, Sept2: 555, Sept3: 595, Sept1: 489, Aug31: 394, Aug28: 328, Sept4: 614, Sept7: 616
    },
    {
        name: 'Sept 8', nodata: 0, Sept2: 620, Sept3: 667, Sept1: 544, Aug31: 434, Aug28: 359, Sept4: 689, Sept7: 692
    },
    {
        name: 'Sept 9', nodata: 0, Sept2: 693, Sept3: 748, Sept1: 605, Aug31: 478, Aug28: 393, Sept4: 773, Sept7: 777
    },
    {
        name: 'Sept 10', nodata: 0, Sept2: 774, Sept3: 838, Sept1: 672, Aug31: 527, Aug28: 430, Sept4: 868, Sept7: 872
    },
    {
        name: 'Sept 11', nodata: 0, Sept2: 866, Sept3: 939, Sept1: 747, Aug31: 581, Aug28: 470, Sept4: 974, Sept7: 979
    },
    {
        name: 'Sept 12', nodata: 0, Sept2: 967, Sept3: 1053, Sept1: 831, Aug31: 640, Aug28: 515, Sept4: 1094, Sept7: 1099
    },
    {
        name: 'Sept 13', nodata: 0, Sept2: 1081, Sept3: 1180, Sept1: 923, Aug31: 705, Aug28: 563, Sept4: 1228, Sept7: 1234
    },
    {
        name: 'Sept 14', nodata: 0, Sept2: 1208, Sept3: 1323, Sept1: 1026, Aug31: 777, Aug28: 616, Sept4: 1378, Sept7: 1385
    },
    {
        name: 'Sept 15', nodata: 0, Sept2: 1350, Sept3: 1483, Sept1: 1141, Aug31: 856, Aug28: 674, Sept4: 1547, Sept7: 1555
    },
    {
        name: 'Sept 16', Sept7: 1746, Aug31: 943
    }, 
    {
        name: 'Sept 17', Sept7: 1960, Aug31: 1039
    },
    {
        name: 'Sept 18', Sept7: 2200, Aug31: 1145
    },
    {
        name: 'Sept 19', Sept7: 2470, Aug31: 1262
    },
    {
        name: 'Sept 20', Sept7: 2773, Aug31: 1391
    },
    {
        name: 'Sept 21', Sept7: 3113, Aug31: 1532
    }
];

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

class Activepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OneWeek: true,
            TwoWeeks: true,
            activedata: {},
            LogView: true
        };
    }

    render() {
        return (
            <div className='responsivecontainer'>
                <svg width="100%" height="139">
                    <g>
                        <rect width="100%" height="100%" fill="#B32317" />
                        <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                    </g>
                </svg>
                <h1></h1>
                <h3 style={{ marginBottom: 5 }}>Active Reported Cases</h3>
                <a><i><font size="2">Last updated Monday, September 7 at 8:29pm.</font></i></a>

                <center>
                    <div>
                        <BrowserView>
                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TwoWeeks: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projections - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width='65%' height='65%' aspect='2.2'>
                                <ComposedChart data={oneweek} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                    <CartesianGrid />
                                    <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                    {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                    <Bar dataKey="Active" fill="#cc0000"><LabelList dataKey="Active" position="top" fontSize="12" /></Bar>
                                    {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept7" dot={false} stroke="#666666" />) : ("")}
                                    {this.state.OneWeek ? (<Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                    <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </BrowserView>

                        <MobileView>
                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ Sept4: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projections - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width={'99%'} height={'65%'} aspect='1'>
                                <ComposedChart data={oneweek} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                    <CartesianGrid />
                                    <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                    {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                    <Bar dataKey="Active" fill="#cc0000">
                                        <LabelList dataKey="Active" position="top" fontSize="7" />
                                    </Bar>
                                    {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept7" dot={false} stroke="#666666" />) : ("")}
                                    {this.state.OneWeek ? (<Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                    <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </MobileView>



                        <br />

                        <BrowserView>
                            <div className="adjustabletext">
                                <Grid container spacing={5}>
                                    <Grid item xs alignItems={"left"}>
                                        <h4>Notable Dates</h4>
                                        <font size="4"><p style={{ textAlign: "left" }}>
                                            <li>August 3: Campus doors opened<br /></li>
                                            <li>August 8: Dorms open for move-in<br /></li>
                                            <li>August 24: First day of MWF classes<br /></li>
                                            <li>August 25: First day of TR classes<br /></li>
                                            <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                            <li>September 4: Opening of on-campus testing center<br /></li>
                                            <li>September 5-7: Labor Day weekend<br /></li>
                                            <li>September 9: Census Date for Texas Tech<br /></li>
                                            <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                            <li>September 12: First football game, played at home</li>
                                            <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                        </p></font>
                                    </Grid>
                                    <Grid item xs>
                                        <h4>How are projections made?</h4>
                                        <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                                        <h4>Why are there two?</h4>
                                        <p><font size="4">A new projection is generated when a count update is released for the day. The <b>solid</b> line is the most recent projection, and the <b>dashed</b> line the projection from one week before. </font></p>
                                        <h4>What is a logarithmic sclae?</h4>
                                        <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>

                                    </Grid>
                                </Grid>
                            </div>
                        </BrowserView>


                        <MobileView>
                            <div className="adjustabletextmobile">
                                <h4>Notable Dates</h4>
                                <font size="4"><p style={{ textAlign: "left" }}>
                                    <li>August 3: Campus doors opened<br /></li>
                                    <li>August 8: Dorms open for move-in<br /></li>
                                    <li>August 24: First day of MWF classes<br /></li>
                                    <li>August 25: First day of TR classes<br /></li>
                                    <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                    <li>September 4: Opening of on-campus testing center<br /></li>
                                    <li>September 5-7: Labor Day weekend<br /></li>
                                    <li>September 9: Census Date for Texas Tech<br /></li>
                                    <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                    <li>September 12: First football game, played at home</li>
                                    <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                </p></font>
                                <h4>What are these curves?</h4>
                                <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                                <h4>Why are there so many?</h4>
                                <p><font size="4">A new curve is calculated each day there is a case count update. The <b>solid</b> curve is the most recent projection, and the <b>dashed</b> curves are projections made on previous dates</font>    </p>
                                <h4>What is a logarithmic sclae?</h4>
                                <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
                            </div>
                        </MobileView>
                    </div>
                </center>

            </div>
        )
    }
}

export default Activepage;