import React, { PureComponent } from "react";
import { CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, Tooltip, XAxis, YAxis, Label } from "recharts";

export const totaldata = [
    {
        name: 'Aug 3', total: 18, Projection_from__from_Sept_1: 16.4344,
    },
    {
        name: 'Aug 4', nodata: 0, Projection_from__from_Sept_1: 18.3437,
    },
    {
        name: 'Aug 5', nodata: 0, Projection_from__from_Sept_1: 20.4749,
    },
    {
        name: 'Aug 6', nodata: 0, Projection_from__from_Sept_1: 22.8537,
    },
    {
        name: 'Aug 7', nodata: 0, Projection_from__from_Sept_1: 25.5089,
    },
    {
        name: 'Aug 8', nodata: 0, Projection_from__from_Sept_1: 28.4729,
    },
    {
        name: 'Aug 9', nodata: 0, Projection_from__from_Sept_1: 31.7806,
    },
    {
        name: 'Aug 10', total: 44, Projection_from__from_Sept_1: 35.473,
    },
    {
        name: 'Aug 11', nodata: 0, Projection_from__from_Sept_1: 39.594,
    },
    {
        name: 'Aug 12', nodata: 0, Projection_from__from_Sept_1: 44.194,
    },
    {
        name: 'Aug 13', nodata: 0, Projection_from__from_Sept_1: 49.329,
    },
    {
        name: 'Aug 14', nodata: 0, Projection_from__from_Sept_1: 55.06,
    },
    {
        name: 'Aug 15', nodata: 0, Projection_from__from_Sept_1: 61.457,
    },
    {
        name: 'Aug 16', nodata: 0, Projection_from__from_Sept_1: 68.597,
    },
    {
        name: 'Aug 17', total: 67, Projection_from__from_Sept_1: 76.567,
    },
    {
        name: 'Aug 18', total: 75, Projection_from__from_Sept_1: 85.463,
    },
    {
        name: 'Aug 19', nodata: 0, Projection_from__from_Sept_1: 95.392,
    },
    {
        name: 'Aug 20', nodata: 0, Projection_from__from_Sept_1: 106.475,
    },
    {
        name: 'Aug 21', total: 103, Projection_from__from_Sept_1: 118.845,
    },
    {
        name: 'Aug 22', nodata: 75, Projection_from__from_Sept_1: 132.653,
    },
    {
        name: 'Aug 23', nodata: 75, Projection_from__from_Sept_1: 148.065,
    },
    {
        name: 'Aug 24', nodata: 75, Projection_from__from_Sept_1: 165.267,
    },
    {
        name: 'Aug 25', total: 149, Projection_from__from_Sept_1: 184.468,
    },
    {
        name: 'Aug 26', total: 206, Projection_from__from_Sept_1: 205.9,
    },
    {
        name: 'Aug 27', nodata: 0, Projection_from__from_Sept_1: 229.822,
    },
    {
        name: 'Aug 28', total: 260, Projection_from__from_Sept_1: 256.523,
    },
    {
        name: 'Aug 29', nodata: 75, Projection_from__from_Sept_1: 286.326,
    },
    {
        name: 'Aug 30', nodata: 75, Projection_from__from_Sept_1: 319.592,
    },
    {
        name: 'Aug 31', total: 378, Projection_from__from_Sept_1: 356.723,
    },
    {
        name: 'Sept 1', total: 551, Projection_from__from_Sept_1: 398.168,
    },
    {
        name: 'Sept 2', nodata: 75, Projection_from__from_Sept_1: 444.427,
    },
    {
        name: 'Sept 3', nodata: 75, Projection_from__from_Sept_1: 496.062,
    },
    {
        name: 'Sept 4', nodata: 75, Projection_from__from_Sept_1: 553.695,
    },
    {
        name: 'Sept 5', nodata: 75, Projection_from__from_Sept_1: 618.024,
    },
    {
        name: 'Sept 6', nodata: 75, Projection_from__from_Sept_1: 689.828,
    },
    {
        name: 'Sept 7', nodata: 75, Projection_from__from_Sept_1: 769.973,
    },
    {
        name: 'Sept 8', nodata: 75, Projection_from__from_Sept_1: 859.43,
    },
    {
        name: 'Sept 9', nodata: 75, Projection_from__from_Sept_1: 959.28,
    },
    {
        name: 'Sept 10', nodata: 75, Projection_from__from_Sept_1: 1070.731,
    },
    {
        name: 'Sept 11', nodata: 75, Projection_from__from_Sept_1: 1195.13,
    },
    {
        name: 'Sept 12', nodata: 75, Projection_from__from_Sept_1: 1333.983,
    },
    {
        name: 'Sept 13', nodata: 75, Projection_from__from_Sept_1: 1488.967,
    },
    {
        name: 'Sept 14', nodata: 75, Projection_from__from_Sept_1: 1661.958,
    },
    {
        name: 'Sept 15', nodata: 75, Projection_from__from_Sept_1: 1855.047,
    },
];

const Chart = ({ data = totaldata }) => {
    return (

        <div>
            <h2>H2</h2>
            <h1></h1>
            <h3>Total Reported Cases</h3>
            <ComposedChart width={1000} height={450} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <CartesianGrid />
                <XAxis dataKey="name" angle={-45} textAnchor="end" fontSize="16" />
                <YAxis fontSize="16" />
                <Bar dataKey="total" fill="#333333" >
                    <LabelList dataKey="total" position="top" fontSize="16" />
                </Bar>
                <Line type="monotone" dataKey="Projection_from__from_Sept_1" dot={false} stroke="#666666" strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                {/* <Line dataKey="active" /> */}
            </ComposedChart>
        </div>
    );
};

export default Chart;