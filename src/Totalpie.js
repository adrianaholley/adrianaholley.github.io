import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import { data, todayinarray } from './data';

const COLORS = ['#cc0000', '#cccccc'];

var today = data[todayinarray] 
var weekago = data[todayinarray - 7]
var twoweeksago = data[todayinarray - 14]
var threeweeksago = data[todayinarray - 21]

var todaydate = today.Date
var weekagodate = weekago.Date

var totaltoday = today["Total 2021"]
var notinfected = (46000-totaltoday)
var percentagetoday = (totaltoday/46000*100).toFixed(2)
var percentageaweekago = (weekago["Total 2021"]/46000*100).toFixed(2) 
var percentagetwoweeksago = (twoweeksago["Total 2021"]/46000*100).toFixed(2) 
var percentagethreeweeksago = (threeweeksago["Total 2021"]/46000*100).toFixed(2)

var percentagetodaychange = "+" + (percentagetoday-percentageaweekago).toFixed(2)
var aweekagochange = "+" + (percentageaweekago-percentagetwoweeksago).toFixed(2) 
var twoweeksagochange = "+" + (percentagetwoweeksago-percentagethreeweeksago).toFixed(2) 

const data01 = [{ name: 'Group A', value: totaltoday }, { name: 'Group B', value: notinfected }] //

class Totalpie extends Component {
    
    render() {
        return (
            <div className="pie-padding">

                {/* title, subtilte */}
                <div>
                    <span className="chart-title">
                        Percent That Has Had COVID
                    </span>
                </div>
                <div>
                    <span className="chart-subtitle">
                        {totaltoday.toLocaleString()} positive reports from 46,000 students and employees.
                    </span>
                </div>

                {/* pie chart */}
                <ResponsiveContainer aspect={isMobile ? ('1.3') : ('1')}>
                    <PieChart>
                        <Pie data={data01} innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5}>
                            <Label value={"(" + percentagetodaychange + ")"} position="centerBottom" className='label-top-top' fontSize='12px' />
                            <Label value={percentagetoday + "%"} position="centerBottom" className='label' fontSize='38px' />
                            <Label value="of Red Raiders have" position="center" className='label-top' fontSize='12px' />
                            <Label value="reported positive results" position="center" className='label-middle' fontSize='12px' />
                            <Label value={weekagodate + " - " + todaydate} position="centerTop" className='label-bottom' fontSize='12px' />
                            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* past projections */}
                <div>
                    <span className="chart-week-befores">
                        One week before {todaydate}:<b> {percentageaweekago + "%"} </b> ({aweekagochange})
                    </span>
                </div>
                <div>
                    <span className="chart-week-befores">
                        Two weeks before {todaydate}:<b> {percentagetwoweeksago + "%"}</b>  ({twoweeksagochange})
                    </span>
                </div>
                <div>
                    <span className="chart-week-befores">
                        Three weeks before {todaydate}:<b> {percentagethreeweeksago + "%"} </b>
                    </span>
                </div>
            </div>
        );
    }
}

export default Totalpie;
