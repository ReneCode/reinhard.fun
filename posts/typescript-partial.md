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

// this PartialPerson is equal to:
interface Person {
  name?: string,
  age?: number,
}

// so "bob" without age is a valid person
const person: Partial<Person> = {
  name: "bob"
}
```

## nested properties

But what if the interface as nested properties ?

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

//this PartialPerson is equal to:
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
  [P in keyof T]?: RecursivePartial<T[P]>;
};

// this works fine :-)
const person: RecursivePartial<Person> = {
  name: "bob",
  adress: {
    country: "germany"
  }
}
```

## Thanks

this was found on [Stackoverflow](https://stackoverflow.com/questions/41980195/recursive-partialt-in-typescript?answertab=active#tab-top)
