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
  // set 100vw = 10rem
  totalRem: 10,
});
```

```html
<style>
  .block {
    background-color: red;
    width: 5rem;
    height: 5rem;
  }
</style>

<div class="container">
  <div class="block"></div>
</div>
```
