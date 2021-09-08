import React, { Component } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import { isMobile } from 'react-device-detect';
import { fall2020, todayinarray } from './fall2020';

const COLORS = ['#333333', '#333333'];

const data01 = [{ name: 'Group A', value: 10 }, { name: 'Group B', value: 10 }]

var today = fall2020[todayinarray] 
var weekago = fall2020[todayinarray - 7]

var todaydate = today.Date 
var weekagodate = weekago.Date 
var avgtoday = today["Daily 2021 avg"]
var avgaweekago = weekago["Daily 2021 avg"] 
var avgtwoweeksago = (0)

var avgtodaychange = "(" + (avgtoday-avgaweekago).toFixed(1) + ")"
var avgaweekagochange = "(+" + (avgaweekago-avgtwoweeksago) + ")"
class Newpie extends Component {

    
    render() {
        return (
            <div>
                {/* title, subtilte */}
                <br/>
                <h5 style={{ marginBottom: 0, marginTop: 5 }}>7-Day Average</h5>
                <a><i><font size="2">The average amount of new cases reported in the last 7 days.</font></i></a>

                {/* pie chart */}
                <ResponsiveContainer width={'100%'} height={"100%"} aspect={isMobile ? ('1.6') : ('2.5')}>
                    <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                        <Pie data={data01} innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5}>
                            <Label value={avgtodaychange} position="centerBottom" className='label-top-top' fontSize='12px' />
                            <Label value={avgtoday} position="centerBottom" className='label' fontSize='38px' />
                            <Label value="is the average number" position="center" className='label-top' fontSize='12px' />
                            <Label value="of new cases per day, " position="center" className='label-middle' fontSize='12px' />
                            <Label value={weekagodate + " - " + todaydate} position="centerTop" className='label-bottom' fontSize='12px' />
                            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* past projections */}
                <a><font size="3">One week before {weekagodate}:<b> {avgaweekago} </b> {avgaweekagochange}</font></a>
                <br />
                <a><font size="3">Two weeks before {weekagodate}:<b> {avgtwoweeksago}</b></font></a>

                {/* disclaimer */}
                <p className="popinfo"><i><font size="2">
                    <div className={isMobile ? ("adjustabletextmobile") : ('adjustabletextseventy')}>
                        {/* The total population includes those who are 100% remote and is an estimate,
                        as Dr. Schovanec stated Sept 16 that there are "more than 46,000" students and employees.
                        The Interim Director of Emergency Management did not respond to a request for the exact metric. */}
                    </div>
                </font></i></p>
            </div>
        );
    }
}

export default Newpie;
