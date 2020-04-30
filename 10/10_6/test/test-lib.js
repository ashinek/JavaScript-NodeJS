var lib = require('../lib/lib');
var expect = require('chai').expect;

describe('applyDiscount()',function(){
    it('should return discounted price',function(){
       var result = lib.applyDiscount(100,10); 
       expect(result).to.equal(90);
    });
});