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
