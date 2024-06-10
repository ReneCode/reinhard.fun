---
title: TypeScript advanced
date: "2024-06-08"
excerpt: "advanced features of TypeScript"
cover_image: /images/posts/red-1.svg
---

# as const

You can freeze an value behind a value-reference. It makes an value completely readonly.

```ts
const a = [1, 2];

a = ["hello"]; // that throws an error

a[1] = 7; // but that is does not throw an error
```

If you want to create a fully readonly variable, then use `as const`

```ts
const a = [1, 2] as const;

a = ["hello"]; // that throws an error

a[1] = 7; // that throws an error

// also useful for objects
const color = { r: 128, g: 0, b: 0 } as const;
color.r = 255; //  that throws an error
```

# get type from an object

You can get the type of a property of an object and it will automaticly change if the
property type changes

```ts
type Cat = {
  id: string;
  name: string;
};

type Dog = {
  id: number;
  name: string;
};

// catId is from type: string
const catId: Cat["id"] = "42";
// dogId is from type: number
const dogId: Dog["id"] = 42;
```

# omit

You can reduce the list of properties for an object

```ts
type House = {
  name: string;
  age: number;
  price: number;
};

type HouseWithoutPrice = Omit<House, "price">;

const house: HouseWithoutPrice = {
  name: "garden-house",
  age: 20,
};
```
