import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Component } from 'react';
import { fall2020, todayinarray } from './fall2020';

function createData(name, calories, fat, week3, week4, week5, week6, week7, week8, week9, week10, week11) {
    return { name, calories, fat, week3, week4, week5, week6, week7, week8, week9, week10, week11};
  }

const rows = [
    createData('Fall 2021 (in progress)', fall2020[todayinarray]["Total 2021"], fall2020[todayinarray]["Total Recoveries 2021"]),
    createData('Spring 2021', 274, 274),
    createData('Fall 2020', '3,196', '3,194'),
  ];

const otherRows = [
    createData('Fall 2021', '303 new cases', '347', '280', '161', '56', '43', '25', '19', '21', '31', '20'),
    createData('Fall 2020', '176 new cases', '439', '374', '377', '111', '153', '83', '151', '139', '90', '172')
]

class SemesterComparisons extends Component {
    
    render() {
        return (
            <div>
                {/* title, subtilte */}
                <br/>
                <h5 style={{ marginBottom: 0, marginTop: 5 }}>Semester Comparisons</h5>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Semester</b></TableCell>
                                <TableCell align="right"><b>Week 1</b></TableCell>
                                <TableCell align="right"><b>Week 2</b></TableCell>
                                <TableCell align="right"><b>Week 3</b></TableCell>
                                <TableCell align="right"><b>Week 4</b></TableCell>
                                <TableCell align="right"><b>Week 5</b></TableCell>
                                <TableCell align="right"><b>Week 6</b></TableCell>
                                <TableCell align="right"><b>Week 7</b></TableCell>
                                <TableCell align="right"><b>Week 8</b></TableCell>
                                <TableCell align="right"><b>Week 9</b></TableCell>
                                <TableCell align="right"><b>Week 10</b></TableCell>
                                <TableCell align="right"><b>Week 11</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {otherRows.map((otherRows) => (
                                <TableRow key={otherRows.name}>
                                    <TableCell component="th" scope="otherRows">
                                        {otherRows.name}
                                    </TableCell>
                                    <TableCell align="right">{otherRows.calories}</TableCell>
                                    <TableCell align="right">{otherRows.fat}</TableCell>
                                    <TableCell align="right">{otherRows.week3}</TableCell>
                                    <TableCell align="right">{otherRows.week4}</TableCell>
                                    <TableCell align="right">{otherRows.week5}</TableCell>
                                    <TableCell align="right">{otherRows.week6}</TableCell>
                                    <TableCell align="right">{otherRows.week7}</TableCell>
                                    <TableCell align="right">{otherRows.week8}</TableCell>
                                    <TableCell align="right">{otherRows.week9}</TableCell>
                                    <TableCell align="right">{otherRows.week10}</TableCell>
                                    <TableCell align="right">{otherRows.week11}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <br />

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>All Semesters</b></TableCell>
                                <TableCell align="right"><b>Total Cases</b></TableCell>
                                <TableCell align="right"><b>Total Survivals</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        )
    }

}

export default SemesterComparisons;