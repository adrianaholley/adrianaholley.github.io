import React, { PureComponent } from "react";
import { Tooltip, CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { BrowserView, MobileView } from "react-device-detect";
import { Checkbox, Appbar, Grid } from '@material-ui/core';


export const activedata = [
    {
        name: 'Aug3', Active: 18, Sept2: 11, Sept3: 11, Sept1: 12, Aug31: 13, Aug28: 14, Sept4: 11
    },
    {
        name: 'Aug 4', nodata: 967, Sept2: 12, Sept3: 12, Sept1: 13, Aug31: 15, Aug28: 15, Sept4: 12
    },
    {
        name: 'Aug 5', nodata: 1098, Sept2: 14, Sept3: 13, Sept1: 15, Aug31: 16, Aug28: 17, Sept4: 14
    },
    {
        name: 'Aug 6', nodata: 1200, Sept2: 15, Sept3: 15, Sept1: 17, Aug31: 18, Aug28: 19, Sept4: 15
    },
    {
        name: 'Aug 7', nodata: 1108, Sept2: 17, Sept3: 17, Sept1: 18, Aug31: 19, Aug28: 20, Sept4: 17
    },
    {
        name: 'Aug 8', nodata: 680, Sept2: 19, Sept3: 19, Sept1: 20, Aug31: 21, Aug28: 22, Sept4: 19
    },
    {
        name: 'Aug 9', nodata: 680, Sept2: 22, Sept3: 21, Sept1: 23, Aug31: 23, Aug28: 24, Sept4: 22
    },
    {
        name: 'Aug 10', Active: 25, Sept2: 24, Sept3: 24, Sept1: 25, Aug31: 26, Aug28: 27, Sept4: 24
    },
    {
        name: 'Aug 11', nodata: 680, Sept2: 27, Sept3: 27, Sept1: 28, Aug31: 28, Aug28: 29, Sept4: 27
    },
    {
        name: 'Aug 12', nodata: 680, Sept2: 30, Sept3: 30, Sept1: 31, Aug31: 31, Aug28: 32, Sept4: 30
    },
    {
        name: 'Aug 13', nodata: 680, Sept2: 34, Sept3: 34, Sept1: 35, Aug31: 34, Aug28: 35, Sept4: 34
    },
    {
        name: 'Aug 14', nodata: 680, Sept2: 38, Sept3: 38, Sept1: 39, Aug31: 38, Aug28: 38, Sept4: 38
    },
    {
        name: 'Aug 15', nodata: 680, Sept2: 43, Sept3: 43, Sept1: 43, Aug31: 42, Aug28: 42, Sept4: 43
    },
    {
        name: 'Aug 16', nodata: 680, Sept2: 48, Sept3: 48, Sept1: 48, Aug31: 46, Aug28: 45, Sept4: 48
    },
    {
        name: 'Aug 17', Active: 38, Sept2: 53, Sept3: 54, Sept1: 53, Aug31: 50, Aug28: 50, Sept4: 54
    },
    {
        name: 'Aug 18', nodata: 680, Sept2: 60, Sept3: 60, Sept1: 59, Aug31: 55, Aug28: 54, Sept4: 61
    },
    {
        name: 'Aug 19', nodata: 680, Sept2: 67, Sept3: 68, Sept1: 65, Aug31: 61, Aug28: 60, Sept4: 68
    },
    {
        name: 'Aug 20', nodata: 680, Sept2: 75, Sept3: 76, Sept1: 73, Aug31: 67, Aug28: 65, Sept4: 77
    },
    {
        name: 'Aug 21', nodata: 0, Sept2: 83, Sept3: 85, Sept1: 81, Aug31: 74, Aug28: 71, Sept4: 86
    },
    {
        name: 'Aug 22', nodata: 0, Sept2: 93, Sept3: 95, Sept1: 90, Aug31: 81, Aug28: 78, Sept4: 97
    },
    {
        name: 'Aug 23', nodata: 0, Sept2: 104, Sept3: 107, Sept1: 100, Aug31: 89, Aug28: 85, Sept4: 109
    },
    {
        name: 'Aug 24', nodata: 0, Sept2: 117, Sept3: 120, Sept1: 111, Aug31: 98, Aug28: 93, Sept4: 122
    },
    {
        name: 'Aug 25', Active: 87, Sept2: 130, Sept3: 135, Sept1: 124, Aug31: 108, Aug28: 102, Sept4: 137
    },
    {
        name: 'Aug 26', Active: 146, Sept2: 146, Sept3: 151, Sept1: 137, Aug31: 118, Aug28: 112, Sept4: 154
    },
    {
        name: 'Aug 27', nodata: 0, Sept2: 163, Sept3: 169, Sept1: 153, Aug31: 130, Aug28: 122, Sept4: 172
    },
    {
        name: 'Aug 28', Active: 176, Sept2: 182, Sept3: 190, Sept1: 170, Aug31: 143, Aug28: 134, Sept4: 193
    },
    {
        name: 'Aug 29', nodata: 0, Sept2: 204, Sept3: 213, Sept1: 189, Aug31: 157, Aug28: 146, Sept4: 217
    },
    {
        name: 'Aug 30', nodata: 0, Sept2: 228, Sept3: 238, Sept1: 210, Aug31: 173, Aug28: 160, Sept4: 244
    },
    {
        name: 'Aug 31', Active: 268, Sept2: 255, Sept3: 267, Sept1: 233, Aug31: 190, Aug28: 175, Sept4: 273
    },
    {
        name: 'Sept 1', Active: 418, Sept2: 285, Sept3: 300, Sept1: 259, Aug31: 209, Aug28: 192, Sept4: 307
    },
    {
        name: 'Sept 2', Active: 453, Sept2: 318, Sept3: 336, Sept1: 288, Aug31: 230, Aug28: 210, Sept4: 345
    },
    {
        name: 'Sept 3', Active: 477, Sept2: 355, Sept3: 377, Sept1: 320, Aug31: 253, Aug28: 229, Sept4: 387
    },
    {
        name: 'Sept 4', Active: 490, Sept2: 397, Sept3: 422, Sept1: 356, Aug31: 279, Aug28: 251, Sept4: 434
    },
    {
        name: 'Sept 5', nodata: 0, Sept2: 444, Sept3: 473, Sept1: 396, Aug31: 306, Aug28: 274, Sept4: 487
    },
    {
        name: 'Sept 6', nodata: 0, Sept2: 496, Sept3: 531, Sept1: 440, Aug31: 337, Aug28: 300, Sept4: 547
    },
    {
        name: 'Sept 7', nodata: 0, Sept2: 555, Sept3: 595, Sept1: 489, Aug31: 371, Aug28: 328, Sept4: 614
    },
    {
        name: 'Sept 8', nodata: 0, Sept2: 620, Sept3: 667, Sept1: 544, Aug31: 408, Aug28: 359, Sept4: 689
    },
    {
        name: 'Sept 9', nodata: 0, Sept2: 693, Sept3: 748, Sept1: 605, Aug31: 448, Aug28: 393, Sept4: 773
    },
    {
        name: 'Sept 10', nodata: 0, Sept2: 774, Sept3: 838, Sept1: 672, Aug31: 493, Aug28: 430, Sept4: 868
    },
    {
        name: 'Sept 11', nodata: 0, Sept2: 866, Sept3: 939, Sept1: 747, Aug31: 542, Aug28: 470, Sept4: 974
    },
    {
        name: 'Sept 12', nodata: 0, Sept2: 967, Sept3: 1053, Sept1: 831, Aug31: 597, Aug28: 515, Sept4: 1094
    },
    {
        name: 'Sept 13', nodata: 0, Sept2: 1081, Sept3: 1180, Sept1: 923, Aug31: 656, Aug28: 563, Sept4: 1228
    },
    {
        name: 'Sept 14', nodata: 0, Sept2: 1208, Sept3: 1323, Sept1: 1026, Aug31: 722, Aug28: 616, Sept4: 1378
    },
    {
        name: 'Sept 15', nodata: 0, Sept2: 1350, Sept3: 1483, Sept1: 1141, Aug31: 794, Aug28: 674, Sept4: 1547
    },
];

const Chart = ({ data = activedata }) => {
    return (
        <div>
            <BrowserView>
                <ResponsiveContainer width='65%' height='65%' aspect='2.2'>
                    <ComposedChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <CartesianGrid />
                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                        <YAxis fontSize="12" />
                        <Bar dataKey="Active" fill="#cc0000">
                            <LabelList dataKey="Active" position="top" fontSize="12" />
                        </Bar>
                        {/* <Line type="monotone" dataKey="Sept4" dot={false} stroke="#666666" /> */}
                        {/* <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept1" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug28" dot={false} stroke="#666666" strokeDasharray="3 3" /> */}
                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                    </ComposedChart>
                </ResponsiveContainer>
            </BrowserView>

            <MobileView>
                <ResponsiveContainer width={'99%'} height={'65%'} aspect='1'>
                    <ComposedChart data={data} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                        <CartesianGrid />
                        <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                        <YAxis fontSize="12" />
                        <Bar dataKey="Active" fill="#cc0000">
                            <LabelList dataKey="Active" position="top" fontSize="7" />
                        </Bar>
                        {/* <Line type="monotone" dataKey="Sept4" dot={false} stroke="#666666" /> */}
                        {/* <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept1" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug28" dot={false} stroke="#666666" strokeDasharray="3 3" /> */}
                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                    </ComposedChart>
                </ResponsiveContainer>
            </MobileView>



            <br />

            <BrowserView>
                <div className="adjustabletextdecriptions">
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
                                <li>September 14: One week after Labor Day<br /></li>
                                <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                            </p></font>
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
                        <li>September 14: One week after Labor Day<br /></li>
                        <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                    </p></font>
                </div>
            </MobileView>
        </div>
    );
};

export default Chart;