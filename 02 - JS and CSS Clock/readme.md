# 02 - JS + CSS Clock

pointers rotate animation, get times, changing pointer positions.

### Initialize pointer positions and rotation along the x-axis

`transform-origin: 100%; // transform-origin: right;`
transform-origin is where it will start the rotation from

`transition-timing-function: cubic-bezier();`

- `transform-origin` moves the origin of rotation along x-axis. check it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).

- `transition-timing-function` here is for the real clock **tic-tock**-like effect.

- `secondHand.style.transform`: transform property does a 2D or 3D transformation to an element. In CSS we can use transform property to rotate, scale, move, skew, etc., elements. We can do the same transformation through Javascript.

### Get time

`setInterval(setDate, 1000);`

-`setInterval` runs a function passed to it every interval specified (in this case 1000 ms). This serves to implement the second pointer's rotating effect in this challenge.

- create ` new Date()` to get `now.getSeconds()`, `now.getMinutes()` and `now.getHours()`.

- calculating angles of pointers

`const secondDegrees = ((seconds / 60) * 360) + 90;`

(the initial state of pointers are 90 degrees)

### Fix transition glitch

There is a glitch that occurs at every 0th second since our transition is set at 0.05s. When the hand transitions from the final state to the initial state, because the number of degrees reduce, the hand makes a (reverse) anti-clockwise motion to reach the 0 degree mark

To bypass it, we remove the `transition` property at the specified degrees (where glitch occurs) via JavaScript.

```
if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
else secondHand.style.transition = 'all 0.05s';

if (minsDegrees === 90) minHand.style.transition = 'all 0s';
else minHand.style.transition = 'all 0.1s';
```
