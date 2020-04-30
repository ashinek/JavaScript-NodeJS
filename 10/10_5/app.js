var should = require('chai').should();
var expect = require('chai').expect;

var x = 5;

var list = [1,44,2,4]

expect(x).to.equal(5);

expect(list).to.have.length(4);