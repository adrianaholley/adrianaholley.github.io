import React, { Component } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import { isMobile } from 'react-device-detect';
import { data, todayinarray } from './data';

const COLORS = ['#333333', '#333333'];
const green = "#008000"
const red = "#cc0000"

const data01 = [{ name: 'Group A', value: 10 }, { name: 'Group B', value: 10 }]

var today = data[todayinarray] 
var weekago = data[todayinarray - 7]
var twoweeksago = data[todayinarray - 14]

var todaydate = today.Date 
var weekagodate = weekago.Date 

var avgtoday = today["Daily 2021-2022 avg"] // TODO .toFixed(1) 
var avgaweekago = weekago["Daily 2021-2022 avg"] 
var avgtwoweeksago = twoweeksago["Daily 2021-2022 avg"]

var avgtodaychange = ((1-avgtoday/avgaweekago)*100).toFixed(1)
var avgaweekagochange = ((1-avgaweekago/avgtwoweeksago)*100).toFixed(1)

class DailyPie extends Component {

    render() {
        return (
            <div className="pie-padding">

                {/* title, subtilte */}
                <div>
                    <span className="chart-title">
                        7-Day Average
                    </span>
                </div>
                <div>
                    <span className="chart-subtitle">
                    The average amount of new cases reported in the last 7 days.
                    </span>
                </div>

                {/* pie chart */}
                <ResponsiveContainer aspect={isMobile ? ('1.3') : ('1')}>
                    <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                        <Pie data={data01} innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5}>
                            <Label value={"(↓" + avgtodaychange + "%)"} position="centerBottom" className='label-top-top' fontSize='12px' fill={green} />
                            <Label value={avgtoday} position="centerBottom" className='label' fontSize='38px' />
                            <Label value="is the average number" position="center" className='label-top' fontSize='12px' />
                            <Label value="of new cases per day, " position="center" className='label-middle' fontSize='12px' />
                            <Label value={weekagodate + " - " + todaydate} position="centerTop" className='label-bottom' fontSize='12px' />
                            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* past projections */}
                <div>
                    <span className="chart-week-befores">
                    One week before {todaydate}:<b> {avgaweekago} </b><font color={green}>(↓{avgaweekagochange}%)</font>
                    </span>
                </div>
                <div>
                    <span className="chart-week-befores">
                        Two weeks before {todaydate}:<b> {avgtwoweeksago}</b>
                    </span>
                </div>
            </div>
        );
    }
}

export default DailyPie;
