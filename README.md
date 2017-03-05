# Knapsack

[![NPM][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Knapsack is a module for resource allocation solving. See [wiki page](http://en.wikipedia.org/wiki/Knapsack_problem)
for more details.

## Installation

```
npm install knapsack-js
```

## Usage

```javascript
var knapsack = require('knapsack-js');

var items = [
      {"pear": 1},
      {"apple": 7},
      {"grape": 0},
      {"banana": 2},
      {"orange": "NA"},
      {"strawberry": 4},
      {"mandarin": null},
      {"durian": 1},
      {"peach": undefined},
      {}
    ];

knapsack.resolve(5, items);
// [ { strawberry: 4 }, { pear: 1 } ]

knapsack.resolve(1, items);
// [ { pear: 1 } ]

knapsack.resolve(7, items);
// [ { apple: 7 } ]

knapsack.resolve(15, items);
/*
[ { apple: 7 },
  { strawberry: 4 },
  { banana: 2 },
  { pear: 1 },
  { durian: 1 } ]
*/
```

### License

Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.

[npm-url]: http://npmjs.org/package/knapsack-js
[npm-image]: https://badge.fury.io/js/knapsack-js.svg

[travis-url]: https://travis-ci.org/devfacet/knapsack
[travis-image]: https://travis-ci.org/devfacet/knapsack.svg?branch=master
