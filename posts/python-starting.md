---
title: Starting with Python
date: "2022-01-09"
excerpt: Start leraning Python
cover_image: /images/posts/green-1.svg
---

# Python

Get the basics on [Code adademy](https://www.codecademy.com/learn)

## Formating

```
str = "world"

# will concat to "hello world"
greeting = "hello %s" % (str)
```

### format numbers

```
# will set month to  01, 02, .... 09, 10, 12
month = "%02d" % (now.month)
```

## importing

```
from datetime import datetime
```

## Object, Instance

```
def isPair(obj):
  return isinstance(obj, Pair)

class Pair:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __repr__(self):
    return f'Pair: {self.x},{self.y}'

p = Pair(1,2)

# this is True
print(isPair(p))

# this is False
print(isPair(42))
```
