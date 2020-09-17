import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView } from "react-device-detect";
import React, { Component } from 'react';
import Totalpie from './Totalpie.js';
import Totalpiemobile from './Totalpiemobile.js';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const zeroweeks = [
    {
        "name": "Aug 3",
        "Total": 18,
        "Sept16": 19,
        "Sept15": 18,
        "Sept14": 17,
        "Sept11": 16,
        "Sept10": 16,
        "Sept9": 15
    },
    {
        "name": "Aug 4",
        "nodata": 0,
        "Sept16": 21,
        "Sept15": 20,
        "Sept14": 19,
        "Sept11": 18,
        "Sept10": 18,
        "Sept9": 17
    },
    {
        "name": "Aug 5",
        "nodata": 0,
        "Sept16": 23,
        "Sept15": 22,
        "Sept14": 21,
        "Sept11": 20,
        "Sept10": 20,
        "Sept9": 19
    },
    {
        "name": "Aug 6",
        "nodata": 0,
        "Sept16": 26,
        "Sept15": 25,
        "Sept14": 24,
        "Sept11": 23,
        "Sept10": 22,
        "Sept9": 22
    },
    {
        "name": "Aug 7",
        "nodata": 0,
        "Sept16": 28,
        "Sept15": 27,
        "Sept14": 26,
        "Sept11": 25,
        "Sept10": 25,
        "Sept9": 24
    },
    {
        "name": "Aug 8",
        "nodata": 0,
        "Sept16": 32,
        "Sept15": 31,
        "Sept14": 29,
        "Sept11": 28,
        "Sept10": 28,
        "Sept9": 27
    },
    {
        "name": "Aug 9",
        "nodata": 0,
        "Sept16": 35,
        "Sept15": 34,
        "Sept14": 33,
        "Sept11": 32,
        "Sept10": 31,
        "Sept9": 31
    },
    {
        "name": "Aug 10",
        "Total": 44,
        "Sept16": 39,
        "Sept15": 38,
        "Sept14": 37,
        "Sept11": 36,
        "Sept10": 35,
        "Sept9": 35
    },
    {
        "name": "Aug 11",
        "nodata": 0,
        "Sept16": 43,
        "Sept15": 42,
        "Sept14": 41,
        "Sept11": 40,
        "Sept10": 39,
        "Sept9": 39
    },
    {
        "name": "Aug 12",
        "nodata": 0,
        "Sept16": 48,
        "Sept15": 47,
        "Sept14": 46,
        "Sept11": 45,
        "Sept10": 44,
        "Sept9": 44
    },
    {
        "name": "Aug 13",
        "nodata": 0,
        "Sept16": 54,
        "Sept15": 52,
        "Sept14": 51,
        "Sept11": 50,
        "Sept10": 50,
        "Sept9": 49
    },
    {
        "name": "Aug 14",
        "nodata": 0,
        "Sept16": 60,
        "Sept15": 58,
        "Sept14": 57,
        "Sept11": 56,
        "Sept10": 56,
        "Sept9": 55
    },
    {
        "name": "Aug 15",
        "nodata": 0,
        "Sept16": 66,
        "Sept15": 65,
        "Sept14": 64,
        "Sept11": 63,
        "Sept10": 62,
        "Sept9": 62
    },
    {
        "name": "Aug 16",
        "nodata": 0,
        "Sept16": 74,
        "Sept15": 73,
        "Sept14": 72,
        "Sept11": 70,
        "Sept10": 70,
        "Sept9": 70
    },
    {
        "name": "Aug 17",
        "Total": 67,
        "Sept16": 82,
        "Sept15": 81,
        "Sept14": 80,
        "Sept11": 79,
        "Sept10": 79,
        "Sept9": 78
    },
    {
        "name": "Aug 18",
        "Total": 75,
        "Sept16": 91,
        "Sept15": 90,
        "Sept14": 89,
        "Sept11": 88,
        "Sept10": 88,
        "Sept9": 88
    },
    {
        "name": "Aug 19",
        "nodata": 0,
        "Sept16": 101,
        "Sept15": 101,
        "Sept14": 100,
        "Sept11": 99,
        "Sept10": 99,
        "Sept9": 99
    },
    {
        "name": "Aug 20",
        "nodata": 0,
        "Sept16": 113,
        "Sept15": 112,
        "Sept14": 112,
        "Sept11": 111,
        "Sept10": 111,
        "Sept9": 111
    },
    {
        "name": "Aug 21",
        "Total": 103,
        "Sept16": 125,
        "Sept15": 125,
        "Sept14": 125,
        "Sept11": 124,
        "Sept10": 125,
        "Sept9": 125
    },
    {
        "name": "Aug 22",
        "nodata": 0,
        "Sept16": 139,
        "Sept15": 139,
        "Sept14": 139,
        "Sept11": 139,
        "Sept10": 140,
        "Sept9": 140
    },
    {
        "name": "Aug 23",
        "nodata": 0,
        "Sept16": 155,
        "Sept15": 155,
        "Sept14": 156,
        "Sept11": 156,
        "Sept10": 157,
        "Sept9": 158
    },
    {
        "name": "Aug 24",
        "nodata": 0,
        "Sept16": 172,
        "Sept15": 173,
        "Sept14": 174,
        "Sept11": 175,
        "Sept10": 176,
        "Sept9": 177
    },
    {
        "name": "Aug 25",
        "Total": 149,
        "Sept16": 192,
        "Sept15": 193,
        "Sept14": 194,
        "Sept11": 196,
        "Sept10": 198,
        "Sept9": 199
    },
    {
        "name": "Aug 26",
        "Total": 206,
        "Sept16": 213,
        "Sept15": 215,
        "Sept14": 217,
        "Sept11": 220,
        "Sept10": 222,
        "Sept9": 224
    },
    {
        "name": "Aug 27",
        "nodata": 0,
        "Sept16": 237,
        "Sept15": 240,
        "Sept14": 243,
        "Sept11": 246,
        "Sept10": 249,
        "Sept9": 252
    },
    {
        "name": "Aug 28",
        "Total": 260,
        "Sept16": 263,
        "Sept15": 267,
        "Sept14": 271,
        "Sept11": 276,
        "Sept10": 280,
        "Sept9": 283
    },
    {
        "name": "Aug 29",
        "nodata": 0,
        "Sept16": 293,
        "Sept15": 298,
        "Sept14": 303,
        "Sept11": 309,
        "Sept10": 314,
        "Sept9": 318
    },
    {
        "name": "Aug 30",
        "nodata": 0,
        "Sept16": 325,
        "Sept15": 332,
        "Sept14": 339,
        "Sept11": 347,
        "Sept10": 352,
        "Sept9": 358
    },
    {
        "name": "Aug 31",
        "Total": 378,
        "Sept16": 362,
        "Sept15": 370,
        "Sept14": 379,
        "Sept11": 388,
        "Sept10": 396,
        "Sept9": 402
    },
    {
        "name": "Sept 1",
        "Total": 551,
        "Sept16": 402,
        "Sept15": 412,
        "Sept14": 423,
        "Sept11": 435,
        "Sept10": 444,
        "Sept9": 452
    },
    {
        "name": "Sept 2",
        "Total": 624,
        "Sept16": 447,
        "Sept15": 459,
        "Sept14": 473,
        "Sept11": 488,
        "Sept10": 498,
        "Sept9": 508
    },
    {
        "name": "Sept 3",
        "Total": 671,
        "Sept16": 497,
        "Sept15": 512,
        "Sept14": 528,
        "Sept11": 546,
        "Sept10": 559,
        "Sept9": 571
    },
    {
        "name": "Sept 4",
        "Total": 717,
        "Sept16": 553,
        "Sept15": 570,
        "Sept14": 591,
        "Sept11": 612,
        "Sept10": 628,
        "Sept9": 641
    },
    {
        "name": "Sept 5",
        "nodata": 0,
        "Sept16": 615,
        "Sept15": 636,
        "Sept14": 660,
        "Sept11": 686,
        "Sept10": 704,
        "Sept9": 721
    },
    {
        "name": "Sept 6",
        "nodata": 0,
        "Sept16": 684,
        "Sept15": 709,
        "Sept14": 738,
        "Sept11": 769,
        "Sept10": 791,
        "Sept9": 810
    },
    {
        "name": "Sept 7",
        "Total": 945,
        "Sept16": 760,
        "Sept15": 790,
        "Sept14": 824,
        "Sept11": 861,
        "Sept10": 887,
        "Sept9": 910
    },
    {
        "name": "Sept 8",
        "Total": 1020,
        "Sept16": 845,
        "Sept15": 880,
        "Sept14": 921,
        "Sept11": 965,
        "Sept10": 996,
        "Sept9": 1023
    },
    {
        "name": "Sept 9",
        "Total": 1055,
        "Sept16": 939,
        "Sept15": 981,
        "Sept14": 1029,
        "Sept11": 1081,
        "Sept10": 1118,
        "Sept9": 1150
    },
    {
        "name": "Sept 10",
        "Total": 1064,
        "Sept16": 1044,
        "Sept15": 1094,
        "Sept14": 1150,
        "Sept11": 1212,
        "Sept10": 1255,
        "Sept9": 1292
    },
    {
        "name": "Sept 11",
        "Total": 1091,
        "Sept16": 1161,
        "Sept15": 1219,
        "Sept14": 1285,
        "Sept11": 1358,
        "Sept10": 1408,
        "Sept9": 1452
    },
    {
        "name": "Sept 12",
        "nodata": 0,
        "Sept16": 1291,
        "Sept15": 1358,
        "Sept14": 1437,
        "Sept11": 1521,
        "Sept10": 1580,
        "Sept9": 1632
    },
    {
        "name": "Sept 13",
        "nodata": 0,
        "Sept16": 1435,
        "Sept15": 1514,
        "Sept14": 1605,
        "Sept11": 1705,
        "Sept10": 1774,
        "Sept9": 1834
    },
    {
        "name": "Sept 14",
        "Total": 1280,
        "Sept16": 1596,
        "Sept15": 1688,
        "Sept14": 1794,
        "Sept11": 1910,
        "Sept10": 1991,
        "Sept9": 2061
    },
    {
        "name": "Sept 15",
        "Total": 1293,
        "Sept16": 1774,
        "Sept15": 1881,
        "Sept14": 2005,
        "Sept11": 2140,
        "Sept10": 2234,
        "Sept9": 2317
    },
    {
        "name": "Sept 16",
        "Total": 1343,
        "Sept16": 1973,
        "Sept15": 2096,
        "Sept14": 2241,
        "Sept11": 2398,
        "Sept10": 2508,
        "Sept9": 2604
    }
]

const oneweek = [
    {
        "name": "Aug 3",
        "Total": 18,
        "Sept16": 19,
        "Sept15": 18,
        "Sept14": 17,
        "Sept11": 16,
        "Sept10": 16,
        "Sept9": 15
    },
    {
        "name": "Aug 4",
        "nodata": 0,
        "Sept16": 21,
        "Sept15": 20,
        "Sept14": 19,
        "Sept11": 18,
        "Sept10": 18,
        "Sept9": 17
    },
    {
        "name": "Aug 5",
        "nodata": 0,
        "Sept16": 23,
        "Sept15": 22,
        "Sept14": 21,
        "Sept11": 20,
        "Sept10": 20,
        "Sept9": 19
    },
    {
        "name": "Aug 6",
        "nodata": 0,
        "Sept16": 26,
        "Sept15": 25,
        "Sept14": 24,
        "Sept11": 23,
        "Sept10": 22,
        "Sept9": 22
    },
    {
        "name": "Aug 7",
        "nodata": 0,
        "Sept16": 28,
        "Sept15": 27,
        "Sept14": 26,
        "Sept11": 25,
        "Sept10": 25,
        "Sept9": 24
    },
    {
        "name": "Aug 8",
        "nodata": 0,
        "Sept16": 32,
        "Sept15": 31,
        "Sept14": 29,
        "Sept11": 28,
        "Sept10": 28,
        "Sept9": 27
    },
    {
        "name": "Aug 9",
        "nodata": 0,
        "Sept16": 35,
        "Sept15": 34,
        "Sept14": 33,
        "Sept11": 32,
        "Sept10": 31,
        "Sept9": 31
    },
    {
        "name": "Aug 10",
        "Total": 44,
        "Sept16": 39,
        "Sept15": 38,
        "Sept14": 37,
        "Sept11": 36,
        "Sept10": 35,
        "Sept9": 35
    },
    {
        "name": "Aug 11",
        "nodata": 0,
        "Sept16": 43,
        "Sept15": 42,
        "Sept14": 41,
        "Sept11": 40,
        "Sept10": 39,
        "Sept9": 39
    },
    {
        "name": "Aug 12",
        "nodata": 0,
        "Sept16": 48,
        "Sept15": 47,
        "Sept14": 46,
        "Sept11": 45,
        "Sept10": 44,
        "Sept9": 44
    },
    {
        "name": "Aug 13",
        "nodata": 0,
        "Sept16": 54,
        "Sept15": 52,
        "Sept14": 51,
        "Sept11": 50,
        "Sept10": 50,
        "Sept9": 49
    },
    {
        "name": "Aug 14",
        "nodata": 0,
        "Sept16": 60,
        "Sept15": 58,
        "Sept14": 57,
        "Sept11": 56,
        "Sept10": 56,
        "Sept9": 55
    },
    {
        "name": "Aug 15",
        "nodata": 0,
        "Sept16": 66,
        "Sept15": 65,
        "Sept14": 64,
        "Sept11": 63,
        "Sept10": 62,
        "Sept9": 62
    },
    {
        "name": "Aug 16",
        "nodata": 0,
        "Sept16": 74,
        "Sept15": 73,
        "Sept14": 72,
        "Sept11": 70,
        "Sept10": 70,
        "Sept9": 70
    },
    {
        "name": "Aug 17",
        "Total": 67,
        "Sept16": 82,
        "Sept15": 81,
        "Sept14": 80,
        "Sept11": 79,
        "Sept10": 79,
        "Sept9": 78
    },
    {
        "name": "Aug 18",
        "Total": 75,
        "Sept16": 91,
        "Sept15": 90,
        "Sept14": 89,
        "Sept11": 88,
        "Sept10": 88,
        "Sept9": 88
    },
    {
        "name": "Aug 19",
        "nodata": 0,
        "Sept16": 101,
        "Sept15": 101,
        "Sept14": 100,
        "Sept11": 99,
        "Sept10": 99,
        "Sept9": 99
    },
    {
        "name": "Aug 20",
        "nodata": 0,
        "Sept16": 113,
        "Sept15": 112,
        "Sept14": 112,
        "Sept11": 111,
        "Sept10": 111,
        "Sept9": 111
    },
    {
        "name": "Aug 21",
        "Total": 103,
        "Sept16": 125,
        "Sept15": 125,
        "Sept14": 125,
        "Sept11": 124,
        "Sept10": 125,
        "Sept9": 125
    },
    {
        "name": "Aug 22",
        "nodata": 0,
        "Sept16": 139,
        "Sept15": 139,
        "Sept14": 139,
        "Sept11": 139,
        "Sept10": 140,
        "Sept9": 140
    },
    {
        "name": "Aug 23",
        "nodata": 0,
        "Sept16": 155,
        "Sept15": 155,
        "Sept14": 156,
        "Sept11": 156,
        "Sept10": 157,
        "Sept9": 158
    },
    {
        "name": "Aug 24",
        "nodata": 0,
        "Sept16": 172,
        "Sept15": 173,
        "Sept14": 174,
        "Sept11": 175,
        "Sept10": 176,
        "Sept9": 177
    },
    {
        "name": "Aug 25",
        "Total": 149,
        "Sept16": 192,
        "Sept15": 193,
        "Sept14": 194,
        "Sept11": 196,
        "Sept10": 198,
        "Sept9": 199
    },
    {
        "name": "Aug 26",
        "Total": 206,
        "Sept16": 213,
        "Sept15": 215,
        "Sept14": 217,
        "Sept11": 220,
        "Sept10": 222,
        "Sept9": 224
    },
    {
        "name": "Aug 27",
        "nodata": 0,
        "Sept16": 237,
        "Sept15": 240,
        "Sept14": 243,
        "Sept11": 246,
        "Sept10": 249,
        "Sept9": 252
    },
    {
        "name": "Aug 28",
        "Total": 260,
        "Sept16": 263,
        "Sept15": 267,
        "Sept14": 271,
        "Sept11": 276,
        "Sept10": 280,
        "Sept9": 283
    },
    {
        "name": "Aug 29",
        "nodata": 0,
        "Sept16": 293,
        "Sept15": 298,
        "Sept14": 303,
        "Sept11": 309,
        "Sept10": 314,
        "Sept9": 318
    },
    {
        "name": "Aug 30",
        "nodata": 0,
        "Sept16": 325,
        "Sept15": 332,
        "Sept14": 339,
        "Sept11": 347,
        "Sept10": 352,
        "Sept9": 358
    },
    {
        "name": "Aug 31",
        "Total": 378,
        "Sept16": 362,
        "Sept15": 370,
        "Sept14": 379,
        "Sept11": 388,
        "Sept10": 396,
        "Sept9": 402
    },
    {
        "name": "Sept 1",
        "Total": 551,
        "Sept16": 402,
        "Sept15": 412,
        "Sept14": 423,
        "Sept11": 435,
        "Sept10": 444,
        "Sept9": 452
    },
    {
        "name": "Sept 2",
        "Total": 624,
        "Sept16": 447,
        "Sept15": 459,
        "Sept14": 473,
        "Sept11": 488,
        "Sept10": 498,
        "Sept9": 508
    },
    {
        "name": "Sept 3",
        "Total": 671,
        "Sept16": 497,
        "Sept15": 512,
        "Sept14": 528,
        "Sept11": 546,
        "Sept10": 559,
        "Sept9": 571
    },
    {
        "name": "Sept 4",
        "Total": 717,
        "Sept16": 553,
        "Sept15": 570,
        "Sept14": 591,
        "Sept11": 612,
        "Sept10": 628,
        "Sept9": 641
    },
    {
        "name": "Sept 5",
        "nodata": 0,
        "Sept16": 615,
        "Sept15": 636,
        "Sept14": 660,
        "Sept11": 686,
        "Sept10": 704,
        "Sept9": 721
    },
    {
        "name": "Sept 6",
        "nodata": 0,
        "Sept16": 684,
        "Sept15": 709,
        "Sept14": 738,
        "Sept11": 769,
        "Sept10": 791,
        "Sept9": 810
    },
    {
        "name": "Sept 7",
        "Total": 945,
        "Sept16": 760,
        "Sept15": 790,
        "Sept14": 824,
        "Sept11": 861,
        "Sept10": 887,
        "Sept9": 910
    },
    {
        "name": "Sept 8",
        "Total": 1020,
        "Sept16": 845,
        "Sept15": 880,
        "Sept14": 921,
        "Sept11": 965,
        "Sept10": 996,
        "Sept9": 1023
    },
    {
        "name": "Sept 9",
        "Total": 1055,
        "Sept16": 939,
        "Sept15": 981,
        "Sept14": 1029,
        "Sept11": 1081,
        "Sept10": 1118,
        "Sept9": 1150
    },
    {
        "name": "Sept 10",
        "Total": 1064,
        "Sept16": 1044,
        "Sept15": 1094,
        "Sept14": 1150,
        "Sept11": 1212,
        "Sept10": 1255,
        "Sept9": 1292
    },
    {
        "name": "Sept 11",
        "Total": 1091,
        "Sept16": 1161,
        "Sept15": 1219,
        "Sept14": 1285,
        "Sept11": 1358,
        "Sept10": 1408,
        "Sept9": 1452
    },
    {
        "name": "Sept 12",
        "nodata": 0,
        "Sept16": 1291,
        "Sept15": 1358,
        "Sept14": 1437,
        "Sept11": 1521,
        "Sept10": 1580,
        "Sept9": 1632
    },
    {
        "name": "Sept 13",
        "nodata": 0,
        "Sept16": 1435,
        "Sept15": 1514,
        "Sept14": 1605,
        "Sept11": 1705,
        "Sept10": 1774,
        "Sept9": 1834
    },
    {
        "name": "Sept 14",
        "Total": 1280,
        "Sept16": 1596,
        "Sept15": 1688,
        "Sept14": 1794,
        "Sept11": 1910,
        "Sept10": 1991,
        "Sept9": 2061
    },
    {
        "name": "Sept 15",
        "Total": 1293,
        "Sept16": 1774,
        "Sept15": 1881,
        "Sept14": 2005,
        "Sept11": 2140,
        "Sept10": 2234,
        "Sept9": 2317
    },
    {
        "name": "Sept 16",
        "Total": 1343,
        "Sept16": 1973,
        "Sept15": 2096,
        "Sept14": 2241,
        "Sept11": 2398,
        "Sept10": 2508,
        "Sept9": 2604
    },
    {
        "name": "Sept 17",
        "nodata": 0,
        "Sept16": 2193,
        "Sept15": 2337,
        "Sept14": 2504,
        "Sept11": 2687,
        "Sept10": 2814,
        "Sept9": 2926
    },
    {
        "name": "Sept 18",
        "nodata": 0,
        "Sept16": 2439,
        "Sept15": 2604,
        "Sept14": 2798,
        "Sept11": 3011,
        "Sept10": 3159,
        "Sept9": 3289
    },
    {
        "name": "Sept 19",
        "nodata": 0,
        "Sept16": 2711,
        "Sept15": 2903,
        "Sept14": 3127,
        "Sept11": 3374,
        "Sept10": 3545,
        "Sept9": 3696
    },
    {
        "name": "Sept 20",
        "nodata": 0,
        "Sept16": 3015,
        "Sept15": 3235,
        "Sept14": 3494,
        "Sept11": 3780,
        "Sept10": 3979,
        "Sept9": 4154
    },
    {
        "name": "Sept 21",
        "nodata": 0,
        "Sept16": 3352,
        "Sept15": 3606,
        "Sept14": 3905,
        "Sept11": 4236,
        "Sept10": 4466,
        "Sept9": 4669
    },
    {
        "name": "Sept 22",
        "nodata": 0,
        "Sept16": 3726,
        "Sept15": 4019,
        "Sept14": 4364,
        "Sept11": 4746,
        "Sept10": 5012,
        "Sept9": 5247
    },
    {
        "name": "Sept 23",
        "nodata": 0,
        "Sept16": 4143,
        "Sept15": 4479,
        "Sept14": 4877,
        "Sept11": 5318,
        "Sept10": 5626,
        "Sept9": 5897
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

const RedRadio = withStyles({
    root: {
        color: grey[700],
        '&$checked': {
            color: red[700],
        },
        '&$checked + $track': {
            backgroundColor: red[700],
        },
    },
    checked: {},
    track: {},
})(Radio);

class Totalclass extends Component {
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

    // constructor() {
    //     super();
    //     this.state = {
    //       name: "React"
    //     };
    //     this.onChangeValue = this.onChangeValue.bind(this);
    //   }

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
                <h3 style={{ marginBottom: 0 }}>Total Reported Cases</h3>
                <a><i><font size="2">Last updated Wednesday, September 16 at 11:45pm. </font></i></a>
                <center>
                    <div>
                        <BrowserView>

                            <div>
                                <Grid container>
                                    <Grid item xs>
                                        <Grid item>
                                            <h5 style={{ marginBottom: 5, marginTop: 5 }}>Percent That Has Had COVID</h5>
                                            <a><i><font size="2">1,343 positive reports from 46,000 students and employees.*</font></i></a>
                                            <Totalpie />
                                        </Grid>
                                        <Grid>
                                            <a><font size="3">One week before Sept 16:<b> 2.29%</b></font></a>
                                            <br />
                                            <a><font size="3">Two weeks before Sept 16:<b> 1.36%</b></font></a>

                                        </Grid>
                                        <Grid>
                                        <p className="popinfo"><i><font size="2">*The total population includes those who are 100% remote and is an estimate, as Dr. Schovanec stated Sept 16 that there are "over 46,000" students and employees.</font></i></p>

                                        </Grid>


                                    </Grid>
                                    <Grid item xs={8}>
                                        <h5 style={{ marginBottom: 5, marginTop: 5 }}>Cases by Day Since August 1</h5>
                                        <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                                        {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TwoWeeks: this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projection - 2 Weeks" /> */}
                                        <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                                        <ResponsiveContainer width={'100%'} height={"100%"} aspect='2.4'>

                                            {this.state.OneWeek ? (
                                                <ComposedChart data={oneweek} margin={{ top: 0, right: 40, bottom: 0, left: 0 }}>
                                                    <CartesianGrid />
                                                    <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                                    {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                                    <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="12" /></Bar>
                                                    {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept16" dot={false} stroke="#666666" />) : ("")}
                                                    {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept9" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                                    <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                                </ComposedChart>
                                            )

                                                : (
                                                    <ComposedChart data={zeroweeks} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                                        <CartesianGrid />
                                                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                                        <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="12" /></Bar>
                                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept16" dot={false} stroke="#666666" />) : ("")}
                                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept9" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                                    </ComposedChart>
                                                )}
                                        </ResponsiveContainer>
                                    </Grid>
                                </Grid>
                            </div>
                        </BrowserView>

                        <MobileView>
                            <br />
                            <h5 style={{ marginBottom: 5, marginTop: 5 }}>Percent That Has Had COVID</h5>
                            <a><i><font size="2">1,343 positive reports from 46,000 students and employees.*</font></i></a>
                            <Totalpiemobile />
                            <a><font size="3">One week before Sept 16:<b> 2.29%</b></font></a>
                            <br />
                            <a><font size="3">Two weeks before Sept 16:<b> 1.36%</b></font></a>
                            <p className="popinfo"><i><font size="2">*The total population includes those who are 100% remote and is an estimate, as Dr. Schovanec stated Sept 16 that there are "over 46,000" students and employees.</font></i></p>

                            <br />
                            <h5 style={{ marginBottom: 5, marginTop: 5 }}>Cases by Day Since August 1</h5>
                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel con   trol={<RedSwitch onChange={() => this.setState({ TwoWeeks: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projection - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width={'99%'} height={"99%"} aspect='1'>

                                {this.state.OneWeek ? (

                                    <ComposedChart data={oneweek} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                        <CartesianGrid />
                                        <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                        <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="7" /></Bar>
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept16" dot={false} stroke="#666666" />) : ("")}
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept9" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                ) : (
                                        <ComposedChart data={zeroweeks} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                            <CartesianGrid />
                                            <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                            <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="7" /></Bar>
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

export default Totalclass;