module.exports = {
  queryParamHelper: function (urlPath, name, value, set, append) {
    let setUrl = new URL(urlPath);
    if (set === true) {
      setUrl.searchParams.set(name, value);
    } else {
      setUrl.searchParams.append(name, value);
    }
    let finalUrl = setUrl.toString();
    return finalUrl;
  },
};
/*
queryParamHelper(
  "https://www.myhelperfunction-set.co.uk/?queryNameSet=queryValueSet",
  "queryNameSet",
  "queryValueSetViaFunction",
  false,
  true
);

queryParamHelper(
  "https://www.myhelperfunction-append.co.uk/",
  "queryNameAppended",
  "queryValueAppended",
  true,
  false
);*/
