import React, { PureComponent } from "react";
import { Tooltip, CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { BrowserView, MobileView } from "react-device-detect";

export const activedata = [
    {
        name: 'Aug3', Active: 18, Sept2: 11, Sept3: 11, Sept1: 12, Aug31: 13, Aug28: 14
    },
    {
        name: 'Aug 4', nodata: 967, Sept2: 12, Sept3: 12, Sept1: 13, Aug31: 15, Aug28: 15
    },
    {
        name: 'Aug 5', nodata: 1098, Sept2: 14, Sept3: 13, Sept1: 15, Aug31: 16, Aug28: 17
    },
    {
        name: 'Aug 6', nodata: 1200, Sept2: 15, Sept3: 15, Sept1: 17, Aug31: 18, Aug28: 19
    },
    {
        name: 'Aug 7', nodata: 1108, Sept2: 17, Sept3: 17, Sept1: 18, Aug31: 19, Aug28: 20
    },
    {
        name: 'Aug 8', nodata: 680, Sept2: 19, Sept3: 19, Sept1: 20, Aug31: 21, Aug28: 22
    },
    {
        name: 'Aug 9', nodata: 680, Sept2: 22, Sept3: 21, Sept1: 23, Aug31: 23, Aug28: 24
    },
    {
        name: 'Aug 10', Active: 25, Sept2: 24, Sept3: 24, Sept1: 25, Aug31: 26, Aug28: 27
    },
    {
        name: 'Aug 11', nodata: 680, Sept2: 27, Sept3: 27, Sept1: 28, Aug31: 28, Aug28: 29
    },
    {
        name: 'Aug 12', nodata: 680, Sept2: 30, Sept3: 30, Sept1: 31, Aug31: 31, Aug28: 32
    },
    {
        name: 'Aug 13', nodata: 680, Sept2: 34, Sept3: 34, Sept1: 35, Aug31: 34, Aug28: 35
    },
    {
        name: 'Aug 14', nodata: 680, Sept2: 38, Sept3: 38, Sept1: 39, Aug31: 38, Aug28: 38
    },
    {
        name: 'Aug 15', nodata: 680, Sept2: 43, Sept3: 43, Sept1: 43, Aug31: 42, Aug28: 42
    },
    {
        name: 'Aug 16', nodata: 680, Sept2: 48, Sept3: 48, Sept1: 48, Aug31: 46, Aug28: 45
    },
    {
        name: 'Aug 17', Active: 38, Sept2: 53, Sept3: 54, Sept1: 53, Aug31: 50, Aug28: 50
    },
    {
        name: 'Aug 18', nodata: 680, Sept2: 60, Sept3: 60, Sept1: 59, Aug31: 55, Aug28: 54
    },
    {
        name: 'Aug 19', nodata: 680, Sept2: 67, Sept3: 68, Sept1: 65, Aug31: 61, Aug28: 60
    },
    {
        name: 'Aug 20', nodata: 680, Sept2: 75, Sept3: 76, Sept1: 73, Aug31: 67, Aug28: 65
    },
    {
        name: 'Aug 21', nodata: 0, Sept2: 83, Sept3: 85, Sept1: 81, Aug31: 74, Aug28: 71
    },
    {
        name: 'Aug 22', nodata: 0, Sept2: 93, Sept3: 95, Sept1: 90, Aug31: 81, Aug28: 78
    },
    {
        name: 'Aug 23', nodata: 0, Sept2: 104, Sept3: 107, Sept1: 100, Aug31: 89, Aug28: 85
    },
    {
        name: 'Aug 24', nodata: 0, Sept2: 117, Sept3: 120, Sept1: 111, Aug31: 98, Aug28: 93
    },
    {
        name: 'Aug 25', Active: 87, Sept2: 130, Sept3: 135, Sept1: 124, Aug31: 108, Aug28: 102
    },
    {
        name: 'Aug 26', Active: 146, Sept2: 146, Sept3: 151, Sept1: 137, Aug31: 118, Aug28: 112
    },
    {
        name: 'Aug 27', nodata: 0, Sept2: 163, Sept3: 169, Sept1: 153, Aug31: 130, Aug28: 122
    },
    {
        name: 'Aug 28', Active: 176, Sept2: 182, Sept3: 190, Sept1: 170, Aug31: 143, Aug28: 134
    },
    {
        name: 'Aug 29', nodata: 0, Sept2: 204, Sept3: 213, Sept1: 189, Aug31: 157, Aug28: 146
    },
    {
        name: 'Aug 30', nodata: 0, Sept2: 228, Sept3: 238, Sept1: 210, Aug31: 173, Aug28: 160
    },
    {
        name: 'Aug 31', Active: 268, Sept2: 255, Sept3: 267, Sept1: 233, Aug31: 190, Aug28: 175
    },
    {
        name: 'Sept 1', Active: 418, Sept2: 285, Sept3: 300, Sept1: 259, Aug31: 209, Aug28: 192
    },
    {
        name: 'Sept 2', Active: 453, Sept2: 318, Sept3: 336, Sept1: 288, Aug31: 230, Aug28: 210
    },
    {
        name: 'Sept 3', Active: 477, Sept2: 355, Sept3: 377, Sept1: 320, Aug31: 253, Aug28:229 
    },
    {
        name: 'Sept 4', nodata: 0, Sept2: 397, Sept3: 422, Sept1: 356, Aug31: 279, Aug28: 251
    },
    {
        name: 'Sept 5', nodata: 0, Sept2: 444, Sept3: 473, Sept1: 396, Aug31: 306, Aug28: 274
    },
    {
        name: 'Sept 6', nodata: 0, Sept2: 496, Sept3: 531, Sept1: 440, Aug31: 337, Aug28: 300
    },
    {
        name: 'Sept 7', nodata: 0, Sept2: 555, Sept3: 595, Sept1: 489, Aug31: 371, Aug28: 328
    },
    {
        name: 'Sept 8', nodata: 0, Sept2: 620, Sept3: 667, Sept1: 544, Aug31: 408, Aug28: 359
    },
    {
        name: 'Sept 9', nodata: 0, Sept2: 693, Sept3: 748, Sept1: 605, Aug31: 448, Aug28: 393
    },
    {
        name: 'Sept 10', nodata: 0, Sept2: 774, Sept3: 838, Sept1: 672, Aug31: 493, Aug28: 430
    },
    {
        name: 'Sept 11', nodata: 0, Sept2: 866, Sept3: 939, Sept1: 747, Aug31: 542, Aug28: 470
    },
    {
        name: 'Sept 12', nodata: 0, Sept2: 967, Sept3: 1053, Sept1: 831, Aug31: 597, Aug28: 515
    },
    {
        name: 'Sept 13', nodata: 0, Sept2: 1081, Sept3: 1180, Sept1: 923, Aug31: 656, Aug28: 563
    },
    {
        name: 'Sept 14', nodata: 0, Sept2: 1208, Sept3: 1323, Sept1: 1026, Aug31: 722, Aug28: 616
    },
    {
        name: 'Sept 15', nodata: 0, Sept2: 1350, Sept3: 1483, Sept1: 1141, Aug31: 794, Aug28: 674
    },
];

const Chart = ({ data = activedata }) => {
    return (
        <div className='responsivecontainer'>
            <svg width="100%" height="139">
                <g>
                    <rect width="100%" height="100%" fill="#B32317" />
                    <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                </g>
            </svg>
            <h1></h1>
            <h3>Active Reported Cases</h3>
            <p><i>Last updated Wednesday, September 3 at 4:35pm.</i></p>

            <center>
                <BrowserView>
                    <ResponsiveContainer width='65%' height='65%' aspect='2.2'>
                        <ComposedChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                            <CartesianGrid />
                            <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                            <YAxis fontSize="12" />
                            <Bar dataKey="Active" fill="#cc0000">
                                <LabelList dataKey="active" position="top" fontSize="12" />
                            </Bar>
                            <Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" />
                            <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept1" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug28" dot={false} stroke="#666666" strokeDasharray="3 3" />
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
                                <LabelList dataKey="active" position="top" fontSize="10" />
                            </Bar>
                            <Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" />
                            <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Sept1" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug31" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Aug28" dot={false} stroke="#666666" strokeDasharray="3 3" />
                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </MobileView>



                <br />
                <div className="adjustabletext">
                    <a>
                        What is this curve?
                    </a>    
                    <p>
                        It's an <b>exponential regression curve</b>. It is made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.
                    </p>
                    <a>
                        Why are there so many?
                    </a>
                    <p>
                    The curve is recalculated each day there is a case count update. The <b>solid</b> curve is the most recent projection, and the <b>dashed</b> curves are from previous calculations. 
                    </p>
                </div>
            </center>

        </div>
    );
};

export default Chart;