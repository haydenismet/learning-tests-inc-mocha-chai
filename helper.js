// module.export object which contains queryParamHelper function
module.exports = {
  queryParamHelper: function (urlPath, name, value, set) {
    let setUrl;
    try {
      // try and catch, early return in catch if path provided cannot be parsed as new URL.
      setUrl = new URL(urlPath);
    } catch (e) {
      // log e (error) with string invalid_url_provided
      console.log("INVALID_URL_PROVIDED " + e);
      return e;
    }
    if (set === true) {
      // if set strictly equals boolean true
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
