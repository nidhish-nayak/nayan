---
title: DAX
description: Uses of DAX
pubDate: "2023-11-04T23:17:54+05:30"
heroImage: /blog-placeholder-5.jpg
tags:
  - DAX
  - PowerBI
---

### DAX stands for Data Analysis Expression

```sql
--  SAMPLE returns a given number of rows from a table expression.
--  SAMPLE can be used with tables.
--  The sort order can be defined by one or more columns.
EVALUATE
    SAMPLE ( 5, 'Product', 'Product'[Color], ASC, 'Product'[Brand], ASC )
ORDER BY 'Product'[Color] ASC, 'Product'[Brand] ASC

EVALUATE
    SAMPLE ( 5, 'Product', 'Product'[Brand], ASC, 'Product'[Color], ASC )
ORDER BY 'Product'[Brand] ASC, 'Product'[Color] ASC

-- The results are different because the sort order is by Color and then Brand
-- in the first query, and by Brand and Color in the second query
```
