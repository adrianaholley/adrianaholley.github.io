import React, { PureComponent } from "react";
import { CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const activedata = [
    {
        name: 'Aug 3', active: 18, Sept2: 11.36, Sept3: 10
    },
    {
        name: 'Aug 4', nodata: 967, Sept2: 12.69, Sept3: 12.3
    },
    {
        name: 'Aug 5', nodata: 1098, Sept2: 14.18, Sept3: 13.8
    },
    {
        name: 'Aug 6', nodata: 1200, Sept2: 15.85, Sept3: 15.4
    },
    {
        name: 'Aug 7', nodata: 1108, Sept2: 17.71, Sept3: 17.3
    },
    {
        name: 'Aug 8', nodata: 680, Sept2: 19.79, Sept3: 19.4
    },
    {
        name: 'Aug 9', nodata: 680, Sept2: 22.12, Sept3: 21.7
    },
    {
        name: 'Aug 10', active: 25, Sept2: 24.72, Sept3: 24.4
    },
    {
        name: 'Aug 11', nodata: 680, Sept2: 27.63, Sept3: 27.3
    },
    {
        name: 'Aug 12', nodata: 680, Sept2: 30.87, Sept3: 30.6
    },
    {
        name: 'Aug 13', nodata: 680, Sept2: 34.50, Sept3: 34.3
    },
    {
        name: 'Aug 14', nodata: 680, Sept2: 38.56, Sept3: 38.5
    },
    {
        name: 'Aug 15', nodata: 680, Sept2: 43.09, Sept3: 43.1
    },
    {
        name: 'Aug 16', nodata: 680, Sept2: 48.16, Sept3: 48.3
    },
    {
        name: 'Aug 17', active: 38, Sept2: 53.82, Sept3: 54.2
    },
    {
        name: 'Aug 18', nodata: 680, Sept2: 60.14, Sept3: 60.7
    },
    {
        name: 'Aug 19', nodata: 680, Sept2: 67.21, Sept3: 68.1
    },
    {
        name: 'Aug 20', nodata: 680, Sept2: 75.11, Sept3: 76.3
    },
    {
        name: 'Aug 21', nodata: 0, Sept2: 83.94, Sept3: 85.5
    },
    {
        name: 'Aug 22', nodata: 0, Sept2: 93.81, Sept3: 95.9
    },
    {
        name: 'Aug 23', nodata: 0, Sept2: 104.84, Sept3: 107.5
    },
    {
        name: 'Aug 24', nodata: 0, Sept2: 117.16, Sept3: 120.4
    },
    {
        name: 'Aug 25', active: 87, Sept2: 130.93, Sept3: 135
    },
    {
        name: 'Aug 26', active: 146, Sept2: 146.32, Sept3: 151.3
    },
    {
        name: 'Aug 27', nodata: 0, Sept2: 163.52, Sept3: 169.6
    },
    {
        name: 'Aug 28', active: 176, Sept2: 182.74, Sept3: 190.1
    },
    {
        name: 'Aug 29', nodata: 0, Sept2: 204.22, Sept3: 213.1
    },
    {
        name: 'Aug 30', nodata: 0, Sept2: 228.23, Sept3: 238.9
    },
    {
        name: 'Aug 31', active: 268, Sept2: 255.05, Sept3: 267.8
    },
    {
        name: 'Sept 1', active: 418, Sept2: 285.03, Sept3: 300.2
    },
    {
        name: 'Sept 2', active: 453, Sept2: 318.54, Sept3: 336.5
    },
    {
        name: 'Sept 3', active: 477, Sept2: 355.98, Sept3: 377.2
    },
    {
        name: 'Sept 4', nodata: 0, Sept2: 397.83, Sept3: 422.8
    },
    {
        name: 'Sept 5', nodata: 0, Sept2: 444.59, Sept3: 473.9
    },
    {
        name: 'Sept 6', nodata: 0, Sept2: 496.85, Sept3: 531.2
    },
    {
        name: 'Sept 7', nodata: 0, Sept2: 555.25, Sept3: 595.4
    },
    {
        name: 'Sept 8', nodata: 0, Sept2: 620.52, Sept3: 667.4
    },
    {
        name: 'Sept 9', nodata: 0, Sept2: 693.46, Sept3: 748.1
    },
    {
        name: 'Sept 10', nodata: 0, Sept2: 774.97, Sept3: 838.5
    },
    {
        name: 'Sept 11', nodata: 0, Sept2: 866.06, Sept3: 939.9
    },
    {
        name: 'Sept 12', nodata: 0, Sept2: 967.86, Sept3: 1053.6
    },
    {
        name: 'Sept 13', nodata: 0, Sept2: 1081.63, Sept3: 1180.9
    },
    {
        name: 'Sept 14', nodata: 0, Sept2: 1208.77, Sept3: 1323.7
    },
    {
        name: 'Sept 15', nodata: 0, Sept2: 1350.86, Sept3: 1483.8
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
                <ResponsiveContainer width='65%' height='65%' aspect='2.2'>
                    <ComposedChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <CartesianGrid />
                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                        <YAxis fontSize="12" />
                        <Bar dataKey="active" fill="#cc0000">
                            <LabelList dataKey="active" position="top" fontSize="12" />
                        </Bar>
                        <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />
                        {/* <Line dataKey="active" /> */}
                    </ComposedChart>
                </ResponsiveContainer>
                <br />
                <div className="adjustabletext">
                    <a>
                        What is this curve?
                </a>
                    <p>
                        It's an exponential regression curve. It is made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection does not consider changes in circumstances, such as an increase in hand-washing or an increase of off-campus events.
                </p>
                </div>
            </center>

        </div>
    );
};

export default Chart;