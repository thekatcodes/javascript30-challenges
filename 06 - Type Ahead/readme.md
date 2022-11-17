# 06 - Ajax Type Ahead

- `change` & `keyup` events
- Promise: `fetch()`, `then()`, `json()`
- Array: `filter()`, `map()`, `push()`, `join()`
- Regexp: `match()`, `replace()`

### `change` & `keyup` events

`change` can also be an event in `addEventListener` for inputs, but the `change` only fires when we step outside that input (in this case, the search input box). Therefore, we need to tie the element up with the `keyup` event as well for better user experience.

```
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```

### Fetch API

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but the new API provides a more powerful and flexible feature set.

[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) is one of the GlobalFetch API methods used to start the process of fetching a resource.

```
const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

fetch(endpoint)
    .then((cluster) => cluster.json())
 .then((data) => cities.push(...data));
```

### JSON

read more here: (https://www.w3schools.com/js/js_json.asp)
JSON stands for JavaScript Object Notation

[Response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)

- The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

- Note: even though the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

### ES6 Spread syntax

[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) allows an expression to be expanded in places where multiple arguments(for function calls) or multiple elements(for array literals) or multiple variables(for destructing assignment) are expected.

Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

For function arguments list:

```
myFunction(...iterableObj);
```

For array literals:

```
[...iterableObj, 4, 5, 6]
```

For object literals:

```
({ ...obj, key: 'value' })
```

### RegExp

read more about Regular Expressions here: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

```
const regex = new RegExp(wordToMatch, 'gi');
```

`g` after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.
`i` is for **case insensitive**,
`wordToMatch` is our variable, then we add `element.match(regex)` or `element.replace(regex)`.

in RegExp, the `match()` executes for matching what we search, and then combine with `Array.filter()` so that we can filter out all the results that we exepect.

- `match()` returns an array containing all of the matches, including capturing groups, or null if no match is found.

### Additional notes

Reminder: In JavaScript, "this" keyword refers to the object it belongs to.

forEach() vs map(): (https://code.tutsplus.com/tutorials/javascript-map-vs-foreach-when-to-use-each-one--cms-38365)

- The forEach method allows you to execute a function by iterating through each element of an array. It’s important to note that the forEach method doesn’t return anything, and thus, if you try to get the return value of the forEach method, you will get undefined.

- The map method is very similar to the forEach method—it allows you to execute a function for each element of an array. But the difference is that the map method creates a new array using the return values of this function.

Format number with commas: (https://sebhastian.com/javascript-format-number-commas/)

```
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```
