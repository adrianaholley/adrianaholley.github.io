import React, { Component } from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer, Tooltip, Cell, Label, Sector } from "recharts";
import { isMobile } from 'react-device-detect';


const COLORS = ['#cc0000', '#cccccc'];

const data01 = [{ name: 'Group A', value: 1407 }, { name: 'Group B', value: 44592 }]

class Totalpie extends Component {

    render() {
        return (
            <div>
                {isMobile ? (<br />) : ('')}

                {/* title, subtilte */}
                <h5 style={{ marginBottom: 0, marginTop: 5 }}>Percent That Has Had COVID</h5>
                <a><i><font size="2">1,407 positive reports from 46,000* students and employees.</font></i></a>

                {/* pie chart */}
                <ResponsiveContainer width={'100%'} height={"100%"} aspect={isMobile ? ('1.6') : ('2.5')}>
                    <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                        <Pie data={data01} innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5}>
                            <Label value="3.06%" position="centerBottom" className='label' fontSize='38px' />
                            <Label value="of Red Raiders have" position="center" className='label-top' fontSize='12px' />
                            <Label value="reported positive results" position="center" className='label-middle' fontSize='12px' />
                            <Label value="Aug 1 - Sept 18" position="centerTop" className='label-bottom' fontSize='12px' />
                            {data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* past projections */}
                <a><font size="3">One week before Sept 18:<b> 2.37%</b></font></a>
                <br />
                <a><font size="3">Two weeks before Sept 18:<b> 1.56%</b></font></a>

                {/* disclaimer */}
                <p className="popinfo"><i><font size="2">
                    <div className={isMobile ? ("adjustabletextmobile") : ('adjustabletextseventy')}>
                        *The total population includes those who are 100% remote and is an estimate,
                        as Dr. Schovanec stated Sept 16 that there are "more than 46,000" students and employees.
                        The Interim Director of Emergency Management did not respond to a request for the exact metric.
                    </div>
                </font></i></p>
            </div>
        );
    }
}

export default Totalpie;
