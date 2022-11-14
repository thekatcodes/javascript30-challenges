# 03 - CSS Variables and JS

`data-` attribute, `:root`, CSS Variables definition `var(--xxx)`, `filter: blur()`, `change` event and `mousemove` event

- [`dataset`](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/dataset) property allows to custom data attributes like `data-xxx` on the element, either in HTML or in the DOM. It's a map of **DOMString**, one entry for each custom data attribute.

- once we declare CSS Variables, then we can add it to our specific elements, like `img` below, check how to declare it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

- CSS Variable declare syntax is `--`, just like `$` in SASS.

```
:root {
  --spacing: 10px;
}

img {
  padding: var(--spacing);
}
```

- CSS `filter` property applies graphical effects like blur or color shift to an element such as `blur`, `bightness`, `contrast` etc, more info [here](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).

- NodeList v.s. Array : NodeList is **NOT** an Array. You can open the `proto` in dev tool and see its methods, there are `forEach()`, `keys()`..., and Array's prototype has `map()`, `pop()`...etc.

### Getting started

- `const inputs = document.querySelectorAll(`.controls input`);`-> select all three inputs (base, spacing, blur) so that when they change we can then update the css variables whicch in turn will update the screen

### Handling suffix with dataset

use `dataset` to deal with suffix `px` by adding `data-sizing: px` as an attribute on input element.

```
<input type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
```

and the get the suffix by `dataset.sizing` via JS

```
const suffix = this.dataset.sizing || '';
```

and don't forget a condition with `|| ''` for `<input type=color>` which has no `px`.

### Changing CSS property via JS

`document.documentElement` is the root element in JS, so we can change the global CSS variables by `setProperty` to `style` like so for example:

```
document.documentElement.style.setProperty('--base', '#000');
```
