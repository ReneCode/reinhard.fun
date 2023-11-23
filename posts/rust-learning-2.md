---
title: Learning Rust
date: "2023-11-23"
excerpt: Lerning Rust Part 2
cover_image: /images/posts/orange-1.svg
---

## Types, advice from cargo clippy

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
