import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Component } from 'react';

function createData(name, calories, fat, week3, week4, week5, week6, week7, week8, week9, week10, week11) {
    return { name, calories, fat, week3, week4, week5, week6, week7, week8, week9, week10, week11};
  }

const rows = [
    createData('Fall 2020', '3,196', '3,194'),
    createData('Spring 2021', 274, 274),
    createData('Fall 2021', '1,377', '1,377'),
    createData('Spring 2022', '1,843', '1,843'),
  ];

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