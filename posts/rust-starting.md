---
title: Starting with Rust
date: "2022-01-01"
excerpt: Start lerning Rust
cover_image: /images/posts/yellow-1.svg
---

## Rust by Example

[Rust by Example](https://doc.rust-lang.org/rust-by-example/index.html)

## Rust

struct should hold String as member, but should return &str

```
pub struct User {
  name: String
}

impl User {
  pub fn new(name:String) {
    User { name }
  }

  pub fn name(&self) {
    &self.name
  }
}
```
