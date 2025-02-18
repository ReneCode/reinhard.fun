---
title: Learning Rust
date: "2025-02-18"
excerpt: Lerning Rust Part 4 / singleton
cover_image: /images/posts/orange-1.svg
---

## Singleton

Add `lazy_static` to Cargo.toml

```toml
[dependencies]
lazy_static = "1.4.0"
```

Implementation

```rust
use lazy_static::lazy_static;
use std::sync::Mutex;

lazy_static! {
    static ref INSTANCE: Mutex<Singleton> = Mutex::new(Singleton::new());
}

pub struct Singleton {
    // Add your fields here
    data: i32,
}

impl Singleton {
    // Private constructor to prevent direct instantiation
    fn new() -> Self {
        Singleton { data: 0 }
    }

    // Public method to access the singleton instance
    pub fn instance() -> &'static Mutex<Singleton> {
        &INSTANCE
    }

    // Example method to modify or access data
    pub fn set_data(&mut self, value: i32) {
        self.data = value;
    }

    pub fn get_data(&self) -> i32 {
        self.data
    }
}

fn main() {
    // Access the singleton instance
    let mut instance = Singleton::instance().lock().unwrap();
    instance.set_data(42);

    // Access the data
    println!("Data: {}", instance.get_data());
}
```
