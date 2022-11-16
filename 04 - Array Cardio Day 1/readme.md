# 04 - Array cardio day 1

`console.table()`, `filter()`, `map()`, `sort()`, `reduce()`

### filter

[`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) creates a new array with all elements that pass the requirements implemented by the function.

- a compact way to return a value instead of an if else statement returning `true`.

```
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```

instead of

```
const fifteen = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
      return true;
     }
  });
```

- and `console.table()` instead of `console.log()` to display result in a more visually appealing way.

### map

[`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates a new array with the results of calling a provided function on every element in this array. (takes in an array, and modifies it and returns a new array)

- use `+` for concatenation in JS.

```
const fullName = inventors.map(inventor => inventor.first + ' ' + inventor.last);
```

above code in a ES6 syntax way:

```
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```

no need to use `+` for concatenation!

### sort

[`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sorts the elements of an array _in place_ and returns the array.

- the default sort order is according to string Unicode code points.

- `sort()` also accepts the specific function that defines the sort order.

```
const ordered = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);
```

    Conditional (ternary) operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

    - The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

We can also write it more shortly for an **ascending order** just like:

```
const ordered = inventors.sort((a, b) => a.year - b.year);
```

### reduce

[`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method applies a function against an accumulator and each value of the array(from left-to-right) to reduce it to a single value.

```
      const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0);
```

```
      const transport = data.reduce(function (obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
```

obj is an element passed in to the reduce() function which will gather data over each iteration. and the result is just reduced the "numbers" collection into the "total" variables. which means every time you find yourself going from a list of values to one value (reducing), then you can use this method.

```

const sum = [0, 1, 2, 3, 4].reduce((a, b) => a + b, 0);

console.log(sum); // 10

```

### combination of filter and map

```

const de = links
.map(link => link.textContent)
.filter(streetName => streetName.includes('de'));

```

- **[NOTICE]**: since `nodeList` is **NOT** an `array`, we need to turn it into an array first for manipulate array methods using `Array.from` like below

```

const links = Array.from(document.querySelectorAll('a'));

```

or the above code can also rewrite into ES6 syntax like:

```

const links = [...(document.querySelectorAll('a'))];

```

```

```
