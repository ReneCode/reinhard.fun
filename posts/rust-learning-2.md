---
title: Learning Rust
date: "2023-11-23"
excerpt: Lerning Rust Part 2
cover_image: /images/posts/orange-1.svg
---

## Clippy

useful hints to make the code better.

```
cargo clippy
```

### Types

replace `&Vec<i32>` with `&[i32]`

```
// change this
fn foo(numbers: &Vec<i32>) {
...
}

// to that
fn foo(numbers: &[i32]) {
...
}
```

## usefull traits

### From trait

To convert a &str into you struct.

```rust
struct MyData {
  value: i32
}

impl std::convert::From(&str) for MyData {
  fn from(value &str) -> Self {
    ...
  }
}
```

then you can make this:

```rust
let line: &str = ....
let data = MyData::from(line);

```

## pattern matching on vectors

If you want to match on different vectors you
have to compare is as_slice().

```rust
let counts: Vec<i32> = get_counts(cards);
let result = match counts.as_slice() {
    [5] => Type::FiveOfKind,
    [4, 1] => Type::FourOfKind,
    [3, 2] => Type::FullHouse,
    [3, 1, 1] => Type::ThreeOfKind,
    [2, 2, 1] => Type::TwoPair,
    [2, 1, 1, 1] => Type::OnePair,
    [1, 1, 1, 1, 1] => Type::HighCard,
    _ => {
        panic!("bad counts")
    }
};
```

## pattern matchin on multiple cases

```rust
let cmd = ...
match cmd {
  'C' | 'c' => {
    // this will be executed on 'C' or 'c'
   }
  'x' => { }
}
```
