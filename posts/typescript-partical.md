---
title: Partial in Typescript
date: "2022-01-08"
excerpt: How does Partial work
cover_image: /images/posts/red-1.svg
---

# Partial

Typescript has a quite usefull syntax `Partial` that is very helpfull to define an interface where not every property has to be set.

```
interface Person {
  name: string,
  age: number,
}

type PartialPerson = Partial<Person>

# this PartialPerson is equal to:

interface Person {
  name?: string,
  age?: number,
}
```

## nested properties

```
interface Person {
  name: string,
  age: number,
  adress: {
    city: string,
    country: string
  }
}

type PartialPerson = Partial<Person>

# this ParcialPerson is equal to:

interface Person {
  name?: string,
  age?: number,
  adress?: {
    city: string,
    country: string
  }
}

// this is invalid, because ``adress`` is not fully set:

const person: Partial<Person> = {
  name: "bob",
  adress: {
    country: "germany"
  }
}
```

## nested Partial

Thanks to the power of typescript there is a way to make that PartialPerson valid

```
type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

const person: RecursivePartial<Person> = {
  name: "bob",
  adress: {
    country: "germany"
  }
}
```
