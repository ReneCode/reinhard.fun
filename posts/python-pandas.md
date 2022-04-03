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

- [Renaming and combining](https://www.kaggle.com/code/residentmario/renaming-and-combining)

## Display data

```
df = pd.read_csv('./data.csv')
df.head()

# show all
display(df)
```

## Pick a Colum / Series from a DataFrame

```
import pandas as pd

df = pd.read_csv('./data.csv')

names = df['name']
# or
names = df.name

# add a column with fixed value
df['new_col'] = 'my_value'
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

### grouping in a series

```
grouped_with_counts = df.city.value_counts()

#  london  12
#  toronto 53
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

## Filter

```
expensive = df[ df.price > 100 ]

# combine filter  and = &  or = |
italian, expensive = df[ (df.country == 'italy') & (df.price > 100) ]
```

## Show data type

```
# get type
data_type = df['points'].dtype

# convert type
new_type = df.points.astype('str')

```

# Check NaN isnull

```
# filter is array of True, False
filter = pd.isnull(df.price)

# use filter
all_not_null = df[pd.isnotnull(df.price)]
```

## replace NaN values with other value

```
# get series with NaN replaced
cities_with_name = df.fillna('Unknown')

# or replace in a data frame
df.city = df.fillna('Unknown')
```

### replace values

```
df.city.replace('NY', 'New York')
```

## rename column

```
new_df = df.rename(columns={'timestamp [UTC]': 'timestamp'})

# rename index
reindexed = reviews.rename_axis('wines', axis='rows')
```

## Concat, Join

```
# df_A and df_B have to be same scheme
concated = pd.concat([df_A, df_B])
```

```
# join together using the index
left = df_X.set_index('project_id')
right = df_Y.set_index('prj_id')
# optional rename columns to make them unique
joined = left.join(right, lsuffix='_X', rsuffix='_Y')
```
