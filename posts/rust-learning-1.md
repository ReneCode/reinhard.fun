---
title: Learning Rust
date: "2022-01-05"
excerpt: Lerning Rust Part 1
cover_image: /images/posts/orange-1.svg
---

# Create a first Rust project

cargo is the package manager (like nuget, npm)

```
  create folder start_app with first
$ cargo new start_app

$ cargo run

  build executable in ./target/release folder
$ cargo build release
```

## Why Rust

- Performance ( similar to C, C++ )

- Reliability ( type safety, memory safety )

- Productivity ( documentation, build tool, formating)

## start coding

```
fn main() {
  let a = 42;
  println!("{}", a)
}
```

### imutability by default

```
  // mutate variable
  // compiling will produce nice error message
  let a = 42;
  a += 1;

error[E0384]: cannot assign twice to immutable variable `a`
 --> src/main.rs:6:5
  |
5 |     let a = 42;
  |         -
  |         |
  |         first assignment to `a`
  |         help: consider making this binding mutable: `mut a`
6 |     a += 1;
  |     ^^^^^^ cannot assign twice to immutable variable

```

```
  // this works
  let mut a = 42;
  a += 1;
```

## ownership

for managing memory.

- garbage collection (java script) => slow
- manualy memory management (C) => buggy

ownership will give you error on compile time (C produces errors on runtime)

- each value as one owner
- there is only one owner at a time

```
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;

    println!("{}", s1);     // error. ownership has moved to s2
}
```

references prevent of giving ownership

```
fn main() {
    let s1 = String::from("hello");
    let count = calc_len(&s1);

    println!("{} has len:{}", s1, count)
}

fn calc_len(name: &String) -> usize {
    name.len()
}
```

## slices

references of elements in a colllection of data

```
pub fn main() {
    let name = String::from("hello world");
    let first_word = &name[0..5];

    println!("{}", first_word)
}
```

```
pub fn main() {
    let name = String::from("hello world");
    let first_word = &name[0..5];
    name.clear();       // error: hello would be corrupt

    println!("{}", first_word)
}
```

## no implicit conversion

```
fn add(a: u32, b: u64) -> u64 {
    a + b     // error can't convert u32 to u64
}

fn add(a: u32, b: u64) -> u64 {
    u64::from(a) + b    // ok
}
```

## pattern matching

```
let input = "32";
let a:u32;
match input.trim().parse() {
  Ok(val) => a = val,
  Err(_err) => {
    println!("not a valid number");
    process::exit();
  }
}
```

## Documentation
