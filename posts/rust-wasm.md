---
title: Rust wasm
date: "2021-12-28"
excerpt: "how to run rust in a web browser"
cover_image: /images/posts/red-1.svg
---

## Rust and WebAssembly

Inspired from: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)

Basic implementation of Rust functionality, that is called from a web browser.

Create a rust project

```
# install additional tool for compiling to wasm
$ cargo install wasm-pack

# create new project
$ cargo new --lib rust-wasm
```

Then you will find a basic `lib.rs` in the src folder.
There are two important parts:

- browser-functions that will be used by the rust programm should be listed here to generate a necessary bridge
- the rust-functions that can be called form the browser.

```
// src/lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    // js-functions provided by the browser could be used
    // inside rust
    pub fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    log("hello from rust");
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn api_calc(a: f64, b: f64) -> f64 {
    a + b
}
```

And the `Cargo.toml` file has some necessary lib and dependencies added.

```
// Cargo.toml
...
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.36"
```

Build the wasm package. This will create a ./pkg folder with the wasm-file and some js code inside.

```
$ wasm-pack build --target web
```

To use that web assembly it has to be loaded into the browser. This could be done in the index.html file.

```
<script type="module">
    import init, { greet, api_calc } from "./pkg/hello_wasm.js";
    init()
        .then(() => {
            console.log(api_calc(4,5));
            greet("WebAssembly");
        });
</script>
```
