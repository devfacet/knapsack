/*
 * Knapsack
 * Copyright (c) 2014 Fatih Cetinkaya (http://github.com/cmfatih/knapsack)
 * For the full copyright and license information, please view the LICENSE.txt file.
 */

/* jslint node: true */
'use strict';

// Init the module
exports = module.exports = function() {

  // Resolves the given problem
  var resolve = function resolve(capacity, items) {

    var result  = [],
        leftCap = capacity,
        itemsFiltered;

    if(typeof capacity !== 'number')
      return false;

    if(!items || !(items instanceof Array))
      return false;

    // Resolve
    var item,
        itemKey,
        itemVal,
        itemObj;

    itemsFiltered = items.filter(function(value) {
      itemVal = (typeof value === 'object') ? value[Object.keys(value)[0]] : null;
      if(!isNaN(itemVal) && itemVal > 0 && itemVal <= capacity) {
        return true;
      } else {
        return false;
      }
    });
    itemsFiltered.sort(function(a, b) { return a[Object.keys(a)[0]] < b[Object.keys(b)[0]]; });

    for(item in itemsFiltered) {
      if(itemsFiltered.hasOwnProperty(item)) {
        itemKey = Object.keys(itemsFiltered[item])[0];
        itemVal = itemsFiltered[item][itemKey];

        if((leftCap-itemVal) >= 0) {
          leftCap = leftCap-itemVal;

          itemObj = Object.create(null);
          itemObj[itemKey] = itemVal;
          result.push(itemObj);

          delete itemsFiltered[item];

          if(leftCap <= 0) break;
        }
      }
    }

    return result;
  };

  // Return
  return {
    resolve: resolve
  };
}();