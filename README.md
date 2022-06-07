This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Slider using scroll-snap with navigation:

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
  margin-bottom: 2rem;
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
### Navigation (prev, next buttons):

One ref for container which is used by scrollBy method. Second ref reads box width in useEffect. That width is used by scrollBy to scroll when we click one of the buttons. There are cases when while scrolling to reach last slide, slider will only have to scroll small amount of pixels (that the space left). If we would use scrollBy to scroll to the previous slide, with the original width of the box it would scroll two slides. By diving width by 1.5 we always scroll to the slide we intended to.

### On window size change:

useEffect reads width only once. After changing size of the window it will stay the same. To change that you could write additional logic in useEffect to detect window resize change.
