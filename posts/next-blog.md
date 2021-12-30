---
title: Blog with Next
date: "2021-12-29"
excerpt: "create a blog"
cover_image: /images/posts/green-1.svg
---

## Build a blog with next

There is a great video on youtube [Static Blog With Next.js and Markdown](https://www.youtube.com/watch?v=MrjeefD8sac) that explains how to create a blog with next / react.

There the pages will be generated staticly, so on runtime only the html-pages will be delivered.

The images inside the /public/images/posts folder can also been svg-files.

## create a basic next app with typescript

```
npx create-next-app homepage --ts
```

## develop / write content

```
npx vercel dev
```

## deploy to vercel

```
npm vercel --prod

```
