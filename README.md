## Knapsack

[knapsack](http://github.com/cmfatih/knapsack) is a Node.js module for 
resource allocation solving. See [the knapsack problem](http://en.wikipedia.org/wiki/Knapsack_problem).  

[![Build Status][travis-image]][travis-url] | [![NPM][npm-image]][npm-url]
---------- | ----------

### Installation

For latest release
```
npm install knapsack-js
```

For HEAD
```
git clone https://github.com/cmfatih/knapsack.git
```

### Usage

#### Test
```
npm test
```

#### Examples

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

### Changelog

For all notable changes see [CHANGELOG.md](https://github.com/cmfatih/knapsack/blob/master/CHANGELOG.md)

### License

Copyright (c) 2014 Fatih Cetinkaya (http://github.com/cmfatih/knapsack)  
Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.

[npm-url]: http://npmjs.org/package/knapsack-js
[npm-image]: https://badge.fury.io/js/knapsack-js.png

[travis-url]: https://travis-ci.org/cmfatih/knapsack
[travis-image]: https://travis-ci.org/cmfatih/knapsack.svg?branch=master