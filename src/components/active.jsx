import React, { PureComponent } from "react";
import { CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, XAxis, YAxis } from "recharts";

export const activedata = [
    {
        name: 'Aug 3', active: 18, Sept2: 11.36,
    },
    {
        name: 'Aug 4', nodata: 967, Sept2: 12.69,
    },
    {
        name: 'Aug 5', nodata: 1098, Sept2: 14.18,
    },
    {
        name: 'Aug 6', nodata: 1200, Sept2: 15.85,
    },
    {
        name: 'Aug 7', nodata: 1108, Sept2: 17.71,
    },
    {
        name: 'Aug 8', nodata: 680, Sept2: 19.79,
    },
    {
        name: 'Aug 9', nodata: 680, Sept2: 22.12,
    },
    {
        name: 'Aug 10', active: 25, Sept2: 24.72,
    },
    {
        name: 'Aug 11', nodata: 680, Sept2: 27.63,
    },
    {
        name: 'Aug 12', nodata: 680, Sept2: 30.87,
    },
    {
        name: 'Aug 13', nodata: 680, Sept2: 34.50,
    },
    {
        name: 'Aug 14', nodata: 680, Sept2: 38.56,
    },
    {
        name: 'Aug 15', nodata: 680, Sept2: 43.09,
    },
    {
        name: 'Aug 16', nodata: 680, Sept2: 48.16,
    },
    {
        name: 'Aug 17', active: 38, Sept2: 53.82,
    },
    {
        name: 'Aug 18', nodata: 680, Sept2: 60.14,
    },
    {
        name: 'Aug 19', nodata: 680, Sept2: 67.21,
    },
    {
        name: 'Aug 20', nodata: 680, Sept2: 75.11,
    },
    {
        name: 'Aug 21', nodata: 0, Sept2: 83.94,
    },
    {
        name: 'Aug 22', nodata: 0, Sept2: 93.81,
    },
    {
        name: 'Aug 23', nodata: 0, Sept2: 104.84,
    },
    {
        name: 'Aug 24', nodata: 0, Sept2: 117.16,
    },
    {
        name: 'Aug 25', active: 87, Sept2: 130.93,
    },
    {
        name: 'Aug 26', active: 146, Sept2: 146.32,
    },
    {
        name: 'Aug 27', nodata: 0, Sept2: 163.52,
    },
    {
        name: 'Aug 28', active: 176, Sept2: 182.74,
    },
    {
        name: 'Aug 29', nodata: 0, Sept2: 204.22,
    },
    {
        name: 'Aug 30', nodata: 0, Sept2: 228.23,
    },
    {
        name: 'Aug 31', active: 268, Sept2: 255.05,
    },
    {
        name: 'Sept 1', active: 418, Sept2: 285.03,
    },
    {
        name: 'Sept 2', nodata: 453, Sept2: 318.54,
    },
    {
        name: 'Sept 3', nodata: 0, Sept2: 355.98,
    },
    {
        name: 'Sept 4', nodata: 0, Sept2: 397.83,
    },
    {
        name: 'Sept 5', nodata: 0, Sept2: 444.59,
    },
    {
        name: 'Sept 6', nodata: 0, Sept2: 496.85,
    },
    {
        name: 'Sept 7', nodata: 0, Sept2: 555.25,
    },
    {
        name: 'Sept 8', nodata: 0, Sept2: 620.52,
    },
    {
        name: 'Sept 9', nodata: 0, Sept2: 693.46,
    },
    {
        name: 'Sept 10', nodata: 0, Sept2: 774.97,
    },
    {
        name: 'Sept 11', nodata: 0, Sept2: 866.06,
    },
    {
        name: 'Sept 12', nodata: 0, Sept2: 967.86,
    },
    {
        name: 'Sept 13', nodata: 0, Sept2: 1081.63,
    },
    {
        name: 'Sept 14', nodata: 0, Sept2: 1208.77,
    },
    {
        name: 'Sept 15', nodata: 0, Sept2: 1350.86
    },
];

const Chart = ({ data = activedata }) => {
    return (
        <div>
            <h2>H2</h2>
            <h1></h1>
            <h3>Active Reported Cases</h3>
            <ComposedChart width={1000} height={450} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <CartesianGrid />
                <XAxis dataKey="name" angle={-45} textAnchor="end" fontSize="16" height="60" />
                <YAxis fontSize="16" />
                <Bar dataKey="active" fill="#cc0000">
                    <LabelList dataKey="active" position="top" fontSize="16" />
                </Bar>
                <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                {/* <Line dataKey="active" /> */}
            </ComposedChart>
        </div>
    );
};

export default Chart;