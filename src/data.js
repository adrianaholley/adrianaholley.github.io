//update daily
var globaldate = "Last updated Thursday, November 11, 2021 at 9:00pm CST."
var todayinarray = 112

const data = [
	{
		"Date": "Aug 3",
		"Daily 2020-2021": 18,
		"Daily 2020-2021 avg": 2.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 28,
		"Total 2020": 18
	},
	{
		"Date": "Aug 4",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 5",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 6",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 7",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 8",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 9",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 10",
		"Daily 2020-2021": 26,
		"Daily 2020-2021 avg": 3.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 25, 
		"Total 2020": 44
	},
	{
		"Date": "Aug 11",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	,
	{
		"Date": "Aug 12",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 13",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 14",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 37,
		"Total 2020": 63
	},
	{
		"Date": "Aug 15",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 16",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 17",
		"Daily 2020-2021": 23,
		"Daily 2020-2021 avg": 3.3,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 38,
		"Total 2020": 67
	},
	{
		"Date": "Aug 18",
		"Daily 2020-2021": 8,
		"Daily 2020-2021 avg": 4.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": 75
	},
	{
		"Date": "Aug 19",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 20",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 21",
		"Daily 2020-2021": 28,
		"Daily 2020-2021 avg": 8.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 53,
		"Total 2020": 103
	},
	{
		"Date": "Aug 22",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 23",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 116,
		"Daily 2021 avg": 16.6,
		"Active 2020": null,
		"Active 2021": 116,
		"Total 2020": null,
		"Total 2021": 116
	},
	{
		"Date": "Aug 24",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 30,
		"Daily 2021 avg": 20.9,
		"Active 2020": null,
		"Active 2021": 135,
		"Total 2020": null,
		"Total 2021": 146
	},
	{
		"Date": "Aug 25",
		"Daily 2020-2021": 26,
		"Daily 2020-2021 avg": 7.7,
		"Daily 2021": 51,
		"Daily 2021 avg": 28.1,
		"Active 2020": 87,
		"Active 2021": 185,
		"Total 2020": 149,
		"Total 2021": 197
	},
	{
		"Date": "Aug 26",
		"Daily 2020-2021": 57,
		"Daily 2020-2021 avg": 15.9,
		"Daily 2021": 59,
		"Daily 2021 avg": 36.6,
		"Active 2020": 146,
		"Active 2021": 230,
		"Total 2020": 206,
		"Total 2021": 256
	},
	{
		"Date": "Aug 27",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 47,
		"Daily 2021 avg": 43.3,
		"Active 2020": null,
		"Active 2021": 257,
		"Total 2020": null,
		"Total 2021": 303
	},
	{
		"Date": "Aug 28",
		"Daily 2020-2021": 54,
		"Daily 2020-2021 avg": 19.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 176,
		"Total 2020": 260
	},
	{
		"Date": "Aug 29",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 30",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 129,
		"Daily 2021 avg": 45.1,
		"Active 2020": null,
		"Active 2021": 321,
		"Total 2020": null,
		"Total 2021": 432
	},
	{
		"Date": "Aug 31",
		"Daily 2020-2021": 118,
		"Daily 2020-2021 avg": 36.4,
		"Daily 2021": 67,
		"Daily 2021 avg": 50.4,
		"Active 2020": 268,
		"Active 2021": 357,
		"Total 2020": 378,
		"Total 2021": 499,
		"Total Recoveries 2021": 142
	},
	{
		"Date": "Sept 1",
		"Daily 2020-2021": 137,
		"Daily 2020-2021 avg": 52.3,
		"Daily 2021": 45,
		"Daily 2021 avg": 49.6,
		"Active 2020": 418,
		"Active 2021": 372,
		"Total 2020": 551,
		"Total 2021": 544,
		"Total Recoveries 2021": 172
	},
	{
		"Date": "Sept 2",
		"Daily 2020-2021": 73,
		"Daily 2020-2021 avg": 54.6,
		"Daily 2021": 71,
		"Daily 2021 avg": 51.3,
		"Active 2020": 453,
		"Active 2021": 389,
		"Total 2020": 624,
		"Total 2021": 615,
		"Total Recoveries 2021": 226
	},
	{
		"Date": "Sept 3",
		"Daily 2020-2021": 47,
		"Daily 2020-2021 avg": 61.3,
		"Daily 2021": 35,
		"Daily 2021 avg": 49.6,
		"Active 2020": 477,
		"Active 2021": 370,
		"Total 2020": 671,
		"Total 2021": 650,
		"Total Recoveries 2021": 280
	},
	{
		"Date": "Sept 4",
		"Daily 2020-2021": 64,
		"Daily 2020-2021 avg": 62.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 490,
		"Total 2020": 717
	},
	{
		"Date": "Sept 5",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 6",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 7",
		"Daily 2020-2021": 228,
		"Daily 2020-2021 avg": 78.4,
		"Daily 2021": 125,
		"Daily 2021 avg": 39.4,
		"Active 2020": 626,
		"Active 2021": 354,
		"Total 2020": 945,
		"Total 2021": 775,
		"Total Recoveries 2021": 421
	},
	{
		"Date": "Sept 8",
		"Daily 2020-2021": 75,
		"Daily 2020-2021 avg": 69.6,
		"Daily 2021": 40,
		"Daily 2021 avg": 38.7,
		"Active 2020": 650,
		"Active 2021": 364,
		"Total 2020": 1020,
		"Total 2021": 815,
		"Total Recoveries 2021": 451
	},
	{
		"Date": "Sept 9",
		"Daily 2020-2021": 35,
		"Daily 2020-2021 avg": 64.1,
		"Daily 2021": 77,
		"Daily 2021 avg": 39.6,
		"Active 2020": 612,
		"Active 2021": 305,
		"Total 2020": 1055,
		"Total 2021": 892,
		"Total Recoveries 2021": 587
	},
	{
		"Date": "Sept 10",
		"Daily 2020-2021": 9,
		"Daily 2020-2021 avg": 58.7,
		"Daily 2021": 38,
		"Daily 2021 avg": 40.0,
		"Active 2020": 543,
		"Active 2021": 314,
		"Total 2020": 1064,
		"Total 2021": 930,
		"Total Recoveries 2021": 616
	},
	{
		"Date": "Sept 11",
		"Daily 2020-2021": 27,
		"Daily 2020-2021 avg": 53.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 426,
		"Total 2020": 1091
	},
	{
		"Date": "Sept 12",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 13",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 64,
		"Daily 2021 avg": 49.1,
		"Active 2020": null,
		"Active 2021": 299,
		"Total 2020": null,
		"Total 2021": 994,
		"Total Recoveries 2021": 695
	},
	{
		"Date": "Sept 14",
		"Daily 2020-2021": 189,
		"Daily 2020-2021 avg": 47.9,
		"Daily 2021": 25,
		"Daily 2021 avg": 34.9,
		"Active 2020": 461,
		"Active 2021": 285,
		"Total 2020": 1280,
		"Total 2021": 1019,
		"Total Recoveries 2021": 734
	},
	{
		"Date": "Sept 15",
		"Daily 2020-2021": 74,
		"Daily 2020-2021 avg": 28.7,
		"Daily 2021": 18,
		"Daily 2021 avg": 31.7,
		"Active 2020": 357,
		"Active 2021": 245,
		"Total 2020": 1293,
		"Total 2021": 1037,
		"Total Recoveries 2021": 792
	},	
	{
		"Date": "Sept 16",
		"Daily 2020-2021": 50,
		"Daily 2020-2021 avg": 41.1,
		"Daily 2021": 29,
		"Daily 2021 avg": 24.9,
		"Active 2020": 171,
		"Active 2021": 232,
		"Total 2020": 1343,
		"Total 2021": 1066,
		"Total Recoveries 2021": 834
	},
	{
		"Date": "Sept 17",
		"Daily 2020-2021": 32,
		"Daily 2020-2021 avg": 44.4,
		"Daily 2021": 24,
		"Daily 2021 avg": 22.9,
		"Active 2020": 186,
		"Active 2021": 217,
		"Total 2020": 1375,
		"Total 2021": 1090,
		"Total Recoveries 2021": 873
	},
	{
		"Date": "Sept 18",
		"Daily 2020-2021": 32,
		"Daily 2020-2021 avg": 45.1,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 187,
		"Total 2020": 1407
	},
	{
		"Date": "Sept 19",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 20",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 13,
		"Daily 2021 avg": 15.6,
		"Active 2020": null,
		"Active 2021": 144,
		"Total 2020": null,
		"Total 2021": 1103,
		"Total Recoveries 2021": 959

	},
	{
		"Date": "Sept 21",
		"Daily 2020-2021": 74,
		"Daily 2020-2021 avg": 28.7,
		"Daily 2021": 13,
		"Daily 2021 avg": 13.9,
		"Active 2020": 222,
		"Active 2021": 138,
		"Total 2020": 1481,
		"Total 2021": 1116,
		"Total Recoveries 2021": 978
	},
	{
		"Date": "Sept 22",
		"Daily 2020-2021": 9,
		"Daily 2020-2021 avg": 28.1,
		"Daily 2021": 11,
		"Daily 2021 avg": 12.9,
		"Active 2020": 220,
		"Active 2021": 125,
		"Total 2020": 1490,
		"Total 2021": 1127,
		"Total Recoveries 2021": 1002
	},
	{
		"Date": "Sept 23",
		"Daily 2020-2021": 40,
		"Daily 2020-2021 avg": 26.7,
		"Daily 2021": 10,
		"Daily 2021 avg": 10.1,
		"Active 2020": 244,
		"Active 2021": 115,
		"Total 2020": 1530,
		"Total 2021": 1137,
		"Total Recoveries 2021": 1022
	},
	{
		"Date": "Sept 24",
		"Daily 2020-2021": 23,
		"Daily 2020-2021 avg": 25.4,
		"Daily 2021": 9,
		"Daily 2021 avg": 8.0,
		"Active 2020": 237,
		"Active 2021": 100,
		"Total 2020": 1553,
		"Total 2021": 1146,
		"Total Recoveries 2021": 1046
	},
	{
		"Date": "Sept 25",
		"Daily 2020-2021": 32,
		"Daily 2020-2021 avg": 25.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 247,
		"Total 2020": 1585
	},
	{
		"Date": "Sept 26",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 27",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 13,
		"Daily 2021 avg": 8.0,
		"Active 2020": null,
		"Active 2021": 63,
		"Total 2020": null,
		"Total 2021": 1159,
		"Total Recoveries 2021": 1096
	},
	{
		"Date": "Sept 28",
		"Daily 2020-2021": 58,
		"Daily 2020-2021 avg": 23.1,
		"Daily 2021": 10,
		"Daily 2021 avg": 7.6,
		"Active 2020": 260,
		"Active 2021": 63,
		"Total 2020": 1643,
		"Total 2021": 1169,
		"Total Recoveries 2021": 1102
	},
	{
		"Date": "Sept 29",
		"Daily 2020-2021": 4,
		"Daily 2020-2021 avg": 22.4,
		"Daily 2021": 11,
		"Daily 2021 avg": 5.9,
		"Active 2020": 232,
		"Active 2021": 62,
		"Total 2020": 1647,
		"Total 2021": 1180,
		"Total Recoveries 2021": 1118
	},
	{
		"Date": "Sept 30",
		"Daily 2020-2021": 42,
		"Daily 2020-2021 avg": 22.7,
		"Daily 2021": 6,
		"Daily 2021 avg": 5.3,
		"Active 2020": 222,
		"Active 2021": 55,
		"Total 2020": 1689,
		"Total 2021": 1186,
		"Total Recoveries 2021": 1131
	},
	{
		"Date": "Oct 1",
		"Daily 2020-2021": 22,
		"Daily 2020-2021 avg": 22.6,
		"Daily 2021": 3,
		"Daily 2021 avg": 4.4,
		"Active 2020": 210,
		"Active 2021": 48,
		"Total 2020": 1711,
		"Total 2021": 1189,
		"Total Recoveries 2021": 1141
	},
	{
		"Date": "Oct 2",
		"Daily 2020-2021": 27,
		"Daily 2020-2021 avg": 21.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 203,
		"Total 2020": 1738
	},
	{
		"Date": "Oct 3",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 4",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 4,
		"Daily 2021 avg": 4.9,
		"Active 2020": null,
		"Active 2021": 39,
		"Total 2020": null,
		"Total 2021": 1193,
		"Total Recoveries 2021": 1154
	},
	{
		"Date": "Oct 5",
		"Daily 2020-2021": 28,
		"Daily 2020-2021 avg": 17.6,
		"Daily 2021": 8,
		"Daily 2021 avg": 3.1,
		"Active 2020": 202,
		"Active 2021": 38,
		"Total 2020": 1766,
		"Total 2021": 1201,
		"Total Recoveries 2021": 1163
	},
	{
		"Date": "Oct 6",
		"Daily 2020-2021": 2,
		"Daily 2020-2021 avg": 17.3,
		"Daily 2021": 2,
		"Daily 2021 avg": 3.3,
		"Active 2020": 196,
		"Active 2021": 35,
		"Total 2020": 1768,
		"Total 2021": 1203,
		"Total Recoveries 2021": 1168
	},
	{
		"Date": "Oct 7",
		"Daily 2020-2021": 15,
		"Daily 2020-2021 avg": 13.4,
		"Daily 2021": 6,
		"Daily 2021 avg": 3.3,
		"Active 2020": 152,
		"Active 2021": 33,
		"Total 2020": 1783,
		"Total 2021": 1209,
		"Total Recoveries 2021": 1176
	},
	{
		"Date": "Oct 8",
		"Daily 2020-2021": 16,
		"Daily 2020-2021 avg": 12.6,
		"Daily 2021": 5,
		"Daily 2021 avg": 3.6,
		"Active 2020": 156,
		"Active 2021": 26,
		"Total 2020": 1799,
		"Total 2021": 1214,
		"Total Recoveries 2021": 1188
	},
	{
		"Date": "Oct 9",
		"Daily 2020-2021": 22,
		"Daily 2020-2021 avg": 11.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 134,
		"Active 2021": null,
		"Total 2020": 1821,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Oct 10",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Active 2021": null,
		"Total 2020": null,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Oct 11",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 4,
		"Daily 2021 avg": 3.4,
		"Active 2020": null,
		"Active 2021": 27,
		"Total 2020": null,
		"Total 2021": 1217,
		"Total Recoveries 2021": 1190
	},
	{
		"Date": "Oct 12",
		"Daily 2020-2021": 61,
		"Daily 2020-2021 avg": 16.6,
		"Daily 2021": 4,
		"Daily 2021 avg": 2.9,
		"Active 2020": 157,
		"Active 2021": 25,
		"Total 2020": 1882,
		"Total 2021": 1221,
		"Total Recoveries 2021": 1196
	},
	{
		"Date": "Oct 13",
		"Daily 2020-2021": 10,
		"Daily 2020-2021 avg": 17.7,
		"Daily 2021": 5,
		"Daily 2021 avg": 3.3,
		"Active 2020": 125,
		"Active 2021": 29,
		"Total 2020": 1892,
		"Total 2021": 1226,
		"Total Recoveries 2021": 1197
	},
	{
		"Date": "Oct 14",
		"Daily 2020-2021": 25,
		"Daily 2020-2021 avg": 19.1,
		"Daily 2021": 4,
		"Daily 2021 avg": 3.0,
		"Active 2020": 137,
		"Active 2021": 29,
		"Total 2020": 1917,
		"Total 2021": 1230,
		"Total Recoveries 2021": 1201
	},
	{
		"Date": "Oct 15",
		"Daily 2020-2021": 26,
		"Daily 2020-2021 avg": 20.6,
		"Daily 2021": 2,
		"Daily 2021 avg": 2.6,
		"Active 2020": 148,
		"Active 2021": 28,
		"Total 2020": 1943,
		"Total 2021": 1232,
		"Total Recoveries 2021": 1204
	},
	{
		"Date": "Oct 16",
		"Daily 2020-2021": 29,
		"Daily 2020-2021 avg": 21.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 163,
		"Active 2021": null,
		"Total 2020": 1972,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Oct 17",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Active 2021": null,
		"Total 2020": null,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Oct 18",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 5,
		"Daily 2021 avg": 2.9,
		"Active 2020": null,
		"Active 2021": 29,
		"Total 2020": null,
		"Total 2021": 1237,
		"Total Recoveries 2021": 1208
	},
	{
		"Date": "Oct 19",
		"Daily 2020-2021": 48,
		"Daily 2020-2021 avg": 19.7,
		"Daily 2021": 3,
		"Daily 2021 avg": 2.7,
		"Active 2020": 188,
		"Active 2021": 28,
		"Total 2020": 2020,
		"Total 2021": 1240,
		"Total Recoveries 2021": 1212
	},
	{
		"Date": "Oct 20",
		"Daily 2020-2021": 7,
		"Daily 2020-2021 avg": 19.3,
		"Daily 2021": 6,
		"Daily 2021 avg": 2.9,
		"Active 2020": 189,
		"Active 2021": 33,
		"Total 2020": 2027,
		"Total 2021": 1246,
		"Total Recoveries 2021": 1213
	},
	{
		"Date": "Oct 21",
		"Daily 2020-2021": 7,
		"Daily 2020-2021 avg": 16.7,
		"Daily 2021": 5,
		"Daily 2021 avg": 3.0,
		"Active 2020": 191,
		"Active 2021": 38,
		"Total 2020": 2034,
		"Total 2021": 1251,
		"Total Recoveries 2021": 1213
	},
	{
		"Date": "Oct 22",
		"Daily 2020-2021": 50,
		"Daily 2020-2021 avg": 20.1,
		"Daily 2021": 2,
		"Daily 2021 avg": 3.0,
		"Active 2020": 197,
		"Active 2021": 38,
		"Total 2020": 2084,
		"Total 2021": 1253,
		"Total Recoveries 2021": 1215
	},
	{
		"Date": "Oct 23",
		"Daily 2020-2021": 27,
		"Daily 2020-2021 avg": 19.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 206,
		"Active 2021": null,
		"Total 2020": 2111,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Oct 24",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Active 2021": null,
		"Total 2020": null,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Oct 25",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 11,
		"Daily 2021 avg": 3.9,
		"Active 2020": null,
		"Active 2021": 36,
		"Total 2020": null,
		"Total 2021": 1264,
		"Total Recoveries 2021": 1228
	},
	{
		"Date": "Oct 26",
		"Daily 2020-2021": 49,
		"Daily 2020-2021 avg": 20,
		"Daily 2021": 2,
		"Daily 2021 avg": 3.7,
		"Active 2020": 222,
		"Active 2021": 35,
		"Total 2020": 2160,
		"Total 2021": 1266,
		"Total Recoveries 2021": 1231
	},
	{
		"Date": "Oct 27",
		"Daily 2020-2021": 5,
		"Daily 2020-2021 avg": 19.7,
		"Daily 2021": 14,
		"Daily 2021 avg": 4.9,
		"Active 2020": 214,
		"Active 2021": 44,
		"Total 2020": 2165,
		"Total 2021": 1280,
		"Total Recoveries 2021": 1236
	},
	{
		"Date": "Oct 28",
		"Daily 2020-2021": 0,
		"Daily 2020-2021 avg": 18.7,
		"Daily 2021": 2,
		"Daily 2021 avg": 4.4,
		"Active 2020": 197,
		"Active 2021": 42,
		"Total 2020": 2166,
		"Total 2021": 1282,
		"Total Recoveries 2021": 1240
	},
	{
		"Date": "Oct 29",
		"Daily 2020-2021": 2,
		"Daily 2020-2021 avg": 11.9,
		"Daily 2021": 2,
		"Daily 2021 avg": 4.4,
		"Active 2020": 183,
		"Active 2021": 42,
		"Total 2020": 2167,
		"Total 2021": 1284,
		"Total Recoveries 2021": 1242
	},
	{
		"Date": "Oct 30",
		"Daily 2020-2021": 34,
		"Daily 2020-2021 avg": 12.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 179,
		"Active 2021": null,
		"Total 2020": 2201,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Oct 31",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Active 2021": null,
		"Total 2020": null,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Nov 1",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 4,
		"Daily 2021 avg": 3.4,
		"Active 2020": null,
		"Active 2021": 32,
		"Total 2020": null,
		"Total 2021": 1288,
		"Total Recoveries 2021": 1256
	},
	{
		"Date": "Nov 2",
		"Daily 2020-2021": 58,
		"Daily 2020-2021 avg": 14.1,
		"Daily 2021": 9,
		"Daily 2021 avg": 4.4,
		"Active 2020": 193,
		"Active 2021": 37,
		"Total 2020": 2259,
		"Total 2021": 1297,
		"Total Recoveries 2021": 1260
	},
	{
		"Date": "Nov 3",
		"Daily 2020-2021": 10,
		"Daily 2020-2021 avg": 14.9,
		"Daily 2021": 2,
		"Daily 2021 avg": 2.7,
		"Active 2020": 188,
		"Active 2021": 31,
		"Total 2020": 2269,
		"Total 2021": 1299,
		"Total Recoveries 2021": 1268
	},
	{
		"Date": "Nov 4",
		"Daily 2020-2021": 37,
		"Daily 2020-2021 avg": 20.1,
		"Daily 2021": 2,
		"Daily 2021 avg": 2.7,
		"Active 2020": 192,
		"Active 2021": 23,
		"Total 2020": 2306,
		"Total 2021": 1301,
		"Total Recoveries 2021": 1278
	},
	{
		"Date": "Nov 5",
		"Daily 2020-2021": 25,
		"Daily 2020-2021 avg": 23.4,
		"Daily 2021": 3,
		"Daily 2021 avg": 2.9,
		"Active 2020": 189,
		"Active 2021": 23,
		"Total 2020": 2331,
		"Total 2021": 1304,
		"Total Recoveries 2021": 1281
	},
	{
		"Date": "Nov 6",
		"Daily 2020-2021": 42,
		"Daily 2020-2021 avg": 24.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 198,
		"Active 2021": null,
		"Total 2020": 2373,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Nov 7",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Active 2021": null,
		"Total 2020": null,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Nov 8",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 6,
		"Daily 2021 avg": 3.1,
		"Active 2020": null,
		"Active 2021": 29,
		"Total 2020": null,
		"Total 2021": 1310,
		"Total Recoveries 2021": 1281
	},
	{
		"Date": "Nov 9",
		"Daily 2020-2021": 79,
		"Daily 2020-2021 avg": 27.6,
		"Daily 2021": 6,
		"Daily 2021 avg": 2.7,
		"Active 2020": 237,
		"Active 2021": 24,
		"Total 2020": 2452,
		"Total 2021": 1316,
		"Total Recoveries 2021": 1292
	},
	{
		"Date": "Nov 10",
		"Daily 2020-2021": 15,
		"Daily 2020-2021 avg": 28.3,
		"Daily 2021": 4,
		"Daily 2021 avg": 3.0,
		"Active 2020": 214,
		"Active 2021": 27,
		"Total 2020": 2467,
		"Total 2021": 1320,
		"Total Recoveries 2021": 1293
	},
	{
		"Date": "Nov 11",
		"Daily 2020-2021": 56,
		"Daily 2020-2021 avg": 31,
		"Daily 2021": 5,
		"Daily 2021 avg": 3.4,
		"Active 2020": 257,
		"Active 2021": 31,
		"Total 2020": 2523,
		"Total 2021": 1325,
		"Total Recoveries 2021": 1294
	},
	{
		"Date": "Nov 12",
		"Daily 2020-2021": 42,
		"Daily 2020-2021 avg": 33.4,
		"Daily 2021": 3,
		"Daily 2021 avg": 3.4,
		"Active 2020": 280,
		"Active 2021": 33,
		"Total 2020": 2565,
		"Total 2021": 1328,
		"Total Recoveries 2021": 1295
	},
	{
		"Date": "Nov 13",
		"Daily 2020-2021": 22,
		"Daily 2020-2021 avg": 30.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 274,
		"Active 2021": null,
		"Total 2020": 2587,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Nov 14",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Active 2021": null,
		"Total 2020": null,
		"Total 2021": null,
		"Total Recoveries 2021": null
	},
	{
		"Date": "Nov 15",
		"Daily 2020-2021": null,
		"Daily 2020-2021 avg": null,
		"Daily 2021": 2,
		"Daily 2021 avg": 2.9,
		"Active 2020": null,
		"Active 2021": 32,
		"Total 2020": null,
		"Total 2021": 1330,
		"Total Recoveries 2021": 1298
	},
	{
		"Date": "Nov 16",
		"Daily 2020-2021": 77,
		"Daily 2020-2021 avg": 30.3,
		"Daily 2021": 8,
		"Daily 2021 avg": 3.1,
		"Active 2020": 322,
		"Active 2021": 37,
		"Total 2020": 2664,
		"Total 2021": 1338,
		"Total Recoveries 2021": 1301
	},
	{
		"Date": "Nov 17",
		"Daily 2020-2021": 33,
		"Daily 2020-2021 avg": 32.9,
		"Daily 2021": 4,
		"Daily 2021 avg": 3.1,
		"Active 2020": 326,
		"Active 2021": 30,
		"Total 2020": 2697,
		"Total 2021": 1342,
		"Total Recoveries 2021": 1312
	},
	{
		"Date": "Nov 18",
		"Daily 2020-2021": 28,
		"Daily 2020-2021 avg": 28.9,
		"Daily 2021": 5,
		"Daily 2021 avg": 3.1,
		"Active 2020": 314,
		"Active 2021": 33,
		"Total 2020": 2725,
		"Total 2021": 1347,
		"Total Recoveries 2021": 1314
	},
	{
		"Date": "Nov 19",
		"Daily 2021": 5,
		"Daily 2021 avg": 3.1,
		"Active 2021": 34,
		"Total 2021": 1352,
		"Total Recoveries 2021": 1318
	},
	{
		"Date": "Nov 20"
	},
	{
		"Date": "Nov 21"
	},
	{
		"Date": "Nov 22",
		"Daily 2021": 2,
		"Daily 2021 avg": 3.4,
		"Active 2021": 35,
		"Total 2021": 1354,
		"Total Recoveries 2021": 1319
	},
	{
		"Date": "Nov 23",
		"Daily 2021": 3,
		"Daily 2021 avg": 2.7,
		"Active 2021": 24,
		"Total 2021": 1357,
		"Total Recoveries 2021": 1333
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
		"Daily 2021": 11,
		"Daily 2021 avg": 2.0,
		"Active 2021": 27,
		"Total 2021": 1368,
		"Total Recoveries 2021": 1341
	},
	{
		"Date": "Nov 30",
		"Daily 2021": 6,
		"Daily 2021 avg": 2.4,
		"Active 2021": 20,
		"Total 2021": 1374,
		"Total Recoveries 2021": 1354
	},
	{
		"Date": "Dec 1",
		"Daily 2021": 3,
		"Daily 2021 avg": 2.9,
		"Active 2021": 23,
		"Total 2021": 1377,
		"Total Recoveries 2021": 1354
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
		"Total 2020": 3197
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
		"Daily 2021": 109,
		"Daily 2021 avg": 15.6,
		"Active 2021": 109,
		"Total 2021": 149,
		"Total Recoveries 2021": 40
	},
	{
		"Date": "Jan 7",
		"Daily 2021": 33,
		"Daily 2021 avg": 20.3,
		"Active 2021": 115,
		"Total 2021": 182,
		"Total Recoveries 2021": 67
	},
	{
		"Date": "Jan 8",
	},
	{
		"Date": "Jan 9",
	},
	{
		"Date": "Jan 10",
		"Daily 2021": 108,
		"Daily 2021 avg": 35.7,
		"Active 2021": 141,
		"Total 2021": 290,
		"Total Recoveries 2021": 149
	},
	{
		"Date": "Jan 11",
		"Daily 2021": 61,
		"Daily 2021 avg": 44.4,
		"Active 2021": 157,
		"Total 2021": 351,
		"Total Recoveries 2021": 194
	},
	{
		"Date": "Jan 12",
		"Daily 2021": 113,
		"Daily 2021 avg": 60.6,
		"Active 2021": 211,
		"Total 2021": 464,
		"Total Recoveries 2021": 253
	},
	{
		"Date": "Jan 13",
		"Daily 2021": 111,
		"Daily 2021 avg": 60.9,
		"Active 2021": 111,
		"Total 2021": 575,
		"Total Recoveries 2021": 332
	},
	{
		"Date": "Jan 14",
		"Daily 2021": 67,
		"Daily 2021 avg": 65.7,
		"Active 2021": 256,
		"Total 2021": 642,
		"Total Recoveries 2021": 386
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
		"Daily 2021": 259,
		"Daily 2021 avg": 78.6,
		"Active 2021": 198,
		"Total 2021": 901,
		"Total Recoveries 2021": 703
	},
	{
		"Date": "Jan 19",
		"Daily 2021": 120,
		"Daily 2021 avg": 79.6,
		"Active 2021": 253,
		"Total 2021": 1021,
		"Total Recoveries 2021": 768
	},
	{
		"Date": "Jan 20",
		"Daily 2021": 93,
		"Daily 2021 avg": 77.0,
		"Active 2021": 285,
		"Total 2021": 1114,
		"Total Recoveries 2021": 829
	},
	{
		"Date": "Jan 21",
		"Daily 2021": 71,
		"Daily 2021 avg": 77.6,
		"Active 2021": 294,
		"Total 2021": 1185,
		"Total Recoveries 2021": 891
	},
	{
		"Date": "Jan 22",
	},
	{
		"Date": "Jan 23",
	},
	{
		"Date": "Jan 24",
		"Daily 2021": 184,
		"Daily 2021 avg": 103.9,
		"Active 2021": 199,
		"Total 2021": 1369,
		"Total Recoveries 2021": 1170
	},
	{
		"Date": "Jan 25",
		"Daily 2021": 51,
		"Daily 2021 avg": 74.1,
		"Active 2021": 184,
		"Total 2021": 1420,
		"Total Recoveries 2021": 1236
	},
	{
		"Date": "Jan 26",
		"Daily 2021": 65,
		"Daily 2021 avg": 66.3,
		"Active 2021": 188,
		"Total 2021": 1485,
		"Total Recoveries 2021": 1297
	},
	{
		"Date": "Jan 27",
		"Daily 2021": 69,
		"Daily 2021 avg": 62.9,
		"Active 2021": 201,
		"Total 2021": 1554,
		"Total Recoveries 2021": 1353
	},
	{
		"Date": "Jan 28",
		"Daily 2021": 27,
		"Daily 2021 avg": 56.6,
		"Active 2021": 169,
		"Total 2021": 1518,
		"Total Recoveries 2021": 1412
	},
	{
		"Date": "Jan 29",
	},
	{
		"Date": "Jan 30",
	},
	{
		"Date": "Jan 31",
		"Daily 2021": 56,
		"Daily 2021 avg": 38.3,
		"Active 2021": 72,
		"Total 2021": 1637,
		"Total Recoveries 2021": 1565
	},
	{
		"Date": "Feb 1",
		"Daily 2021": 32,
		"Daily 2021 avg": 35.6,
		"Active 2021": 66,
		"Total 2021": 1669,
		"Total Recoveries 2021": 1603
	},
	{
		"Date": "Feb 2",
		"Daily 2021": 30,
		"Daily 2021 avg": 30.6,
		"Active 2021": 71,
		"Total 2021": 1699,
		"Total Recoveries 2021": 1628
	},
	{
		"Date": "Feb 3",
	},
	{
		"Date": "Feb 4",
		"Daily 2021": 18,
		"Daily 2021 avg": 19.4,
		"Active 2021": 60,
		"Total 2021": 1717,
		"Total Recoveries 2021": 1659
	},
	{
		"Date": "Feb 5",
	},
	{
		"Date": "Feb 6",
	},
	{
		"Date": "Feb 7",
		"Daily 2021": 27,
		"Daily 2021 avg": 15.3,
		"Active 2021": 35,
		"Total 2021": 1744,
		"Total Recoveries 2021": 1709
	},
	{
		"Date": "Feb 8",
		"Daily 2021": 10,
		"Daily 2021 avg": 12.1,
		"Active 2021": 36,
		"Total 2021": 1754,
		"Total Recoveries 2021": 1718
	},
	{
		"Date": "Feb 9",
		"Daily 2021": 9,
		"Daily 2021 avg": 9.1,
		"Active 2021": 39,
		"Total 2021": 1763,
		"Total Recoveries 2021": 1724
	},
	{
		"Date": "Feb 10",
		"Daily 2021": 12,
		"Daily 2021 avg": 10.9,
		"Active 2021": 40,
		"Total 2021": 1775,
		"Total Recoveries 2021": 1735
	},
	{
		"Date": "Feb 11",
		"Daily 2021": 5,
		"Daily 2021 avg": 9.0,
		"Active 2021": 34,
		"Total 2021": 1780,
		"Total Recoveries 2021": 1746
	},
	{
		"Date": "Feb 12",
	},
	{
		"Date": "Feb 13",
	},
	{
		"Date": "Feb 14",
		"Daily 2021": 9,
		"Daily 2021 avg": 6.4,
		"Active 2021": 26,
		"Total 2021": 1789,
		"Total Recoveries 2021": 1763
	},
	{
		"Date": "Feb 15",
		"Daily 2021": 4,
		"Daily 2021 avg": 5.6,
		"Active 2021": 22,
		"Total 2021": 1793,
		"Total Recoveries 2021": 1771
	},
	{
		"Date": "Feb 16",
		"Daily 2021": 7,
		"Daily 2021 avg": 5.3,
		"Active 2021": 22,
		"Total 2021": 1800,
		"Total Recoveries 2021": 1778
	},
	{
		"Date": "Feb 17",
		"Daily 2021": 5,
		"Daily 2021 avg": 4.3,
		"Active 2021": 26,
		"Total 2021": 1805,
		"Total Recoveries 2021": 1779
	},
	{
		"Date": "Feb 18",
		"Daily 2021": 3,
		"Daily 2021 avg": 4.0,
		"Active 2021": 25,
		"Total 2021": 1808,
		"Total Recoveries 2021": 1783
	},
	{
		"Date": "Feb 19",
	},
	{
		"Date": "Feb 20",
	},
	{
		"Date": "Feb 21",
		"Daily 2021": 6,
		"Daily 2021 avg": 3.6,
		"Active 2021": 21,
		"Total 2021": 1814,
		"Total Recoveries 2021": 1793
	},
	{
		"Date": "Feb 22",
		"Daily 2021": 5,
		"Daily 2021 avg": 3.7,
		"Active 2021": 19,
		"Total 2021": 1819,
		"Total Recoveries 2021": 1800
	},
	{
		"Date": "Feb 23",
		"Daily 2021": 2,
		"Daily 2021 avg": 3.0,
		"Active 2021": 17,
		"Total 2021": 1821,
		"Total Recoveries 2021": 1804
	},
	{
		"Date": "Feb 24",
		"Daily 2021": 4,
		"Daily 2021 avg": 2.9,
		"Active 2021": 19,
		"Total 2021": 1825,
		"Total Recoveries 2021": 1806
	},
	{
		"Date": "Feb 25",
		"Daily 2021": 1,
		"Daily 2021 avg": 2.6,
		"Active 2021": 20,
		"Total 2021": 1826,
		"Total Recoveries 2021": 1806
	},
	{
		"Date": "Feb 26",
	},
	{
		"Date": "Feb 27",
	},
	{
		"Date": "Feb 28",
		"Daily 2021": 8,
		"Daily 2021 avg": 2.9,
		"Active 2021": 18,
		"Total 2021": 1834,
		"Total Recoveries 2021": 1816
	},
	{
		"Date": "Mar 1",
		"Daily 2021": 4,
		"Daily 2021 avg": 2.7,
		"Active 2021": 18,
		"Total 2021": 1838,
		"Total Recoveries 2021": 1820
	},
	{
		"Date": "Mar 2",
		"Daily 2021": 2,
		"Daily 2021 avg": 2.7,
		"Active 2021": 19,
		"Total 2021": 1840,
		"Total Recoveries 2021": 1821
	},
	{
		"Date": "Mar 3",
		"Daily 2021": 3,
		"Daily 2021 avg": 2.6,
		"Active 2021": 19,
		"Total 2021": 1843,
		"Total Recoveries 2021": 1824
	}
];

export { data, globaldate, todayinarray };