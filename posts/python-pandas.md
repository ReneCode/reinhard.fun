---
title: Python / Pandas
date: "2022-04-01"
excerpt: "working with data using pandas"
cover_image: /images/posts/blue-1.svg
---

## Documentation

Detailed instructions here on [kaggle](https://www.kaggle.com)

- [Create, Read, Write DataFrame](https://www.kaggle.com/code/harrymiller/exercise-creating-reading-and-writing/edit)

- [Grouping and Sorting](https://www.kaggle.com/code/residentmario/grouping-and-sorting)

- [Data Types and Missing Values](https://www.kaggle.com/code/residentmario/data-types-and-missing-values)

## Pick a Colum / Series from a DataFrame

```
import pandas as pd

df = pd.read_csv('./data.csv')

names = df['name']
# or
names = df.name
```

## Sort rows in a DataFrame

```python
sorted = df.sort_values(by='price'. ascending=False)
```

## Grouping

```
grouped_with_count = df.groupby('city').size()
# or
grouped_with_count = df.groupby('city').city.count()
```

## Show distribution on values in a Series

```
prices = df.groupby('reviewer_name').points.mean()
prices.display()

count    19.000000
mean     88.233026
std       1.243610
min      85.855422
25%      87.323501
50%      88.536235
75%      88.975256
max      90.562551
Name: points, dtype: float64
```
