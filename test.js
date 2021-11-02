const { expect } = require("chai");
var chai = require("chai");
var assert = chai.assert;
var helper = require("./helper.js");
// import function from helper file, queryParamHelper function from obj in helper file.
var queryParamHelper = helper.queryParamHelper;

/* Mocha & Chai */

describe("helperFunctions", function () {
  // describe sets up a grouping function, followed by another nested grouping. Outer group is helperFunctions followed by nested group of queryParamSet
  describe("queryParamSet", function () {
    // set up variables for use in beforeEach
    let urlPath;
    let nameSet;
    let value;
    let set;
    let setQueryParamAnswer;

    //beforeEach function runs before each it()function, allowing set up of variables to be passed to it(). Variables need to be declared outside of the beforeEach, but inside the describe(group).
    beforeEach(function () {
      urlPath =
        "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSet";
      nameSet = "queryNameSet";
      value = "queryValueSetViaFunction";
      set = true;
      setQueryParamAnswer =
        "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSetViaFunction";
    });

    // it()function with string description, followed by assertion within function.
    // This incorporates chai assertions, i.e expect -> to -> equal.
    it("should set the query parameter", function () {
      let isSetParam = queryParamHelper(urlPath, nameSet, value, set);
      expect(isSetParam).to.equal(setQueryParamAnswer);
    });

    // another test case, but with a string as opposed to the urlPath var set to assert an error
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

  //another nested group within the outer group
  describe("queryParamAppend", function () {
    let urlPath;
    let nameSet;
    let value;

    // repeat of above, following append of the function as opposed to set of queryParam
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
