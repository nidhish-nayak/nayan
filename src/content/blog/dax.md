---
title: DAX - Time Intelligence Functions
description: >-
  Detailed information about some of the important DAX - Time Intelligence
  Functions 
pubDate: '2023-11-04T23:17:54+05:30'
heroImage: /dax-image.png
tags:
  - DAX
  - PowerBI
---
# Introduction to DAX:

DAX refers to Data Analysis Expression is a programming language used in Power BI to create Measures, Calculated Columns and custom tables. It is a combination of functions, constants, operators etc., that can be used in formulas and expressions to generate the required output values.

There are several categories in the DAX Functions such as :

1.Mathematical Functions

2.Statistical Functions

3.Text Functions

4.Logical Functions

5.Informational Functions

6.Time Intelligence Functions and Others

In this blog we will be covering some of the important Time Intelligence Functions:

## 1.TOTALMTD:

TOTALMTD function is a DAX expression that is used to calculate cumulative total over the specified to Month of the given data to last date.

Here's the syntax for the TOTALMTD function: 

```
TOTALMTD(<expression>,<dates>,[<filter>])
```

**Parameters: **

\- `<expression>`: This is the expression that you want to aggregate over time.

\- `<dates>`: This is the column containing the dates for which you want to calculate the cumulative total.

\- `[<filter>]` (optional): This is an optional argument that allows you to apply additional filters to the calculation.

Example Syntax : 

```
Total Revenue MTD = TOTALMTD(SUM(Sales[Revenue]), Sales[Date])
```

## 2.TOTALQTD :

TOTALQTD function is a DAX expression that is used to calculate cumulative total over the specified to QUARTER of the given data to last date.

Here's the syntax for the TOTALQTD function: 

```
TOTALQTD(<expression>,<dates>,[<filter>])
```

**Parameters: **

\- `<expression>`: This is the expression that you want to aggregate over time.

\- `<dates>`: This is the column containing the dates for which you want to calculate the cumulative total.

\- `[<filter>]` (optional): This is an optional argument that allows you to apply additional filters to the calculation.

Example Syntax : 

```
Total Revenue QTD = TOTALQTD(SUM(Sales[Revenue]), Sales[Date])
```

## 3.TOTALYTD :

TOTALYTD function is a DAX expression that is used to calculate cumulative total over the specified to YEAR of the given data to last date.

Here's the syntax for the TOTALYTD function: 

```
TOTALYTD(<expression>,<dates>,[<filter>])
```

**Parameters: **

\- `<expression>`: This is the expression that you want to aggregate over time.

\- `<dates>`: This is the column containing the dates for which you want to calculate the cumulative total.

\- `[<filter>]` (optional): This is an optional argument that allows you to apply additional filters to the calculation.

Example Syntax : 

```
Total Revenue YTD = TOTALYTD(SUM(Sales[Revenue]), Sales[Date])
```

## 4.SAMEPERIODLASTYEAR :

SAMEPERIODLASTYEAR function is a DAX expression that is used to retrieve the dates of the last year. This function is useful for calculating year-to-year growth.

Here's the syntax for the SAMEPERIODLASTYEAR function:

```
SAMEPERIODLASTYEAR(<dates>)
```

**parameters:**

`<dates>`: This is the column or table that contains the dates for which you want to get the corresponding dates in the previous year.

Example Syntax :

```sql
Total Revenue This Year = SUM(Sales[Revenue])

Total Revenue Last Year = 
CALCULATE(
    SUM(Sales[Revenue]),
    SAMEPERIODLASTYEAR(Sales[Date])
)
```

## 5.DATESINPERIOD :

DATESINPERIOD function is a DAX expression that is used to generate the table of specific date period.

Here is the syntax for the DATESINPERIOD function:

```
DATESINPERIOD(<dates>, <start date>, <number of intervals>, <interval>)
```

**Parameters: **

`<dates>`: This is the column or table that contains the dates you want to use as a starting point.

`<start_date>`: This is the starting date for the period.

`<number_of_intervals>`: This is the number of intervals you want to include in the table.

`<interval>`: This is the type of interval you want to use, such as "day," "month," "quarter," or "year."
