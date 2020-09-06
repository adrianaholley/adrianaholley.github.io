import React, { FormGroup, Switch, PureComponent, FormControlLabel } from "react";
import { CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, Tooltip, XAxis, YAxis, Label, ResponsiveContainer } from "recharts";
import { BrowserView, MobileView, } from 'react-device-detect';
import { Checkbox, Appbar, Grid } from '@material-ui/core';

export const totaldata = [
    {
        name: 'Aug 3', Total: 18, Sept1: 16, Sept2: 15, Sept3: 15, Aug31: 18, Aug28: 18, Aug26: 19, Aug25: 20, Sept4: 15
    },
    {
        name: 'Aug 4', nodata: 0, Sept1: 18, Sept2: 17, Sept3: 17, Aug31: 19, Aug28: 20, Aug26: 21, Aug25: 21, Sept4: 17
    },
    {
        name: 'Aug 5', nodata: 0, Sept1: 20, Sept2: 19, Sept3: 19, Aug31: 22, Aug28: 22, Aug26: 23, Aug25: 23, Sept4: 19
    },
    {
        name: 'Aug 6', nodata: 0, Sept1: 22, Sept2: 22, Sept3: 21, Aug31: 24, Aug28: 24, Aug26: 25, Aug25: 26, Sept4: 21
    },
    {
        name: 'Aug 7', nodata: 0, Sept1: 25, Sept2: 24, Sept3: 24, Aug31: 27, Aug28: 27, Aug26: 28, Aug25: 28, Sept4: 24
    },
    {
        name: 'Aug 8', nodata: 0, Sept1: 28, Sept2: 27, Sept3: 27, Aug31: 30, Aug28: 30, Aug26: 31, Aug25: 31, Sept4: 27
    },
    {
        name: 'Aug 9', nodata: 0, Sept1: 31, Sept2: 31, Sept3: 30, Aug31: 33, Aug28: 33, Aug26: 34, Aug25: 32, Sept4: 31
    },
    {
        name: 'Aug 10', Total: 44, Sept1: 35, Sept2: 34, Sept3: 34, Aug31: 36, Aug28: 37, Aug26: 37, Aug25: 37, Sept4: 34
    },
    {
        name: 'Aug 11', nodata: 0, Sept1: 39, Sept2: 39, Sept3: 38, Aug31: 40, Aug28: 41, Aug26: 41, Aug25: 41, Sept4: 39
    },
    {
        name: 'Aug 12', nodata: 0, Sept1: 44, Sept2: 43, Sept3: 43, Aug31: 45, Aug28: 45, Aug26: 45, Aug25: 45, Sept4: 43
    },
    {
        name: 'Aug 13', nodata: 0, Sept1: 49, Sept2: 49, Sept3: 49, Aug31: 50, Aug28: 50, Aug26: 50, Aug25: 49, Sept4: 49
    },
    {
        name: 'Aug 14', nodata: 0, Sept1: 55, Sept2: 55, Sept3: 55, Aug31: 55, Aug28: 55, Aug26: 55, Aug25: 54, Sept4: 55
    },
    {
        name: 'Aug 15', nodata: 0, Sept1: 61, Sept2: 61, Sept3: 61, Aug31: 61, Aug28: 61, Aug26: 60, Aug25: 59, Sept4: 62
    },
    {
        name: 'Aug 16', nodata: 0, Sept1: 68, Sept2: 69, Sept3: 69, Aug31: 68, Aug28: 68, Aug26: 67, Aug25: 65, Sept4: 70
    },
    {
        name: 'Aug 17', Total: 67, Sept1: 76, Sept2: 77, Sept3: 78, Aug31: 76, Aug28: 75, Aug26: 73, Aug25: 71, Sept4: 78
    },
    {
        name: 'Aug 18', Total: 75, Sept1: 85, Sept2: 87, Sept3: 87, Aug31: 84, Aug28: 83, Aug26: 81, Aug25: 78, Sept4: 88
    },
    {
        name: 'Aug 19', nodata: 0, Sept1: 95, Sept2: 97, Sept3: 98, Aug31: 93, Aug28: 91, Aug26: 89, Aug25: 85, Sept4: 99
    },
    {
        name: 'Aug 20', nodata: 0, Sept1: 106, Sept2: 109, Sept3: 110, Aug31: 104, Aug28: 101, Aug26: 98, Aug25: 94, Sept4: 111
    },
    {
        name: 'Aug 21', Total: 103, Sept1: 118, Sept2: 122, Sept3: 124, Aug31: 115, Aug28: 112, Aug26: 108, Aug25: 103, Sept4: 125
    },
    {
        name: 'Aug 22', nodata: 75, Sept1: 132, Sept2: 137, Sept3: 139, Aug31: 128, Aug28: 124, Aug26: 119, Aug25: 112, Sept4: 141
    },
    {
        name: 'Aug 23', nodata: 75, Sept1: 148, Sept2: 154, Sept3: 157, Aug31: 142, Aug28: 137, Aug26: 141, Aug25: 123, Sept4: 158
    },
    {
        name: 'Aug 24', nodata: 75, Sept1: 165, Sept2: 173, Sept3: 176, Aug31: 157, Aug28: 151, Aug26: 145, Aug25: 135, Sept4: 178
    },
    {
        name: 'Aug 25', Total: 149, Sept1: 184, Sept2: 194, Sept3: 198, Aug31: 175, Aug28: 168, Aug26: 160, Aug25: 148, Sept4: 200
    },
    {
        name: 'Aug 26', Total: 206, Sept1: 205, Sept2: 217, Sept3: 222, Aug31: 194, Aug28: 185, Aug26: 176, Aug25: 163, Sept4: 225
    },
    {
        name: 'Aug 27', nodata: 0, Sept1: 229, Sept2: 243, Sept3: 250, Aug31: 215, Aug28: 205, Aug26: 194, Aug25: 178, Sept4: 253
    },
    {
        name: 'Aug 28', Total: 260, Sept1: 256, Sept2: 273, Sept3: 281, Aug31: 239, Aug28: 237, Aug26: 214, Aug25: 195, Sept4: 285
    },
    {
        name: 'Aug 29', nodata: 75, Sept1: 286, Sept2: 306, Sept3: 315, Aug31: 265, Aug28: 251, Aug26: 236, Aug25: 214, Sept4: 321
    },
    {
        name: 'Aug 30', nodata: 75, Sept1: 319, Sept2: 343, Sept3: 354, Aug31: 294, Aug28: 278, Aug26: 260, Aug25: 235, Sept4: 361
    },
    {
        name: 'Aug 31', Total: 378, Sept1: 356, Sept2: 384, Sept3: 398, Aug31: 327, Aug28: 307, Aug26: 286, Aug25: 258, Sept4: 406
    },
    {
        name: 'Sept 1', Total: 551, Sept1: 398, Sept2: 431, Sept3: 447, Aug31: 363, Aug28: 340, Aug26: 416, Aug25: 283, Sept4: 456
    },
    {
        name: 'Sept 2', Total: 624, Sept1: 444, Sept2: 483, Sept3: 503, Aug31: 403, Aug28: 376, Aug26: 348, Aug25: 310, Sept4: 513
    },
    {
        name: 'Sept 3', Total: 671, Sept1: 496, Sept2: 542, Sept3: 565, Aug31: 447, Aug28: 416, Aug26: 383, Aug25: 340, Sept4: 577
    },
    {
        name: 'Sept 4', Total: 717, Sept1: 553, Sept2: 607, Sept3: 635, Aug31: 496, Aug28: 460, Aug26: 422, Aug25: 372, Sept4: 649
    },
    {
        name: 'Sept 5', nodata: 75, Sept1: 618, Sept2: 681, Sept3: 713, Aug31: 551, Aug28: 509, Aug26: 466, Aug25: 408, Sept4: 730
    },
    {
        name: 'Sept 6', nodata: 75, Sept1: 689, Sept2: 763, Sept3: 801, Aug31: 612, Aug28: 563, Aug26: 513, Aug25: 448, Sept4: 821
    },
    {
        name: 'Sept 7', nodata: 75, Sept1: 769, Sept2: 856, Sept3: 900, Aug31: 679, Aug28: 622, Aug26: 566, Aug25: 491, Sept4: 924
    },
    {
        name: 'Sept 8', nodata: 75, Sept1: 859, Sept2: 959, Sept3: 1011, Aug31: 754, Aug28: 688, Aug26: 623, Aug25: 538, Sept4: 1039
    },
    {
        name: 'Sept 9', nodata: 75, Sept1: 959, Sept2: 1075, Sept3: 1136, Aug31: 837, Aug28: 761, Aug26: 687, Aug25: 590, Sept4: 1168
    },
    {
        name: 'Sept 10', nodata: 75, Sept1: 1070, Sept2: 1205, Sept3: 1277, Aug31: 929, Aug28: 842, Aug26: 757, Aug25: 647, Sept4: 1314
    },
    {
        name: 'Sept 11', nodata: 75, Sept1: 1195, Sept2: 1351, Sept3: 1434, Aug31: 1032, Aug28: 932, Aug26: 835, Aug25: 710, Sept4: 1478
    },
    {
        name: 'Sept 12', nodata: 75, Sept1: 1333, Sept2: 1515, Sept3: 1611, Aug31: 1145, Aug28: 1031, Aug26: 920, Aug25: 778, Sept4: 1662
    },
    {
        name: 'Sept 13', nodata: 75, Sept1: 1488, Sept2: 1698, Sept3: 1810, Aug31: 1271, Aug28: 1140, Aug26: 1014, Aug25: 853, Sept4: 1870
    },
    {
        name: 'Sept 14', nodata: 75, Sept1: 1661, Sept2: 1903, Sept3: 2034, Aug31: 1411, Aug28: 1261, Aug26: 1117, Aug25: 946, Sept4: 2103
    },
    {
        name: 'Sept 15', nodata: 75, Sept1: 1855, Sept2: 2143, Sept3: 2285, Aug31: 1567, Aug28: 1395, Aug26: 1232, Aug25: 1026, Sept4: 2365
    },
];

// function demoOnClick(e) {
// 	alert("e.name");
// }

// constructor(props) {
//     super(props);
//     this.state = {
//       Total: true,
//       Sept2: false,
//       Sept3: false,
//       totaldata: {}
//     };
//   }

const Chart = ({ data = totaldata }) => {

    // const [checked, setChecked] = React.useState();
    
    // const handleChange = event => {
    //     setChecked(event.target.checked);
    // };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       Total: true,
    //       Sept2: false,
    //       Sept3: false,
    //       totaldata: {}
    //     };
    //   }
    

    return (
        <div className='responsivecontainer'>
            <svg width="100%" height="139">
                <g>
                    <rect width="100%" height="100%" fill="#B32317" />
                    <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                </g>
            </svg>
            <h1></h1>
            <h3 >Total Reported Cases</h3>
            <p><i><font size="3">Last updated Friday, September 4 at 5:26pm.</font></i></p>
            <center>
                <BrowserView>
                    {/* <div>
                        <FormGroup row>
                            <FormControlLabel>
                                control={<Switch checked={checked} onChange={handleChange} name="checked" />}
                            </FormControlLabel>
                        </FormGroup>
                    </div> */}
                    <ResponsiveContainer width={'65%'} height={"65%"} aspect='2.2'>
                        <ComposedChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                            <CartesianGrid />
                            <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                            <YAxis fontSize="12" />
                            <Bar dataKey="Total" fill="#333333" >
                                <LabelList dataKey="Total" position="top" fontSize="12" />
                            </Bar>
                            <Line type="monotone" dataKey="Sept4" dot={false} stroke="#666666" />
                            <Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept1" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug28" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug26" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug25" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </BrowserView>

                <MobileView>
                    <ResponsiveContainer width={'99%'} height={"99%"} aspect='1'>
                        <ComposedChart data={data} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                            <CartesianGrid />
                            <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                            <YAxis fontSize="12" />
                            <Bar dataKey="Total" fill="#333333" >
                                <LabelList dataKey="Total" position="top" fontSize="7" />
                            </Bar>
                            <Line type="monotone" dataKey="Sept4" dot={false} stroke="#666666" />
                            <Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept1" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug28" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug26" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug25" dot={false} stroke="#666666" strokeDasharray="3 3" />
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
                                    <li>September 14: One week after Labor Day<br /></li>
                                    <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                </p></font>
                            </Grid>
                            <Grid item xs>
                                <h4>What are these curves?</h4>
                                <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                                <h4>Why are there so many?</h4>
                                <p><font size="4">A new curve is calculated each day there is a case count update. The <b>solid</b> curve is the most recent projection, and the <b>dashed</b> curves are projections made on previous dates</font>    </p>
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
                            <li>September 14: One week after Labor Day<br /></li>
                            <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                        </p></font>
                        <h4>What are these curves?</h4>
                        <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                        <h4>Why are there so many?</h4>
                        <p><font size="4">A new curve is calculated each day there is a case count update. The <b>solid</b> curve is the most recent projection, and the <b>dashed</b> curves are projections made on previous dates</font>    </p>
                    </div>
                </MobileView>

            </center>
        </div>
    );
};

export default Chart;