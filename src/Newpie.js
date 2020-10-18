import React, { Component } from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer, Tooltip, Cell, Label, Sector } from "recharts";
import { isMobile } from 'react-device-detect';

const COLORS = ['#333333', '#333333'];

const data01 = [{ name: 'Group A', value: 10 }, { name: 'Group B', value: 10 }]

var aweekagodate = "Oct 9"
var currentdate = "Oct 16"
var totaltoday = 1972
var percentagetoday = "21.6"
var percentagetodaychange = "(+9.7)"
var aweekago = "11.9"
var aweekagochange = "(-10.0)"
var twoweeksago = "21.9"

class Newpie extends Component {

    
    render() {
        return (
            <div>
                {isMobile ? (<br />) : ('')}

                {/* title, subtilte */}
                <br/>
                <h5 style={{ marginBottom: 0, marginTop: 5 }}>7-Day Average</h5>
                <a><i><font size="2">The average amount of new cases reported in the last 7 days.</font></i></a>

                {/* pie chart */}
                <ResponsiveContainer width={'100%'} height={"100%"} aspect={isMobile ? ('1.6') : ('2.5')}>
                    <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                        <Pie data={data01} innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5}>
                            <Label value={percentagetodaychange} position="centerBottom" className='label-top-top' fontSize='12px' />
                            <Label value={percentagetoday} position="centerBottom" className='label' fontSize='38px' />
                            <Label value="is the average number" position="center" className='label-top' fontSize='12px' />
                            <Label value="of new cases per day, " position="center" className='label-middle' fontSize='12px' />
                            <Label value={aweekagodate + " - " + currentdate} position="centerTop" className='label-bottom' fontSize='12px' />
                            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* past projections */}
                <a><font size="3">One week before {currentdate}:<b> {aweekago} </b> {aweekagochange}</font></a>
                <br />
                <a><font size="3">Two weeks before {currentdate}:<b> {twoweeksago}</b></font></a>

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
