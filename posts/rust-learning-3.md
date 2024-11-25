---
title: Learning Rust
date: "2024-11-25"
excerpt: Lerning Rust Part 3 / async
cover_image: /images/posts/orange-1.svg
---

## async / await

```rust
use gloo_timers::future::sleep;
use std::time::Duration;

async fn my_sleep(seconds: i32) {
    sleep(Duration::from_desc(seconds)).await
}

async fn main_async{
    // wait 3 seconds, then print "done"
    my_sleep(3).await
    println!("done");
}
```

## async / await with wasm-bindgen

just make the wasm-bindgen function async.
https://stackoverflow.com/questions/77717032/rust-wasm-how-to-wait-for-future-to-resolve

```rust
#[wasm_bindgen]
pub async fn read_async(id: String) -> Result<JsValue, JsValue> {
    sleep(Duration::from_secs(1)).await;
    let mut id = id.clone();
    id.push_str(" / async");
    Ok(JsValue::from_str(&id))
}
```

## multi-threading

with `spawn_local` you can just create a new thread.

```rust
#[wasm_bindgen]
pub fn add_project_to_indexdb(all_table_data: JsValue) {
    wasm_bindgen_futures::spawn_local(async move {
        ...
    });
}
```

If you need the result of the thread then wasm-bindgen helps with `future_to_promise`.
Be sure you really need threading. A simple `async fn foo()` is much easier.



```rust
#[wasm_bindgen]
pub fn open_project(&mut self) -> Promise {
    let future = async move {
        ...
        sleep(42).await;
        let result = true
        Ok(JsValue::from_bool(true))
    };
    future_to_promise(future)
}
```
