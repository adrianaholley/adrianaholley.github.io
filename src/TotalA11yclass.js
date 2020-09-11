import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const zeroweeks = [
	{
		name: 'Aug 3', Total: 18, Sept1: 16, Sept2: 15, Sept3: 15, Aug31: 18, Aug28: 18, Aug26: 19, Aug25: 20, Sept4: 15, Sept7: 15, Sept8: 15
	},
	{
		name: 'Aug 4', nodata: 0, Sept1: 18, Sept2: 17, Sept3: 17, Aug31: 19, Aug28: 20, Aug26: 21, Aug25: 21, Sept4: 17, Sept7: 17, Sept8: 17
	},
	{
		name: 'Aug 5', nodata: 0, Sept1: 20, Sept2: 19, Sept3: 19, Aug31: 22, Aug28: 22, Aug26: 23, Aug25: 23, Sept4: 19, Sept7: 19, Sept8: 19
	},
	{
		name: 'Aug 6', nodata: 0, Sept1: 22, Sept2: 22, Sept3: 21, Aug31: 24, Aug28: 24, Aug26: 25, Aug25: 26, Sept4: 21, Sept7: 21, Sept8: 21
	},
	{
		name: 'Aug 7', nodata: 0, Sept1: 25, Sept2: 24, Sept3: 24, Aug31: 27, Aug28: 27, Aug26: 28, Aug25: 28, Sept4: 24, Sept7: 24, Sept8: 24
	},
	{
		name: 'Aug 8', nodata: 0, Sept1: 28, Sept2: 27, Sept3: 27, Aug31: 30, Aug28: 30, Aug26: 31, Aug25: 31, Sept4: 27, Sept7: 27, Sept8: 27
	},
	{
		name: 'Aug 9', nodata: 0, Sept1: 31, Sept2: 31, Sept3: 30, Aug31: 33, Aug28: 33, Aug26: 34, Aug25: 32, Sept4: 31, Sept7: 30, Sept8: 31
	},
	{
		name: 'Aug 10', Total: 44, Sept1: 35, Sept2: 34, Sept3: 34, Aug31: 36, Aug28: 37, Aug26: 37, Aug25: 37, Sept4: 34, Sept7: 34, Sept8: 34
	},
	{
		name: 'Aug 11', nodata: 0, Sept1: 39, Sept2: 39, Sept3: 38, Aug31: 40, Aug28: 41, Aug26: 41, Aug25: 41, Sept4: 39, Sept7: 39, Sept8: 39
	},
	{
		name: 'Aug 12', nodata: 0, Sept1: 44, Sept2: 43, Sept3: 43, Aug31: 45, Aug28: 45, Aug26: 45, Aug25: 45, Sept4: 43, Sept7: 43, Sept8: 43
	},
	{
		name: 'Aug 13', nodata: 0, Sept1: 49, Sept2: 49, Sept3: 49, Aug31: 50, Aug28: 50, Aug26: 50, Aug25: 49, Sept4: 49, Sept7: 49, Sept8: 49
	},
	{
		name: 'Aug 14', nodata: 0, Sept1: 55, Sept2: 55, Sept3: 55, Aug31: 55, Aug28: 55, Aug26: 55, Aug25: 54, Sept4: 55, Sept7: 55, Sept8: 55
	},
	{
		name: 'Aug 15', nodata: 0, Sept1: 61, Sept2: 61, Sept3: 61, Aug31: 61, Aug28: 61, Aug26: 60, Aug25: 59, Sept4: 62, Sept7: 62, Sept8: 62
	},
	{
		name: 'Aug 16', nodata: 0, Sept1: 68, Sept2: 69, Sept3: 69, Aug31: 68, Aug28: 68, Aug26: 67, Aug25: 65, Sept4: 70, Sept7: 70, Sept8: 70
	},
	{
		name: 'Aug 17', Total: 67, Sept1: 76, Sept2: 77, Sept3: 78, Aug31: 76, Aug28: 75, Aug26: 73, Aug25: 71, Sept4: 78, Sept7: 78, Sept8: 78
	},
	{
		name: 'Aug 18', Total: 75, Sept1: 85, Sept2: 87, Sept3: 87, Aug31: 84, Aug28: 83, Aug26: 81, Aug25: 78, Sept4: 88, Sept7: 88, Sept8: 888
	},
	{
		name: 'Aug 19', nodata: 0, Sept1: 95, Sept2: 97, Sept3: 98, Aug31: 93, Aug28: 91, Aug26: 89, Aug25: 85, Sept4: 99, Sept7: 99, Sept8: 999
	},
	{
		name: 'Aug 20', nodata: 0, Sept1: 106, Sept2: 109, Sept3: 110, Aug31: 104, Aug28: 101, Aug26: 98, Aug25: 94, Sept4: 111, Sept7: 111, Sept8: 111
	},
	{
		name: 'Aug 21', Total: 103, Sept1: 118, Sept2: 122, Sept3: 124, Aug31: 115, Aug28: 112, Aug26: 108, Aug25: 103, Sept4: 125, Sept7: 125, Sept8: 125
	},
	{
		name: 'Aug 22', nodata: 75, Sept1: 132, Sept2: 137, Sept3: 139, Aug31: 128, Aug28: 124, Aug26: 119, Aug25: 112, Sept4: 141, Sept7: 141, Sept8: 141
	},
	{
		name: 'Aug 23', nodata: 75, Sept1: 148, Sept2: 154, Sept3: 157, Aug31: 142, Aug28: 137, Aug26: 141, Aug25: 123, Sept4: 158, Sept7: 159, Sept8: 158
	},
	{
		name: 'Aug 24', nodata: 75, Sept1: 165, Sept2: 173, Sept3: 176, Aug31: 157, Aug28: 151, Aug26: 145, Aug25: 135, Sept4: 178, Sept7: 178, Sept8: 178
	},
	{
		name: 'Aug 25', Total: 149, Sept1: 184, Sept2: 194, Sept3: 198, Aug31: 175, Aug28: 168, Aug26: 160, Aug25: 148, Sept4: 200, Sept7: 201, Sept8: 200
	},
	{
		name: 'Aug 26', Total: 206, Sept1: 205, Sept2: 217, Sept3: 222, Aug31: 194, Aug28: 185, Aug26: 176, Aug25: 163, Sept4: 225, Sept7: 226, Sept8: 225
	},
	{
		name: 'Aug 27', nodata: 0, Sept1: 229, Sept2: 243, Sept3: 250, Aug31: 215, Aug28: 205, Aug26: 194, Aug25: 178, Sept4: 253, Sept7: 254, Sept8: 254
	},
	{
		name: 'Aug 28', Total: 260, Sept1: 256, Sept2: 273, Sept3: 281, Aug31: 239, Aug28: 237, Aug26: 214, Aug25: 195, Sept4: 285, Sept7: 286, Sept8: 285
	},
	{
		name: 'Aug 29', nodata: 75, Sept1: 286, Sept2: 306, Sept3: 315, Aug31: 265, Aug28: 251, Aug26: 236, Aug25: 214, Sept4: 321, Sept7: 321, Sept8: 321
	},
	{
		name: 'Aug 30', nodata: 75, Sept1: 319, Sept2: 343, Sept3: 354, Aug31: 294, Aug28: 278, Aug26: 260, Aug25: 235, Sept4: 361, Sept7: 362, Sept8: 361
	},
	{
		name: 'Aug 31', Total: 378, Sept1: 356, Sept2: 384, Sept3: 398, Aug31: 327, Aug28: 307, Aug26: 286, Aug25: 258, Sept4: 406, Sept7: 407, Sept8: 406
	},
	{
		name: 'Sept 1', Total: 551, Sept1: 398, Sept2: 431, Sept3: 447, Aug31: 363, Aug28: 340, Aug26: 416, Aug25: 283, Sept4: 456, Sept7: 458, Sept8: 456
	},
	{
		name: 'Sept 2', Total: 624, Sept1: 444, Sept2: 483, Sept3: 503, Aug31: 403, Aug28: 376, Aug26: 348, Aug25: 310, Sept4: 513, Sept7: 515, Sept8: 513
	},
	{
		name: 'Sept 3', Total: 671, Sept1: 496, Sept2: 542, Sept3: 565, Aug31: 447, Aug28: 416, Aug26: 383, Aug25: 340, Sept4: 577, Sept7: 579, Sept8: 577
	},
	{
		name: 'Sept 4', Total: 717, Sept1: 553, Sept2: 607, Sept3: 635, Aug31: 496, Aug28: 460, Aug26: 422, Aug25: 372, Sept4: 649, Sept7: 652, Sept8: 649
	},
	{
		name: 'Sept 5', nodata: 75, Sept1: 618, Sept2: 681, Sept3: 713, Aug31: 551, Aug28: 509, Aug26: 466, Aug25: 408, Sept4: 730, Sept7: 733, Sept8: 730
	},
	{
		name: 'Sept 6', nodata: 75, Sept1: 689, Sept2: 763, Sept3: 801, Aug31: 612, Aug28: 563, Aug26: 513, Aug25: 448, Sept4: 821, Sept7: 825, Sept8: 822
	},
	{
		name: 'Sept 7', Total: 945, Sept1: 769, Sept2: 856, Sept3: 900, Aug31: 679, Aug28: 622, Aug26: 566, Aug25: 491, Sept4: 924, Sept7: 928, Sept8: 924
	},
	{
		name: 'Sept 8', Total: 1020, Sept1: 859, Sept2: 959, Sept3: 1011, Aug31: 754, Aug28: 688, Aug26: 623, Aug25: 538, Sept4: 1039, Sept7: 1044, Sept8: 1039
	}
];

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createCurrentData(date, total, active) {
	return { date, total, active };
}

const rows = [
	createCurrentData('August 3', 18, 0),
	createCurrentData('August 10', 44,0),
	createCurrentData('September 8', 1020,0 ),
	createCurrentData('September 9', 0, 0),
	createCurrentData('September 10', 0, 0),
	createCurrentData('September 11', 0, 0),
	createCurrentData('September 12',0, 0),
  ];

class TotalA11yclass extends Component {
	constructor() {
		super();
		this.state = {
			name: "React",
			OneWeek: true,
			TwoWeeks: true,
			data: {},
			LogView: true
		};
	}

	onChangeValue(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<div className='responsivecontainer'>
				<svg width="100%" height="139">
					<g>
						<rect width="100%" height="100%" fill="#B32317" />
						<text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
					</g>
				</svg>
				<h1></h1>
				<h3 style={{ marginBottom: 5 }}>Total Reported Cases</h3>
				<a><i><font size="2">Last updated Tuesday, September 8 at 10:30pm.</font></i></a>
				<p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>

				<center>
					<div>
						<BrowserView>









						</BrowserView>

						<MobileView>

						</MobileView>

						<br />						
					</div>
				</center>
			</div>
		)
	}
}

export default TotalA11yclass;