const assert = require('assert')
const should = require('chai').should()

describe('Basic Mocha Test', function(){
  
  it('should throw errors', function(){
    assert.equal(3,3)
  })

  it('should assertion deal with objects', function(){
    const obj = {name: 'Longoria', gender: 'male'};
    const objB = {name: 'Longoria', gender: 'male'};

    obj.should.have.property('name')
    obj.should.have.property('name').equal('Longoria')
    obj.should.deep.equal(objB)
  })

  it('should assertion allow testing null', function(){
    const iAmNull = null
    should.not.exist(iAmNull)
  })
})