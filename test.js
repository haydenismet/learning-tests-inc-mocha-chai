let convert = require("./helper");
let assert = require("assert");

describe("helperFunctions", function () {
  describe("queryParamHelper", function () {
    it("should set the query parameter", function () {
      assert.equal(
        "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSetViaFunction",
        convert.queryParamHelper(
          "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSet",
          "queryNameSet",
          "queryValueSetViaFunction",
          false,
          true
        )
      );
    });
  });
});
