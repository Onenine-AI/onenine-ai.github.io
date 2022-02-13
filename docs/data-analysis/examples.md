---
id: data-analysis-examples
title: Data Analysis Examples
sidebar_label: Data Analysis Examples
slug: /data-analysis/data-analysis-examples/
sidebar_position: 3
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

The One Click data analysis service provides two types of reports such as Detailed and Summary reports. 
## Detailed and Summary Reports
The detailed report provides analysis in all the 5 grounds such as Data Overview, Variable Analysis, Interactions, Correlations, and Missing Value Analysis while summary analysis provides analysis only under three grounds namely Data Overview, Variable Analysis and Missing Value Analysis. Summary report can give a quick overview within in lesser time while Detailed report gives an in-depth intuition about the data but takes a little more time than Summary Reports.

| Detailed Report | Summary Report |
| ----------------| -------------- |
| Detailed reports provides analysis in all the 5 grounds such as  <ul><li>[Data Overview](/docs/data-analysis/one-click-data-analysis#data-overview)</li> <li>[Variable Analysis](/docs/data-analysis/one-click-data-analysis#variable-analysis)</li> <li>[Interactions](/docs/data-analysis/one-click-data-analysis#interactions)</li> <li>[Correlations](/docs/data-analysis/one-click-data-analysis#correlations)</li> <li>[Missing Value Analysis](/docs/data-analysis/one-click-data-analysis#missing-value-analysis)</li> </ul> | Summary reports provides analysis in only 3 specific grounds such as <ul><li>[Data Overview](/docs/data-analysis/one-click-data-analysis#data-overview)</li> <li>[Variable Analysis](/docs/data-analysis/one-click-data-analysis#variable-analysis)</li> <li>[Missing Value Analysis](/docs/data-analysis/one-click-data-analysis#missing-value-analysis)</li> </ul>|
| Detailed report takes more time for computation compared to summary reports since the areas of exploration is more | Summary reports can give a quick overview of the within in lesser time |   

## Steps
1.	Go to OneNine Platform
2.	Click on <Highlight color="#1877F2">Data Exploration</Highlight> > <Highlight color="#1877F2">Exploratory Data Analysis</Highlight> in the sidebar
3.	Enter the project name
4.	Upload the project file. 
    You can upload the project file in 3 different ways
    - Upload data as a CSV file 
    - Select Data from a database
    - Paste the Github Raw or S3 URL of the data.
5.	Select the Report Type
6.	Click on <Highlight color="#1877F2">Upload</Highlight> to see the preview of the data
7.	Click on <Highlight color="#1877F2">Next</Highlight> to start the generation of the EDA report