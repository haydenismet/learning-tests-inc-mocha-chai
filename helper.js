let convert = {};

convert.queryParamHelper = function (urlPath, name, value, append, set) {
  let setUrl = new URL(urlPath);
  if (set) {
    setUrl.searchParams.set(name, value);
  } else if (append) {
    setUrl.searchParams.append(name, value);
  }
  let finalUrl = setUrl.toString();
  console.log(finalUrl);
  return finalUrl;
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

module.exports = convert;
