const { expect } = require("chai");
var chai = require("chai");
var assert = chai.assert;
var helper = require("./helper.js");
var queryParamHelper = helper.queryParamHelper;

describe("helperFunctions", function () {
  describe("queryParamHelper", function () {
    it("should set the query parameter", function () {
      var isSetParam = queryParamHelper(
        "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSet",
        "queryNameSet",
        "queryValueSetViaFunction",
        true,
        false
      );
      expect(isSetParam).to.equal(
        "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSetViaFunction"
      );
    });

    it("should append the query parameter", function () {
      var isAppendParam = queryParamHelper(
        "https://www.myhelperfunction-append.co.uk/",
        "queryNameAppended",
        "queryValueAppended",
        false,
        true
      );
      expect(isAppendParam).to.equal(
        "https://www.myhelperfunction-append.co.uk/?queryNameAppended=queryValueAppended"
      );
    });
  });
});
