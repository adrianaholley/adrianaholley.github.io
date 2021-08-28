import React, { Component } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";
import { isMobile } from 'react-device-detect';

const COLORS = ['#cc0000', '#cccccc'];

const data01 = [{ name: 'Group A', value: 2725 }, { name: 'Group B', value: 43275 }] //

var currentdate = "Nov 18" //done
var totaltoday = 2725
var percentagetoday = "5.92%" 
var percentagetodaychange = "(+0.43)"
var aweekago = "5.49%" //done
var aweekagochange = "(+0.48)" //done
var twoweeksago = "5.01%" //done 
var twoweeksagochange = "(+0.30)" //done
var threeweeksago = "4.71%" //done 

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
                            <Label value={percentagetoday} position="centerBottom" className='label' fontSize='38px' />
                            <Label value="of Red Raiders have" position="center" className='label-top' fontSize='12px' />
                            <Label value="reported positive results" position="center" className='label-middle' fontSize='12px' />
                            <Label value={"Aug 1 - " + currentdate} position="centerTop" className='label-bottom' fontSize='12px' />
                            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* past projections */}
                <a><font size="3">One week before {currentdate}:<b> {aweekago} </b> {aweekagochange}</font></a>
                <br />
                <a><font size="3">Two weeks before {currentdate}:<b> {twoweeksago}</b>  {twoweeksagochange}</font></a>
                <br />
                <a><font size="3">Three weeks before {currentdate}:<b> {threeweeksago} </b></font></a>

                {/* disclaimer */}
                <p className="popinfo"><i><font size="2">
                    <div className={isMobile ? ("adjustabletextmobile") : ('adjustabletextseventy')}>
                        The total population includes those who are 100% remote and is an estimate,
                        as Dr. Schovanec stated Sept 16 that there are "more than 46,000" students and employees.
                        The Interim Director of Emergency Management did not respond to a request for the exact metric.
                    </div>
                </font></i></p>
            </div>
        );
    }
}

export default Totalpie;
