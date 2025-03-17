---
title: Testing in Rust
date: "2024-03-24"
excerpt: Testing Rust
cover_image: /images/posts/orange-1.svg
---

# standard testing

```rust

#[cfg(test)]
mod tests {

    use super::*;


  #[test]
  fn test_my_function() {
    let result = my_function();
    assert_eq!(result, 42)
  }
```

## How to deal with f64

If you work with floating point numbers f32 or f64 then assert_eq! could fail because of rounding erros.

```sh
assertion `left == right` failed
  left: 1.0000000000000002
  right: 1.0
```

Fortunately there is a crate that helps: **approx**.

```
crate add approx
```

In the root crate of your project (main.rs or lib.rs) you have to insert:

```rust
#[macro_use]
extern crate approx;

// using in the test
  #[test]
  fn test_half() {
    let result = half(42.0);
    relativee_eq!(result, 21.0)
  }
```

More about **approx** can be found [here:](https://docs.rs/approx/latest/)

## println! during the test

If you print out something during the test you will not see it when running.
But there is a flag show the outputs:

`cargo test -- --nocapture`

or in watch mode and keeping the coloring:

`cargo watch -x "test -- --nocapture --color always"`

More about **display options** can be found [here:](https://doc.rust-lang.org/cargo/commands/cargo-test.html#display-options)

## measure time during test

```rust
#[test]
fn test_with_time() {
  let start = ProcessTime::try_now().expect("Getting process time failed");
  // ... do some testing
  let cpu_time: Duration = start.try_elapsed().expect("Getting process time failed");
    println!(" {:?}", cpu_time);
}
```

Run the tests with

`cargo test -- --nocapture`

to see the output of the cpu time

## test if a function panics

```rust
#[test]
#[should_panic]
fn greater_than_100() {
    Guess::new(200);
}
```
