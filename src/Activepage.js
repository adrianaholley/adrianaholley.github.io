import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const zeroweeks = [
	{
		"name": "Aug 3",
		"Active": 18,
		"Sept16": 20,
		"Sept15": 16,
		"Sept14": 14,
		"Sept11": 13,
		"Sept10": 12,
		"Sept9": 11
	},
	{
		"name": "Aug 4",
		"nodata": 0,
		"Sept16": 21,
		"Sept15": 18,
		"Sept14": 16,
		"Sept11": 14,
		"Sept10": 13,
		"Sept9": 12
	},
	{
		"name": "Aug 5",
		"nodata": 0,
		"Sept16": 23,
		"Sept15": 19,
		"Sept14": 17,
		"Sept11": 16,
		"Sept10": 15,
		"Sept9": 14
	},
	{
		"name": "Aug 6",
		"nodata": 0,
		"Sept16": 25,
		"Sept15": 21,
		"Sept14": 19,
		"Sept11": 17,
		"Sept10": 16,
		"Sept9": 16
	},
	{
		"name": "Aug 7",
		"nodata": 0,
		"Sept16": 27,
		"Sept15": 23,
		"Sept14": 21,
		"Sept11": 19,
		"Sept10": 18,
		"Sept9": 18
	},
	{
		"name": "Aug 8",
		"nodata": 0,
		"Sept16": 30,
		"Sept15": 26,
		"Sept14": 23,
		"Sept11": 21,
		"Sept10": 20,
		"Sept9": 20
	},
	{
		"name": "Aug 9",
		"nodata": 0,
		"Sept16": 32,
		"Sept15": 28,
		"Sept14": 26,
		"Sept11": 24,
		"Sept10": 23,
		"Sept9": 22
	},
	{
		"name": "Aug 10",
		"Active": 25,
		"Sept16": 35,
		"Sept15": 31,
		"Sept14": 28,
		"Sept11": 27,
		"Sept10": 25,
		"Sept9": 25
	},
	{
		"name": "Aug 11",
		"nodata": 0,
		"Sept16": 38,
		"Sept15": 34,
		"Sept14": 31,
		"Sept11": 30,
		"Sept10": 28,
		"Sept9": 28
	},
	{
		"name": "Aug 12",
		"nodata": 0,
		"Sept16": 41,
		"Sept15": 37,
		"Sept14": 35,
		"Sept11": 33,
		"Sept10": 32,
		"Sept9": 31
	},
	{
		"name": "Aug 13",
		"nodata": 0,
		"Sept16": 45,
		"Sept15": 41,
		"Sept14": 38,
		"Sept11": 36,
		"Sept10": 35,
		"Sept9": 35
	},
	{
		"name": "Aug 14",
		"nodata": 0,
		"Sept16": 49,
		"Sept15": 45,
		"Sept14": 42,
		"Sept11": 41,
		"Sept10": 39,
		"Sept9": 39
	},
	{
		"name": "Aug 15",
		"nodata": 0,
		"Sept16": 53,
		"Sept15": 49,
		"Sept14": 47,
		"Sept11": 45,
		"Sept10": 44,
		"Sept9": 43
	},
	{
		"name": "Aug 16",
		"nodata": 0,
		"Sept16": 58,
		"Sept15": 54,
		"Sept14": 52,
		"Sept11": 50,
		"Sept10": 49,
		"Sept9": 49
	},
	{
		"name": "Aug 17",
		"Active": 38,
		"Sept16": 63,
		"Sept15": 59,
		"Sept14": 57,
		"Sept11": 56,
		"Sept10": 55,
		"Sept9": 54
	},
	{
		"name": "Aug 18",
		"nodata": 0,
		"Sept16": 68,
		"Sept15": 65,
		"Sept14": 63,
		"Sept11": 62,
		"Sept10": 61,
		"Sept9": 61
	},
	{
		"name": "Aug 19",
		"nodata": 0,
		"Sept16": 74,
		"Sept15": 71,
		"Sept14": 70,
		"Sept11": 69,
		"Sept10": 68,
		"Sept9": 68
	},
	{
		"name": "Aug 20",
		"nodata": 0,
		"Sept16": 81,
		"Sept15": 78,
		"Sept14": 77,
		"Sept11": 76,
		"Sept10": 76,
		"Sept9": 77
	},
	{
		"name": "Aug 21",
		"Active": 53,
		"Sept16": 88,
		"Sept15": 86,
		"Sept14": 85,
		"Sept11": 85,
		"Sept10": 85,
		"Sept9": 86
	},
	{
		"name": "Aug 22",
		"nodata": 0,
		"Sept16": 95,
		"Sept15": 95,
		"Sept14": 94,
		"Sept11": 94,
		"Sept10": 95,
		"Sept9": 96
	},
	{
		"name": "Aug 23",
		"nodata": 0,
		"Sept16": 104,
		"Sept15": 104,
		"Sept14": 104,
		"Sept11": 105,
		"Sept10": 106,
		"Sept9": 108
	},
	{
		"name": "Aug 24",
		"nodata": 0,
		"Sept16": 113,
		"Sept15": 114,
		"Sept14": 115,
		"Sept11": 117,
		"Sept10": 119,
		"Sept9": 121
	},
	{
		"name": "Aug 25",
		"Active": 87,
		"Sept16": 123,
		"Sept15": 125,
		"Sept14": 127,
		"Sept11": 130,
		"Sept10": 133,
		"Sept9": 135
	},
	{
		"name": "Aug 26",
		"Active": 146,
		"Sept16": 133,
		"Sept15": 137,
		"Sept14": 141,
		"Sept11": 144,
		"Sept10": 148,
		"Sept9": 151
	},
	{
		"name": "Aug 27",
		"nodata": 0,
		"Sept16": 145,
		"Sept15": 151,
		"Sept14": 156,
		"Sept11": 160,
		"Sept10": 166,
		"Sept9": 169
	},
	{
		"name": "Aug 28",
		"Active": 176,
		"Sept16": 157,
		"Sept15": 166,
		"Sept14": 172,
		"Sept11": 178,
		"Sept10": 185,
		"Sept9": 190
	},
	{
		"name": "Aug 29",
		"nodata": 0,
		"Sept16": 171,
		"Sept15": 182,
		"Sept14": 190,
		"Sept11": 198,
		"Sept10": 207,
		"Sept9": 212
	},
	{
		"name": "Aug 30",
		"nodata": 0,
		"Sept16": 186,
		"Sept15": 200,
		"Sept14": 210,
		"Sept11": 220,
		"Sept10": 231,
		"Sept9": 238
	},
	{
		"name": "Aug 31",
		"Active": 268,
		"Sept16": 202,
		"Sept15": 219,
		"Sept14": 232,
		"Sept11": 245,
		"Sept10": 258,
		"Sept9": 267
	},
	{
		"name": "Sept 1",
		"Active": 418,
		"Sept16": 220,
		"Sept15": 241,
		"Sept14": 257,
		"Sept11": 272,
		"Sept10": 288,
		"Sept9": 299
	},
	{
		"name": "Sept 2",
		"Active": 453,
		"Sept16": 239,
		"Sept15": 264,
		"Sept14": 284,
		"Sept11": 303,
		"Sept10": 321,
		"Sept9": 334
	},
	{
		"name": "Sept 3",
		"Active": 477,
		"Sept16": 260,
		"Sept15": 290,
		"Sept14": 314,
		"Sept11": 336,
		"Sept10": 359,
		"Sept9": 375
	},
	{
		"name": "Sept 4",
		"Active": 490,
		"Sept16": 283,
		"Sept15": 319,
		"Sept14": 347,
		"Sept11": 374,
		"Sept10": 401,
		"Sept9": 420
	},
	{
		"name": "Sept 5",
		"nodata": 0,
		"Sept16": 307,
		"Sept15": 350,
		"Sept14": 383,
		"Sept11": 416,
		"Sept10": 447,
		"Sept9": 470
	},
	{
		"name": "Sept 6",
		"nodata": 0,
		"Sept16": 334,
		"Sept15": 384,
		"Sept14": 423,
		"Sept11": 462,
		"Sept10": 500,
		"Sept9": 526
	},
	{
		"name": "Sept 7",
		"Active": 626,
		"Sept16": 363,
		"Sept15": 422,
		"Sept14": 468,
		"Sept11": 513,
		"Sept10": 558,
		"Sept9": 590
	},
	{
		"name": "Sept 8",
		"Active": 650,
		"Sept16": 395,
		"Sept15": 463,
		"Sept14": 517,
		"Sept11": 571,
		"Sept10": 623,
		"Sept9": 661
	},
	{
		"name": "Sept 9",
		"Active": 612,
		"Sept16": 429,
		"Sept15": 508,
		"Sept14": 571,
		"Sept11": 634,
		"Sept10": 696,
		"Sept9": 740
	},
	{
		"name": "Sept 10",
		"Active": 543,
		"Sept16": 466,
		"Sept15": 558,
		"Sept14": 632,
		"Sept11": 705,
		"Sept10": 777,
		"Sept9": 829
	},
	{
		"name": "Sept 11",
		"Active": 426,
		"Sept16": 507,
		"Sept15": 613,
		"Sept14": 698,
		"Sept11": 784,
		"Sept10": 868,
		"Sept9": 928
	},
	{
		"name": "Sept 12",
		"nodata": 0,
		"Sept16": 551,
		"Sept15": 673,
		"Sept14": 772,
		"Sept11": 872,
		"Sept10": 969,
		"Sept9": 1040
	},
	{
		"name": "Sept 13",
		"nodata": 0,
		"Sept16": 599,
		"Sept15": 739,
		"Sept14": 853,
		"Sept11": 969,
		"Sept10": 1082,
		"Sept9": 1165
	},
	{
		"name": "Sept 14",
		"Active": 461,
		"Sept16": 651,
		"Sept15": 811,
		"Sept14": 942,
		"Sept11": 1077,
		"Sept10": 1209,
		"Sept9": 1304
	},
	{
		"name": "Sept 15",
		"Active": 357,
		"Sept16": 708,
		"Sept15": 891,
		"Sept14": 1042,
		"Sept11": 1197,
		"Sept10": 1350,
		"Sept9": 1461
	},
	{
		"name": "Sept 16",
		"Active": 171,
		"Sept16": 770,
		"Sept15": 978,
		"Sept14": 1151,
		"Sept11": 1331,
		"Sept10": 1508,
		"Sept9": 1637
	}
]

const oneweek = [
	{
		"name": "Aug 3",
		"Active": 18,
		"Sept16": 20,
		"Sept15": 16,
		"Sept14": 14,
		"Sept11": 13,
		"Sept10": 12,
		"Sept9": 11
	},
	{
		"name": "Aug 4",
		"nodata": 0,
		"Sept16": 21,
		"Sept15": 18,
		"Sept14": 16,
		"Sept11": 14,
		"Sept10": 13,
		"Sept9": 12
	},
	{
		"name": "Aug 5",
		"nodata": 0,
		"Sept16": 23,
		"Sept15": 19,
		"Sept14": 17,
		"Sept11": 16,
		"Sept10": 15,
		"Sept9": 14
	},
	{
		"name": "Aug 6",
		"nodata": 0,
		"Sept16": 25,
		"Sept15": 21,
		"Sept14": 19,
		"Sept11": 17,
		"Sept10": 16,
		"Sept9": 16
	},
	{
		"name": "Aug 7",
		"nodata": 0,
		"Sept16": 27,
		"Sept15": 23,
		"Sept14": 21,
		"Sept11": 19,
		"Sept10": 18,
		"Sept9": 18
	},
	{
		"name": "Aug 8",
		"nodata": 0,
		"Sept16": 30,
		"Sept15": 26,
		"Sept14": 23,
		"Sept11": 21,
		"Sept10": 20,
		"Sept9": 20
	},
	{
		"name": "Aug 9",
		"nodata": 0,
		"Sept16": 32,
		"Sept15": 28,
		"Sept14": 26,
		"Sept11": 24,
		"Sept10": 23,
		"Sept9": 22
	},
	{
		"name": "Aug 10",
		"Active": 25,
		"Sept16": 35,
		"Sept15": 31,
		"Sept14": 28,
		"Sept11": 27,
		"Sept10": 25,
		"Sept9": 25
	},
	{
		"name": "Aug 11",
		"nodata": 0,
		"Sept16": 38,
		"Sept15": 34,
		"Sept14": 31,
		"Sept11": 30,
		"Sept10": 28,
		"Sept9": 28
	},
	{
		"name": "Aug 12",
		"nodata": 0,
		"Sept16": 41,
		"Sept15": 37,
		"Sept14": 35,
		"Sept11": 33,
		"Sept10": 32,
		"Sept9": 31
	},
	{
		"name": "Aug 13",
		"nodata": 0,
		"Sept16": 45,
		"Sept15": 41,
		"Sept14": 38,
		"Sept11": 36,
		"Sept10": 35,
		"Sept9": 35
	},
	{
		"name": "Aug 14",
		"nodata": 0,
		"Sept16": 49,
		"Sept15": 45,
		"Sept14": 42,
		"Sept11": 41,
		"Sept10": 39,
		"Sept9": 39
	},
	{
		"name": "Aug 15",
		"nodata": 0,
		"Sept16": 53,
		"Sept15": 49,
		"Sept14": 47,
		"Sept11": 45,
		"Sept10": 44,
		"Sept9": 43
	},
	{
		"name": "Aug 16",
		"nodata": 0,
		"Sept16": 58,
		"Sept15": 54,
		"Sept14": 52,
		"Sept11": 50,
		"Sept10": 49,
		"Sept9": 49
	},
	{
		"name": "Aug 17",
		"Active": 38,
		"Sept16": 63,
		"Sept15": 59,
		"Sept14": 57,
		"Sept11": 56,
		"Sept10": 55,
		"Sept9": 54
	},
	{
		"name": "Aug 18",
		"nodata": 0,
		"Sept16": 68,
		"Sept15": 65,
		"Sept14": 63,
		"Sept11": 62,
		"Sept10": 61,
		"Sept9": 61
	},
	{
		"name": "Aug 19",
		"nodata": 0,
		"Sept16": 74,
		"Sept15": 71,
		"Sept14": 70,
		"Sept11": 69,
		"Sept10": 68,
		"Sept9": 68
	},
	{
		"name": "Aug 20",
		"nodata": 0,
		"Sept16": 81,
		"Sept15": 78,
		"Sept14": 77,
		"Sept11": 76,
		"Sept10": 76,
		"Sept9": 77
	},
	{
		"name": "Aug 21",
		"Active": 53,
		"Sept16": 88,
		"Sept15": 86,
		"Sept14": 85,
		"Sept11": 85,
		"Sept10": 85,
		"Sept9": 86
	},
	{
		"name": "Aug 22",
		"nodata": 0,
		"Sept16": 95,
		"Sept15": 95,
		"Sept14": 94,
		"Sept11": 94,
		"Sept10": 95,
		"Sept9": 96
	},
	{
		"name": "Aug 23",
		"nodata": 0,
		"Sept16": 104,
		"Sept15": 104,
		"Sept14": 104,
		"Sept11": 105,
		"Sept10": 106,
		"Sept9": 108
	},
	{
		"name": "Aug 24",
		"nodata": 0,
		"Sept16": 113,
		"Sept15": 114,
		"Sept14": 115,
		"Sept11": 117,
		"Sept10": 119,
		"Sept9": 121
	},
	{
		"name": "Aug 25",
		"Active": 87,
		"Sept16": 123,
		"Sept15": 125,
		"Sept14": 127,
		"Sept11": 130,
		"Sept10": 133,
		"Sept9": 135
	},
	{
		"name": "Aug 26",
		"Active": 146,
		"Sept16": 133,
		"Sept15": 137,
		"Sept14": 141,
		"Sept11": 144,
		"Sept10": 148,
		"Sept9": 151
	},
	{
		"name": "Aug 27",
		"nodata": 0,
		"Sept16": 145,
		"Sept15": 151,
		"Sept14": 156,
		"Sept11": 160,
		"Sept10": 166,
		"Sept9": 169
	},
	{
		"name": "Aug 28",
		"Active": 176,
		"Sept16": 157,
		"Sept15": 166,
		"Sept14": 172,
		"Sept11": 178,
		"Sept10": 185,
		"Sept9": 190
	},
	{
		"name": "Aug 29",
		"nodata": 0,
		"Sept16": 171,
		"Sept15": 182,
		"Sept14": 190,
		"Sept11": 198,
		"Sept10": 207,
		"Sept9": 212
	},
	{
		"name": "Aug 30",
		"nodata": 0,
		"Sept16": 186,
		"Sept15": 200,
		"Sept14": 210,
		"Sept11": 220,
		"Sept10": 231,
		"Sept9": 238
	},
	{
		"name": "Aug 31",
		"Active": 268,
		"Sept16": 202,
		"Sept15": 219,
		"Sept14": 232,
		"Sept11": 245,
		"Sept10": 258,
		"Sept9": 267
	},
	{
		"name": "Sept 1",
		"Active": 418,
		"Sept16": 220,
		"Sept15": 241,
		"Sept14": 257,
		"Sept11": 272,
		"Sept10": 288,
		"Sept9": 299
	},
	{
		"name": "Sept 2",
		"Active": 453,
		"Sept16": 239,
		"Sept15": 264,
		"Sept14": 284,
		"Sept11": 303,
		"Sept10": 321,
		"Sept9": 334
	},
	{
		"name": "Sept 3",
		"Active": 477,
		"Sept16": 260,
		"Sept15": 290,
		"Sept14": 314,
		"Sept11": 336,
		"Sept10": 359,
		"Sept9": 375
	},
	{
		"name": "Sept 4",
		"Active": 490,
		"Sept16": 283,
		"Sept15": 319,
		"Sept14": 347,
		"Sept11": 374,
		"Sept10": 401,
		"Sept9": 420
	},
	{
		"name": "Sept 5",
		"nodata": 0,
		"Sept16": 307,
		"Sept15": 350,
		"Sept14": 383,
		"Sept11": 416,
		"Sept10": 447,
		"Sept9": 470
	},
	{
		"name": "Sept 6",
		"nodata": 0,
		"Sept16": 334,
		"Sept15": 384,
		"Sept14": 423,
		"Sept11": 462,
		"Sept10": 500,
		"Sept9": 526
	},
	{
		"name": "Sept 7",
		"Active": 626,
		"Sept16": 363,
		"Sept15": 422,
		"Sept14": 468,
		"Sept11": 513,
		"Sept10": 558,
		"Sept9": 590
	},
	{
		"name": "Sept 8",
		"Active": 650,
		"Sept16": 395,
		"Sept15": 463,
		"Sept14": 517,
		"Sept11": 571,
		"Sept10": 623,
		"Sept9": 661
	},
	{
		"name": "Sept 9",
		"Active": 612,
		"Sept16": 429,
		"Sept15": 508,
		"Sept14": 571,
		"Sept11": 634,
		"Sept10": 696,
		"Sept9": 740
	},
	{
		"name": "Sept 10",
		"Active": 543,
		"Sept16": 466,
		"Sept15": 558,
		"Sept14": 632,
		"Sept11": 705,
		"Sept10": 777,
		"Sept9": 829
	},
	{
		"name": "Sept 11",
		"Active": 426,
		"Sept16": 507,
		"Sept15": 613,
		"Sept14": 698,
		"Sept11": 784,
		"Sept10": 868,
		"Sept9": 928
	},
	{
		"name": "Sept 12",
		"nodata": 0,
		"Sept16": 551,
		"Sept15": 673,
		"Sept14": 772,
		"Sept11": 872,
		"Sept10": 969,
		"Sept9": 1040
	},
	{
		"name": "Sept 13",
		"nodata": 0,
		"Sept16": 599,
		"Sept15": 739,
		"Sept14": 853,
		"Sept11": 969,
		"Sept10": 1082,
		"Sept9": 1165
	},
	{
		"name": "Sept 14",
		"Active": 461,
		"Sept16": 651,
		"Sept15": 811,
		"Sept14": 942,
		"Sept11": 1077,
		"Sept10": 1209,
		"Sept9": 1304
	},
	{
		"name": "Sept 15",
		"Active": 357,
		"Sept16": 708,
		"Sept15": 891,
		"Sept14": 1042,
		"Sept11": 1197,
		"Sept10": 1350,
		"Sept9": 1461
	},
	{
		"name": "Sept 16",
		"Active": 171,
		"Sept16": 770,
		"Sept15": 978,
		"Sept14": 1151,
		"Sept11": 1331,
		"Sept10": 1508,
		"Sept9": 1637
	},
	{
		"name": "Sept 17",
		"nodata": 0,
		"Sept16": 837,
		"Sept15": 1074,
		"Sept14": 1272,
		"Sept11": 1479,
		"Sept10": 1684,
		"Sept9": 1833
	},
	{
		"name": "Sept 18",
		"nodata": 0,
		"Sept16": 910,
		"Sept15": 1179,
		"Sept14": 1406,
		"Sept11": 1644,
		"Sept10": 1880,
		"Sept9": 2053
	},
	{
		"name": "Sept 19",
		"nodata": 0,
		"Sept16": 989,
		"Sept15": 1294,
		"Sept14": 1554,
		"Sept11": 1828,
		"Sept10": 2100,
		"Sept9": 2300
	},
	{
		"name": "Sept 20",
		"nodata": 0,
		"Sept16": 1075,
		"Sept15": 1421,
		"Sept14": 1718,
		"Sept11": 2032,
		"Sept10": 2345,
		"Sept9": 2576
	},
	{
		"name": "Sept 21",
		"nodata": 0,
		"Sept16": 1169,
		"Sept15": 1560,
		"Sept14": 1898,
		"Sept11": 2258,
		"Sept10": 2619,
		"Sept9": 2885
	},
	{
		"name": "Sept 22",
		"nodata": 0,
		"Sept16": 1271,
		"Sept15": 1713,
		"Sept14": 2098,
		"Sept11": 2510,
		"Sept10": 2924,
		"Sept9": 3232
	},
	{
		"name": "Sept 23",
		"nodata": 0,
		"Sept16": 1382,
		"Sept15": 1881,
		"Sept14": 2319,
		"Sept11": 2790,
		"Sept10": 3266,
		"Sept9": 3620
	}
]

const RedSwitch = withStyles({
    switchBase: {
        color: grey[300],
        '&$checked': {
            color: red[700],
        },
        '&$checked + $track': {
            backgroundColor: red[700],
        },
    },
    checked: {},
    track: {},
})(Switch);

class Activepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ZeroWeeks: true,
            OneWeek: true,
            TwoWeeks: true,
            activedata: {},
            LogView: true
        };
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
                <h3 style={{ marginBottom: 0 }}>Active Reported Cases</h3>
                <a><i><font size="2">Last updated Wednesday, September 16 at 11:45pm.</font></i></a>

                <center>
                    <div>
                        <BrowserView>
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ ZeroWeeks: !this.state.ZeroWeeks })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TwoWeeks: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projections - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width='65%' height='65%' aspect='2.2'>

                                {this.state.ZeroWeeks ? (


                                    <ComposedChart data={zeroweeks} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                        <CartesianGrid />
                                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                        <Bar dataKey="Active" fill="#cc0000"><LabelList dataKey="Active" position="top" fontSize="12" /></Bar>
                                        {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept15" dot={false} stroke="#666666" />) : ("")} */}
                                        {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept8" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                ) : (

                                        <ComposedChart data={oneweek} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                            <CartesianGrid />
                                            <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                            <Bar dataKey="Active" fill="#cc0000"><LabelList dataKey="Active" position="top" fontSize="12" /></Bar>
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept16" dot={false} stroke="#666666" />) : ("")}
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept9" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                        </ComposedChart>

                                    )}
                            </ResponsiveContainer>
                        </BrowserView>

                        <MobileView>
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ ZeroWeeks: !this.state.ZeroWeeks })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ Sept4: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projections - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width={'99%'} height={'65%'} aspect='1'>

                                {this.state.ZeroWeeks ? (
                                    <ComposedChart data={zeroweeks} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                        <CartesianGrid />
                                        <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                        <Bar dataKey="Active" fill="#cc0000">
                                            <LabelList dataKey="Active" position="top" fontSize="7" />
                                        </Bar>
                                        {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept15" dot={false} stroke="#666666" />) : ("")} */}
                                        {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept8" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                ) : (
                                        <ComposedChart data={oneweek} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                            <CartesianGrid />
                                            <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                            <Bar dataKey="Active" fill="#cc0000">
                                                <LabelList dataKey="Active" position="top" fontSize="7" />
                                            </Bar>
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept16" dot={false} stroke="#666666" />) : ("")}
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept9" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                        </ComposedChart>
                                    )}



                            </ResponsiveContainer>
                        </MobileView>



                        <br />

                        <BrowserView>
                            <div className="adjustabletext">
                                <Grid container spacing={5}>
                                    <Grid item xs alignItems={"left"}>
                                        <h4>Notable Dates</h4>
                                        <font size="4"><p style={{ textAlign: "left" }}>
                                            <li>August 3: Campus doors opened<br /></li>
                                            <li>August 8: Dorms open for move-in<br /></li>
                                            <li>August 24: First day of MWF classes<br /></li>
                                            <li>August 25: First day of TR classes<br /></li>
                                            <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                            <li>September 4: Opening of on-campus testing center<br /></li>
                                            <li>September 5-7: Labor Day weekend<br /></li>
                                            <li>September 9: Census Date for Texas Tech<br /></li>
                                            <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                            <li>September 12: First football game, played at home</li>
                                            <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                        </p></font>
                                    </Grid>
                                    <Grid item xs>
                                        <h4>How are projections made?</h4>
                                        <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                                        <h4>Why are there two?</h4>
                                        <p><font size="4">A new projection is generated when a count update is released for the day. The <b>solid</b> line is the most recent projection, and the <b>dashed</b> line the projection from one week before. </font></p>
                                        <h4>What is logarithmic sclae?</h4>
                                        <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>

                                    </Grid>
                                </Grid>
                            </div>
                        </BrowserView>


                        <MobileView>
                            <div className="adjustabletextmobile">
                                
                                <h4>What are these curves?</h4>
                                <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                                <h4>Why are there two?</h4>
                                <p><font size="4">A new projection is generated when a count update is released for the day. The <b>solid</b> line is the most recent projection, and the <b>dashed</b> line the projection from one week before. </font></p>
                                <h4>What is logarithmic sclae?</h4>
                                <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
                                <h4>Notable Dates</h4>
                                <font size="4"><p style={{ textAlign: "left" }}>
                                    <li>August 3: Campus doors opened<br /></li>
                                    <li>August 8: Dorms open for move-in<br /></li>
                                    <li>August 24: First day of MWF classes<br /></li>
                                    <li>August 25: First day of TR classes<br /></li>
                                    <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                    <li>September 4: Opening of on-campus testing center<br /></li>
                                    <li>September 5-7: Labor Day weekend<br /></li>
                                    <li>September 9: Census Date for Texas Tech<br /></li>
                                    <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                    <li>September 12: First football game, played at home</li>
                                    <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                </p></font>
                            </div>
                        </MobileView>
                    </div>
                </center>

            </div>
        )
    }
}

export default Activepage;