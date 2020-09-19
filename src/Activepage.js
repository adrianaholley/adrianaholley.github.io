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
        "Sept18": 26,
        "Sept17": 23,
        "Sept16": 20,
        "Sept15": 16,
        "Sept14": 14,
        "Sept11": 13
    },
    {
        "name": "Aug 4",
        "nodata": 0,
        "Sept18": 28,
        "Sept17": 25,
        "Sept16": 21,
        "Sept15": 18,
        "Sept14": 16,
        "Sept11": 14
    },
    {
        "name": "Aug 5",
        "nodata": 0,
        "Sept18": 30,
        "Sept17": 27,
        "Sept16": 23,
        "Sept15": 19,
        "Sept14": 17,
        "Sept11": 16
    },
    {
        "name": "Aug 6",
        "nodata": 0,
        "Sept18": 32,
        "Sept17": 29,
        "Sept16": 25,
        "Sept15": 21,
        "Sept14": 19,
        "Sept11": 17
    },
    {
        "name": "Aug 7",
        "nodata": 0,
        "Sept18": 35,
        "Sept17": 31,
        "Sept16": 27,
        "Sept15": 23,
        "Sept14": 21,
        "Sept11": 19
    },
    {
        "name": "Aug 8",
        "nodata": 0,
        "Sept18": 37,
        "Sept17": 33,
        "Sept16": 30,
        "Sept15": 26,
        "Sept14": 23,
        "Sept11": 21
    },
    {
        "name": "Aug 9",
        "nodata": 0,
        "Sept18": 40,
        "Sept17": 36,
        "Sept16": 32,
        "Sept15": 28,
        "Sept14": 26,
        "Sept11": 24
    },
    {
        "name": "Aug 10",
        "Active": 25,
        "Sept18": 43,
        "Sept17": 39,
        "Sept16": 35,
        "Sept15": 31,
        "Sept14": 28,
        "Sept11": 27
    },
    {
        "name": "Aug 11",
        "nodata": 0,
        "Sept18": 46,
        "Sept17": 42,
        "Sept16": 38,
        "Sept15": 34,
        "Sept14": 31,
        "Sept11": 30
    },
    {
        "name": "Aug 12",
        "nodata": 0,
        "Sept18": 49,
        "Sept17": 45,
        "Sept16": 41,
        "Sept15": 37,
        "Sept14": 35,
        "Sept11": 33
    },
    {
        "name": "Aug 13",
        "nodata": 0,
        "Sept18": 53,
        "Sept17": 49,
        "Sept16": 45,
        "Sept15": 41,
        "Sept14": 38,
        "Sept11": 36
    },
    {
        "name": "Aug 14",
        "nodata": 0,
        "Sept18": 56,
        "Sept17": 53,
        "Sept16": 49,
        "Sept15": 45,
        "Sept14": 42,
        "Sept11": 41
    },
    {
        "name": "Aug 15",
        "nodata": 0,
        "Sept18": 60,
        "Sept17": 57,
        "Sept16": 53,
        "Sept15": 49,
        "Sept14": 47,
        "Sept11": 45
    },
    {
        "name": "Aug 16",
        "nodata": 0,
        "Sept18": 65,
        "Sept17": 61,
        "Sept16": 58,
        "Sept15": 54,
        "Sept14": 52,
        "Sept11": 50
    },
    {
        "name": "Aug 17",
        "Active": 38,
        "Sept18": 69,
        "Sept17": 66,
        "Sept16": 63,
        "Sept15": 59,
        "Sept14": 57,
        "Sept11": 56
    },
    {
        "name": "Aug 18",
        "nodata": 0,
        "Sept18": 74,
        "Sept17": 71,
        "Sept16": 68,
        "Sept15": 65,
        "Sept14": 63,
        "Sept11": 62
    },
    {
        "name": "Aug 19",
        "nodata": 0,
        "Sept18": 79,
        "Sept17": 77,
        "Sept16": 74,
        "Sept15": 71,
        "Sept14": 70,
        "Sept11": 69
    },
    {
        "name": "Aug 20",
        "nodata": 0,
        "Sept18": 85,
        "Sept17": 83,
        "Sept16": 81,
        "Sept15": 78,
        "Sept14": 77,
        "Sept11": 76
    },
    {
        "name": "Aug 21",
        "Active": 53,
        "Sept18": 91,
        "Sept17": 89,
        "Sept16": 88,
        "Sept15": 86,
        "Sept14": 85,
        "Sept11": 85
    },
    {
        "name": "Aug 22",
        "nodata": 0,
        "Sept18": 98,
        "Sept17": 96,
        "Sept16": 95,
        "Sept15": 95,
        "Sept14": 94,
        "Sept11": 94
    },
    {
        "name": "Aug 23",
        "nodata": 0,
        "Sept18": 105,
        "Sept17": 104,
        "Sept16": 104,
        "Sept15": 104,
        "Sept14": 104,
        "Sept11": 105
    },
    {
        "name": "Aug 24",
        "nodata": 0,
        "Sept18": 112,
        "Sept17": 112,
        "Sept16": 113,
        "Sept15": 114,
        "Sept14": 115,
        "Sept11": 117
    },
    {
        "name": "Aug 25",
        "Active": 87,
        "Sept18": 120,
        "Sept17": 121,
        "Sept16": 123,
        "Sept15": 125,
        "Sept14": 127,
        "Sept11": 130
    },
    {
        "name": "Aug 26",
        "Active": 146,
        "Sept18": 129,
        "Sept17": 130,
        "Sept16": 133,
        "Sept15": 137,
        "Sept14": 141,
        "Sept11": 144
    },
    {
        "name": "Aug 27",
        "nodata": 0,
        "Sept18": 138,
        "Sept17": 141,
        "Sept16": 145,
        "Sept15": 151,
        "Sept14": 156,
        "Sept11": 160
    },
    {
        "name": "Aug 28",
        "Active": 176,
        "Sept18": 148,
        "Sept17": 152,
        "Sept16": 157,
        "Sept15": 166,
        "Sept14": 172,
        "Sept11": 178
    },
    {
        "name": "Aug 29",
        "nodata": 0,
        "Sept18": 158,
        "Sept17": 164,
        "Sept16": 171,
        "Sept15": 182,
        "Sept14": 190,
        "Sept11": 198
    },
    {
        "name": "Aug 30",
        "nodata": 0,
        "Sept18": 169,
        "Sept17": 177,
        "Sept16": 186,
        "Sept15": 200,
        "Sept14": 210,
        "Sept11": 220
    },
    {
        "name": "Aug 31",
        "Active": 268,
        "Sept18": 182,
        "Sept17": 190,
        "Sept16": 202,
        "Sept15": 219,
        "Sept14": 232,
        "Sept11": 245
    },
    {
        "name": "Sept 1",
        "Active": 418,
        "Sept18": 194,
        "Sept17": 205,
        "Sept16": 220,
        "Sept15": 241,
        "Sept14": 257,
        "Sept11": 272
    },
    {
        "name": "Sept 2",
        "Active": 453,
        "Sept18": 208,
        "Sept17": 222,
        "Sept16": 239,
        "Sept15": 264,
        "Sept14": 284,
        "Sept11": 303
    },
    {
        "name": "Sept 3",
        "Active": 477,
        "Sept18": 223,
        "Sept17": 239,
        "Sept16": 260,
        "Sept15": 290,
        "Sept14": 314,
        "Sept11": 336
    },
    {
        "name": "Sept 4",
        "Active": 490,
        "Sept18": 239,
        "Sept17": 258,
        "Sept16": 283,
        "Sept15": 319,
        "Sept14": 347,
        "Sept11": 374
    },
    {
        "name": "Sept 5",
        "nodata": 0,
        "Sept18": 256,
        "Sept17": 278,
        "Sept16": 307,
        "Sept15": 350,
        "Sept14": 383,
        "Sept11": 416
    },
    {
        "name": "Sept 6",
        "nodata": 0,
        "Sept18": 274,
        "Sept17": 300,
        "Sept16": 334,
        "Sept15": 384,
        "Sept14": 423,
        "Sept11": 462
    },
    {
        "name": "Sept 7",
        "Active": 626,
        "Sept18": 294,
        "Sept17": 323,
        "Sept16": 363,
        "Sept15": 422,
        "Sept14": 468,
        "Sept11": 513
    },
    {
        "name": "Sept 8",
        "Active": 650,
        "Sept18": 315,
        "Sept17": 349,
        "Sept16": 395,
        "Sept15": 463,
        "Sept14": 517,
        "Sept11": 571
    },
    {
        "name": "Sept 9",
        "Active": 612,
        "Sept18": 337,
        "Sept17": 376,
        "Sept16": 429,
        "Sept15": 508,
        "Sept14": 571,
        "Sept11": 634
    },
    {
        "name": "Sept 10",
        "Active": 543,
        "Sept18": 361,
        "Sept17": 406,
        "Sept16": 466,
        "Sept15": 558,
        "Sept14": 632,
        "Sept11": 705
    },
    {
        "name": "Sept 11",
        "Active": 426,
        "Sept18": 387,
        "Sept17": 438,
        "Sept16": 507,
        "Sept15": 613,
        "Sept14": 698,
        "Sept11": 784
    },
    {
        "name": "Sept 12",
        "nodata": 0,
        "Sept18": 415,
        "Sept17": 472,
        "Sept16": 551,
        "Sept15": 673,
        "Sept14": 772,
        "Sept11": 872
    },
    {
        "name": "Sept 13",
        "nodata": 0,
        "Sept18": 444,
        "Sept17": 509,
        "Sept16": 599,
        "Sept15": 739,
        "Sept14": 853,
        "Sept11": 969
    },
    {
        "name": "Sept 14",
        "Active": 461,
        "Sept18": 476,
        "Sept17": 549,
        "Sept16": 651,
        "Sept15": 811,
        "Sept14": 942,
        "Sept11": 1077
    },
    {
        "name": "Sept 15",
        "Active": 357,
        "Sept18": 510,
        "Sept17": 592,
        "Sept16": 708,
        "Sept15": 891,
        "Sept14": 1042,
        "Sept11": 1197
    },
    {
        "name": "Sept 16",
        "Active": 171,
        "Sept18": 546,
        "Sept17": 639,
        "Sept16": 770,
        "Sept15": 978,
        "Sept14": 1151,
        "Sept11": 1331
    },
    {
        "name": "Sept 17",
        "Active": 186,
        "Sept18": 585,
        "Sept17": 689,
        "Sept16": 837,
        "Sept15": 1074,
        "Sept14": 1272,
        "Sept11": 1479
    },
    {
        "name": "Sept 18",
        "Active": 187,
        "Sept18": 627,
        "Sept17": 743,
        "Sept16": 910,
        "Sept15": 1179,
        "Sept14": 1406,
        "Sept11": 1644
    }
]

const oneweek = [
    {
        "name": "Aug 3",
        "Active": 18,
        "Sept18": 26,
        "Sept17": 23,
        "Sept16": 20,
        "Sept15": 16,
        "Sept14": 14,
        "Sept11": 13
    },
    {
        "name": "Aug 4",
        "nodata": 0,
        "Sept18": 28,
        "Sept17": 25,
        "Sept16": 21,
        "Sept15": 18,
        "Sept14": 16,
        "Sept11": 14
    },
    {
        "name": "Aug 5",
        "nodata": 0,
        "Sept18": 30,
        "Sept17": 27,
        "Sept16": 23,
        "Sept15": 19,
        "Sept14": 17,
        "Sept11": 16
    },
    {
        "name": "Aug 6",
        "nodata": 0,
        "Sept18": 32,
        "Sept17": 29,
        "Sept16": 25,
        "Sept15": 21,
        "Sept14": 19,
        "Sept11": 17
    },
    {
        "name": "Aug 7",
        "nodata": 0,
        "Sept18": 35,
        "Sept17": 31,
        "Sept16": 27,
        "Sept15": 23,
        "Sept14": 21,
        "Sept11": 19
    },
    {
        "name": "Aug 8",
        "nodata": 0,
        "Sept18": 37,
        "Sept17": 33,
        "Sept16": 30,
        "Sept15": 26,
        "Sept14": 23,
        "Sept11": 21
    },
    {
        "name": "Aug 9",
        "nodata": 0,
        "Sept18": 40,
        "Sept17": 36,
        "Sept16": 32,
        "Sept15": 28,
        "Sept14": 26,
        "Sept11": 24
    },
    {
        "name": "Aug 10",
        "Active": 25,
        "Sept18": 43,
        "Sept17": 39,
        "Sept16": 35,
        "Sept15": 31,
        "Sept14": 28,
        "Sept11": 27
    },
    {
        "name": "Aug 11",
        "nodata": 0,
        "Sept18": 46,
        "Sept17": 42,
        "Sept16": 38,
        "Sept15": 34,
        "Sept14": 31,
        "Sept11": 30
    },
    {
        "name": "Aug 12",
        "nodata": 0,
        "Sept18": 49,
        "Sept17": 45,
        "Sept16": 41,
        "Sept15": 37,
        "Sept14": 35,
        "Sept11": 33
    },
    {
        "name": "Aug 13",
        "nodata": 0,
        "Sept18": 53,
        "Sept17": 49,
        "Sept16": 45,
        "Sept15": 41,
        "Sept14": 38,
        "Sept11": 36
    },
    {
        "name": "Aug 14",
        "nodata": 0,
        "Sept18": 56,
        "Sept17": 53,
        "Sept16": 49,
        "Sept15": 45,
        "Sept14": 42,
        "Sept11": 41
    },
    {
        "name": "Aug 15",
        "nodata": 0,
        "Sept18": 60,
        "Sept17": 57,
        "Sept16": 53,
        "Sept15": 49,
        "Sept14": 47,
        "Sept11": 45
    },
    {
        "name": "Aug 16",
        "nodata": 0,
        "Sept18": 65,
        "Sept17": 61,
        "Sept16": 58,
        "Sept15": 54,
        "Sept14": 52,
        "Sept11": 50
    },
    {
        "name": "Aug 17",
        "Active": 38,
        "Sept18": 69,
        "Sept17": 66,
        "Sept16": 63,
        "Sept15": 59,
        "Sept14": 57,
        "Sept11": 56
    },
    {
        "name": "Aug 18",
        "nodata": 0,
        "Sept18": 74,
        "Sept17": 71,
        "Sept16": 68,
        "Sept15": 65,
        "Sept14": 63,
        "Sept11": 62
    },
    {
        "name": "Aug 19",
        "nodata": 0,
        "Sept18": 79,
        "Sept17": 77,
        "Sept16": 74,
        "Sept15": 71,
        "Sept14": 70,
        "Sept11": 69
    },
    {
        "name": "Aug 20",
        "nodata": 0,
        "Sept18": 85,
        "Sept17": 83,
        "Sept16": 81,
        "Sept15": 78,
        "Sept14": 77,
        "Sept11": 76
    },
    {
        "name": "Aug 21",
        "Active": 53,
        "Sept18": 91,
        "Sept17": 89,
        "Sept16": 88,
        "Sept15": 86,
        "Sept14": 85,
        "Sept11": 85
    },
    {
        "name": "Aug 22",
        "nodata": 0,
        "Sept18": 98,
        "Sept17": 96,
        "Sept16": 95,
        "Sept15": 95,
        "Sept14": 94,
        "Sept11": 94
    },
    {
        "name": "Aug 23",
        "nodata": 0,
        "Sept18": 105,
        "Sept17": 104,
        "Sept16": 104,
        "Sept15": 104,
        "Sept14": 104,
        "Sept11": 105
    },
    {
        "name": "Aug 24",
        "nodata": 0,
        "Sept18": 112,
        "Sept17": 112,
        "Sept16": 113,
        "Sept15": 114,
        "Sept14": 115,
        "Sept11": 117
    },
    {
        "name": "Aug 25",
        "Active": 87,
        "Sept18": 120,
        "Sept17": 121,
        "Sept16": 123,
        "Sept15": 125,
        "Sept14": 127,
        "Sept11": 130
    },
    {
        "name": "Aug 26",
        "Active": 146,
        "Sept18": 129,
        "Sept17": 130,
        "Sept16": 133,
        "Sept15": 137,
        "Sept14": 141,
        "Sept11": 144
    },
    {
        "name": "Aug 27",
        "nodata": 0,
        "Sept18": 138,
        "Sept17": 141,
        "Sept16": 145,
        "Sept15": 151,
        "Sept14": 156,
        "Sept11": 160
    },
    {
        "name": "Aug 28",
        "Active": 176,
        "Sept18": 148,
        "Sept17": 152,
        "Sept16": 157,
        "Sept15": 166,
        "Sept14": 172,
        "Sept11": 178
    },
    {
        "name": "Aug 29",
        "nodata": 0,
        "Sept18": 158,
        "Sept17": 164,
        "Sept16": 171,
        "Sept15": 182,
        "Sept14": 190,
        "Sept11": 198
    },
    {
        "name": "Aug 30",
        "nodata": 0,
        "Sept18": 169,
        "Sept17": 177,
        "Sept16": 186,
        "Sept15": 200,
        "Sept14": 210,
        "Sept11": 220
    },
    {
        "name": "Aug 31",
        "Active": 268,
        "Sept18": 182,
        "Sept17": 190,
        "Sept16": 202,
        "Sept15": 219,
        "Sept14": 232,
        "Sept11": 245
    },
    {
        "name": "Sept 1",
        "Active": 418,
        "Sept18": 194,
        "Sept17": 205,
        "Sept16": 220,
        "Sept15": 241,
        "Sept14": 257,
        "Sept11": 272
    },
    {
        "name": "Sept 2",
        "Active": 453,
        "Sept18": 208,
        "Sept17": 222,
        "Sept16": 239,
        "Sept15": 264,
        "Sept14": 284,
        "Sept11": 303
    },
    {
        "name": "Sept 3",
        "Active": 477,
        "Sept18": 223,
        "Sept17": 239,
        "Sept16": 260,
        "Sept15": 290,
        "Sept14": 314,
        "Sept11": 336
    },
    {
        "name": "Sept 4",
        "Active": 490,
        "Sept18": 239,
        "Sept17": 258,
        "Sept16": 283,
        "Sept15": 319,
        "Sept14": 347,
        "Sept11": 374
    },
    {
        "name": "Sept 5",
        "nodata": 0,
        "Sept18": 256,
        "Sept17": 278,
        "Sept16": 307,
        "Sept15": 350,
        "Sept14": 383,
        "Sept11": 416
    },
    {
        "name": "Sept 6",
        "nodata": 0,
        "Sept18": 274,
        "Sept17": 300,
        "Sept16": 334,
        "Sept15": 384,
        "Sept14": 423,
        "Sept11": 462
    },
    {
        "name": "Sept 7",
        "Active": 626,
        "Sept18": 294,
        "Sept17": 323,
        "Sept16": 363,
        "Sept15": 422,
        "Sept14": 468,
        "Sept11": 513
    },
    {
        "name": "Sept 8",
        "Active": 650,
        "Sept18": 315,
        "Sept17": 349,
        "Sept16": 395,
        "Sept15": 463,
        "Sept14": 517,
        "Sept11": 571
    },
    {
        "name": "Sept 9",
        "Active": 612,
        "Sept18": 337,
        "Sept17": 376,
        "Sept16": 429,
        "Sept15": 508,
        "Sept14": 571,
        "Sept11": 634
    },
    {
        "name": "Sept 10",
        "Active": 543,
        "Sept18": 361,
        "Sept17": 406,
        "Sept16": 466,
        "Sept15": 558,
        "Sept14": 632,
        "Sept11": 705
    },
    {
        "name": "Sept 11",
        "Active": 426,
        "Sept18": 387,
        "Sept17": 438,
        "Sept16": 507,
        "Sept15": 613,
        "Sept14": 698,
        "Sept11": 784
    },
    {
        "name": "Sept 12",
        "nodata": 0,
        "Sept18": 415,
        "Sept17": 472,
        "Sept16": 551,
        "Sept15": 673,
        "Sept14": 772,
        "Sept11": 872
    },
    {
        "name": "Sept 13",
        "nodata": 0,
        "Sept18": 444,
        "Sept17": 509,
        "Sept16": 599,
        "Sept15": 739,
        "Sept14": 853,
        "Sept11": 969
    },
    {
        "name": "Sept 14",
        "Active": 461,
        "Sept18": 476,
        "Sept17": 549,
        "Sept16": 651,
        "Sept15": 811,
        "Sept14": 942,
        "Sept11": 1077
    },
    {
        "name": "Sept 15",
        "Active": 357,
        "Sept18": 510,
        "Sept17": 592,
        "Sept16": 708,
        "Sept15": 891,
        "Sept14": 1042,
        "Sept11": 1197
    },
    {
        "name": "Sept 16",
        "Active": 171,
        "Sept18": 546,
        "Sept17": 639,
        "Sept16": 770,
        "Sept15": 978,
        "Sept14": 1151,
        "Sept11": 1331
    },
    {
        "name": "Sept 17",
        "Active": 186,
        "Sept18": 585,
        "Sept17": 689,
        "Sept16": 837,
        "Sept15": 1074,
        "Sept14": 1272,
        "Sept11": 1479
    },
    {
        "name": "Sept 18",
        "Active": 187,
        "Sept18": 627,
        "Sept17": 743,
        "Sept16": 910,
        "Sept15": 1179,
        "Sept14": 1406,
        "Sept11": 1644
    },
    {
        "name": "Sept 19",
        "nodata": 0,
        "Sept18": 672,
        "Sept17": 801,
        "Sept16": 989,
        "Sept15": 1294,
        "Sept14": 1554,
        "Sept11": 1828
    },
    {
        "name": "Sept 20",
        "nodata": 0,
        "Sept18": 719,
        "Sept17": 864,
        "Sept16": 1075,
        "Sept15": 1421,
        "Sept14": 1718,
        "Sept11": 2032
    },
    {
        "name": "Sept 21",
        "nodata": 0,
        "Sept18": 771,
        "Sept17": 932,
        "Sept16": 1169,
        "Sept15": 1560,
        "Sept14": 1898,
        "Sept11": 2258
    },
    {
        "name": "Sept 22",
        "nodata": 0,
        "Sept18": 826,
        "Sept17": 1005,
        "Sept16": 1271,
        "Sept15": 1713,
        "Sept14": 2098,
        "Sept11": 2510
    },
    {
        "name": "Sept 23",
        "nodata": 0,
        "Sept18": 885,
        "Sept17": 1084,
        "Sept16": 1382,
        "Sept15": 1881,
        "Sept14": 2319,
        "Sept11": 2790
    },
    {
        "name": "Sept 24",
        "nodata": 0,
        "Sept18": 948,
        "Sept17": 1170,
        "Sept16": 1502,
        "Sept15": 2065,
        "Sept14": 2563,
        "Sept11": 3102
    },
    {
        "name": "Sept 25",
        "nodata": 0,
        "Sept18": 1015,
        "Sept17": 1261,
        "Sept16": 1633,
        "Sept15": 2267,
        "Sept14": 2833,
        "Sept11": 3448
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
                <a><font size="2">Last updated Saturday, September 19 at 3:20am.</font></a>

                <center>
                    <div>
                        <BrowserView>
                            <Grid>
                                <a><i><font size="2">
                                    Case counts reflect the date reported on TTU's website, not first date of symptoms.
                                    They do not include those still needing to self-report, nor those waiting 0-3 days for results.
                                </font></i></a>
                            </Grid>
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ ZeroWeeks: !this.state.ZeroWeeks })} name="OneWeek" />} label="Add projections" /> */}
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
                                            {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept18" dot={false} stroke="#666666" />) : ("")} */}
                                            {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept11" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
                                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                        </ComposedChart>

                                    )}
                            </ResponsiveContainer>
                        </BrowserView>

                        <MobileView>
                            <Grid>
                                <a><i><font size="2">
                                    <div className="adjustabletextmobile">
                                        Case counts reflect the date reported on TTU's website, not first date of symptoms.
                                        They do not include those still needing to self-report, nor those waiting 0-3 days for results.
                                    </div>
                                </font></i></a>
                            </Grid>
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ ZeroWeeks: !this.state.ZeroWeeks })} name="OneWeek" />} label="Add projections" /> */}
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
                                            {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept18" dot={false} stroke="#666666" />) : ("")} */}
                                            {/* {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept11" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")} */}
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
                                        <h4>What is logarithmic scale?</h4>
                                        <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>

                                    </Grid>
                                </Grid>
                            </div>
                        </BrowserView>


                        <MobileView>
                            <div className="adjustabletextmobile">

                                <h4>What is logarithmic scale?</h4>
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