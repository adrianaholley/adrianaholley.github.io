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

function createData(name, calories, fat) {
    return { name, calories, fat};
  }

const rows = [
    createData('Fall 2021 (in progress)', fall2020[todayinarray]["Total 2021"], fall2020[todayinarray]["Total Recoveries 2021"]), //daily update right
    createData('Spring 2021', 274, 274),
    createData('Fall 2020', '3,196', '3,194'),
  ];

const otherRows = [
    createData('Fall 2021, Week 1', 303),
    createData('Fall 2020, Week 1', 176)
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
                                <TableCell><b>Week-by-Week Comparisons</b></TableCell>
                                <TableCell align="right"><b>New Cases</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {otherRows.map((otherRows) => (
                                <TableRow key={otherRows.name}>
                                    <TableCell component="th" scope="otherRows">
                                        {otherRows.name}
                                    </TableCell>
                                    <TableCell align="right">{otherRows.calories}</TableCell>
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
                                <TableCell align="right"><b>Total Recoveries</b></TableCell>
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