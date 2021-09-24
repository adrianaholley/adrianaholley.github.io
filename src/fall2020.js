//update daily
var globaldate = "Last updated Thursday, September 23, 2021 at 11:55pm CST."
var todayinarray = 52

const fall2020 = [
	{
		"Date": "Aug 3",
		"Daily 2020": 18,
		"Daily 2020 avg": 2.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 28,
		"Total 2020": 18
	},
	{
		"Date": "Aug 4",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 5",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 6",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 7",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 8",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 9",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 10",
		"Daily 2020": 26,
		"Daily 2020 avg": 3.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 25, 
		"Total 2020": 44
	},
	{
		"Date": "Aug 11",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	,
	{
		"Date": "Aug 12",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 13",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 14",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 37,
		"Total 2020": 63
	},
	{
		"Date": "Aug 15",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 16",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 17",
		"Daily 2020": 23,
		"Daily 2020 avg": 3.3,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 38,
		"Total 2020": 67
	},
	{
		"Date": "Aug 18",
		"Daily 2020": 8,
		"Daily 2020 avg": 4.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": 75
	},
	{
		"Date": "Aug 19",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 20",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 21",
		"Daily 2020": 28,
		"Daily 2020 avg": 8.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 53,
		"Total 2020": 103
	},
	{
		"Date": "Aug 22",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 23",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": 116,
		"Daily 2021 avg": 16.6,
		"Active 2020": null,
		"Active 2021": 116,
		"Total 2020": null,
		"Total 2021": 116
	},
	{
		"Date": "Aug 24",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": 30,
		"Daily 2021 avg": 20.9,
		"Active 2020": null,
		"Active 2021": 135,
		"Total 2020": null,
		"Total 2021": 146
	},
	{
		"Date": "Aug 25",
		"Daily 2020": 26,
		"Daily 2020 avg": 7.7,
		"Daily 2021": 51,
		"Daily 2021 avg": 28.1,
		"Active 2020": 87,
		"Active 2021": 185,
		"Total 2020": 149,
		"Total 2021": 197
	},
	{
		"Date": "Aug 26",
		"Daily 2020": 57,
		"Daily 2020 avg": 15.9,
		"Daily 2021": 59,
		"Daily 2021 avg": 36.6,
		"Active 2020": 146,
		"Active 2021": 230,
		"Total 2020": 206,
		"Total 2021": 256
	},
	{
		"Date": "Aug 27",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": 47,
		"Daily 2021 avg": 43.3,
		"Active 2020": null,
		"Active 2021": 257,
		"Total 2020": null,
		"Total 2021": 303
	},
	{
		"Date": "Aug 28",
		"Daily 2020": 54,
		"Daily 2020 avg": 19.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 176,
		"Total 2020": 260
	},
	{
		"Date": "Aug 29",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Aug 30",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": 129,
		"Daily 2021 avg": 45.1,
		"Active 2020": null,
		"Active 2021": 321,
		"Total 2020": null,
		"Total 2021": 432
	},
	{
		"Date": "Aug 31",
		"Daily 2020": 118,
		"Daily 2020 avg": 36.4,
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
		"Daily 2020": 137,
		"Daily 2020 avg": 52.3,
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
		"Daily 2020": 73,
		"Daily 2020 avg": 54.6,
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
		"Daily 2020": 47,
		"Daily 2020 avg": 61.3,
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
		"Daily 2020": 64,
		"Daily 2020 avg": 62.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 490,
		"Total 2020": 717
	},
	{
		"Date": "Sept 5",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 6",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 7",
		"Daily 2020": 228,
		"Daily 2020 avg": 78.4,
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
		"Daily 2020": 75,
		"Daily 2020 avg": 69.6,
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
		"Daily 2020": 35,
		"Daily 2020 avg": 64.1,
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
		"Daily 2020": 9,
		"Daily 2020 avg": 58.7,
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
		"Daily 2020": 27,
		"Daily 2020 avg": 53.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 426,
		"Total 2020": 1091
	},
	{
		"Date": "Sept 12",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 13",
		"Daily 2020": null,
		"Daily 2020 avg": null,
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
		"Daily 2020": 189,
		"Daily 2020 avg": 47.9,
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
		"Daily 2020": 74,
		"Daily 2020 avg": 28.7,
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
		"Daily 2020": 50,
		"Daily 2020 avg": 41.1,
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
		"Daily 2020": 32,
		"Daily 2020 avg": 44.4,
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
		"Daily 2020": 32,
		"Daily 2020 avg": 45.1,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 187,
		"Total 2020": 1407
	},
	{
		"Date": "Sept 19",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 20",
		"Daily 2020": null,
		"Daily 2020 avg": null,
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
		"Daily 2020": 74,
		"Daily 2020 avg": 28.7,
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
		"Daily 2020": 9,
		"Daily 2020 avg": 28.1,
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
		"Daily 2020": 40,
		"Daily 2020 avg": 26.7,
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
		"Daily 2020": 23,
		"Daily 2020 avg": 25.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 237,
		"Total 2020": 1553
	},
	{
		"Date": "Sept 25",
		"Daily 2020": 32,
		"Daily 2020 avg": 25.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 247,
		"Total 2020": 1585
	},
	{
		"Date": "Sept 26",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 27",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Sept 28",
		"Daily 2020": 58,
		"Daily 2020 avg": 23.1,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 260,
		"Total 2020": 1643
	},
	{
		"Date": "Sept 29",
		"Daily 2020": 4,
		"Daily 2020 avg": 22.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 232,
		"Total 2020": 1647
	},
	{
		"Date": "Sept 30",
		"Daily 2020": 42,
		"Daily 2020 avg": 22.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 222,
		"Total 2020": 1689
	},
	{
		"Date": "Oct 1",
		"Daily 2020": 22,
		"Daily 2020 avg": 22.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 210,
		"Total 2020": 1711
	},
	{
		"Date": "Oct 2",
		"Daily 2020": 27,
		"Daily 2020 avg": 21.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 203,
		"Total 2020": 1738
	},
	{
		"Date": "Oct 3",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 4",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 5",
		"Daily 2020": 28,
		"Daily 2020 avg": 17.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 202,
		"Total 2020": 1766,
	},
	{
		"Date": "Oct 6",
		"Daily 2020": 2,
		"Daily 2020 avg": 17.3,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 196,
		"Total 2020": 1768
	},
	{
		"Date": "Oct 7",
		"Daily 2020": 15,
		"Daily 2020 avg": 13.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 152,
		"Total 2020": 1783
	},
	{
		"Date": "Oct 8",
		"Daily 2020": 16,
		"Daily 2020 avg": 12.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 156,
		"Total 2020": 1799
	},
	{
		"Date": "Oct 9",
		"Daily 2020": 22,
		"Daily 2020 avg": 11.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 134,
		"Total 2020": 1821
	},
	{
		"Date": "Oct 10",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 11",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 12",
		"Daily 2020": 61,
		"Daily 2020 avg": 16.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 157,
		"Total 2020": 1882

	},
	{
		"Date": "Oct 13",
		"Daily 2020": 10,
		"Daily 2020 avg": 17.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 125,
		"Total 2020": 1892
	},
	{
		"Date": "Oct 14",
		"Daily 2020": 25,
		"Daily 2020 avg": 19.1,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 137,
		"Total 2020": 1917
	},
	{
		"Date": "Oct 15",
		"Daily 2020": 26,
		"Daily 2020 avg": 20.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 148,
		"Total 2020": 1943
	},
	{
		"Date": "Oct 16",
		"Daily 2020": 29,
		"Daily 2020 avg": 21.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 163,
		"Total 2020": 1972
	},
	{
		"Date": "Oct 17",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 18",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 19",
		"Daily 2020": 48,
		"Daily 2020 avg": 19.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 188,
		"Total 2020": 2020
	},
	{
		"Date": "Oct 20",
		"Daily 2020": 7,
		"Daily 2020 avg": 19.3,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 189,
		"Total 2020": 2027
	},
	{
		"Date": "Oct 21",
		"Daily 2020": 7,
		"Daily 2020 avg": 16.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 191,
		"Total 2020": 2034
	},
	{
		"Date": "Oct 22",
		"Daily 2020": 50,
		"Daily 2020 avg": 20.1,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 197,
		"Total 2020": 2084
	},
	{
		"Date": "Oct 23",
		"Daily 2020": 27,
		"Daily 2020 avg": 19.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 206,
		"Total 2020": 2111
	},
	{
		"Date": "Oct 24",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 25",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Oct 26",
		"Daily 2020": 49,
		"Daily 2020 avg": 20,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 222,
		"Total 2020": 2160
	},
	{
		"Date": "Oct 27",
		"Daily 2020": 5,
		"Daily 2020 avg": 19.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 214,
		"Total 2020": 2165
	},
	{
		"Date": "Oct 28",
		"Daily 2020": 0,
		"Daily 2020 avg": 18.7,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 197,
		"Total 2020": 2166
	},
	{
		"Date": "Oct 29",
		"Daily 2020": 2,
		"Daily 2020 avg": 11.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 183,
		"Total 2020": 2167
	},
	{
		"Date": "Oct 30",
		"Daily 2020": 34,
		"Daily 2020 avg": 12.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 179,
		"Total 2020": 2201
	},
	{
		"Date": "Oct 31",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Nov 1",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Nov 2",
		"Daily 2020": 58,
		"Daily 2020 avg": 14.1,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 193,
		"Total 2020": 2259
	},
	{
		"Date": "Nov 3",
		"Daily 2020": 10,
		"Daily 2020 avg": 14.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 188,
		"Total 2020": 2269
	},
	{
		"Date": "Nov 4",
		"Daily 2020": 37,
		"Daily 2020 avg": 20.1,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 192,
		"Total 2020": 2306
	},
	{
		"Date": "Nov 5",
		"Daily 2020": 25,
		"Daily 2020 avg": 23.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 189,
		"Total 2020": 2331
	},
	{
		"Date": "Nov 6",
		"Daily 2020": 42,
		"Daily 2020 avg": 24.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 198,
		"Total 2020": 2373
	},
	{
		"Date": "Nov 7",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Nov 8",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Nov 9",
		"Daily 2020": 79,
		"Daily 2020 avg": 27.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 237,
		"Total 2020": 2452
	},
	{
		"Date": "Nov 10",
		"Daily 2020": 15,
		"Daily 2020 avg": 28.3,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 214,
		"Total 2020": 2467
	},
	{
		"Date": "Nov 11",
		"Daily 2020": 56,
		"Daily 2020 avg": 31,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 257,
		"Total 2020": 2523
	},
	{
		"Date": "Nov 12",
		"Daily 2020": 42,
		"Daily 2020 avg": 33.4,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 280,
		"Total 2020": 2565
	},
	{
		"Date": "Nov 13",
		"Daily 2020": 22,
		"Daily 2020 avg": 30.6,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 274,
		"Total 2020": 2587
	},
	{
		"Date": "Nov 14",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Nov 15",
		"Daily 2020": null,
		"Daily 2020 avg": null,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": null,
		"Total 2020": null
	},
	{
		"Date": "Nov 16",
		"Daily 2020": 77,
		"Daily 2020 avg": 30.3,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 322,
		"Total 2020": 2664
	},
	{
		"Date": "Nov 17",
		"Daily 2020": 33,
		"Daily 2020 avg": 32.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 326,
		"Total 2020": 2697
	},
	{
		"Date": "Nov 18",
		"Daily 2020": 28,
		"Daily 2020 avg": 28.9,
		"Daily 2021": null,
		"Daily 2021 avg": null,
		"Active 2020": 314,
		"Total 2020": 2725
	},
	{
		"Date": "Dec 1",
	},
	{
		"Date": "Dec 15"
	},
	{
		"Date": "Dec 28",
		"Total 2020": 3197
	}
];

export { fall2020, globaldate, todayinarray };