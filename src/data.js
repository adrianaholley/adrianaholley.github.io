//update daily
var globaldate = "Last updated Monday, May 23, 2022 at 8:00pm CST."
var todayinarray = 213

const data = [
	{
		"Date": "Aug 3",
		"Daily 2020-2021": 18,
		"Daily 2020-2021 avg": 2.6,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 28,
		"Total 2020-2021": 18
	},
	{
		"Date": "Aug 4",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 5",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 6",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 7",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 8",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 9",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 10",
		"Daily 2020-2021": 26,
		"Daily 2020-2021 avg": 3.7,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 25, 
		"Total 2020-2021": 44
	},
	{
		"Date": "Aug 11",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	,
	{
		"Date": "Aug 12",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 13",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 14",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 37,
		"Total 2020-2021": 63
	},
	{
		"Date": "Aug 15",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 16",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 17",
		"Daily 2020-2021": 23,
		"Daily 2020-2021 avg": 3.3,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 38,
		"Total 2020-2021": 67
	},
	{
		"Date": "Aug 18",
		"Daily 2020-2021": 8,
		"Daily 2020-2021 avg": 4.4,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": 75
	},
	{
		"Date": "Aug 19",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 20",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 21",
		"Daily 2020-2021": 28,
		"Daily 2020-2021 avg": 8.4,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 53,
		"Total 2020-2021": 103
	},
	{
		"Date": "Aug 22",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 23",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 116,
		"Daily 2021-2022 avg": 16.6,
		"Active 2020-2021": null,
		"Active 2021-2022": 116,
		"Total 2020-2021": null,
		"Total 2021-2022": 116
	},
	{
		"Date": "Aug 24",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 30,
		"Daily 2021-2022 avg": 20.9,
		"Active 2020-2021": null,
		"Active 2021-2022": 135,
		"Total 2020-2021": null,
		"Total 2021-2022": 146
	},
	{
		"Date": "Aug 25",
		"Daily 2020-2021": 26,
		"Daily 2020-2021 avg": 7.7,
		"Daily 2021-2022": 51,
		"Daily 2021-2022 avg": 28.1,
		"Active 2020-2021": 87,
		"Active 2021-2022": 185,
		"Total 2020-2021": 149,
		"Total 2021-2022": 197
	},
	{
		"Date": "Aug 26",
		"Daily 2020-2021": 57,
		"Daily 2020-2021 avg": 15.9,
		"Daily 2021-2022": 59,
		"Daily 2021-2022 avg": 36.6,
		"Active 2020-2021": 146,
		"Active 2021-2022": 230,
		"Total 2020-2021": 206,
		"Total 2021-2022": 256
	},
	{
		"Date": "Aug 27",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 47,
		"Daily 2021-2022 avg": 43.3,
		"Active 2020-2021": null,
		"Active 2021-2022": 257,
		"Total 2020-2021": null,
		"Total 2021-2022": 303
	},
	{
		"Date": "Aug 28",
		"Daily 2020-2021": 54,
		"Daily 2020-2021 avg": 19.6,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 176,
		"Total 2020-2021": 260
	},
	{
		"Date": "Aug 29",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Aug 30",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 129,
		"Daily 2021-2022 avg": 45.1,
		"Active 2020-2021": null,
		"Active 2021-2022": 321,
		"Total 2020-2021": null,
		"Total 2021-2022": 432
	},
	{
		"Date": "Aug 31",
		"Daily 2020-2021": 118,
		"Daily 2020-2021 avg": 36.4,
		"Daily 2021-2022": 67,
		"Daily 2021-2022 avg": 50.4,
		"Active 2020-2021": 268,
		"Active 2021-2022": 357,
		"Total 2020-2021": 378,
		"Total 2021-2022": 499,
		"Total Recoveries 2021-2022": 142
	},
	{
		"Date": "Sept 1",
		"Daily 2020-2021": 137,
		"Daily 2020-2021 avg": 52.3,
		"Daily 2021-2022": 45,
		"Daily 2021-2022 avg": 49.6,
		"Active 2020-2021": 418,
		"Active 2021-2022": 372,
		"Total 2020-2021": 551,
		"Total 2021-2022": 544,
		"Total Recoveries 2021-2022": 172
	},
	{
		"Date": "Sept 2",
		"Daily 2020-2021": 73,
		"Daily 2020-2021 avg": 54.6,
		"Daily 2021-2022": 71,
		"Daily 2021-2022 avg": 51.3,
		"Active 2020-2021": 453,
		"Active 2021-2022": 389,
		"Total 2020-2021": 624,
		"Total 2021-2022": 615,
		"Total Recoveries 2021-2022": 226
	},
	{
		"Date": "Sept 3",
		"Daily 2020-2021": 47,
		"Daily 2020-2021 avg": 61.3,
		"Daily 2021-2022": 35,
		"Daily 2021-2022 avg": 49.6,
		"Active 2020-2021": 477,
		"Active 2021-2022": 370,
		"Total 2020-2021": 671,
		"Total 2021-2022": 650,
		"Total Recoveries 2021-2022": 280
	},
	{
		"Date": "Sept 4",
		"Daily 2020-2021": 64,
		"Daily 2020-2021 avg": 62.7,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 490,
		"Total 2020-2021": 717
	},
	{
		"Date": "Sept 5",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Sept 6",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Sept 7",
		"Daily 2020-2021": 228,
		"Daily 2020-2021 avg": 78.4,
		"Daily 2021-2022": 125,
		"Daily 2021-2022 avg": 39.4,
		"Active 2020-2021": 626,
		"Active 2021-2022": 354,
		"Total 2020-2021": 945,
		"Total 2021-2022": 775,
		"Total Recoveries 2021-2022": 421
	},
	{
		"Date": "Sept 8",
		"Daily 2020-2021": 75,
		"Daily 2020-2021 avg": 69.6,
		"Daily 2021-2022": 40,
		"Daily 2021-2022 avg": 38.7,
		"Active 2020-2021": 650,
		"Active 2021-2022": 364,
		"Total 2020-2021": 1020,
		"Total 2021-2022": 815,
		"Total Recoveries 2021-2022": 451
	},
	{
		"Date": "Sept 9",
		"Daily 2020-2021": 35,
		"Daily 2020-2021 avg": 64.1,
		"Daily 2021-2022": 77,
		"Daily 2021-2022 avg": 39.6,
		"Active 2020-2021": 612,
		"Active 2021-2022": 305,
		"Total 2020-2021": 1055,
		"Total 2021-2022": 892,
		"Total Recoveries 2021-2022": 587
	},
	{
		"Date": "Sept 10",
		"Daily 2020-2021": 9,
		"Daily 2020-2021 avg": 58.7,
		"Daily 2021-2022": 38,
		"Daily 2021-2022 avg": 40.0,
		"Active 2020-2021": 543,
		"Active 2021-2022": 314,
		"Total 2020-2021": 1064,
		"Total 2021-2022": 930,
		"Total Recoveries 2021-2022": 616
	},
	{
		"Date": "Sept 11",
		"Daily 2020-2021": 27,
		"Daily 2020-2021 avg": 53.4,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 426,
		"Total 2020-2021": 1091
	},
	{
		"Date": "Sept 12",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Sept 13",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 64,
		"Daily 2021-2022 avg": 49.1,
		"Active 2020-2021": null,
		"Active 2021-2022": 299,
		"Total 2020-2021": null,
		"Total 2021-2022": 994,
		"Total Recoveries 2021-2022": 695
	},
	{
		"Date": "Sept 14",
		"Daily 2020-2021": 189,
		"Daily 2020-2021 avg": 47.9,
		"Daily 2021-2022": 25,
		"Daily 2021-2022 avg": 34.9,
		"Active 2020-2021": 461,
		"Active 2021-2022": 285,
		"Total 2020-2021": 1280,
		"Total 2021-2022": 1019,
		"Total Recoveries 2021-2022": 734
	},
	{
		"Date": "Sept 15",
		"Daily 2020-2021": 74,
		"Daily 2020-2021 avg": 28.7,
		"Daily 2021-2022": 18,
		"Daily 2021-2022 avg": 31.7,
		"Active 2020-2021": 357,
		"Active 2021-2022": 245,
		"Total 2020-2021": 1293,
		"Total 2021-2022": 1037,
		"Total Recoveries 2021-2022": 792
	},	
	{
		"Date": "Sept 16",
		"Daily 2020-2021": 50,
		"Daily 2020-2021 avg": 41.1,
		"Daily 2021-2022": 29,
		"Daily 2021-2022 avg": 24.9,
		"Active 2020-2021": 171,
		"Active 2021-2022": 232,
		"Total 2020-2021": 1343,
		"Total 2021-2022": 1066,
		"Total Recoveries 2021-2022": 834
	},
	{
		"Date": "Sept 17",
		"Daily 2020-2021": 32,
		"Daily 2020-2021 avg": 44.4,
		"Daily 2021-2022": 24,
		"Daily 2021-2022 avg": 22.9,
		"Active 2020-2021": 186,
		"Active 2021-2022": 217,
		"Total 2020-2021": 1375,
		"Total 2021-2022": 1090,
		"Total Recoveries 2021-2022": 873
	},
	{
		"Date": "Sept 18",
		"Daily 2020-2021": 32,
		"Daily 2020-2021 avg": 45.1,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 187,
		"Total 2020-2021": 1407
	},
	{
		"Date": "Sept 19",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Sept 20",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 13,
		"Daily 2021-2022 avg": 15.6,
		"Active 2020-2021": null,
		"Active 2021-2022": 144,
		"Total 2020-2021": null,
		"Total 2021-2022": 1103,
		"Total Recoveries 2021-2022": 959

	},
	{
		"Date": "Sept 21",
		"Daily 2020-2021": 74,
		"Daily 2020-2021 avg": 28.7,
		"Daily 2021-2022": 13,
		"Daily 2021-2022 avg": 13.9,
		"Active 2020-2021": 222,
		"Active 2021-2022": 138,
		"Total 2020-2021": 1481,
		"Total 2021-2022": 1116,
		"Total Recoveries 2021-2022": 978
	},
	{
		"Date": "Sept 22",
		"Daily 2020-2021": 9,
		"Daily 2020-2021 avg": 28.1,
		"Daily 2021-2022": 11,
		"Daily 2021-2022 avg": 12.9,
		"Active 2020-2021": 220,
		"Active 2021-2022": 125,
		"Total 2020-2021": 1490,
		"Total 2021-2022": 1127,
		"Total Recoveries 2021-2022": 1002
	},
	{
		"Date": "Sept 23",
		"Daily 2020-2021": 40,
		"Daily 2020-2021 avg": 26.7,
		"Daily 2021-2022": 10,
		"Daily 2021-2022 avg": 10.1,
		"Active 2020-2021": 244,
		"Active 2021-2022": 115,
		"Total 2020-2021": 1530,
		"Total 2021-2022": 1137,
		"Total Recoveries 2021-2022": 1022
	},
	{
		"Date": "Sept 24",
		"Daily 2020-2021": 23,
		"Daily 2020-2021 avg": 25.4,
		"Daily 2021-2022": 9,
		"Daily 2021-2022 avg": 8.0,
		"Active 2020-2021": 237,
		"Active 2021-2022": 100,
		"Total 2020-2021": 1553,
		"Total 2021-2022": 1146,
		"Total Recoveries 2021-2022": 1046
	},
	{
		"Date": "Sept 25",
		"Daily 2020-2021": 32,
		"Daily 2020-2021 avg": 25.4,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 247,
		"Total 2020-2021": 1585
	},
	{
		"Date": "Sept 26",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Sept 27",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 13,
		"Daily 2021-2022 avg": 8.0,
		"Active 2020-2021": null,
		"Active 2021-2022": 63,
		"Total 2020-2021": null,
		"Total 2021-2022": 1159,
		"Total Recoveries 2021-2022": 1096
	},
	{
		"Date": "Sept 28",
		"Daily 2020-2021": 58,
		"Daily 2020-2021 avg": 23.1,
		"Daily 2021-2022": 10,
		"Daily 2021-2022 avg": 7.6,
		"Active 2020-2021": 260,
		"Active 2021-2022": 63,
		"Total 2020-2021": 1643,
		"Total 2021-2022": 1169,
		"Total Recoveries 2021-2022": 1102
	},
	{
		"Date": "Sept 29",
		"Daily 2020-2021": 4,
		"Daily 2020-2021 avg": 22.4,
		"Daily 2021-2022": 11,
		"Daily 2021-2022 avg": 5.9,
		"Active 2020-2021": 232,
		"Active 2021-2022": 62,
		"Total 2020-2021": 1647,
		"Total 2021-2022": 1180,
		"Total Recoveries 2021-2022": 1118
	},
	{
		"Date": "Sept 30",
		"Daily 2020-2021": 42,
		"Daily 2020-2021 avg": 22.7,
		"Daily 2021-2022": 6,
		"Daily 2021-2022 avg": 5.3,
		"Active 2020-2021": 222,
		"Active 2021-2022": 55,
		"Total 2020-2021": 1689,
		"Total 2021-2022": 1186,
		"Total Recoveries 2021-2022": 1131
	},
	{
		"Date": "Oct 1",
		"Daily 2020-2021": 22,
		"Daily 2020-2021 avg": 22.6,
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 4.4,
		"Active 2020-2021": 210,
		"Active 2021-2022": 48,
		"Total 2020-2021": 1711,
		"Total 2021-2022": 1189,
		"Total Recoveries 2021-2022": 1141
	},
	{
		"Date": "Oct 2",
		"Daily 2020-2021": 27,
		"Daily 2020-2021 avg": 21.9,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 203,
		"Total 2020-2021": 1738
	},
	{
		"Date": "Oct 3",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Total 2020-2021": null
	},
	{
		"Date": "Oct 4",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 4.9,
		"Active 2020-2021": null,
		"Active 2021-2022": 39,
		"Total 2020-2021": null,
		"Total 2021-2022": 1193,
		"Total Recoveries 2021-2022": 1154
	},
	{
		"Date": "Oct 5",
		"Daily 2020-2021": 28,
		"Daily 2020-2021 avg": 17.6,
		"Daily 2021-2022": 8,
		"Daily 2021-2022 avg": 3.1,
		"Active 2020-2021": 202,
		"Active 2021-2022": 38,
		"Total 2020-2021": 1766,
		"Total 2021-2022": 1201,
		"Total Recoveries 2021-2022": 1163
	},
	{
		"Date": "Oct 6",
		"Daily 2020-2021": 2,
		"Daily 2020-2021 avg": 17.3,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 3.3,
		"Active 2020-2021": 196,
		"Active 2021-2022": 35,
		"Total 2020-2021": 1768,
		"Total 2021-2022": 1203,
		"Total Recoveries 2021-2022": 1168
	},
	{
		"Date": "Oct 7",
		"Daily 2020-2021": 15,
		"Daily 2020-2021 avg": 13.4,
		"Daily 2021-2022": 6,
		"Daily 2021-2022 avg": 3.3,
		"Active 2020-2021": 152,
		"Active 2021-2022": 33,
		"Total 2020-2021": 1783,
		"Total 2021-2022": 1209,
		"Total Recoveries 2021-2022": 1176
	},
	{
		"Date": "Oct 8",
		"Daily 2020-2021": 16,
		"Daily 2020-2021 avg": 12.6,
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 3.6,
		"Active 2020-2021": 156,
		"Active 2021-2022": 26,
		"Total 2020-2021": 1799,
		"Total 2021-2022": 1214,
		"Total Recoveries 2021-2022": 1188
	},
	{
		"Date": "Oct 9",
		"Daily 2020-2021": 22,
		"Daily 2020-2021 avg": 11.9,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 134,
		"Active 2021-2022": null,
		"Total 2020-2021": 1821,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Oct 10",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Active 2021-2022": null,
		"Total 2020-2021": null,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Oct 11",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 3.4,
		"Active 2020-2021": null,
		"Active 2021-2022": 27,
		"Total 2020-2021": null,
		"Total 2021-2022": 1217,
		"Total Recoveries 2021-2022": 1190
	},
	{
		"Date": "Oct 12",
		"Daily 2020-2021": 61,
		"Daily 2020-2021 avg": 16.6,
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 2.9,
		"Active 2020-2021": 157,
		"Active 2021-2022": 25,
		"Total 2020-2021": 1882,
		"Total 2021-2022": 1221,
		"Total Recoveries 2021-2022": 1196
	},
	{
		"Date": "Oct 13",
		"Daily 2020-2021": 10,
		"Daily 2020-2021 avg": 17.7,
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 3.3,
		"Active 2020-2021": 125,
		"Active 2021-2022": 29,
		"Total 2020-2021": 1892,
		"Total 2021-2022": 1226,
		"Total Recoveries 2021-2022": 1197
	},
	{
		"Date": "Oct 14",
		"Daily 2020-2021": 25,
		"Daily 2020-2021 avg": 19.1,
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 3.0,
		"Active 2020-2021": 137,
		"Active 2021-2022": 29,
		"Total 2020-2021": 1917,
		"Total 2021-2022": 1230,
		"Total Recoveries 2021-2022": 1201
	},
	{
		"Date": "Oct 15",
		"Daily 2020-2021": 26,
		"Daily 2020-2021 avg": 20.6,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 2.6,
		"Active 2020-2021": 148,
		"Active 2021-2022": 28,
		"Total 2020-2021": 1943,
		"Total 2021-2022": 1232,
		"Total Recoveries 2021-2022": 1204
	},
	{
		"Date": "Oct 16",
		"Daily 2020-2021": 29,
		"Daily 2020-2021 avg": 21.6,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 163,
		"Active 2021-2022": null,
		"Total 2020-2021": 1972,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Oct 17",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Active 2021-2022": null,
		"Total 2020-2021": null,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Oct 18",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 2.9,
		"Active 2020-2021": null,
		"Active 2021-2022": 29,
		"Total 2020-2021": null,
		"Total 2021-2022": 1237,
		"Total Recoveries 2021-2022": 1208
	},
	{
		"Date": "Oct 19",
		"Daily 2020-2021": 48,
		"Daily 2020-2021 avg": 19.7,
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 2.7,
		"Active 2020-2021": 188,
		"Active 2021-2022": 28,
		"Total 2020-2021": 2020,
		"Total 2021-2022": 1240,
		"Total Recoveries 2021-2022": 1212
	},
	{
		"Date": "Oct 20",
		"Daily 2020-2021": 7,
		"Daily 2020-2021 avg": 19.3,
		"Daily 2021-2022": 6,
		"Daily 2021-2022 avg": 2.9,
		"Active 2020-2021": 189,
		"Active 2021-2022": 33,
		"Total 2020-2021": 2027,
		"Total 2021-2022": 1246,
		"Total Recoveries 2021-2022": 1213
	},
	{
		"Date": "Oct 21",
		"Daily 2020-2021": 7,
		"Daily 2020-2021 avg": 16.7,
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 3.0,
		"Active 2020-2021": 191,
		"Active 2021-2022": 38,
		"Total 2020-2021": 2034,
		"Total 2021-2022": 1251,
		"Total Recoveries 2021-2022": 1213
	},
	{
		"Date": "Oct 22",
		"Daily 2020-2021": 50,
		"Daily 2020-2021 avg": 20.1,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 3.0,
		"Active 2020-2021": 197,
		"Active 2021-2022": 38,
		"Total 2020-2021": 2084,
		"Total 2021-2022": 1253,
		"Total Recoveries 2021-2022": 1215
	},
	{
		"Date": "Oct 23",
		"Daily 2020-2021": 27,
		"Daily 2020-2021 avg": 19.9,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 206,
		"Active 2021-2022": null,
		"Total 2020-2021": 2111,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Oct 24",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Active 2021-2022": null,
		"Total 2020-2021": null,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Oct 25",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 11,
		"Daily 2021-2022 avg": 3.9,
		"Active 2020-2021": null,
		"Active 2021-2022": 36,
		"Total 2020-2021": null,
		"Total 2021-2022": 1264,
		"Total Recoveries 2021-2022": 1228
	},
	{
		"Date": "Oct 26",
		"Daily 2020-2021": 49,
		"Daily 2020-2021 avg": 20,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 3.7,
		"Active 2020-2021": 222,
		"Active 2021-2022": 35,
		"Total 2020-2021": 2160,
		"Total 2021-2022": 1266,
		"Total Recoveries 2021-2022": 1231
	},
	{
		"Date": "Oct 27",
		"Daily 2020-2021": 5,
		"Daily 2020-2021 avg": 19.7,
		"Daily 2021-2022": 14,
		"Daily 2021-2022 avg": 4.9,
		"Active 2020-2021": 214,
		"Active 2021-2022": 44,
		"Total 2020-2021": 2165,
		"Total 2021-2022": 1280,
		"Total Recoveries 2021-2022": 1236
	},
	{
		"Date": "Oct 28",
		"Daily 2020-2021": 0,
		"Daily 2020-2021 avg": 18.7,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 4.4,
		"Active 2020-2021": 197,
		"Active 2021-2022": 42,
		"Total 2020-2021": 2166,
		"Total 2021-2022": 1282,
		"Total Recoveries 2021-2022": 1240
	},
	{
		"Date": "Oct 29",
		"Daily 2020-2021": 2,
		"Daily 2020-2021 avg": 11.9,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 4.4,
		"Active 2020-2021": 183,
		"Active 2021-2022": 42,
		"Total 2020-2021": 2167,
		"Total 2021-2022": 1284,
		"Total Recoveries 2021-2022": 1242
	},
	{
		"Date": "Oct 30",
		"Daily 2020-2021": 34,
		"Daily 2020-2021 avg": 12.9,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 179,
		"Active 2021-2022": null,
		"Total 2020-2021": 2201,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Oct 31",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Active 2021-2022": null,
		"Total 2020-2021": null,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Nov 1",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 3.4,
		"Active 2020-2021": null,
		"Active 2021-2022": 32,
		"Total 2020-2021": null,
		"Total 2021-2022": 1288,
		"Total Recoveries 2021-2022": 1256
	},
	{
		"Date": "Nov 2",
		"Daily 2020-2021": 58,
		"Daily 2020-2021 avg": 14.1,
		"Daily 2021-2022": 9,
		"Daily 2021-2022 avg": 4.4,
		"Active 2020-2021": 193,
		"Active 2021-2022": 37,
		"Total 2020-2021": 2259,
		"Total 2021-2022": 1297,
		"Total Recoveries 2021-2022": 1260
	},
	{
		"Date": "Nov 3",
		"Daily 2020-2021": 10,
		"Daily 2020-2021 avg": 14.9,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 2.7,
		"Active 2020-2021": 188,
		"Active 2021-2022": 31,
		"Total 2020-2021": 2269,
		"Total 2021-2022": 1299,
		"Total Recoveries 2021-2022": 1268
	},
	{
		"Date": "Nov 4",
		"Daily 2020-2021": 37,
		"Daily 2020-2021 avg": 20.1,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 2.7,
		"Active 2020-2021": 192,
		"Active 2021-2022": 23,
		"Total 2020-2021": 2306,
		"Total 2021-2022": 1301,
		"Total Recoveries 2021-2022": 1278
	},
	{
		"Date": "Nov 5",
		"Daily 2020-2021": 25,
		"Daily 2020-2021 avg": 23.4,
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 2.9,
		"Active 2020-2021": 189,
		"Active 2021-2022": 23,
		"Total 2020-2021": 2331,
		"Total 2021-2022": 1304,
		"Total Recoveries 2021-2022": 1281
	},
	{
		"Date": "Nov 6",
		"Daily 2020-2021": 42,
		"Daily 2020-2021 avg": 24.6,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 198,
		"Active 2021-2022": null,
		"Total 2020-2021": 2373,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Nov 7",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Active 2021-2022": null,
		"Total 2020-2021": null,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Nov 8",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 6,
		"Daily 2021-2022 avg": 3.1,
		"Active 2020-2021": null,
		"Active 2021-2022": 29,
		"Total 2020-2021": null,
		"Total 2021-2022": 1310,
		"Total Recoveries 2021-2022": 1281
	},
	{
		"Date": "Nov 9",
		"Daily 2020-2021": 79,
		"Daily 2020-2021 avg": 27.6,
		"Daily 2021-2022": 6,
		"Daily 2021-2022 avg": 2.7,
		"Active 2020-2021": 237,
		"Active 2021-2022": 24,
		"Total 2020-2021": 2452,
		"Total 2021-2022": 1316,
		"Total Recoveries 2021-2022": 1292
	},
	{
		"Date": "Nov 10",
		"Daily 2020-2021": 15,
		"Daily 2020-2021 avg": 28.3,
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 3.0,
		"Active 2020-2021": 214,
		"Active 2021-2022": 27,
		"Total 2020-2021": 2467,
		"Total 2021-2022": 1320,
		"Total Recoveries 2021-2022": 1293
	},
	{
		"Date": "Nov 11",
		"Daily 2020-2021": 56,
		"Daily 2020-2021 avg": 31,
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 3.4,
		"Active 2020-2021": 257,
		"Active 2021-2022": 31,
		"Total 2020-2021": 2523,
		"Total 2021-2022": 1325,
		"Total Recoveries 2021-2022": 1294
	},
	{
		"Date": "Nov 12",
		"Daily 2020-2021": 42,
		"Daily 2020-2021 avg": 33.4,
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 3.4,
		"Active 2020-2021": 280,
		"Active 2021-2022": 33,
		"Total 2020-2021": 2565,
		"Total 2021-2022": 1328,
		"Total Recoveries 2021-2022": 1295
	},
	{
		"Date": "Nov 13",
		"Daily 2020-2021": 22,
		"Daily 2020-2021 avg": 30.6,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": 274,
		"Active 2021-2022": null,
		"Total 2020-2021": 2587,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Nov 14",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": null,
		"Daily 2021-2022 avg": null,
		"Active 2020-2021": null,
		"Active 2021-2022": null,
		"Total 2020-2021": null,
		"Total 2021-2022": null,
		"Total Recoveries 2021-2022": null
	},
	{
		"Date": "Nov 15",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 2.9,
		"Active 2020-2021": null,
		"Active 2021-2022": 32,
		"Total 2020-2021": null,
		"Total 2021-2022": 1330,
		"Total Recoveries 2021-2022": 1298
	},
	{
		"Date": "Nov 16",
		"Daily 2020-2021": 77,
		"Daily 2020-2021 avg": 30.3,
		"Daily 2021-2022": 8,
		"Daily 2021-2022 avg": 3.1,
		"Active 2020-2021": 322,
		"Active 2021-2022": 37,
		"Total 2020-2021": 2664,
		"Total 2021-2022": 1338,
		"Total Recoveries 2021-2022": 1301
	},
	{
		"Date": "Nov 17",
		"Daily 2020-2021": 33,
		"Daily 2020-2021 avg": 32.9,
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 3.1,
		"Active 2020-2021": 326,
		"Active 2021-2022": 30,
		"Total 2020-2021": 2697,
		"Total 2021-2022": 1342,
		"Total Recoveries 2021-2022": 1312
	},
	{
		"Date": "Nov 18",
		"Daily 2020-2021": 28,
		"Daily 2020-2021 avg": 28.9,
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 3.1,
		"Active 2020-2021": 314,
		"Active 2021-2022": 33,
		"Total 2020-2021": 2725,
		"Total 2021-2022": 1347,
		"Total Recoveries 2021-2022": 1314
	},
	{
		"Date": "Nov 19",
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 3.1,
		"Active 2021-2022": 34,
		"Total 2021-2022": 1352,
		"Total Recoveries 2021-2022": 1318
	},
	{
		"Date": "Nov 20"
	},
	{
		"Date": "Nov 21"
	},
	{
		"Date": "Nov 22",
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 3.4,
		"Active 2021-2022": 35,
		"Total 2021-2022": 1354,
		"Total Recoveries 2021-2022": 1319
	},
	{
		"Date": "Nov 23",
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 2.7,
		"Active 2021-2022": 24,
		"Total 2021-2022": 1357,
		"Total Recoveries 2021-2022": 1333
	},
	{
		"Date": "Nov 24"
	},
	{
		"Date": "Nov 25"
	},
	{
		"Date": "Nov 26"
	},
	{
		"Date": "Nov 27"
	},
	{
		"Date": "Nov 28"
	},
	{
		"Date": "Nov 29",
		"Daily 2021-2022": 11,
		"Daily 2021-2022 avg": 2.0,
		"Active 2021-2022": 27,
		"Total 2021-2022": 1368,
		"Total Recoveries 2021-2022": 1341
	},
	{
		"Date": "Nov 30",
		"Daily 2021-2022": 6,
		"Daily 2021-2022 avg": 2.4,
		"Active 2021-2022": 20,
		"Total 2021-2022": 1374,
		"Total Recoveries 2021-2022": 1354
	},
	{
		"Date": "Dec 1",
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 2.9,
		"Active 2021-2022": 23,
		"Total 2021-2022": 1377,
		"Total Recoveries 2021-2022": 1354
	},
	{
		"Date": "Dec 2",
	},
	{
		"Date": "Dec 3",
	},
	{
		"Date": "Dec 4",
	},
	{
		"Date": "Dec 5",
	},
	{
		"Date": "Dec 6",
	},
	{
		"Date": "Dec 7",
	},
	{
		"Date": "Dec 8",
	},
	{
		"Date": "Dec 9",
	},
	{
		"Date": "Dec 10"
	},
	{
		"Date": "Dec 11"
	},
	{
		"Date": "Dec 12"
	},
	{
		"Date": "Dec 13"
	},
	{
		"Date": "Dec 14"
	},
	{
		"Date": "Dec 15"
	},
	{
		"Date": "Dec 16"
	},
	{
		"Date": "Dec 17"
	},
	{
		"Date": "Dec 18"
	},
	{
		"Date": "Dec 19"
	},
	{
		"Date": "Dec 20"
	},
	{
		"Date": "Dec 21"
	},
	{
		"Date": "Dec 22"
	},
	{
		"Date": "Dec 23"
	},
	{
		"Date": "Dec 24"
	},
	{
		"Date": "Dec 25"
	},
	{
		"Date": "Dec 26"
	},
	{
		"Date": "Dec 27"
	},
	{
		"Date": "Dec 28",
		"Total 2020-2021": 3197
	},
	{
		"Date": "Dec 29",
	},
	{
		"Date": "Dec 30",
	},
	{
		"Date": "Dec 31",
	},
	{
		"Date": "Jan 1",
	},
	{
		"Date": "Jan 2",
	},
	{
		"Date": "Jan 3",
	},
	{
		"Date": "Jan 4",
	},
	{
		"Date": "Jan 5",
	},
	{
		"Date": "Jan 6",
		"Daily 2021-2022": 109,
		"Daily 2021-2022 avg": 15.6,
		"Active 2021-2022": 109,
		"Total 2021-2022": 1526,
		"Total Recoveries 2021-2022": 40
	},
	{
		"Date": "Jan 7",
		"Daily 2021-2022": 33,
		"Daily 2021-2022 avg": 20.3,
		"Active 2021-2022": 115,
		"Total 2021-2022": 1559,
		"Total Recoveries 2021-2022": 67
	},
	{
		"Date": "Jan 8",
	},
	{
		"Date": "Jan 9",
	},
	{
		"Date": "Jan 10",
		"Daily 2021-2022": 108,
		"Daily 2021-2022 avg": 35.7,
		"Active 2021-2022": 141,
		"Total 2021-2022": 1667,
		"Total Recoveries 2021-2022": 149
	},
	{
		"Date": "Jan 11",
		"Daily 2021-2022": 61,
		"Daily 2021-2022 avg": 44.4,
		"Active 2021-2022": 157,
		"Total 2021-2022": 1728,
		"Total Recoveries 2021-2022": 194
	},
	{
		"Date": "Jan 12",
		"Daily 2021-2022": 113,
		"Daily 2021-2022 avg": 60.6,
		"Active 2021-2022": 211,
		"Total 2021-2022": 1841,
		"Total Recoveries 2021-2022": 253
	},
	{
		"Date": "Jan 13",
		"Daily 2021-2022": 111,
		"Daily 2021-2022 avg": 60.9,
		"Active 2021-2022": 111,
		"Total 2021-2022": 1952,
		"Total Recoveries 2021-2022": 332
	},
	{
		"Date": "Jan 14",
		"Daily 2021-2022": 67,
		"Daily 2021-2022 avg": 65.7,
		"Active 2021-2022": 256,
		"Total 2021-2022": 2019,
		"Total Recoveries 2021-2022": 386
	},
	{
		"Date": "Jan 15",
	},
	{
		"Date": "Jan 16",
	},
	{
		"Date": "Jan 17",
	},
	{
		"Date": "Jan 18",
		"Daily 2021-2022": 259,
		"Daily 2021-2022 avg": 78.6,
		"Active 2021-2022": 198,
		"Total 2021-2022": 2278,
		"Total Recoveries 2021-2022": 703
	},
	{
		"Date": "Jan 19",
		"Daily 2021-2022": 120,
		"Daily 2021-2022 avg": 79.6,
		"Active 2021-2022": 253,
		"Total 2021-2022": 2398,
		"Total Recoveries 2021-2022": 768
	},
	{
		"Date": "Jan 20",
		"Daily 2021-2022": 93,
		"Daily 2021-2022 avg": 77.0,
		"Active 2021-2022": 285,
		"Total 2021-2022": 2492,
		"Total Recoveries 2021-2022": 829
	},
	{
		"Date": "Jan 21",
		"Daily 2021-2022": 71,
		"Daily 2021-2022 avg": 77.6,
		"Active 2021-2022": 294,
		"Total 2021-2022": 2562,
		"Total Recoveries 2021-2022": 891
	},
	{
		"Date": "Jan 22",
	},
	{
		"Date": "Jan 23",
	},
	{
		"Date": "Jan 24",
		"Daily 2021-2022": 184,
		"Daily 2021-2022 avg": 103.9,
		"Active 2021-2022": 199,
		"Total 2021-2022": 2746,
		"Total Recoveries 2021-2022": 1170
	},
	{
		"Date": "Jan 25",
		"Daily 2021-2022": 51,
		"Daily 2021-2022 avg": 74.1,
		"Active 2021-2022": 184,
		"Total 2021-2022": 2797,
		"Total Recoveries 2021-2022": 1236
	},
	{
		"Date": "Jan 26",
		"Daily 2021-2022": 65,
		"Daily 2021-2022 avg": 66.3,
		"Active 2021-2022": 188,
		"Total 2021-2022": 2862,
		"Total Recoveries 2021-2022": 1297
	},
	{
		"Date": "Jan 27",
		"Daily 2021-2022": 69,
		"Daily 2021-2022 avg": 62.9,
		"Active 2021-2022": 201,
		"Total 2021-2022": 2931,
		"Total Recoveries 2021-2022": 1353
	},
	{
		"Date": "Jan 28",
		"Daily 2021-2022": 27,
		"Daily 2021-2022 avg": 56.6,
		"Active 2021-2022": 169,
		"Total 2021-2022": 2895,
		"Total Recoveries 2021-2022": 1412
	},
	{
		"Date": "Jan 29",
	},
	{
		"Date": "Jan 30",
	},
	{
		"Date": "Jan 31",
		"Daily 2021-2022": 56,
		"Daily 2021-2022 avg": 38.3,
		"Active 2021-2022": 72,
		"Total 2021-2022": 3014,
		"Total Recoveries 2021-2022": 1565
	},
	{
		"Date": "Feb 1",
		"Daily 2021-2022": 32,
		"Daily 2021-2022 avg": 35.6,
		"Active 2021-2022": 66,
		"Total 2021-2022": 3046,
		"Total Recoveries 2021-2022": 1603
	},
	{
		"Date": "Feb 2",
		"Daily 2021-2022": 30,
		"Daily 2021-2022 avg": 30.6,
		"Active 2021-2022": 71,
		"Total 2021-2022": 3076,
		"Total Recoveries 2021-2022": 1628
	},
	{
		"Date": "Feb 3",
	},
	{
		"Date": "Feb 4",
		"Daily 2021-2022": 18,
		"Daily 2021-2022 avg": 19.4,
		"Active 2021-2022": 60,
		"Total 2021-2022": 3094,
		"Total Recoveries 2021-2022": 1659
	},
	{
		"Date": "Feb 5",
	},
	{
		"Date": "Feb 6",
	},
	{
		"Date": "Feb 7",
		"Daily 2021-2022": 27,
		"Daily 2021-2022 avg": 15.3,
		"Active 2021-2022": 35,
		"Total 2021-2022": 3121,
		"Total Recoveries 2021-2022": 1709
	},
	{
		"Date": "Feb 8",
		"Daily 2021-2022": 10,
		"Daily 2021-2022 avg": 12.1,
		"Active 2021-2022": 36,
		"Total 2021-2022": 3131,
		"Total Recoveries 2021-2022": 1718
	},
	{
		"Date": "Feb 9",
		"Daily 2021-2022": 9,
		"Daily 2021-2022 avg": 9.1,
		"Active 2021-2022": 39,
		"Total 2021-2022": 3140,
		"Total Recoveries 2021-2022": 1724
	},
	{
		"Date": "Feb 10",
		"Daily 2021-2022": 12,
		"Daily 2021-2022 avg": 10.9,
		"Active 2021-2022": 40,
		"Total 2021-2022": 3152,
		"Total Recoveries 2021-2022": 1735
	},
	{
		"Date": "Feb 11",
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 9.0,
		"Active 2021-2022": 34,
		"Total 2021-2022": 3157,
		"Total Recoveries 2021-2022": 1746
	},
	{
		"Date": "Feb 12",
	},
	{
		"Date": "Feb 13",
	},
	{
		"Date": "Feb 14",
		"Daily 2021-2022": 9,
		"Daily 2021-2022 avg": 6.4,
		"Active 2021-2022": 26,
		"Total 2021-2022": 3166,
		"Total Recoveries 2021-2022": 1763
	},
	{
		"Date": "Feb 15",
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 5.6,
		"Active 2021-2022": 22,
		"Total 2021-2022": 3170,
		"Total Recoveries 2021-2022": 1771
	},
	{
		"Date": "Feb 16",
		"Daily 2021-2022": 7,
		"Daily 2021-2022 avg": 5.3,
		"Active 2021-2022": 22,
		"Total 2021-2022": 3177,
		"Total Recoveries 2021-2022": 1778
	},
	{
		"Date": "Feb 17",
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 4.3,
		"Active 2021-2022": 26,
		"Total 2021-2022": 3182,
		"Total Recoveries 2021-2022": 1779
	},
	{
		"Date": "Feb 18",
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 4.0,
		"Active 2021-2022": 25,
		"Total 2021-2022": 3185,
		"Total Recoveries 2021-2022": 1783
	},
	{
		"Date": "Feb 19",
	},
	{
		"Date": "Feb 20",
	},
	{
		"Date": "Feb 21",
		"Daily 2021-2022": 6,
		"Daily 2021-2022 avg": 3.6,
		"Active 2021-2022": 21,
		"Total 2021-2022": 3191,
		"Total Recoveries 2021-2022": 1793
	},
	{
		"Date": "Feb 22",
		"Daily 2021-2022": 5,
		"Daily 2021-2022 avg": 3.7,
		"Active 2021-2022": 19,
		"Total 2021-2022": 3196,
		"Total Recoveries 2021-2022": 1800
	},
	{
		"Date": "Feb 23",
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 3.0,
		"Active 2021-2022": 17,
		"Total 2021-2022": 3198,
		"Total Recoveries 2021-2022": 1804
	},
	{
		"Date": "Feb 24",
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 2.9,
		"Active 2021-2022": 19,
		"Total 2021-2022": 3202,
		"Total Recoveries 2021-2022": 1806
	},
	{
		"Date": "Feb 25",
		"Daily 2021-2022": 1,
		"Daily 2021-2022 avg": 2.6,
		"Active 2021-2022": 20,
		"Total 2021-2022": 3203,
		"Total Recoveries 2021-2022": 1806
	},
	{
		"Date": "Feb 26",
	},
	{
		"Date": "Feb 27",
	},
	{
		"Date": "Feb 28",
		"Daily 2021-2022": 8,
		"Daily 2021-2022 avg": 2.9,
		"Active 2021-2022": 18,
		"Total 2021-2022": 3211,
		"Total Recoveries 2021-2022": 1816
	},
	{
		"Date": "Mar 1",
		"Daily 2021-2022": 4,
		"Daily 2021-2022 avg": 2.7,
		"Active 2021-2022": 18,
		"Total 2021-2022": 3215,
		"Total Recoveries 2021-2022": 1820
	},
	{
		"Date": "Mar 2",
		"Daily 2021-2022": 2,
		"Daily 2021-2022 avg": 2.7,
		"Active 2021-2022": 19,
		"Total 2021-2022": 3217,
		"Total Recoveries 2021-2022": 1821
	},
	{
		"Date": "Mar 3",
		"Daily 2021-2022": 3,
		"Daily 2021-2022 avg": 2.6,
		"Active 2021-2022": 19,
		"Total 2021-2022": 3220,
		"Total Recoveries 2021-2022": 1824
	}
];

export { data, globaldate, todayinarray };