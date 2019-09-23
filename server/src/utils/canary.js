let canaryFunction = function(number) {
    if (typeof number !== "number") {
      throw new Error("Parameter `number` is required and must be a number.");
    }

    return number;
  };
  
  module.exports = canaryFunction;
  