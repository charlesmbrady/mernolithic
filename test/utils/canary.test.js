const expect = require('chai').expect
const canaryFunction = require('../../server/src/utils/canary');

describe("canaryFunction", function() {
    it("should return the number given", function() {
      var number = 4;
  
      var result = canaryFunction(number);
  
      expect(result).to.equal(4);
    });
  
    it("should throw an error if the input is not a number", function() {
      // When we check for errors, we wrap the call that will throw the error in another function
      var call = function() {
        canaryFunction("potato");
      };
  
      expect(call).to.throw(Error, "Parameter `number` is required and must be a number.");
    });
  });