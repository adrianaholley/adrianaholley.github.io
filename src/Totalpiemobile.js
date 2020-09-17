import React, { Component } from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer, Tooltip, Cell, Label, Sector } from "recharts";
import { MobileView } from 'react-device-detect';


const COLORS = ['#cc0000', '#cccccc'];

const data01 = [{ name: 'Group A', value: 1343 }, { name: 'Group B', value: 44657 }]


class Totalpiemobile extends Component {

    render() {
        return (
            <MobileView>
                <ResponsiveContainer width={'100%'} height={"100%"} aspect='1.6'>
                    <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
                        <Pie
                            data={data01}
                            innerRadius={75}
                            outerRadius={115}
                            fill="#8884d8"
                            paddingAngle={5}
                        >
                            <Label
                                value="2.92%" position="centerBottom" className='label' fontSize='38px'
                            />
                            <Label
                                value="reported positive results" position="center" className='label-top' fontSize='12px'
                            />
                            <Label
                                value="Aug 1 - Sept 16" position="centerTop" className='label-bottom' fontSize='12px'
                            />
                            {
                                data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </MobileView>            
        );
    }
}


export default Totalpiemobile;
