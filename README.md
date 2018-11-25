# Array pairer

[![CircleCI](https://circleci.com/gh/Wedin/array-pairer/tree/master.svg?style=shield)](https://circleci.com/gh/Wedin/array-pairer/tree/master) [![Coverage Status](https://coveralls.io/repos/github/Wedin/array-pairer/badge.svg?branch=master)](https://coveralls.io/github/Wedin/array-pairer?branch=master)

Generate a set of pairs from an array. One of the possible permutations of pairs will be returned.

## Installation

??

## Usage

```javascript
const createPairs = require("./array-pairer");

const pairs = createPairs(["a", "b", "c", "d"]);
console.log(pairs);
// [["b", "a"], ["a", "d"], ["d", "c"], ["c", "b"]];
```
