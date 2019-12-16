const assert = require('assert')
const authController = require('../controllers/auth.controller')
const chai =  require('chai')
const expect = chai.expect
const should = chai.should()
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

describe('AuthController', ()=>{
  describe('IsAuthorized', ()=>{
    
    it('when the role is not existed, it should return false', ()=>{
      const isAuthorized = authController.isAuthorized(['user'], 'admin')
      //assert.equal(isAuthorized, false)
      //expect(isAuthorized).to.be.false
      isAuthorized.should.to.be.false
    })

    it('when the role is existed, it should return true', ()=>{
      const isAuthorized = authController.isAuthorized(['user', 'admin'], 'admin')
      //assert.equal(isAuthorized, true)
      //expect(isAuthorized).to.be.true
      isAuthorized.should.to.be.true
    })

  })

  describe('isAuthorizedAsync', function(){
    
    it('when the role is not existed, it should return false', function(done){
      //this.timeout(2200)
      authController.isAuthorizedAsync(['user'], 'admin', (isAuth)=>{
        assert.equal(isAuth, false)
        done()
      })
    })

    it('when the role is existed, it should return true', function(done){
      //this.timeout(2200)
      authController.isAuthorizedAsync(['user', 'admin'], 'admin', (isAuth)=>{
        assert.equal(isAuth, true)
        done()
      })
    })

  })

  describe('isAuthorizedPromise', function(){
    
    it('when the role is not existed, it should return false', function(){      
      authController.isAuthorizedPromise(['user'], 'admin').should.eventually.be.false
    })

    it('when the role is existed, it should return true', function(){      
      authController.isAuthorizedPromise(['user', 'admin'], 'admin').should.eventually.be.true
    })

  })

})