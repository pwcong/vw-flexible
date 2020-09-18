# VW Flexible

A scalable layout scheme implemented using `viewport`.

### Quick Start

#### Install

```sh
yarn add vw-flexible
# or
npm install vw-flexible
```

#### Use

```ts
import VW from 'vw-flexible';

new VW({
  // design draft size
  width: 360,
  // set 1rem = 10px
  rem2px: 10,
});
```

```html
<style>
  .block {
    background-color: red;
    width: 18rem;
    height: 18rem;
  }
</style>

<div class="container">
  <div class="block"></div>
</div>
```
