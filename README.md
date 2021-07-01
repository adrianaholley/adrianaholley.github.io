# Texas Tech University COVID-19 Dashboard - [ttucovid19.com](https://www.ttucovid19.com/)
An interactive, mobile-compatible site that shows COVID spread over time. See projections, seven-day averages, data logged over time, and get your Texas Tech COVID fast facts. Made with React and Recharts.

### Motivation
The University's dashboard was underwhelming. Just one table with current numbers of total, active, and recovered COVID-19 cases. There was no way to see past data and analyze growth. It was not interactive, and there were no projections. 

![ttusite](https://user-images.githubusercontent.com/32581742/92298982-20fc2000-ef14-11ea-9df9-64c9df13b4a7.jpg)
_go.ttu.edu/coronavirus, as of September 4, 2020_

### Purpose
Exponential growth can come fast, and I was surprised to see many seemed unconcerned to learn there were 38 active COVID cases among Red Raiders just one week before classes began. With the help of the Wayback Machine, I was able to search through the Internet Archives for captures of past data updates. On August 25, a day with 148 total clases, I logged them in an Excel speadsheet, bar graphed them, and added an exponential regression curve. Even with so few data points, the projections were concerning. We could expect 538 cases by Labor Day! (We turned out to surpass that number 6 days early.) I shared my findings online, and Reddit users liked my analyses, often replying, "Doing God's work bro," and, "Appreciate you, bud." (Facebook users, not so much, with their replies of, "Stop trying to shut down the school!" and, "You have too much time on your hands!") As case totals grew, so did my frustration with the University. Students started reporting had attended class while positive, yet their classes continued in person. Dorm employees reported that positive residents were not being moved to quarantine dorms or hotels, and they were sharing bathrooms with upwards of 50 students. In statements, the school shifted too much blame onto students and lauded their own contact-tracing efforts--the same efforts that identify whether a contact is at low, moderate, or high risk of exposure but only notify the high-risk individuals, recommending they quarantine. My desire to spread awareness of concerning projections and room for improvement in Tech's COVID response is what led to this site: a visual analysis of COVID-19 growth with a pit spot to encourage others to expect more from Tech. 

## Features

### Mobile-web compatibility 
Different views are rendered depending on a person's device for each graph and the FAQ. The desktop graph features a 2.2:1 scale while the mobile view has a 1:1 scale. Further scrolling would show a section for notable dates and an explanation of the exponential regression line and its limits. The sections would be side-by-side on desktop, while stacked on mobile. 
| Desktop View  | Mobile View |
| ------------- | ------------- |
| ![totals-ss](https://user-images.githubusercontent.com/32581742/92300212-d0d68b00-ef1e-11ea-8fa6-5d8988298c1d.jpg) | ![20200905_021816](https://user-images.githubusercontent.com/32581742/92300352-d2ed1980-ef1f-11ea-8013-225dd3d117ce.jpg) |

### Tooltip shows bar graph and line graphs 
The tooltip shows the actual case counts for a date (if available), as well as what counts had originally been projected for that date, and when the projections were made.  
The solid curve signifies the most recent projection, while the dashed ones show previous projections. The line style rather than color was made to be more accessible to people with certain visual impairments. A label is below the graph title to show when the data was last updated. 
<p align="center"><img scale=50 src="https://user-images.githubusercontent.com/32581742/92300728-c7e7b880-ef22-11ea-820c-a21d93eae90a.png"/></p>

<p align="center"><i>A screenshot of the Total Reported Cases graph through September 4 showing the tooltip feature.</i></p>

### Bit.ly analytics for URL clicks and Google Analytics for site visits. 
This website was launched September 5. First insights to come September 12.

### FAQ with 2 responsive sections of accordian-style prompts
_Description and images coming soon_
