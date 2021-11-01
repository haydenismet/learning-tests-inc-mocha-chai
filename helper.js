module.exports = {
  queryParamHelper: function (urlPath, name, value, set) {
    let setUrl;
    try {
      setUrl = new URL(urlPath);
    } catch (e) {
      console.log("INVALID_URL_PROVIDED " + e);
      return e;
    }
    if (set === true) {
      setUrl.searchParams.set(name, value);
    } else {
      setUrl.searchParams.append(name, value);
    }
    let finalUrl = setUrl.toString();
    return finalUrl;
  },
};

/*module.exports.queryParamHelper(
  "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSet",
  "queryNameSet",
  "queryValueSetViaFunction",
  false
);*/

/*
module.exports.queryParamHelper(
  "https://www.myhelperfunction-append.co.uk/",
  "queryNameAppended",
  "queryValueAppended",
  true
);
*/
