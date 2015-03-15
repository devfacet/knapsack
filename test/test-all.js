/* jslint node: true */
/* global describe: false, it: false */
'use strict';

var knapsack = require('../'),
    expect   = require('chai').expect;

// Tests

describe('knapsack', function() {

  // resolve
  describe('resolve()', function() {
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

    it("should return resolved items (capacity: 5)", function(done) {
      var resolvedItems = knapsack.resolve(5, items);
      expect(resolvedItems).to.be.a('array');
      expect(resolvedItems).to.have.property('length').to.be.equal(2);
      expect(resolvedItems).to.deep.equal([{strawberry: 4}, {pear: 1}]);
      done();
    });

    it("should return resolved items (capacity: 1)", function(done) {
      var resolvedItems = knapsack.resolve(1, items);
      expect(resolvedItems).to.be.a('array');
      expect(resolvedItems).to.have.property('length').to.be.equal(1);
      expect(resolvedItems).to.deep.equal([{pear: 1}]);
      done();
    });

    it("should return resolved items (capacity: 7)", function(done) {
      var resolvedItems = knapsack.resolve(7, items);
      expect(resolvedItems).to.be.a('array');
      expect(resolvedItems).to.have.property('length').to.be.equal(1);
      expect(resolvedItems).to.deep.equal([{apple: 7}]);
      done();
    });

    it("should return resolved items (capacity: 15)", function(done) {
      var resolvedItems = knapsack.resolve(15, items);
      expect(resolvedItems).to.be.a('array');
      expect(resolvedItems).to.have.property('length').to.be.equal(5);
      expect(resolvedItems).to.deep.equal([{apple: 7}, {strawberry: 4}, {banana: 2}, {pear: 1}, {durian: 1}]);
      done();
    });

    it("should fail to return resolved items (missing capacity)", function(done) {
      var resolvedItems = knapsack.resolve(items);
      expect(resolvedItems).to.be.equal(false);
      done();
    });

    it("should fail to return resolved items (missing items)", function(done) {
      var resolvedItems = knapsack.resolve(5);
      expect(resolvedItems).to.be.equal(false);
      done();
    });
  });
});