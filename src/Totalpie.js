import React, { Component } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import { isMobile } from 'react-device-detect';
import { fall2020, todayinarray } from './fall2020';

const COLORS = ['#cc0000', '#cccccc'];

var today = fall2020[todayinarray] 
var weekago = fall2020[todayinarray - 7]
var twoweeksago = fall2020[todayinarray - 14]

var todaydate = today.Date
var weekagodate = weekago.Date

var totaltoday = today["Total 2021"]
var notinfected = (46000-totaltoday)
var percentagetoday = (totaltoday/46000*100).toFixed(2)
var percentagetodaychange = "+" + (1.34-.56).toFixed(2) //update the decimal daily
var percentageaweekago = (weekago["Total 2021"]/46000*100).toFixed(2) 
var aweekagochange = "(+0.56)" 
var percentagetwoweeksago = "0.00" //(twoweeksago["Total 2021"]/46000*100).toFixed(2) 
var twoweeksagochange = "(+0.00)" 
var threeweeksago = "0.00%" //done 

const data01 = [{ name: 'Group A', value: totaltoday }, { name: 'Group B', value: notinfected }] //


class Totalpie extends Component {

    
    render() {
        return (
            <div>
                {isMobile ? (<br />) : ('')}

                {/* title, subtilte */}
                <br/>
                <h5 style={{ marginBottom: 0, marginTop: 5 }}>Percent That Has Had COVID</h5>
                <a><i><font size="2">{totaltoday.toLocaleString()} positive reports from 46,000 students and employees.</font></i></a>

                {/* pie chart */}
                <ResponsiveContainer width={'100%'} height={"100%"} aspect={isMobile ? ('1.6') : ('2.5')}>
                    <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                        <Pie data={data01} innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5}>
                            <Label value={percentagetodaychange} position="centerBottom" className='label-top-top' fontSize='12px' />
                            <Label value={percentagetoday + "%"} position="centerBottom" className='label' fontSize='38px' />
                            <Label value="of Red Raiders have" position="center" className='label-top' fontSize='12px' />
                            <Label value="reported positive results" position="center" className='label-middle' fontSize='12px' />
                            <Label value={weekagodate + " - " + todaydate} position="centerTop" className='label-bottom' fontSize='12px' />
                            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* past projections */}
                <a><font size="3">One week before {todaydate}:<b> {percentageaweekago + "%"} </b> {aweekagochange}</font></a>
                <br />
                <a><font size="3">Two weeks before {todaydate}:<b> {percentagetwoweeksago}</b>  {twoweeksagochange}</font></a>
                <br />
                <a><font size="3">Three weeks before {todaydate}:<b> {threeweeksago} </b></font></a>

                {/* disclaimer */}
                <p className="popinfo"><i><font size="2">
                    <div className={isMobile ? ("adjustabletextmobile") : ('adjustabletextseventy')}>
                        The total population includes those who are 100% remote and is an estimate,
                        as Dr. Schovanec stated Sept 16, 2020 that there are "more than 46,000" students and employees.
                        The Office of Communications did not respond to a request for the exact metric.
                    </div>
                </font></i></p>
            </div>
        );
    }
}

export default Totalpie;
