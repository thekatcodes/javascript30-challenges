# 08 - Fun with HTML5 Canvas

Canvas, HSL, mouse events

### Canvas

[`Canvas`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) is added in HTML5, the HTML `<canvas>` element can be used to draw graphics via scripting in JavaScript. It's also used by WebGL to draw hardware-accelerated 3D.

-   Implementing basic Canvas

    -   in HTML

        ```
        <canvas id="draw" width="800" height="800"></canvas>
        ```

    -   in JavaScript

        ```
        const canvas = document.querySelector('#draw');
        const ctx = canvas.getContext('2d');
        ```

in our tutorial we use these:

-   Properties

    -   `ctx.lineCap`: the shape of the stroke, `round` | `butt` | `square`.
    -   `ctx.lineJoin`: determines how two connecting segments (of lines, arcs or curves) with non-zero lengths in a shape are joined together), `bevel` | `round` | `miter`.
    -   `ctx.lineWidth`: sets the thickness of lines in space units.
    -   `ctx.strokeStyle`: specifies the color or style to use for the lines around shapes. The default is `#000` (black).
    -   `ctx.fillStyle`: specifies the color or style to use inside shapes. The default is `#000` (black).

-   Methods
    -   `ctx.beginPath()`: starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
    -   `ctx.stroke()`: strokes the current or given path with the current stroke style using the non-zero winding rule. -`ctx.moveTo()`: moves the starting point of a new sub-path to the (x, y) coordinates. -`ctx.lineTo()`: connects the last point in the sub-path to the x, y coordinates with a straight line(but does not actually draw it).

### HSL

[mothereffinghsl.com](http://mothereffinghsl.com/) website shows you what HSL looks like
The [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) is the Hue-Saturation-Lightness model using the `hsl()` function notation.

-   H (hue): angle of the color circle.
    -   value `0~360`
    -   red = 0 = 360
    -   green = 120
    -   blue = 240
-   S (saturation): represented as percentages
    -   value `0~1` or percentages
    -   100% is full saturation
    -   0% is a shade of grey
-   L (lightness): represented as percentages
    -   value `0~1` or percentages
    -   100% lightness is white
    -   0% lightness is black
    -   50% lightness is "normal"

```
hsl(0,  100%,50%)    /* red  */
hsl(120,100%,50%)    /* green */
hsl(240,100%,50%)    /* blue */
```

The advantage of HSL over RGB is that it is far more intuitive: you can guess at the colors you want, and then tweak. It is also easier to create sets of matching colors (by keeping the hue the same and varying the lightness/darkness, and saturation).

-   how to implement a rainbow-like gradient color?

```
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
hue++;
if (hue >= 360) {
  hue = 0;
}
```

↑↑↑ will restore its value to 0 when it is more or equal to 360 to restart gradient.

### Drawing

-   add eventListeners

```
let isDrawing = false;

canvas.addEventListener('mousedown', isDrawing = true);        // draw when mouse down
canvas.addEventListener('mousemove', draw);                    // draw when mouse move
canvas.addEventListener('mouseup', () => isDrawing = false);   // stop drawing when mouse up
canvas.addEventListener('mouseout', () => isDrawing = false);  // stop drawing when mouse out of canvas
```

-   defining drawing lines

```
ctx.beginPath();
// start from
ctx.moveTo(lastX, lastY);
// go to
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();

[lastX, lastY] = [e.offsetX, e.offsetY];
```

**[NOTICE]**: `[lastX, lastY] = [e.offsetX, e.offsetY]`

-   it must be at the bottom of "go to" section in the function
-   this is in the ES6 syntax to define multiple variables in one statement, it's the same as:

    ```
    lastX = e.offsetX;
    lastY = e.offsetY;
    ```

-   ↑↑↑ this method is called [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
-   example:

    ```
    var a, b;

    [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2
    ```

-   controlling the line width of strokes

```
if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
  direction = !direction;
}

if(direction) {
  ctx.lineWidth++;
} else {
  ctx.lineWidth--;
}
```

**Additional note**: drawing on mobile

try

```
// dealing with touch screen
if (e.type != "mousemove") {
  x = e.changedTouches[0].clientX;
  y = e.changedTouches[0].clientY;
}
```
