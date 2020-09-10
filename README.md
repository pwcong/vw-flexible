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
  width: 640,
});
```

```html
<style>
  #app {
    width: 640px;
    margin: 0 auto;
  }
</style>

<div id="app"></div>
```
