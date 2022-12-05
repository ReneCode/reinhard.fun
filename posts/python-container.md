---
title: Python Container
date: "2022-12-05"
excerpt: Different containers in Phthon
cover_image: /images/posts/green-1.svg
---

# List

Basic Array of different types of elements. Its elemebts are accessible via index.

adding elements

```
numbers = []

# add single elemts
numbers.append(3)
numbers.append(5)
numbers.append(7)
# numbers = [3,5,7]

# add several elements
a = [1,2,3]
numbers.extend(a)
# = numbers = [3,5,7,1,2,3]
```

accessing elemts

```
numbers = [3,4,5]

threee = numbers[0]
# three = 3

four_five = numbers[1:3]
# four_five = [4,5]

last = numbers[-1]
# last = 5

numbers = [0,1,2,3,4,5,6,7]
a = numbers[3:]
# a = [3,4,5,6,7]

b = numbers[:3]
# b = [0,1,2]
```

remove elements

```
numbers = [3,4,5]
last = numbers.pop()
# last = 5
# numbers = [3,4]

```

# Dictionary

Key-Value pairs. Key is unique.

```
numbers = {}
numbers["bob"] = "123-456"
numbers["alice"] = "432-543"

alice_number = numbers["alice"]
# alice_number = "432-543"

# the keys are NOT sorted
keys = numbers.keys()
# keys = ["alice", "bob"]

contains_susan = "susan" in numbers.keys()
# contains_susan = False
```
