# 05 - Flex Panels Image Gallery

CSS `flex`

JS `toggle()`: toggle between adding and removing a class name from an element with JavaScript.

JS `includes()`: this method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

JS `transitionend`: transitionend event is fired when a CSS transition has completed

### CSS flex

[CSS Flexible box layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

there are bunch of articles about CSS flexbox layout, this one explains it well [this one](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### includes()

> Safari transitionend event.propertyName === flex \*/
>
> Chrome + FF transitionend event.propertyName === flex-grow \*/

since different browsers use different words, we use `.includes()` to find the key word `'flex'` so it can be matched across browsers

```
if (e.propertyName.includes('flex')) {
  this.classList.toggle('open-active');
}
```
