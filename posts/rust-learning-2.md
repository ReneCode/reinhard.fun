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

## Tait as parameter

```rust
trait Summary {
  fn summarize() {...}
}

pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}

// item has to implement two traits
fn some_func(item: impl SomeTrait + OtherTrait) -> bool {
    item.some_function() && item.other_function()
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

## pattern matching on Option<> without moving

the `Some(ref p)` instead of `Some(p)` avoids moving the value.

```rust
let optional_point = Some(Point { x: 100, y: 200 });
match optional_point {
    Some(ref p) => println!("Co-ordinates are {},{}", p.x, p.y),
    _ => panic!("No match!"),
}
```

# Error

You should return a `Result<a, b>` if a function can create an error. `a` is the type of the ok value, and `b` is the type of the error value

```rust
pub fn total_cost(item_quantity: &str) -> Result<i32, ParseIntError> {
    let processing_fee = 1;
    let cost_per_item = 5;
    // that ? imideately leaves the function if parsing returns an error
    let qty = item_quantity.parse::<i32>()?;

    Ok(qty * cost_per_item + processing_fee)
}
```

If in a function several different errors can appear, than you can return `Result<a, Box<dyn Error>>>`

```rust
fn main() -> Result<(), Box<dyn Error>> {
  ...
}
```

# generics

Set the generic type T in `struct` and `impl`.

```rust
struct Wrapper<T> {
    value: T,
}

// TODO: Adapt the struct's implementation to be generic over the wrapped value.
impl<T> Wrapper<T> {
    fn new(value: T) -> Self {
        Wrapper { value }
    }
}
```

# lifetime

```rust
pub struct HighScores<'a> {
    scores: &'a [u32],
}

impl<'a> HighScores<'a> {
    pub fn new(scores: &'a [u32]) -> Self {
        HighScores { scores: scores }
    }
}
```

lifetime on functions

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```

# watch

```sh
cargo add cargo-watch
```

```sh
cargo watch -q -c -w src/ -x 'run -q'
# -q quiet
# -c clear
# -w folter to watch
# -x command to execute: cargo run -q


```

# useful crates

- serde
- serde_json
- thiserror
- anyhow
- tokio
