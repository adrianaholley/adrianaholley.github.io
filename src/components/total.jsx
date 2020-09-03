import React, { PureComponent } from "react";
import { CartesianGrid, Line, LabelList, Legend, Bar, LineChart, ComposedChart, Tooltip, XAxis, YAxis, Label, ResponsiveContainer } from "recharts";

export const totaldata = [
    {
        name: 'Aug 3', total: 18, Sept1: 16.4344, Sept2: 15.73
    },
    {
        name: 'Aug 4', nodata: 0, Sept1: 18.3437, Sept2: 17.64
    },
    {
        name: 'Aug 5', nodata: 0, Sept1: 20.4749, Sept2: 19.77
    },
    {
        name: 'Aug 6', nodata: 0, Sept1: 22.8537, Sept2: 22.16
    },
    {
        name: 'Aug 7', nodata: 0, Sept1: 25.5089, Sept2: 24.84
    },
    {
        name: 'Aug 8', nodata: 0, Sept1: 28.4729, Sept2: 27.85
    },
    {
        name: 'Aug 9', nodata: 0, Sept1: 31.78, Sept2: 31.21
    },
    {
        name: 'Aug 10', total: 44, Sept1: 35.47, Sept2: 34.99
    },
    {
        name: 'Aug 11', nodata: 0, Sept1: 39.59, Sept2: 39.22
    },
    {
        name: 'Aug 12', nodata: 0, Sept1: 44.19, Sept2: 43.97
    },
    {
        name: 'Aug 13', nodata: 0, Sept1: 49.33, Sept2: 49.29
    },
    {
        name: 'Aug 14', nodata: 0, Sept1: 55.06, Sept2: 55.25
    },
    {
        name: 'Aug 15', nodata: 0, Sept1: 61.46, Sept2: 61.93
    },
    {
        name: 'Aug 16', nodata: 0, Sept1: 68.60, Sept2: 69.42
    },
    {
        name: 'Aug 17', total: 67, Sept1: 76.57, Sept2: 77.82,
    },
    {
        name: 'Aug 18', total: 75, Sept1: 85.46, Sept2: 87.23,
    },
    {
        name: 'Aug 19', nodata: 0, Sept1: 95.39, Sept2: 97.78,
    },
    {
        name: 'Aug 20', nodata: 0, Sept1: 106.48, Sept2: 109.61
    },
    {
        name: 'Aug 21', total: 103, Sept1: 118.85, Sept2: 122.87
    },
    {
        name: 'Aug 22', nodata: 75, Sept1: 132.66, Sept2: 137.73,
    },
    {
        name: 'Aug 23', nodata: 75, Sept1: 148.07, Sept2: 154.39
    },
    {
        name: 'Aug 24', nodata: 75, Sept1: 165.27, Sept2: 173.07
    },
    {
        name: 'Aug 25', total: 149, Sept1: 184.47, Sept2: 194.00,
    },
    {
        name: 'Aug 26', total: 206, Sept1: 205.9, Sept2: 217.47,
    },
    {
        name: 'Aug 27', nodata: 0, Sept1: 229.83, Sept2: 243.77
    },
    {
        name: 'Aug 28', total: 260, Sept1: 256.53, Sept2: 273.26
    },
    {
        name: 'Aug 29', nodata: 75, Sept1: 286.33, Sept2: 306.32
    },
    {
        name: 'Aug 30', nodata: 75, Sept1: 319.59, Sept2: 343.37
    },
    {
        name: 'Aug 31', total: 378, Sept1: 356.72, Sept2: 384.90
    },
    {
        name: 'Sept 1', total: 551, Sept1: 398.17, Sept2: 431.46
    },
    {
        name: 'Sept 2', total: 624, Sept1: 444.43, Sept2: 483.65
    },
    {
        name: 'Sept 3', nodata: 75, Sept1: 496.06, Sept2: 542.16
    },
    {
        name: 'Sept 4', nodata: 75, Sept1: 553.70, Sept2: 607.74
    },
    {
        name: 'Sept 5', nodata: 75, Sept1: 618.02, Sept2: 681.25,
    },
    {
        name: 'Sept 6', nodata: 75, Sept1: 689.83, Sept2: 763.66,
    },
    {
        name: 'Sept 7', nodata: 75, Sept1: 769.97, Sept2: 856.03,
    },
    {
        name: 'Sept 8', nodata: 75, Sept1: 859.43, Sept2: 959.58,
    },
    {
        name: 'Sept 9', nodata: 75, Sept1: 959.28, Sept2: 1075.65,
    },
    {
        name: 'Sept 10', nodata: 75, Sept1: 1070.73, Sept2: 1205.76,
    },
    {
        name: 'Sept 11', nodata: 75, Sept1: 1195.13, Sept2: 1351.61,
    },
    {
        name: 'Sept 12', nodata: 75, Sept1: 1333.98, Sept2: 1515.11,
    },
    {
        name: 'Sept 13', nodata: 75, Sept1: 1488.97, Sept2: 1698.38,
    },
    {
        name: 'Sept 14', nodata: 75, Sept1: 1661.96, Sept2: 1903.82,
    },
    {
        name: 'Sept 15', nodata: 75, Sept1: 1855.05, Sept2: 2143.11,
    },
];

const Chart = ({ data = totaldata }) => {
    return (

        <div className='responsivecontainer'>
            <h2>H2</h2>
            <h1></h1>
            <h3 >Total Reported Cases</h3>
            <center>
                <ResponsiveContainer width={'75%'} height={"75%"} aspect='3'>
                    <ComposedChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <CartesianGrid />
                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                        <YAxis fontSize="12" />
                        <Bar dataKey="total" fill="#333333" >
                            <LabelList dataKey="total" position="top" fontSize="12" />
                        </Bar>
                        <Line type="monotone" dataKey="Sept2" dot={false} stroke="#666666" strokeDasharray="3 3" />
                        <Tooltip />
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