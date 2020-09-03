import React, { PureComponent } from "react";
import { CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, XAxis, YAxis } from "recharts";

export const activedata = [
    {
        name: 'Aug 3', total: 18, active: 18,
    },
    {
        name: 'Aug 4', nodata: 967,
    },
    {
        name: 'Aug 5', nodata: 1098,
    },
    {
        name: 'Aug 6', nodata: 1200,
    },
    {
        name: 'Aug 7', nodata: 1108,
    },
    {
        name: 'Aug 8', nodata: 680,
    },
    {
        name: 'Aug 9', nodata: 680,
    },
    {
        name: 'Aug 10', active: 25,
    },
    {
        name: 'Aug 11', nodata: 680,
    },
    {
        name: 'Aug 12', nodata: 680,
    },
    {
        name: 'Aug 13', nodata: 680,
    },
    {
        name: 'Aug 14', nodata: 680,
    },
    {
        name: 'Aug 15', nodata: 680,
    },
    {
        name: 'Aug 16', nodata: 680,
    },
    {
        name: 'Aug 17', active: 38,
    },
    {
        name: 'Aug 18', nodata: 680,
    },
    {
        name: 'Aug 19', nodata: 680,
    },
    {
        name: 'Aug 20', nodata: 680,
    },
    {
        name: 'Aug 21', nodata: 0,
    },
    {
        name: 'Aug 22', nodata: 0,
    },
    {
        name: 'Aug 23', nodata: 0,
    },
    {
        name: 'Aug 24', nodata: 0,
    },
    {
        name: 'Aug 25', active: 87,
    },
    {
        name: 'Aug 26', active: 146,
    },
    {
        name: 'Aug 27', nodata: 0,
    },
    {
        name: 'Aug 28', active: 176,
    },
    {
        name: 'Aug 29', nodata: 0,
    },
    {
        name: 'Aug 30', nodata: 0,
    },
    {
        name: 'Aug 31', active: 268,
    },
    {
        name: 'Sept 1', active: 418,
    },
    {
        name: 'Sept 2', nodata: 0,
    },
    {
        name: 'Sept 3', nodata: 0,
    },
    {
        name: 'Sept 4', nodata: 0,
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
                <XAxis dataKey="name" angle={-45} textAnchor="end" fontSize="16" />
                <YAxis fontSize="16" />
                <Bar dataKey="active" fill="#cc0000">
                    <LabelList dataKey="active" position="top" fontSize="16" />
                </Bar>
                <Legend />

                {/* <Line dataKey="active" /> */}
            </ComposedChart>
        </div>
    );
};

export default Chart;