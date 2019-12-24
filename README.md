# starwars-names

[![Travis (.org)](https://img.shields.io/travis/cxc421/starwars-names?style=flat-square)](https://travis-ci.org/cxc421/starwars-names)
[![Codecov](https://img.shields.io/codecov/c/github/cxc421/starwars-names?style=flat-square)](https://codecov.io/gh/cxc421/starwars-names)
[![npm (scoped)](https://img.shields.io/npm/v/@chrischuang/starwars-names?style=flat-square)](http://npm.im/@chrischuang/starwars-names)
[![npm](https://img.shields.io/npm/dm/@chrischuang/starwars-names?style=flat-square)](https://npm-stat.com/charts.html?package=%40chrischuang%2Fstarwars-names&from=2019-12-23)
[![NPM](https://img.shields.io/npm/l/@chrischuang/starwars-names?style=flat-square)](https://opensource.org/licenses/MIT)

## Installation

In a browser:

```html
<script src="https://unpkg.com/@chrischuang/starwars-names@latest/dist/index.umd.min.js"></script>
```

Using npm:

```shell
$ npm i -S @chrischuang/starwars-names
```

## Usage

In a browser:

```js
var allPossibleNames = starWarsNames.all;
var randomName = starWarsNames.random();
```

In Node.js:

```js
const starWarsName = require("@chrischuang/starwars-names");

const allPossibleNames = starWarsNames.all;
const randomName = starWarsNames.random();
```
