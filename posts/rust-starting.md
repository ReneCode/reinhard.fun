---
title: Starting with Rust
date: "2022-01-01"
excerpt: Start lerning Rust
cover_image: /images/posts/yellow-1.svg
---

## Rust by Example

[Rust by Example](https://doc.rust-lang.org/rust-by-example/index.html)

# Rust

## Formatting

```rust
format("Hello {}", world);   // Hello world
format("{?}", value);        // use the #[derive(Debug)]  for value
format("{:?}", enumValue)    // use the ordinal name of enumValue
```

## String

struct should hold String as member, but should return &str

```rust
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

## enum

```rust
enum Color {
  Red,
  Green,
  Blue
}

let color = Color::Red;
```

### Helpful crates

`int-enum` and `enum-iterator`

```rust
use enum_iterator::IntoEnumIterator;
use int_enum::IntEnum;

#[repr(usize)]
#[derive(Clone, Copy, IntoEnumIterator, IntEnum)]
enum Color {
  Red = 2,
  Green = 5,
  Blue = 6,
}

# iterate in order of the enums
for col in Color::into_enum_iter() {
  ...
}

# format to string
let color = Color::Blue;
format!("{:?}", color)    // Blue

# map enum to int
let color = Color::Red;
let colorNumber = color.int_value();   // 2

# map int to enum
let value = 2;
match Color::from_int(value) {
  Ok(color) => {  this is a enum value },
  Err(_) => { value can't be mapped to enum }
}
```

## Iterator

```rust
let numbers = vec![1,2,3,4,5,6];
for num in numbers.iter() {
  println!("{}", num)   // called for each element
}
```

## Range

```rust
let count  = 5;
for i in 0..count {
  // i = 0,1,2,3,4
}

for j in 0..=count {
  // i = 0,1,2,3,4,5
}
```

## immmutable data structure

Use the crate:
[ `im` / `im-c`](https://docs.rs/im/latest/im/).
It currently works with:

- HashMap
- HashSet
- OrdMap
- OrdSet
- Vector
