This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Slider using scroll-snap with navigation.

### CSS TL;DR:
```
/* Original image width is 600x700 */
.container {
  scroll-snap-type: x mandatory;
  margin-inline-start: 80px;
  margin-inline-end: 80px;
}
.box {
  flex: 0 0 calc(33% - 1rem);
  scroll-snap-align: start;
}

/* For screens < 1920px */
.container {
  column-gap: 1.8rem;
  margin-inline-start: unset;
  margin-inline-end: unset;
  scroll-padding: 0px 48px;
  padding-inline-start: 48px;
  padding-inline-end: 48px;
  }
.box {
  flex: 0 0 calc(33.33% - 1.2rem);
}
```
