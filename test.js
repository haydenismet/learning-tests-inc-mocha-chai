const { expect } = require("chai");
var chai = require("chai");
var assert = chai.assert;
var helper = require("./helper.js");
var queryParamHelper = helper.queryParamHelper;

describe("helperFunctions", function () {
  describe("queryParamSet", function () {
    let urlPath;
    let nameSet;
    let value;
    let set;
    let setQueryParamAnswer;

    beforeEach(function () {
      urlPath =
        "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSet";
      nameSet = "queryNameSet";
      value = "queryValueSetViaFunction";
      set = true;
      setQueryParamAnswer =
        "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSetViaFunction";
    });

    it("should set the query parameter", function () {
      let isSetParam = queryParamHelper(urlPath, nameSet, value, set);
      expect(isSetParam).to.equal(setQueryParamAnswer);
    });

    it("throw an invalid URL error", function () {
      let errorSetParam = queryParamHelper(
        "this-isnt-a-website-url",
        nameSet,
        value,
        set
      );
      expect(errorSetParam).to.not.equal(setQueryParamAnswer);
    });
  });

  describe("queryParamAppend", function () {
    let urlPath;
    let nameSet;
    let value;

    beforeEach(function () {
      urlPath = "https://www.myhelperfunction-append.co.uk/";
      nameSet = "queryNameAppended";
      value = "queryValueAppended";
      appendQueryParamAnswer =
        "https://www.myhelperfunction-append.co.uk/?queryNameAppended=queryValueAppended";
    });

    it("should append the query parameter", function () {
      let isAppendParam = queryParamHelper(urlPath, nameSet, value);
      expect(isAppendParam).to.equal(appendQueryParamAnswer);
    });

    it("should throw an invalid URL error", function () {
      let errorAppendParam = queryParamHelper(
        "this-isnt-a-website-url-either",
        nameSet,
        value
      );
      expect(errorAppendParam).to.not.equal(appendQueryParamAnswer);
    });
  });
});
